import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl sm:text-2xl font-bold text-foreground">
              Scalper.io
            </span>
          </div>

          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            <a href="/#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="/solutions" className="text-foreground/80 hover:text-primary transition-colors">Готовые решения</a>
            <a href="/#tech" className="text-foreground/80 hover:text-primary transition-colors">Технологии</a>
            <a href="/#team" className="text-foreground/80 hover:text-primary transition-colors">Команда</a>
            <a href="/portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
            <a href="/partners" className="text-foreground/80 hover:text-primary transition-colors">Партнёры</a>
            <a href="/#faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</a>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="/become-client">Стать клиентом</a>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4 animate-fade-in">
            <a 
              href="/#services" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Услуги
            </a>
            <a 
              href="/solutions" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Готовые решения
            </a>
            <a 
              href="/#tech" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Технологии
            </a>
            <a 
              href="/#team" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Команда
            </a>
            <a 
              href="/portfolio" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Портфолио
            </a>
            <a 
              href="/partners" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Партнёры
            </a>
            <a 
              href="/#faq" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 mt-2" asChild>
              <a href="/become-client" onClick={closeMobileMenu}>
                Стать клиентом
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;