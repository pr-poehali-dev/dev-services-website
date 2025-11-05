import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Sparkles" className="text-primary" size={28} />
          <span className="text-2xl font-bold text-foreground">
            Scalper.io
          </span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
          <a href="#tech" className="text-foreground/80 hover:text-primary transition-colors">Технологии</a>
          <a href="#team" className="text-foreground/80 hover:text-primary transition-colors">Команда</a>
          <a href="/portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button className="bg-primary hover:bg-primary/90" asChild>
          <a href="/become-client">
            Стать клиентом
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
