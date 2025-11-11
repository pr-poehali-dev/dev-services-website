import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const hash = href.substring(1);
      
      if (location.pathname !== '/') {
        navigate('/' + hash);
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      
      closeMobileMenu();
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'https://scalperio.ru/';
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex md:grid md:grid-cols-3 items-center justify-between">
          <a 
            href="https://scalperio.ru/" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Icon name="Sparkles" className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              Scalper.io
            </span>
          </a>

          <div className="hidden md:flex justify-center items-center gap-6 lg:gap-8">
            <a 
              href="/#services" 
              onClick={(e) => handleNavClick(e, '/#services')}
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
              onClick={(e) => handleNavClick(e, '/#tech')}
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Технологии
            </a>
            <a 
              href="/#team" 
              onClick={(e) => handleNavClick(e, '/#team')}
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
              onClick={(e) => handleNavClick(e, '/#faq')}
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
              className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors active:scale-95"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileMenuOpen}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-border pt-4 animate-fade-in">
            <a 
              href="/#services" 
              className="block text-foreground/80 hover:text-primary active:bg-primary/5 transition-all py-3 px-4 rounded-lg -mx-2"
              onClick={(e) => handleNavClick(e, '/#services')}
            >
              Услуги
            </a>
            <a 
              href="/solutions" 
              className="block text-foreground/80 hover:text-primary active:bg-primary/5 transition-all py-3 px-4 rounded-lg -mx-2"
              onClick={closeMobileMenu}
            >
              Готовые решения
            </a>
            <a 
              href="/#tech" 
              className="block text-foreground/80 hover:text-primary active:bg-primary/5 transition-all py-3 px-4 rounded-lg -mx-2"
              onClick={(e) => handleNavClick(e, '/#tech')}
            >
              Технологии
            </a>
            <a 
              href="/#team" 
              className="block text-foreground/80 hover:text-primary active:bg-primary/5 transition-all py-3 px-4 rounded-lg -mx-2"
              onClick={(e) => handleNavClick(e, '/#team')}
            >
              Команда
            </a>
            <a 
              href="/partners" 
              className="block text-foreground/80 hover:text-primary active:bg-primary/5 transition-all py-3 px-4 rounded-lg -mx-2"
              onClick={closeMobileMenu}
            >
              Партнёры
            </a>
            <a 
              href="/#faq" 
              className="block text-foreground/80 hover:text-primary active:bg-primary/5 transition-all py-3 px-4 rounded-lg -mx-2"
              onClick={(e) => handleNavClick(e, '/#faq')}
            >
              FAQ
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 active:scale-95 transition-transform mt-4" asChild>
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