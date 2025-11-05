import { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
  }
];

const ServicesSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Полный цикл разработки от идеи до запуска в продакшн
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
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
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
