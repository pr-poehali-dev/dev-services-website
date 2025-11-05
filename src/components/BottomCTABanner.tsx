import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const BottomCTABanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let inactivityTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      clearTimeout(inactivityTimeout);

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 100;

      if (scrolledToBottom && !isDismissed) {
        scrollTimeout = setTimeout(() => {
          inactivityTimeout = setTimeout(() => {
            setIsVisible(true);
          }, 3000);
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(inactivityTimeout);
    };
  }, [isDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleClick = () => {
    navigate('/become-client');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up max-w-2xl w-full px-4"
      style={{ animation: 'slideUpBounce 0.6s ease-out forwards' }}
    >
      <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-2xl shadow-2xl border border-primary-foreground/10 overflow-hidden">
        <div className="relative p-6 flex items-center gap-4">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Закрыть"
          >
            <Icon name="X" size={20} />
          </button>

          <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
            <Icon name="Sparkles" size={24} className="text-primary-foreground" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-primary-foreground mb-1">
              Готовы начать проект?
            </h3>
            <p className="text-sm text-primary-foreground/90">
              Оставьте заявку и получите консультацию в течение 24 часов
            </p>
          </div>

          <Button 
            onClick={handleClick}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold flex-shrink-0"
          >
            Оставить заявку
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomCTABanner;
