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
    description: 'Автоматизированный инструмент для сбора контактных данных и лидов с веб-сайтов. Повышает эффективность продаж...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/c1efd045-a032-4033-8f0e-11308d48c83d.jpg',
    slug: 'web-scraper',
    icon: 'Globe'
  },
  {
    id: 2,
    title: 'Чат-бот с ИИ',
    description: 'Интеллектуальный чат-бот для мессенджеров с возможностью обучения. Автоматизирует общение...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/534480ed-ce94-46a4-8722-c5ef2b0c33a6.jpg',
    slug: 'ai-chatbot',
    icon: 'MessageSquare'
  },
  {
    id: 3,
    title: 'Лидогенератор на базе ИИ',
    description: 'Система автоматической генерации качественных лидов с использованием искусственного...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/17ed36b2-9523-4888-b2a5-99ef8aa506f0.jpg',
    slug: 'ai-lead-generator',
    icon: 'Target'
  },
  {
    id: 4,
    title: 'ИИ-агент продажник',
    description: 'Виртуальный помощник для поддержки клиентов и увеличения конверсии на сайте. Отвечает на...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/3c246348-2d47-496d-baab-53b7e069b607.jpg',
    slug: 'ai-sales-agent',
    icon: 'Headphones'
  },
  {
    id: 5,
    title: 'ИИ-ассистент для бизнеса',
    description: 'Персональный ИИ-помощник, обучаемый на корпоративных данных компании. Работает локально...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/db297af8-2ba5-4186-aa9e-5153d9c94090.jpg',
    slug: 'ai-business-assistant',
    icon: 'BrainCircuit'
  },
  {
    id: 6,
    title: 'CRM-система',
    description: 'Система управления взаимоотношениями с клиентами. Автоматизирует продажи, маркетинг...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/316885c2-cbcc-4580-9218-c9f22f7090f1.jpg',
    slug: 'crm-system',
    icon: 'Users'
  },
  {
    id: 7,
    title: 'Маркетплейс',
    description: 'Торговая площадка в интернете, где продавцы и покупатели совершают сделки. Полный цикл...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/b32a22ac-799b-4508-9a3b-6447b495f73f.jpg',
    slug: 'marketplace',
    icon: 'ShoppingCart'
  },
  {
    id: 8,
    title: 'B2B-кабинет',
    description: 'Личный кабинет для корпоративных клиентов с расширенными возможностями: управление...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/43b225d9-8ba9-440f-8122-63af8c8ac9a0.jpg',
    slug: 'b2b-cabinet',
    icon: 'Building2'
  },
  {
    id: 9,
    title: 'Личный кабинет',
    description: 'Персонализированное пространство для пользователей с историей заказов, настройками...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/74053fad-827e-4080-a15b-ae7cad7aa5dc.jpg',
    slug: 'personal-cabinet',
    icon: 'UserCircle'
  },
  {
    id: 10,
    title: 'Интеграция с 1C',
    description: 'Синхронизация данных между вашим сайтом и системой учета 1C. Автоматический обмен...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/5cd31747-a96c-44de-8c59-bd4609e9a033.jpg',
    slug: '1c-integration',
    icon: 'Link'
  },
  {
    id: 11,
    title: 'Мобильное приложение',
    description: 'Нативное приложение для iOS и Android с доступом к функциям сайта, push-уведомлениями...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/3ccf1686-a2e9-4a00-8c82-0b8a100dd9a8.jpg',
    slug: 'mobile-app',
    icon: 'Smartphone'
  },
  {
    id: 12,
    title: 'Аналитика и BI',
    description: 'Система бизнес-аналитики с интерактивными дашбордами, отчетами и прогнозированием...',
    image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/a50083d7-f07b-4b79-8a8f-40ea7d50fa7e.jpg',
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
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 flex flex-col animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-white/95 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
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
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300"
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