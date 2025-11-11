import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const SolutionSidebar = () => {
  return (
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
  );
};

export default SolutionSidebar;
