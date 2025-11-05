import { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const faqCategories = [
  {
    icon: 'BrainCircuit',
    title: 'Искусственный интеллект',
    questions: [
      {
        q: 'Какие AI-решения вы разрабатываете?',
        a: 'Мы создаем чат-боты на базе LLM (GPT, Claude), системы распознавания текста и изображений, recommendation-системы, автоматизацию документооборота с помощью NLP, и внедряем machine learning модели для прогнозирования и аналитики.'
      },
      {
        q: 'Можете ли вы интегрировать AI в существующую систему?',
        a: 'Да, мы специализируемся на интеграции AI-компонентов в действующие продукты через API. Работаем с OpenAI, Anthropic, локальными LLM-моделями, векторными базами данных (Pinecone, Weaviate) и фреймворками LangChain, LlamaIndex.'
      },
      {
        q: 'Сколько стоит разработка AI-агента?',
        a: 'Стоимость разработки AI-решений начинается от 50 000 ₽ и зависит от сложности задачи, объема данных, количества интеграций и требований к точности. Диапазон может варьироваться до нескольких миллионов рублей для сложных мультиагентных систем с глубокой кастомизацией.'
      }
    ]
  },
  {
    icon: 'Smartphone',
    title: 'Мобильная разработка',
    questions: [
      {
        q: 'Разрабатываете ли вы под iOS и Android одновременно?',
        a: 'Да, мы используем кроссплатформенные технологии (React Native, Flutter), что позволяет разработать приложение сразу для обеих платформ с единой кодовой базой. Это экономит до 40% бюджета по сравнению с нативной разработкой.'
      },
      {
        q: 'Помогаете ли вы с публикацией в App Store и Google Play?',
        a: 'Да, мы берем на себя весь процесс: подготовку метаданных, скриншотов, описаний, прохождение модерации и публикацию. Также помогаем с настройкой аналитики, push-уведомлений и монетизации.'
      },
      {
        q: 'Какие типы мобильных приложений вы создаете?',
        a: 'Мы разрабатываем e-commerce приложения, корпоративные решения для сотрудников, финтех-приложения, social networking, healthcare и образовательные платформы. Есть опыт работы с геолокацией, AR, Bluetooth и платежными системами.'
      }
    ]
  },
  {
    icon: 'Workflow',
    title: 'Интеграция систем',
    questions: [
      {
        q: 'С какими системами вы можете интегрироваться?',
        a: 'Мы интегрируем CRM (Bitrix24, amoCRM, Salesforce), ERP (1C, SAP), платежные системы (ЮKassa, CloudPayments, Stripe), системы аналитики, складской учет, маркетплейсы и любые системы с открытым API или возможностью экспорта данных.'
      },
      {
        q: 'Как обеспечивается безопасность данных при интеграции?',
        a: 'Мы используем OAuth 2.0 для авторизации, шифрование трафика через TLS 1.3, хранение секретов в защищенных хранилищах (HashiCorp Vault), логирование всех операций и регулярные аудиты безопасности. Соответствуем требованиям 152-ФЗ и GDPR.'
      },
      {
        q: 'Сколько времени занимает интеграция с внешней системой?',
        a: 'Простая интеграция через REST API занимает 1-2 недели, сложная многоуровневая интеграция с трансформацией данных — 1-2 месяца. Включает разработку адаптеров, тестирование, настройку мониторинга и документацию.'
      }
    ]
  },
  {
    icon: 'Network',
    title: 'Архитектура и проектирование',
    questions: [
      {
        q: 'Когда нужна микросервисная архитектура?',
        a: 'Микросервисы оправданы для нагрузки от 10 000 пользователей в сутки, при необходимости независимого масштабирования компонентов, для распределенных команд разработки или когда разные модули требуют разных технологий. Для MVP рекомендуем монолит.'
      },
      {
        q: 'Как вы обеспечиваете масштабируемость системы?',
        a: 'Мы проектируем stateless-приложения, используем горизонтальное масштабирование через Kubernetes, кэширование (Redis, Memcached), очереди сообщений (RabbitMQ, Kafka), CDN для статики, репликацию баз данных и мониторинг производительности 24/7.'
      },
      {
        q: 'Проводите ли вы аудит существующей архитектуры?',
        a: 'Да, мы анализируем текущую архитектуру, выявляем узкие места, проблемы безопасности и технический долг. Предоставляем детальный отчет с roadmap по оптимизации, миграции на новые технологии и снижению затрат на инфраструктуру. Стоимость аудита — от 200 000 ₽.'
      }
    ]
  }
];

const FAQSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="faq" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Ответы на популярные вопросы по тематикам
          </p>
        </div>
        
        <div className="space-y-6">
          {faqCategories.map((category, catIndex) => (
            <Card key={catIndex} className="bg-card border-border/50">
              <CardContent className="p-6 sm:p-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`category-${catIndex}`} className="border-none">
                    <AccordionTrigger className="text-left text-lg sm:text-xl font-bold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon name={category.icon as any} className="text-primary" size={24} />
                        </div>
                        <span>{category.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-13 mt-4 space-y-4">
                        {category.questions.map((item, qIndex) => (
                          <div key={qIndex} className="border-l-2 border-primary/20 pl-6 py-2">
                            <h4 className="font-semibold text-foreground mb-2">{item.q}</h4>
                            <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;