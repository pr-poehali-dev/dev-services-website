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
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl sm:text-2xl font-bold text-foreground">
              Scalper.io
            </span>
          </div>

          <div className="hidden md:flex justify-center items-center gap-8">
            <a 
              href="/#services" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Услуги
            </a>
            <a 
              href="/solutions" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Готовые решения
            </a>
            <a 
              href="/#tech" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Технологии
            </a>
            <a 
              href="/#team" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Команда
            </a>
            <a 
              href="/partners" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Партнёры
            </a>
            <a 
              href="/#faq" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              FAQ
            </a>
          </div>

          <div className="flex justify-end items-center">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 whitespace-nowrap" asChild>
              <a href="/become-client">Стать клиентом</a>
            </Button>
            <button
              className="md:hidden text-foreground p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
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