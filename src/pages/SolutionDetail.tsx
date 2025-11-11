import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import SEOHead from '@/components/SEOHead';

interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  benefits: Array<{ title: string; description: string }>;
  features: string[];
  process: Array<{ step: number; title: string; description: string }>;
  price: string;
  timeline: string;
}

const solutionsData: Record<string, SolutionData> = {
  'web-scraper': {
    title: 'Веб-скрапер',
    subtitle: 'Автоматизированный сбор данных с веб-сайтов',
    description: 'Веб-скрапер — это мощный инструмент для автоматического сбора структурированных данных с веб-сайтов. Решение позволяет собирать контактные данные, мониторить цены конкурентов, агрегировать информацию о товарах и услугах без ручного копирования.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/45cf46a3-a848-49d9-a3a5-df3e2e24d0f6.jpg',
    icon: 'Globe',
    benefits: [
      {
        title: 'Экономия времени',
        description: 'Автоматизация сбора данных экономит до 95% времени по сравнению с ручной работой'
      },
      {
        title: 'Точность данных',
        description: 'Исключение человеческого фактора и ошибок при копировании информации'
      },
      {
        title: 'Масштабируемость',
        description: 'Возможность обрабатывать тысячи страниц в день без увеличения штата'
      },
      {
        title: 'Актуальность',
        description: 'Автоматическое обновление данных по расписанию для всегда свежей информации'
      }
    ],
    features: [
      'Сбор email-адресов, телефонов и контактов из социальных сетей',
      'Мониторинг цен конкурентов и автоматические уведомления',
      'Экспорт данных в Excel, CSV, JSON или прямая загрузка в CRM',
      'Обход защиты от ботов и капчи',
      'Работа через прокси-серверы для анонимности',
      'Планировщик задач для регулярного сбора данных',
      'API для интеграции с вашими системами',
      'Фильтрация и валидация собранных данных'
    ],
    process: [
      {
        step: 1,
        title: 'Анализ требований',
        description: 'Определяем источники данных, структуру информации и частоту обновления'
      },
      {
        step: 2,
        title: 'Разработка парсера',
        description: 'Создаём алгоритм сбора данных с учётом защиты сайтов-источников'
      },
      {
        step: 3,
        title: 'Тестирование',
        description: 'Проверяем качество и точность собранных данных на тестовой выборке'
      },
      {
        step: 4,
        title: 'Запуск и мониторинг',
        description: 'Настраиваем автоматический сбор и отслеживаем стабильность работы'
      }
    ],
    price: 'от 150 000 ₽',
    timeline: '2-4 недели'
  },
  'ai-chatbot': {
    title: 'Чат-бот с ИИ',
    subtitle: 'Интеллектуальный помощник для автоматизации общения',
    description: 'ИИ-чат-бот нового поколения с глубоким пониманием контекста и возможностью обучения на ваших данных. Обеспечивает естественное общение с клиентами в мессенджерах и на сайте, автоматизирует поддержку и повышает конверсию.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/b2e629e4-b188-43dc-9474-d7dfc6caa259.jpg',
    icon: 'MessageSquare',
    benefits: [
      {
        title: 'Доступность 24/7',
        description: 'Чат-бот отвечает на вопросы клиентов круглосуточно без выходных'
      },
      {
        title: 'Снижение нагрузки',
        description: 'Освобождает до 70% времени операторов от типовых вопросов'
      },
      {
        title: 'Повышение конверсии',
        description: 'Мгновенные ответы увеличивают вероятность покупки на 30%'
      },
      {
        title: 'Персонализация',
        description: 'Запоминает историю диалогов и предпочтения каждого клиента'
      }
    ],
    features: [
      'Понимание естественного языка и контекста беседы',
      'Обучение на корпоративных данных и документации',
      'Интеграция с Telegram, WhatsApp, VK, Facebook Messenger',
      'Автоматическая передача диалога оператору при необходимости',
      'Сбор обратной связи и оценка удовлетворённости',
      'Аналитика диалогов и отчёты по популярным вопросам',
      'Поддержка множества языков',
      'Работа с изображениями и документами'
    ],
    process: [
      {
        step: 1,
        title: 'Проектирование логики',
        description: 'Анализируем типовые сценарии и разрабатываем древо диалогов'
      },
      {
        step: 2,
        title: 'Обучение ИИ',
        description: 'Тренируем модель на ваших данных и настраиваем понимание контекста'
      },
      {
        step: 3,
        title: 'Интеграция',
        description: 'Подключаем бота к мессенджерам и вашим системам (CRM, базы знаний)'
      },
      {
        step: 4,
        title: 'Оптимизация',
        description: 'Анализируем реальные диалоги и улучшаем ответы бота'
      }
    ],
    price: 'от 250 000 ₽',
    timeline: '3-6 недель'
  },
  'ai-lead-generator': {
    title: 'Лидогенератор на базе ИИ',
    subtitle: 'Умная система для привлечения клиентов',
    description: 'Интеллектуальная система генерации и квалификации лидов с использованием машинного обучения. Анализирует поведение посетителей, предсказывает намерения и автоматически выявляет горячих клиентов для отдела продаж.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/1ac7e262-586b-48af-a39d-36d042316390.jpg',
    icon: 'Target',
    benefits: [
      {
        title: 'Рост качества лидов',
        description: 'ИИ отфильтровывает нецелевую аудиторию и фокусируется на готовых покупателях'
      },
      {
        title: 'Увеличение конверсии',
        description: 'Персонализированные предложения повышают конверсию в 2-3 раза'
      },
      {
        title: 'Автоматизация',
        description: 'Система работает автономно, освобождая маркетологов для творческих задач'
      },
      {
        title: 'Предиктивная аналитика',
        description: 'Прогнозирование поведения клиентов и вероятности покупки'
      }
    ],
    features: [
      'Скоринг лидов на основе машинного обучения',
      'Анализ поведения посетителей на сайте',
      'Сегментация аудитории по намерениям',
      'Персонализированные предложения для каждого сегмента',
      'A/B тестирование форм и лид-магнитов',
      'Интеграция с CRM и email-маркетингом',
      'Автоматические цепочки писем (drip-кампании)',
      'Предсказание оттока клиентов'
    ],
    process: [
      {
        step: 1,
        title: 'Сбор данных',
        description: 'Подключаем систему к сайту и интегрируем с аналитикой'
      },
      {
        step: 2,
        title: 'Обучение модели',
        description: 'ИИ анализирует историю конверсий и находит закономерности'
      },
      {
        step: 3,
        title: 'Настройка сценариев',
        description: 'Создаём автоматические воронки для разных сегментов'
      },
      {
        step: 4,
        title: 'Оптимизация',
        description: 'Система самообучается и улучшает результаты со временем'
      }
    ],
    price: 'от 300 000 ₽',
    timeline: '4-8 недель'
  },
  'crm-system': {
    title: 'CRM-система',
    subtitle: 'Управление продажами и клиентами',
    description: 'Комплексная CRM-система для автоматизации продаж, маркетинга и обслуживания клиентов. Централизует всю информацию о клиентах, контролирует работу менеджеров и повышает эффективность отдела продаж.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/7ec72035-f084-432f-a1d3-5d970bf03682.jpg',
    icon: 'Users',
    benefits: [
      {
        title: 'Рост продаж',
        description: 'Структурированная работа с клиентами увеличивает продажи на 30%+'
      },
      {
        title: 'Контроль процессов',
        description: 'Полная прозрачность работы менеджеров и состояния сделок'
      },
      {
        title: 'Сокращение цикла сделки',
        description: 'Автоматизация рутины ускоряет продажи в 1,5-2 раза'
      },
      {
        title: 'Удержание клиентов',
        description: 'История взаимодействий помогает строить долгосрочные отношения'
      }
    ],
    features: [
      'Воронка продаж с визуализацией этапов',
      'Управление задачами и напоминаниями',
      'Email и SMS рассылки с сегментацией',
      'Интеграция с IP-телефонией',
      'Автоматический документооборот',
      'Аналитика и KPI менеджеров',
      'Мобильное приложение для работы в полях',
      'Интеграция с бухгалтерией и складом'
    ],
    process: [
      {
        step: 1,
        title: 'Анализ бизнес-процессов',
        description: 'Изучаем текущие процессы продаж и выявляем точки роста'
      },
      {
        step: 2,
        title: 'Настройка системы',
        description: 'Конфигурируем CRM под ваши бизнес-процессы и воронку'
      },
      {
        step: 3,
        title: 'Миграция данных',
        description: 'Переносим клиентскую базу и историю из старых систем'
      },
      {
        step: 4,
        title: 'Обучение команды',
        description: 'Проводим тренинги для менеджеров и руководителей'
      }
    ],
    price: 'от 200 000 ₽',
    timeline: '3-5 недель'
  }
};

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !solutionsData[slug]) {
    return <Navigate to="/solutions" replace />;
  }

  const solution = solutionsData[slug];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${solution.title} — ${solution.subtitle} | Scalper.io`}
        description={solution.description}
        image={solution.image}
        url={`/solutions/${slug}`}
      />
      <Navbar />
      
      <main className="pt-20 sm:pt-24 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-8">
          <Button variant="ghost" asChild className="mb-6 hover:scale-105 transition-transform duration-300">
            <a href="/solutions" className="gap-2">
              <Icon name="ArrowLeft" size={18} />
              Все решения
            </a>
          </Button>
        </div>

        <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background animate-pulse"></div>
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70 backdrop-blur-[2px]" />
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name={solution.icon as any} size={24} className="text-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  {solution.title}
                </h1>
              </div>
              <p className="text-base sm:text-xl text-muted-foreground mb-6">
                {solution.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="/become-client">
                    Заказать разработку
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/#faq">
                    Задать вопрос
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Описание решения
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
                {solution.description}
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8 mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Ключевые преимущества
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {solution.benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="Check" size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Возможности системы
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {solution.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Этапы разработки
              </h3>
              <div className="space-y-6">
                {solution.process.map((step) => (
                  <div key={step.step} className="flex gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{step.step}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Начать проект
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Оставьте заявку, и мы обсудим детали вашего проекта, сроки и стоимость разработки
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                    <a href="/become-client">
                      Оставить заявку
                      <Icon name="Send" size={18} className="ml-2" />
                    </a>
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Нужна консультация?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Наши эксперты помогут выбрать оптимальное решение для вашего бизнеса
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/#faq">
                      Связаться с нами
                    </a>
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Lightbulb" size={20} className="text-primary" />
                    <h3 className="text-lg font-bold text-foreground">
                      Полезно знать
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Посмотрите другие готовые решения — возможно, они дополнят ваш проект
                  </p>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href="/solutions">
                      <Icon name="Grid3x3" size={18} className="mr-2" />
                      Смотреть каталог
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionDetail;