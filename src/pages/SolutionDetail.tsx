import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

interface SolutionData {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  icon: string;
  benefits: string[];
  features: string[];
  useCases: string[];
}

const solutionsData: Record<string, SolutionData> = {
  'web-scraper': {
    title: 'Веб-скрапер',
    description: 'Автоматизированный инструмент для сбора контактных данных и лидов с веб-сайтов.',
    fullDescription: 'Веб-скрапер — это мощный инструмент автоматизации, который позволяет собирать структурированные данные с веб-сайтов без ручного копирования. Наше решение помогает компаниям автоматизировать сбор лидов, мониторинг конкурентов и анализ рынка.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/de3f3ccc-b407-4ff1-80e4-f6049d38b9c8.jpg',
    icon: 'Globe',
    benefits: [
      'Экономия времени на сборе данных до 95%',
      'Повышение эффективности отдела продаж',
      'Автоматический мониторинг конкурентов',
      'Сбор актуальных контактов для холодных продаж'
    ],
    features: [
      'Сбор email, телефонов, соцсетей',
      'Экспорт в Excel, CSV, CRM',
      'Планировщик задач',
      'Обход защиты от ботов',
      'Прокси-серверы',
      'API для интеграций'
    ],
    useCases: [
      'B2B продажи: сбор контактов компаний',
      'Рекрутинг: поиск кандидатов',
      'Маркетинг: анализ конкурентов',
      'E-commerce: мониторинг цен'
    ]
  },
  'ai-chatbot': {
    title: 'Чат-бот с ИИ',
    description: 'Интеллектуальный чат-бот для мессенджеров с возможностью обучения.',
    fullDescription: 'ИИ-чат-бот нового поколения, который понимает контекст беседы, обучается на ваших данных и обеспечивает персонализированное общение с клиентами. Интегрируется с популярными мессенджерами и CRM-системами.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/2725a30d-dcd4-418a-935a-950a1385859d.jpg',
    icon: 'MessageSquare',
    benefits: [
      'Обработка запросов клиентов 24/7',
      'Снижение нагрузки на поддержку до 70%',
      'Мгновенные ответы на типовые вопросы',
      'Повышение удовлетворенности клиентов'
    ],
    features: [
      'Понимание естественного языка',
      'Обучение на корпоративных данных',
      'Интеграция с Telegram, WhatsApp, VK',
      'Передача диалога оператору',
      'Аналитика и отчеты',
      'Мультиязычность'
    ],
    useCases: [
      'Поддержка клиентов: ответы на FAQ',
      'Продажи: квалификация лидов',
      'HR: подбор персонала',
      'Сервис: запись на прием'
    ]
  },
  'ai-lead-generator': {
    title: 'Лидогенератор на базе ИИ',
    description: 'Система автоматической генерации качественных лидов с использованием ИИ.',
    fullDescription: 'Интеллектуальная система генерации лидов, которая использует машинное обучение для поиска и квалификации потенциальных клиентов. Анализирует поведение пользователей и автоматически выявляет горячие лиды.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/9da90696-31df-46d2-9172-94aee71d874c.jpg',
    icon: 'Target',
    benefits: [
      'Увеличение количества лидов на 200%+',
      'Повышение качества лидов',
      'Автоматическая квалификация',
      'ROI от маркетинга увеличивается в 3 раза'
    ],
    features: [
      'Скоринг лидов на основе ML',
      'Поведенческий анализ',
      'Персонализированные предложения',
      'A/B тестирование',
      'Интеграция с CRM',
      'Предиктивная аналитика'
    ],
    useCases: [
      'E-commerce: увеличение продаж',
      'B2B: автоматизация продаж',
      'Недвижимость: квалификация покупателей',
      'Финансы: скоринг заемщиков'
    ]
  },
  'crm-system': {
    title: 'CRM-система',
    description: 'Система управления взаимоотношениями с клиентами.',
    fullDescription: 'Комплексная CRM-система для автоматизации продаж, маркетинга и сервисного обслуживания. Централизует все данные о клиентах и упрощает работу команды.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/9da90696-31df-46d2-9172-94aee71d874c.jpg',
    icon: 'Users',
    benefits: [
      'Увеличение продаж на 30%+',
      'Контроль работы менеджеров',
      'Сокращение цикла сделки',
      'Повышение лояльности клиентов'
    ],
    features: [
      'Воронка продаж',
      'Управление задачами',
      'Email и SMS рассылки',
      'Интеграция с телефонией',
      'Документооборот',
      'Аналитика и KPI'
    ],
    useCases: [
      'Продажи: управление сделками',
      'Маркетинг: email-кампании',
      'Сервис: работа с обращениями',
      'Руководство: контроль бизнеса'
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
      <Navbar />
      
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <a href="/solutions" className="gap-2">
                <Icon name="ArrowLeft" size={18} />
                Назад к решениям
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name={solution.icon as any} size={24} className="text-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  {solution.title}
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6">
                {solution.description}
              </p>
              <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                {solution.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="/become-client">
                    Заказать решение
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/#faq">
                    Задать вопрос
                    <Icon name="MessageSquare" size={18} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="CheckCircle2" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Преимущества
              </h3>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-foreground/80">
                    <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Возможности
              </h3>
              <ul className="space-y-3">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-foreground/80">
                    <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 sm:p-8 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Briefcase" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Применение
              </h3>
              <ul className="space-y-3">
                {solution.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-foreground/80">
                    <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 border border-primary/20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Готовы начать?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Оставьте заявку, и наш специалист свяжется с вами для обсуждения деталей проекта
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/become-client">
                Оставить заявку
                <Icon name="Send" size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionDetail;
