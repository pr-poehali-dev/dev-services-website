import { forwardRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToPolicy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/f7fe99b5-bce9-4bc5-bd19-f2df67d65ab8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert('Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', email: '', message: '', agreeToPolicy: false });
      } else {
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <section ref={ref} id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border/50">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="name"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="email"
                    required
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение <span className="text-destructive">*</span>
                  </label>
                  <Textarea 
                    id="message"
                    required
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background/50 min-h-[150px]"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy-policy"
                    checked={formData.agreeToPolicy}
                    onChange={(e) => setFormData({...formData, agreeToPolicy: e.target.checked})}
                    className="mt-1 w-4 h-4 rounded border-border"
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-muted-foreground">
                    Я соглашаюсь с{' '}
                    <a href="/privacy" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  disabled={!formData.agreeToPolicy}
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium break-all">
                        <a href="mailto:info@optunit.ru" className="hover:text-primary transition-colors">
                          info@optunit.ru
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <Icon name="Phone" className="text-secondary" size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-medium whitespace-nowrap">
                        <a href="tel:+74993913647" className="hover:text-primary transition-colors">
                          +7 (499) 391-36-47
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:col-span-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name="Send" className="text-primary" size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-muted-foreground">Telegram</div>
                      <div className="font-medium">
                        <a href="https://t.me/Pyatyzhkin_Sergey" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          @Pyatyzhkin_Sergey
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
