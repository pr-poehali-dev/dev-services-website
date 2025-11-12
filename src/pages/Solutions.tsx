import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import SEOHead from '@/components/SEOHead';

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
    description: 'Автоматизированный инструмент для сбора контактных данных и лидов с веб-сайтов. Повышает эффективность продаж...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/45cf46a3-a848-49d9-a3a5-df3e2e24d0f6.jpg',
    slug: 'web-scraper',
    icon: 'Globe'
  },
  {
    id: 2,
    title: 'Чат-бот с ИИ',
    description: 'Интеллектуальный чат-бот для мессенджеров с возможностью обучения. Автоматизирует общение...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/b2e629e4-b188-43dc-9474-d7dfc6caa259.jpg',
    slug: 'ai-chatbot',
    icon: 'MessageSquare'
  },
  {
    id: 3,
    title: 'Лидогенератор на базе ИИ',
    description: 'Система автоматической генерации качественных лидов с использованием искусственного...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/1ac7e262-586b-48af-a39d-36d042316390.jpg',
    slug: 'ai-lead-generator',
    icon: 'Target'
  },
  {
    id: 4,
    title: 'ИИ-агент продажник',
    description: 'Виртуальный помощник для поддержки клиентов и увеличения конверсии на сайте. Отвечает на...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/13d5aa8f-93c5-4d67-987e-1141a00a7141.jpg',
    slug: 'ai-sales-agent',
    icon: 'Headphones'
  },
  {
    id: 5,
    title: 'ИИ-ассистент для бизнеса',
    description: 'Персональный ИИ-помощник, обучаемый на корпоративных данных компании. Работает локально...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/3b3fea9c-807e-4bf7-bc5a-da5879fa630f.jpg',
    slug: 'ai-business-assistant',
    icon: 'BrainCircuit'
  },
  {
    id: 6,
    title: 'CRM-система',
    description: 'Система управления взаимоотношениями с клиентами. Автоматизирует продажи, маркетинг...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/7ec72035-f084-432f-a1d3-5d970bf03682.jpg',
    slug: 'crm-system',
    icon: 'Users'
  },
  {
    id: 7,
    title: 'Маркетплейс',
    description: 'Торговая площадка в интернете, где продавцы и покупатели совершают сделки. Полный цикл...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/d42133a0-ab6d-4996-a600-156b1ff3f01f.jpg',
    slug: 'marketplace',
    icon: 'ShoppingCart'
  },
  {
    id: 8,
    title: 'B2B-кабинет',
    description: 'Личный кабинет для корпоративных клиентов с расширенными возможностями: управление...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/fdc4e0ba-c244-46a3-a2b2-fb6cdd007635.jpg',
    slug: 'b2b-cabinet',
    icon: 'Building2'
  },
  {
    id: 9,
    title: 'Личный кабинет',
    description: 'Персонализированное пространство для пользователей с историей заказов, настройками...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/2ceb642c-48fd-4ed6-a3a3-8d94fe6bad27.jpg',
    slug: 'personal-cabinet',
    icon: 'UserCircle'
  },
  {
    id: 10,
    title: 'Интеграция с 1C',
    description: 'Синхронизация данных между вашим сайтом и системой учета 1C. Автоматический обмен...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/3850dffa-def7-48d2-9a64-73ddab220cd1.jpg',
    slug: '1c-integration',
    icon: 'Link'
  },
  {
    id: 11,
    title: 'Мобильное приложение',
    description: 'Нативное приложение для iOS и Android с доступом к функциям сайта, push-уведомлениями...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/158023fa-4e5a-4e63-95f4-d97a501c646e.jpg',
    slug: 'mobile-app',
    icon: 'Smartphone'
  },
  {
    id: 12,
    title: 'Аналитика и BI',
    description: 'Система бизнес-аналитики с интерактивными дашбордами, отчетами и прогнозированием...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/b99927ef-f780-4d51-9ee8-3b7c102722f1.jpg',
    slug: 'analytics-bi',
    icon: 'BarChart3'
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Готовые IT-решения для бизнеса под ключ — Scalper.io"
        description="⭐ Разработка готовых решений: веб-скраперы, ИИ-чат-боты, CRM-системы, маркетплейсы, личные кабинеты, мобильные приложения. 12 проверенных продуктов под ключ. Консультация 24/7."
        image="https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/48626a96-fe8a-4815-ada9-d0a0b323e0b7.jpg"
        url="/solutions"
        keywords="готовые IT решения, разработка ПО под ключ, веб скрапер разработка, чат бот с ИИ, разработка CRM системы, маркетплейс разработка, личный кабинет разработка, B2B кабинет, интеграция 1С, мобильное приложение разработка, бизнес аналитика BI, лидогенератор ИИ"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Готовые IT-решения для бизнеса",
          "description": "Каталог готовых решений для автоматизации бизнеса",
          "url": "https://scalperio.ru/solutions",
          "provider": {
            "@type": "Organization",
            "name": "Scalper.io",
            "url": "https://scalperio.ru"
          },
          "numberOfItems": 12,
          "itemListElement": solutions.map((solution, index) => ({
            "@type": "Service",
            "position": index + 1,
            "name": solution.title,
            "description": solution.description,
            "url": `https://scalperio.ru/solutions/${solution.slug}`,
            "image": solution.image
          }))
        }}
      />
      <Navbar />
      
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
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
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_0_30px_rgba(23,169,163,0.3)] transition-all duration-500 flex flex-col opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative h-56 overflow-hidden bg-primary/5">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                    fetchpriority={index < 3 ? "high" : "auto"}
                    width="400"
                    height="224"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon name={solution.icon as any} size={20} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 min-h-[56px] flex items-center group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow min-h-[60px]">
                    {solution.description}
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 active:scale-95 transition-all duration-300"
                    asChild
                  >
                    <a href={`/solutions/${solution.slug}`}>
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
            <Button size="lg" className="bg-primary hover:bg-primary/90 active:scale-95 transition-transform" asChild>
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