import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

interface Solution {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  icon: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    title: 'Веб-скрапер',
    description: 'Автоматизированный инструмент для сбора контактных данных и лидов с веб-сайтов. Повышает эффективность продаж и маркетинга.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/de3f3ccc-b407-4ff1-80e4-f6049d38b9c8.jpg',
    slug: 'web-scraper',
    icon: 'Globe'
  },
  {
    id: 2,
    title: 'Чат-бот с ИИ',
    description: 'Интеллектуальный чат-бот для мессенджеров с возможностью обучения. Автоматизирует общение с клиентами 24/7.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/2725a30d-dcd4-418a-935a-950a1385859d.jpg',
    slug: 'ai-chatbot',
    icon: 'MessageSquare'
  },
  {
    id: 3,
    title: 'Лидогенератор на базе ИИ',
    description: 'Система автоматической генерации качественных лидов с использованием искусственного интеллекта и machine learning.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/9da90696-31df-46d2-9172-94aee71d874c.jpg',
    slug: 'ai-lead-generator',
    icon: 'Target'
  },
  {
    id: 4,
    title: 'ИИ-агент продажник',
    description: 'Виртуальный помощник для поддержки клиентов и увеличения конверсии на сайте. Отвечает на вопросы и консультирует покупателей.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/de3f3ccc-b407-4ff1-80e4-f6049d38b9c8.jpg',
    slug: 'ai-sales-agent',
    icon: 'HeadphonesIcon'
  },
  {
    id: 5,
    title: 'ИИ-ассистент для бизнеса',
    description: 'Персональный ИИ-помощник, обучаемый на корпоративных данных компании. Работает локально или в облаке с полным контролем безопасности.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/2725a30d-dcd4-418a-935a-950a1385859d.jpg',
    slug: 'ai-business-assistant',
    icon: 'BrainCircuit'
  },
  {
    id: 6,
    title: 'CRM-система',
    description: 'Система управления взаимоотношениями с клиентами. Автоматизирует продажи, маркетинг и сервисное обслуживание.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/9da90696-31df-46d2-9172-94aee71d874c.jpg',
    slug: 'crm-system',
    icon: 'Users'
  },
  {
    id: 7,
    title: 'Маркетплейс',
    description: 'Торговая площадка в интернете, где продавцы и покупатели совершают сделки. Полный цикл от витрины до оплаты и доставки.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/de3f3ccc-b407-4ff1-80e4-f6049d38b9c8.jpg',
    slug: 'marketplace',
    icon: 'ShoppingCart'
  },
  {
    id: 8,
    title: 'B2B-кабинет',
    description: 'Личный кабинет для корпоративных клиентов с расширенными возможностями: управление заказами, документооборот, аналитика.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/2725a30d-dcd4-418a-935a-950a1385859d.jpg',
    slug: 'b2b-cabinet',
    icon: 'Building2'
  },
  {
    id: 9,
    title: 'Личный кабинет',
    description: 'Персонализированное пространство для пользователей с историей заказов, настройками профиля и персональными предложениями.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/9da90696-31df-46d2-9172-94aee71d874c.jpg',
    slug: 'personal-cabinet',
    icon: 'UserCircle'
  },
  {
    id: 10,
    title: 'Интеграция с 1C',
    description: 'Синхронизация данных между вашим сайтом и системой учета 1C. Автоматический обмен товарами, заказами и остатками.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/de3f3ccc-b407-4ff1-80e4-f6049d38b9c8.jpg',
    slug: '1c-integration',
    icon: 'Link'
  },
  {
    id: 11,
    title: 'Мобильное приложение',
    description: 'Нативное приложение для iOS и Android с доступом к функциям сайта, push-уведомлениями и офлайн-режимом.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/2725a30d-dcd4-418a-935a-950a1385859d.jpg',
    slug: 'mobile-app',
    icon: 'Smartphone'
  },
  {
    id: 12,
    title: 'Аналитика и BI',
    description: 'Система бизнес-аналитики с интерактивными дашбордами, отчетами и прогнозированием на основе данных компании.',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/9da90696-31df-46d2-9172-94aee71d874c.jpg',
    slug: 'analytics-bi',
    icon: 'BarChart3'
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Готовые решения для бизнеса
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Проверенные инструменты для автоматизации бизнес-процессов, увеличения продаж и оптимизации работы компании
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Icon name={solution.icon as any} size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 line-clamp-3">
                    {solution.description}
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={`/solutions/${solution.slug}`}>
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 border border-primary/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Не нашли подходящее решение?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Мы разработаем индивидуальное решение под ваши задачи и бизнес-процессы
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/become-client">
                Обсудить проект
                <Icon name="MessageSquare" size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
