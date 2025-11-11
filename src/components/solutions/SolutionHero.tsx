import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import type { SolutionData } from '@/data/solutionsData';

interface SolutionHeroProps {
  solution: SolutionData;
}

const SolutionHero = ({ solution }: SolutionHeroProps) => {
  return (
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
  );
};

export default SolutionHero;
