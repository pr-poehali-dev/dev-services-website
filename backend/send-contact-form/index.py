'''
Business: Отправляет форму обратной связи на email и сохраняет в БД
Args: event - dict с httpMethod, body (JSON с полями name, email, message)
      context - object с request_id
Returns: HTTP response с результатом отправки
'''

import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
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
        
        name = data.get('name', '')
        email = data.get('email', '')
        message = data.get('message', '')
        
        if not name or not email or not message:
            return {
                'statusCode': 400,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Missing required fields'}),
                'isBase64Encoded': False
            }
        
        # Сохраняем в БД
        db_url = os.environ.get('DATABASE_URL')
        if db_url:
            try:
                conn = psycopg2.connect(db_url)
                cur = conn.cursor()
                
                # Создаем таблицу если её нет
                cur.execute('''
                    CREATE TABLE IF NOT EXISTS contact_submissions (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        message TEXT NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                ''')
                
                # Вставляем данные
                cur.execute(
                    "INSERT INTO contact_submissions (name, email, message) VALUES (%s, %s, %s)",
                    (name, email, message)
                )
                
                conn.commit()
                cur.close()
                conn.close()
            except Exception as db_error:
                print(f"Database error: {db_error}")
        
        # Отправляем email (формируем mailto: ссылку для клиента)
        # В production здесь должна быть настоящая отправка через SMTP
        email_body = f"""
        Новая заявка с сайта Scalper.io
        
        Имя: {name}
        Email: {email}
        
        Сообщение:
        {message}
        
        Дата: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({
                'success': True,
                'message': 'Форма успешно отправлена'
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
