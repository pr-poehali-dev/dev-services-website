import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const BecomeClient = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    website: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    challenges: '',
    agreeToPolicy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const fullMessage = `=== ИНФОРМАЦИЯ О КОМПАНИИ ===
Компания: ${formData.company}
Сайт: ${formData.website}

=== КОНТАКТНОЕ ЛИЦО ===
Имя: ${formData.name}
Должность: ${formData.position}
Email: ${formData.email}
Телефон: ${formData.phone}

=== О ПРОЕКТЕ ===
Тип проекта: ${formData.projectType}
Бюджет: ${formData.budget}
Сроки: ${formData.timeline}

Описание задачи:
${formData.description}

Основные вызовы:
${formData.challenges}`;

    try {
      const response = await fetch('https://functions.poehali.dev/0fe7f747-8cc6-4533-9015-b49d4271936b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert('Спасибо! Ваша анкета успешно отправлена. Мы свяжемся с вами в течение 24 часов.');
        window.location.href = '/';
      } else {
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl sm:text-2xl font-bold text-foreground">
              Scalper.io
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-sm sm:text-base">
              <Icon name="ArrowLeft" className="mr-1 sm:mr-2" size={16} />
              <span className="hidden xs:inline">На главную</span>
              <span className="xs:hidden">Назад</span>
            </Button>
          </Link>
        </div>
      </nav>

      <SEOHead 
        title="Стать клиентом — Заказать разработку | Scalper.io"
        description="Оставьте заявку на разработку веб-приложения, мобильного приложения или AI-решения. Обсудим ваш проект и подготовим предложение."
        image="https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/a4659815-5bea-44d8-8a57-56b1ae6cf67b.jpg"
        url="/become-client"
      />
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Стать клиентом Scalper.io</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ваши ответы — лучшая заявка для нас. На их основе мы поймем, чем сможем быть полезны: 
              соберем информацию и подготовимся ко встрече. Так наш первый разговор будет предметным.
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="Building2" className="text-primary" size={24} />
                    О компании
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Название компании <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        required
                        placeholder="ООО «Ваша компания»"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Сайт компании
                      </label>
                      <Input 
                        type="url"
                        placeholder="https://example.com"
                        value={formData.website}
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="User" className="text-primary" size={24} />
                    Контактное лицо
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Имя и фамилия <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Должность <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        required
                        placeholder="Директор по развитию"
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        required
                        type="email"
                        placeholder="ivan@company.ru"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        required
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="Briefcase" className="text-primary" size={24} />
                    О проекте
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Тип проекта <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        required
                        placeholder="Разработка веб-приложения / Внедрение ИИ / Мобильное приложение"
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="bg-background/50"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Бюджет проекта
                        </label>
                        <Input 
                          placeholder="От 500 000 ₽"
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="bg-background/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Желаемые сроки
                        </label>
                        <Input 
                          placeholder="2-3 месяца"
                          value={formData.timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Описание задачи <span className="text-destructive">*</span>
                      </label>
                      <Textarea 
                        required
                        placeholder="Расскажите подробнее о вашей задаче: какую проблему хотите решить, что планируете получить на выходе, есть ли уже похожие решения..."
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        className="bg-background/50 min-h-32"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Основные вызовы и сложности
                      </label>
                      <Textarea 
                        placeholder="С какими трудностями сталкиваетесь? Что важно учесть при реализации?"
                        value={formData.challenges}
                        onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                        className="bg-background/50 min-h-24"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex items-start gap-2 mb-6">
                    <input 
                      type="checkbox" 
                      id="privacy-policy-become-client"
                      checked={formData.agreeToPolicy}
                      onChange={(e) => setFormData({...formData, agreeToPolicy: e.target.checked})}
                      className="mt-1 w-4 h-4 rounded border-border"
                      required
                    />
                    <label htmlFor="privacy-policy-become-client" className="text-sm text-muted-foreground">
                      Я согласен с{' '}
                      <a href="/privacy" className="text-primary hover:underline" target="_blank">
                        политикой конфиденциальности
                      </a>
                      {' '}и даю согласие на обработку персональных данных <span className="text-destructive">*</span>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 active:scale-95 transition-transform text-base sm:text-lg py-5 sm:py-6"
                    disabled={!formData.agreeToPolicy || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={18} />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" className="mr-2" size={18} />
                        Отправить анкету
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    После отправки мы свяжемся с вами в течение 24 часов
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <h3 className="font-bold mb-2">Быстрый ответ</h3>
                <p className="text-sm text-muted-foreground">
                  Ответим в течение 24 часов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="UserCheck" className="text-primary" size={24} />
                </div>
                <h3 className="font-bold mb-2">Индивидуальный подход</h3>
                <p className="text-sm text-muted-foreground">
                  Готовим решение под ваши задачи
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <h3 className="font-bold mb-2">Конфиденциальность</h3>
                <p className="text-sm text-muted-foreground">
                  Ваши данные под защитой
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeClient;