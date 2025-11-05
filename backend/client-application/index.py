'''
Business: Принимает расширенную заявку "Стать клиентом" и сохраняет в БД
Args: event - dict с httpMethod, body (JSON с данными компании, контакта и проекта)
      context - object с request_id
Returns: HTTP response с результатом сохранения
'''

import json
import os
from typing import Dict, Any
import psycopg2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # CORS для всех запросов
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json'
    }
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        # Парсим данные формы
        body_str = event.get('body', '{}')
        data = json.loads(body_str)
        
        # Извлекаем все поля
        company = data.get('company', '')
        website = data.get('website', '')
        contact_name = data.get('name', '')
        position = data.get('position', '')
        email = data.get('email', '')
        phone = data.get('phone', '')
        project_type = data.get('projectType', '')
        budget = data.get('budget', '')
        timeline = data.get('timeline', '')
        description = data.get('description', '')
        challenges = data.get('challenges', '')
        
        # Валидация обязательных полей
        if not all([company, contact_name, position, email, phone, project_type, budget, timeline, description, challenges]):
            return {
                'statusCode': 400,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Missing required fields'}),
                'isBase64Encoded': False
            }
        
        # Сохраняем в БД
        db_url = os.environ.get('DATABASE_URL')
        if not db_url:
            return {
                'statusCode': 500,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Database not configured'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(db_url)
        cur = conn.cursor()
        
        # Вставляем данные в таблицу client_applications
        cur.execute('''
            INSERT INTO client_applications 
            (company, website, contact_name, position, email, phone, 
             project_type, budget, timeline, description, challenges)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id
        ''', (company, website, contact_name, position, email, phone,
              project_type, budget, timeline, description, challenges))
        
        application_id = cur.fetchone()[0]
        
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно сохранена',
                'applicationId': application_id
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
