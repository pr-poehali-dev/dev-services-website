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
  keywords: string;
}

const solutionsData: Record<string, SolutionData> = {
  'web-scraper': {
    title: 'Веб-скрапер',
    subtitle: 'Автоматизированный сбор данных с веб-сайтов',
    description: 'Веб-скрапер — это мощный инструмент для автоматического сбора структурированных данных с веб-сайтов. Решение позволяет собирать контактные данные, мониторить цены конкурентов, агрегировать информацию о товарах и услугах без ручного копирования.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/45cf46a3-a848-49d9-a3a5-df3e2e24d0f6.jpg',
    icon: 'Globe',
    keywords: 'веб скрапер разработка, парсинг сайтов заказать, автоматический сбор данных, мониторинг цен конкурентов, сбор контактов с сайтов',
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
    ]
  },
  'ai-chatbot': {
    title: 'Чат-бот с ИИ',
    subtitle: 'Интеллектуальный помощник для автоматизации общения',
    description: 'ИИ-чат-бот нового поколения с глубоким пониманием контекста и возможностью обучения на ваших данных. Обеспечивает естественное общение с клиентами в мессенджерах и на сайте, автоматизирует поддержку и повышает конверсию.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/b2e629e4-b188-43dc-9474-d7dfc6caa259.jpg',
    icon: 'MessageSquare',
    keywords: 'разработка чат бота, ИИ чат бот заказать, telegram бот разработка, whatsapp бот разработка, AI ассистент разработка',
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
    ]
  },
  'ai-lead-generator': {
    title: 'Лидогенератор на базе ИИ',
    subtitle: 'Умная система для привлечения клиентов',
    description: 'Интеллектуальная система генерации и квалификации лидов с использованием машинного обучения. Анализирует поведение посетителей, предсказывает намерения и автоматически выявляет горячих клиентов для отдела продаж.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/1ac7e262-586b-48af-a39d-36d042316390.jpg',
    icon: 'Target',
    keywords: 'лидогенерация ИИ, автоматический сбор лидов, AI лид генератор, квалификация лидов искусственный интеллект',
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
    ]
  },
  'ai-sales-agent': {
    title: 'ИИ-агент продажник',
    subtitle: 'Виртуальный помощник для увеличения продаж',
    description: 'Интеллектуальный агент на базе ИИ для автоматизации продаж. Ведёт диалоги с потенциальными клиентами, отвечает на вопросы о продукте, рассчитывает стоимость и закрывает сделки без участия менеджеров.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/13d5aa8f-93c5-4d67-987e-1141a00a7141.jpg',
    icon: 'Headphones',
    keywords: 'ИИ агент продаж, AI sales agent, автоматизация продаж ИИ, виртуальный менеджер по продажам',
    benefits: [
      {
        title: 'Рост продаж',
        description: 'Обрабатывает неограниченное количество клиентов одновременно'
      },
      {
        title: 'Снижение расходов',
        description: 'Сокращает потребность в найме и обучении менеджеров'
      },
      {
        title: 'Консистентность',
        description: 'Всегда следует скриптам продаж и не допускает ошибок'
      },
      {
        title: 'Аналитика',
        description: 'Собирает данные о возражениях и причинах отказов'
      }
    ],
    features: [
      'Квалификация клиентов по BANT-методологии',
      'Презентация продукта с учётом потребностей',
      'Обработка возражений на основе базы знаний',
      'Расчёт стоимости и формирование коммерческих предложений',
      'Интеграция с CRM для передачи горячих лидов',
      'Автоматические напоминания и follow-up',
      'Многоканальность (сайт, мессенджеры, email)',
      'Отчёты по конверсии и причинам отказов'
    ],
    process: [
      {
        step: 1,
        title: 'Анализ воронки продаж',
        description: 'Изучаем текущие скрипты и типовые сценарии общения'
      },
      {
        step: 2,
        title: 'Обучение агента',
        description: 'Тренируем ИИ на реальных диалогах успешных продаж'
      },
      {
        step: 3,
        title: 'Пилотный запуск',
        description: 'Тестируем агента на небольшом потоке клиентов'
      },
      {
        step: 4,
        title: 'Масштабирование',
        description: 'Постепенно увеличиваем нагрузку и оптимизируем конверсию'
      }
    ]
  },
  'ai-business-assistant': {
    title: 'ИИ-ассистент для бизнеса',
    subtitle: 'Персональный помощник на корпоративных данных',
    description: 'Корпоративный ИИ-ассистент, обученный на внутренних данных компании. Помогает сотрудникам быстро находить информацию в документах, отвечает на вопросы по регламентам и автоматизирует рутинные задачи.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/3b3fea9c-807e-4bf7-bc5a-da5879fa630f.jpg',
    icon: 'BrainCircuit',
    keywords: 'корпоративный ИИ ассистент, AI ассистент для бизнеса, внутренний чат бот компании, автоматизация документооборота ИИ',
    benefits: [
      {
        title: 'Экономия времени',
        description: 'Сотрудники получают ответы мгновенно вместо поиска в документах'
      },
      {
        title: 'Сохранность знаний',
        description: 'Корпоративная экспертиза не теряется при уходе сотрудников'
      },
      {
        title: 'Безопасность',
        description: 'Данные остаются внутри периметра компании, доступ по ролям'
      },
      {
        title: 'Масштабируемость',
        description: 'Легко адаптируется под рост компании и новые процессы'
      }
    ],
    features: [
      'Поиск информации по корпоративной базе знаний',
      'Ответы на вопросы по регламентам и процедурам',
      'Автоматическое заполнение отчётов и документов',
      'Интеграция с внутренними системами (ERP, CRM, HRM)',
      'Анализ документов и извлечение ключевой информации',
      'Напоминания о задачах и дедлайнах',
      'Поддержка голосового управления',
      'Аналитика по популярным запросам сотрудников'
    ],
    process: [
      {
        step: 1,
        title: 'Аудит данных',
        description: 'Анализируем документы, регламенты и базы знаний'
      },
      {
        step: 2,
        title: 'Обучение модели',
        description: 'Тренируем ИИ на корпоративных данных с учётом специфики'
      },
      {
        step: 3,
        title: 'Интеграция',
        description: 'Подключаем к внутренним системам и настраиваем права доступа'
      },
      {
        step: 4,
        title: 'Внедрение',
        description: 'Обучаем сотрудников и собираем обратную связь для улучшений'
      }
    ]
  },
  'crm-system': {
    title: 'CRM-система',
    subtitle: 'Управление продажами и клиентами',
    description: 'Комплексная CRM-система для автоматизации продаж, маркетинга и обслуживания клиентов. Централизует всю информацию о клиентах, контролирует работу менеджеров и повышает эффективность отдела продаж.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/7ec72035-f084-432f-a1d3-5d970bf03682.jpg',
    icon: 'Users',
    keywords: 'разработка CRM системы, заказать CRM под ключ, CRM для малого бизнеса, облачная CRM разработка, автоматизация продаж CRM',
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
    ]
  },
  'marketplace': {
    title: 'Маркетплейс',
    subtitle: 'Торговая площадка для продавцов и покупателей',
    description: 'Полнофункциональная платформа маркетплейса с личными кабинетами продавцов и покупателей, системой поиска, фильтрации, корзиной, оплатой и доставкой. Готовое решение для запуска онлайн-площадки в любой нише.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/d42133a0-ab6d-4996-a600-156b1ff3f01f.jpg',
    icon: 'ShoppingCart',
    keywords: 'разработка маркетплейса, создать маркетплейс под ключ, торговая площадка разработка, платформа для онлайн торговли',
    benefits: [
      {
        title: 'Масштабируемость',
        description: 'Платформа растёт вместе с количеством продавцов и товаров'
      },
      {
        title: 'Монетизация',
        description: 'Комиссии с продаж, подписки продавцов, платное продвижение'
      },
      {
        title: 'Автоматизация',
        description: 'Минимальное участие в операционных процессах между сторонами'
      },
      {
        title: 'Доверие покупателей',
        description: 'Единая площадка с системой рейтингов и отзывов'
      }
    ],
    features: [
      'Личные кабинеты продавцов с аналитикой',
      'Система поиска и фильтрации товаров',
      'Корзина и оформление заказа в несколько кликов',
      'Интеграция с платёжными системами',
      'Управление доставкой и трекинг',
      'Система рейтингов, отзывов и модерации',
      'Чат между продавцами и покупателями',
      'Панель администратора для управления площадкой'
    ],
    process: [
      {
        step: 1,
        title: 'Проектирование',
        description: 'Определяем модель монетизации, функционал для сторон'
      },
      {
        step: 2,
        title: 'Разработка MVP',
        description: 'Создаём базовую версию с ключевыми функциями'
      },
      {
        step: 3,
        title: 'Тестирование',
        description: 'Запускаем пилотную версию с первыми продавцами'
      },
      {
        step: 4,
        title: 'Запуск и рост',
        description: 'Привлекаем продавцов, развиваем функционал по обратной связи'
      }
    ]
  },
  'b2b-cabinet': {
    title: 'B2B-кабинет',
    subtitle: 'Личный кабинет для корпоративных клиентов',
    description: 'Специализированный личный кабинет для B2B-клиентов с расширенными возможностями: управление заказами, складскими остатками, отсрочками платежей, корпоративными договорами и специальными ценами.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/fdc4e0ba-c244-46a3-a2b2-fb6cdd007635.jpg',
    icon: 'Building2',
    keywords: 'B2B личный кабинет разработка, корпоративный портал, личный кабинет для оптовиков, B2B платформа разработка',
    benefits: [
      {
        title: 'Автоматизация B2B',
        description: 'Клиенты самостоятельно размещают заказы без звонков менеджерам'
      },
      {
        title: 'Прозрачность',
        description: 'Клиенты видят остатки, цены, историю заказов в реальном времени'
      },
      {
        title: 'Снижение нагрузки',
        description: 'Освобождает менеджеров от рутинных операций'
      },
      {
        title: 'Лояльность',
        description: 'Удобный кабинет повышает удовлетворённость B2B-клиентов'
      }
    ],
    features: [
      'Управление несколькими пользователями от одной компании',
      'Индивидуальные цены и скидки по договору',
      'Отсрочка платежа и кредитный лимит',
      'Заказ по артикулам и массовая загрузка из файлов',
      'История заказов и повторный заказ в один клик',
      'Складские остатки и резервирование товара',
      'Формирование закрывающих документов',
      'Интеграция с 1С и ERP-системами'
    ],
    process: [
      {
        step: 1,
        title: 'Анализ потребностей',
        description: 'Изучаем специфику работы с B2B-клиентами'
      },
      {
        step: 2,
        title: 'Проектирование',
        description: 'Разрабатываем удобный интерфейс для корпоративных пользователей'
      },
      {
        step: 3,
        title: 'Интеграция',
        description: 'Подключаем к учётной системе и настраиваем синхронизацию'
      },
      {
        step: 4,
        title: 'Внедрение',
        description: 'Обучаем клиентов работе с кабинетом'
      }
    ]
  },
  'personal-cabinet': {
    title: 'Личный кабинет',
    subtitle: 'Персонализированное пространство для пользователей',
    description: 'Функциональный личный кабинет для клиентов с историей заказов, управлением профилем, подписками, бонусной программой и персональными рекомендациями.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/2ceb642c-48fd-4ed6-a3a3-8d94fe6bad27.jpg',
    icon: 'UserCircle',
    keywords: 'разработка личного кабинета, создать личный кабинет для сайта, личный кабинет клиента разработка',
    benefits: [
      {
        title: 'Удобство',
        description: 'Вся информация о заказах и услугах в одном месте'
      },
      {
        title: 'Лояльность',
        description: 'Бонусные программы и персональные предложения'
      },
      {
        title: 'Самообслуживание',
        description: 'Клиенты решают вопросы без обращения в поддержку'
      },
      {
        title: 'Вовлечённость',
        description: 'Push-уведомления и персональная коммуникация'
      }
    ],
    features: [
      'Управление профилем и настройками',
      'История заказов и покупок',
      'Отслеживание статуса доставки',
      'Избранное и списки желаний',
      'Бонусная программа и баллы лояльности',
      'Персональные скидки и промокоды',
      'Подписка на уведомления',
      'Интеграция с социальными сетями'
    ],
    process: [
      {
        step: 1,
        title: 'UX-исследование',
        description: 'Изучаем потребности пользователей и прототипируем интерфейс'
      },
      {
        step: 2,
        title: 'Разработка',
        description: 'Создаём адаптивный кабинет с удобной навигацией'
      },
      {
        step: 3,
        title: 'Интеграция',
        description: 'Подключаем к основному сайту и внутренним системам'
      },
      {
        step: 4,
        title: 'Запуск',
        description: 'Тестируем и запускаем с постепенной миграцией пользователей'
      }
    ]
  },
  '1c-integration': {
    title: 'Интеграция с 1C',
    subtitle: 'Синхронизация сайта с системой учёта',
    description: 'Двусторонняя интеграция вашего сайта с 1С для автоматического обмена данными о товарах, остатках, ценах, заказах и клиентах. Исключает ручной ввод и ошибки синхронизации.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/3850dffa-def7-48d2-9a64-73ddab220cd1.jpg',
    icon: 'Link',
    keywords: 'интеграция 1С с сайтом, синхронизация 1С сайт, обмен данными 1С интернет магазин, 1С веб интеграция',
    benefits: [
      {
        title: 'Автоматизация',
        description: 'Данные синхронизируются автоматически без ручного вмешательства'
      },
      {
        title: 'Актуальность',
        description: 'Остатки и цены на сайте всегда соответствуют учётной системе'
      },
      {
        title: 'Экономия времени',
        description: 'Менеджеры не тратят время на двойной ввод данных'
      },
      {
        title: 'Снижение ошибок',
        description: 'Исключение человеческого фактора при переносе данных'
      }
    ],
    features: [
      'Выгрузка товаров, цен и остатков из 1С на сайт',
      'Передача заказов с сайта в 1С',
      'Синхронизация клиентской базы',
      'Обмен статусами заказов и платежей',
      'Автоматическое формирование документов',
      'Работа с номенклатурой и характеристиками',
      'Настройка расписания обмена',
      'Журнал обмена с отслеживанием ошибок'
    ],
    process: [
      {
        step: 1,
        title: 'Аудит систем',
        description: 'Изучаем структуру данных в 1С и на сайте'
      },
      {
        step: 2,
        title: 'Проектирование обмена',
        description: 'Определяем состав данных, направления и частоту синхронизации'
      },
      {
        step: 3,
        title: 'Разработка',
        description: 'Создаём модули обмена с обработкой ошибок'
      },
      {
        step: 4,
        title: 'Тестирование и запуск',
        description: 'Проверяем корректность обмена и запускаем в работу'
      }
    ]
  },
  'mobile-app': {
    title: 'Мобильное приложение',
    subtitle: 'Нативное приложение для iOS и Android',
    description: 'Разработка кроссплатформенных мобильных приложений для iOS и Android с доступом к функциям сайта, push-уведомлениями, работой офлайн и интеграцией с камерой и датчиками устройства.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/158023fa-4e5a-4e63-95f4-d97a501c646e.jpg',
    icon: 'Smartphone',
    keywords: 'разработка мобильного приложения, создать приложение iOS Android, кроссплатформенное приложение, React Native разработка',
    benefits: [
      {
        title: 'Доступность',
        description: 'Приложение всегда под рукой на главном экране смартфона'
      },
      {
        title: 'Вовлечённость',
        description: 'Push-уведомления возвращают пользователей в приложение'
      },
      {
        title: 'Производительность',
        description: 'Нативные технологии обеспечивают быструю работу'
      },
      {
        title: 'Расширенные возможности',
        description: 'Доступ к камере, геолокации, биометрии и другим функциям'
      }
    ],
    features: [
      'Кроссплатформенная разработка (iOS + Android)',
      'Адаптация интерфейса под платформы',
      'Push-уведомления и глубокие ссылки',
      'Работа офлайн с синхронизацией',
      'Интеграция с камерой и сканером QR',
      'Геолокация и карты',
      'Биометрическая аутентификация',
      'Публикация в App Store и Google Play'
    ],
    process: [
      {
        step: 1,
        title: 'Проектирование',
        description: 'Разрабатываем UX/UI с учётом гайдлайнов платформ'
      },
      {
        step: 2,
        title: 'Разработка MVP',
        description: 'Создаём базовую версию с ключевыми функциями'
      },
      {
        step: 3,
        title: 'Тестирование',
        description: 'Проверяем на реальных устройствах и готовим к релизу'
      },
      {
        step: 4,
        title: 'Публикация',
        description: 'Размещаем в сторах и поддерживаем после запуска'
      }
    ]
  },
  'analytics-bi': {
    title: 'Аналитика и BI',
    subtitle: 'Система бизнес-аналитики и отчётности',
    description: 'Комплексная система бизнес-интеллекта с интерактивными дашбордами, автоматическими отчётами, визуализацией данных и прогнозированием на основе машинного обучения.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/b99927ef-f780-4d51-9ee8-3b7c102722f1.jpg',
    icon: 'BarChart3',
    keywords: 'бизнес аналитика BI, разработка системы аналитики, дашборды разработка, визуализация данных, прогнозная аналитика',
    benefits: [
      {
        title: 'Прозрачность',
        description: 'Ключевые метрики бизнеса в реальном времени'
      },
      {
        title: 'Обоснованные решения',
        description: 'Принимайте решения на основе данных, а не интуиции'
      },
      {
        title: 'Прогнозирование',
        description: 'ML-модели предсказывают спрос, выручку и другие показатели'
      },
      {
        title: 'Автоматизация',
        description: 'Отчёты формируются и рассылаются автоматически'
      }
    ],
    features: [
      'Интерактивные дашборды с drill-down',
      'Визуализация данных (графики, таблицы, карты)',
      'Автоматические отчёты по расписанию',
      'Прогнозирование на основе ML',
      'Сегментация клиентов и когортный анализ',
      'Интеграция с источниками данных (БД, API, файлы)',
      'Настройка прав доступа по ролям',
      'Экспорт в Excel, PDF, email-рассылки'
    ],
    process: [
      {
        step: 1,
        title: 'Аудит данных',
        description: 'Определяем источники данных и ключевые метрики'
      },
      {
        step: 2,
        title: 'Проектирование',
        description: 'Разрабатываем структуру дашбордов и отчётов'
      },
      {
        step: 3,
        title: 'Разработка',
        description: 'Создаём хранилище данных и визуализации'
      },
      {
        step: 4,
        title: 'Внедрение',
        description: 'Обучаем команду работе с системой и настраиваем процессы'
      }
    ]
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
        title={`${solution.title} под ключ — ${solution.subtitle} | Scalper.io`}
        description={`⭐ ${solution.description} Разработка под ключ с гарантией. 50+ проектов. Консультация 24/7.`}
        image={solution.image}
        url={`/solutions/${slug}`}
        keywords={`${solution.keywords}, разработка ПО, разработка программного обеспечения, заказать разработку, IT решения под ключ`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": solution.title,
          "description": solution.description,
          "provider": {
            "@type": "Organization",
            "name": "Scalper.io",
            "url": "https://scalperio.ru",
            "logo": "https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/bc31747b-408b-4bc7-bf3e-d26ccd97296f.jpg"
          },
          "areaServed": "RU",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `https://scalperio.ru/solutions/${slug}`
          },
          "image": solution.image,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "RUB"
            }
          }
        }}
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
                  <a href="https://t.me/Pyatyzhkin_Sergey" target="_blank" rel="noopener noreferrer">
                    Связаться с нами
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
                    <a href="https://t.me/Pyatyzhkin_Sergey" target="_blank" rel="noopener noreferrer">
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