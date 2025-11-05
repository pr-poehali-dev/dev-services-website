import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="container mx-auto text-center max-w-7xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <Icon name="Zap" className="text-primary" size={16} />
          <span className="text-sm text-primary font-medium">Инновации в разработке</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in">
          Разрабатываем будущее
          <br />
          <span className="text-primary">
            с помощью AI
          </span>
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-12 animate-fade-in px-4">
          Мы — команда профессионалов, создающая современные веб-приложения и AI-решения. 
          Работаем как подрядчики и субподрядчики с компаниями любого масштаба.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
            <a href="https://t.me/scalper_io_public" target="_blank" rel="noopener noreferrer">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-primary/30 hover:bg-primary/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Mail" className="mr-2" size={20} />
            Обсудить задачу
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 max-w-5xl mx-auto px-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Проектов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">15+</div>
            <div className="text-muted-foreground">Клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Качество</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
