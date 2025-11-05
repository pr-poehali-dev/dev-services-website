import { forwardRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Code2',
    title: 'Frontend разработка',
    description: 'Создаем современные интерфейсы на React, Vue, Angular с использованием TypeScript и современных подходов'
  },
  {
    icon: 'Server',
    title: 'Backend разработка',
    description: 'Проектируем надежные серверные решения, API, микросервисы и распределенные системы'
  },
  {
    icon: 'Smartphone',
    title: 'Мобильная разработка',
    description: 'Разрабатываем кроссплатформенные приложения для iOS и Android на React Native и Flutter'
  },
  {
    icon: 'Network',
    title: 'Архитектура систем',
    description: 'Разрабатываем масштабируемую архитектуру для сложных enterprise-решений'
  },
  {
    icon: 'Palette',
    title: 'UI/UX дизайн',
    description: 'Проектируем удобные и красивые интерфейсы, создаем дизайн-системы и прототипы'
  },
  {
    icon: 'Bot',
    title: 'AI агенты',
    description: 'Разрабатываем интеллектуальных ботов и агентов для автоматизации бизнес-процессов'
  },
  {
    icon: 'BrainCircuit',
    title: 'ИИ решения',
    description: 'Внедряем машинное обучение, NLP, компьютерное зрение и другие AI технологии'
  },
  {
    icon: 'Workflow',
    title: 'Интеграция систем',
    description: 'Связываем CRM, ERP, платежные системы и создаем единую экосистему для вашего бизнеса'
  },
  {
    icon: 'Shield',
    title: 'Информационная безопасность',
    description: 'Проводим аудит безопасности, внедряем защиту данных и обеспечиваем соответствие стандартам'
  },
  {
    icon: 'Database',
    title: 'Big Data и аналитика',
    description: 'Построение хранилищ данных, ETL-процессов, дашбордов и систем бизнес-аналитики'
  },
  {
    icon: 'Cloud',
    title: 'DevOps и облака',
    description: 'Настройка CI/CD, контейнеризация, оркестрация и миграция в облачную инфраструктуру'
  },
  {
    icon: 'Blocks',
    title: 'Blockchain разработка',
    description: 'Создание смарт-контрактов, DeFi-приложений, NFT-маркетплейсов и Web3 решений'
  },
  {
    icon: 'Gamepad2',
    title: 'Разработка игр',
    description: 'Создание мобильных и веб-игр, геймификация бизнес-процессов и обучающие симуляторы'
  },
  {
    icon: 'Video',
    title: 'Стриминг и видео',
    description: 'Разработка платформ для видеоконференций, стриминга, видеохостинга и live-трансляций'
  },
  {
    icon: 'ShoppingCart',
    title: 'E-commerce решения',
    description: 'Интернет-магазины, маркетплейсы, системы лояльности и интеграция с платежными шлюзами'
  },
  {
    icon: 'Headphones',
    title: 'VoIP и телефония',
    description: 'Разработка call-центров, IP-телефонии, интеграция с CRM и аналитика звонков'
  },
  {
    icon: 'Scan',
    title: 'Computer Vision',
    description: 'Распознавание лиц, объектов, документов, контроль качества на производстве'
  },
  {
    icon: 'MapPin',
    title: 'Геоинформационные системы',
    description: 'Картографические сервисы, навигация, логистика и оптимизация маршрутов'
  }
];

const ServicesSection = forwardRef<HTMLElement>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const itemsPerView = 3;
  const totalSlides = Math.ceil(services.length / itemsPerView);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const visibleServices = services.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <section 
      ref={ref} 
      id="services" 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Полный цикл разработки от идеи до запуска в продакшн
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[320px]">
            {visibleServices.map((service, index) => (
              <Card 
                key={currentIndex * itemsPerView + index}
                className="bg-card hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/50 animate-fade-in"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToSlide((currentIndex - 1 + totalSlides) % totalSlides)}
              className="rounded-full"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToSlide((currentIndex + 1) % totalSlides)}
              className="rounded-full"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Автопрокрутка каждые 5 секунд • Наведите курсор для паузы
          </p>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
