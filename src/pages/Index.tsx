import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
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

  const services = [
    {
      icon: 'Code2',
      title: 'Frontend разработка',
      description: 'Создаем современные интерфейсы на React, Vue, Angular с использованием TypeScript и современных подходов'
    },
    {
      icon: 'Server',
      title: 'Backend разработка',
      description: 'Проектируем надежные серверные решения, API, микросервисы и распределенные системы'
    },
    {
      icon: 'Network',
      title: 'Архитектура систем',
      description: 'Разрабатываем масштабируемую архитектуру для сложных enterprise-решений'
    },
    {
      icon: 'Palette',
      title: 'UI/UX дизайн',
      description: 'Проектируем удобные и красивые интерфейсы, создаем дизайн-системы и прототипы'
    },
    {
      icon: 'Bot',
      title: 'AI агенты',
      description: 'Разрабатываем интеллектуальных ботов и агентов для автоматизации бизнес-процессов'
    },
    {
      icon: 'BrainCircuit',
      title: 'ИИ решения',
      description: 'Внедряем машинное обучение, NLP, компьютерное зрение и другие AI технологии'
    }
  ];

  const technologies = [
    { name: 'React', icon: 'Atom' },
    { name: 'TypeScript', icon: 'FileCode2' },
    { name: 'Python', icon: 'Snake' },
    { name: 'TensorFlow', icon: 'Network' },
    { name: 'Node.js', icon: 'Server' },
    { name: 'Docker', icon: 'Container' },
    { name: 'PostgreSQL', icon: 'Database' },
    { name: 'OpenAI', icon: 'Sparkles' },
    { name: 'n8n', icon: 'Workflow' },
    { name: 'Next.js', icon: 'Layers' },
    { name: 'AWS', icon: 'Cloud' },
    { name: 'Kubernetes', icon: 'Box' }
  ];

  const teamStats = [
    { count: '20+', role: 'Backend разработчиков', icon: 'Server' },
    { count: '15+', role: 'Frontend разработчиков', icon: 'Code2' },
    { count: '8+', role: 'UI/UX дизайнеров', icon: 'Palette' },
    { count: '10+', role: 'AI/ML инженеров', icon: 'BrainCircuit' }
  ];



  return (
    <div className="min-h-screen bg-background">
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

      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 my-8 sm:my-12 mx-2 sm:mx-4 lg:mx-8 xl:mx-16 2xl:mx-24 border-2 border-border rounded-3xl">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto mb-6 px-4">
              Полный цикл разработки: от фронтенда и бэкенда до архитектуры, дизайна и сложных ИИ-агентов
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
              <Icon name="CheckCircle2" className="text-primary" size={20} />
              <span className="text-primary font-medium">Закрываем полный цикл разработки</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 my-8 sm:my-12 mx-2 sm:mx-4 lg:mx-8 xl:mx-16 2xl:mx-24 border-2 border-border rounded-3xl bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Технологии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Работаем с современным стеком технологий
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-110"
              >
                <Icon name={tech.icon as any} className="text-primary" size={32} />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 my-8 sm:my-12 mx-2 sm:mx-4 lg:mx-8 xl:mx-16 2xl:mx-24 border-2 border-border rounded-3xl bg-card/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              50+ специалистов с экспертизой в разных областях
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamStats.map((stat, index) => (
              <Card 
                key={index}
                className="bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={stat.icon as any} className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-3">{stat.count}</div>
                  <div className="text-muted-foreground font-medium">{stat.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 my-8 sm:my-12 mx-2 sm:mx-4 lg:mx-8 xl:mx-16 2xl:mx-24 border-2 border-border rounded-3xl bg-card/20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответили для вас на часто задаваемые вопросы
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="ai" className="bg-card border border-border rounded-xl px-6 overflow-hidden">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="BrainCircuit" className="text-primary" size={24} />
                  <span className="text-lg font-bold">Искусственный интеллект и автоматизация</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-6">
                <div>
                  <h4 className="font-semibold mb-2">Какие бизнес-задачи лучше всего подходят для автоматизации с помощью ИИ-агентов?</h4>
                  <p className="text-sm text-muted-foreground mb-2">Мы разделяем на два варианта бизнес-задач:</p>
                  <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                    <li><strong>Первый</strong> – заменить регулярные рутинные операции: поддержка клиентов, квалификация лидов, онбординг, обработка заявок.</li>
                    <li><strong>Второй</strong> – создать новые возможности там, где человек физически не успевает: мгновенная генерация и A/B-тестирование контента, динамическая персонализация на каждого пользователя.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Каковы реальные сроки внедрения ИИ-решения?</h4>
                  <p className="text-sm text-muted-foreground">Пилот — 3-4 недели, масштабирование — еще 2-4 недели в зависимости от интеграций.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Как измерить эффективность от внедрения ИИ?</h4>
                  <p className="text-sm text-muted-foreground">Фиксируем baseline показатели → запускаем пилот → сравниваем результаты по KPI: сокращение времени обработки, рост конверсии, экономия в рублях.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="architecture" className="bg-card border border-border rounded-xl px-6 overflow-hidden">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Network" className="text-primary" size={24} />
                  <span className="text-lg font-bold">Архитектура и масштабирование</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-6">
                <div>
                  <h4 className="font-semibold mb-2">Как вы проектируете масштабируемую архитектуру?</h4>
                  <p className="text-sm text-muted-foreground">Используем микросервисную архитектуру с горизонтальным масштабированием, контейнеризацией (Docker/Kubernetes) и асинхронной обработкой через очереди сообщений. Это позволяет системе расти вместе с вашим бизнесом без переписывания с нуля.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Сколько времени занимает проектирование архитектуры?</h4>
                  <p className="text-sm text-muted-foreground">Discovery и архитектурное проектирование — 1-2 недели. Далее создаем MVP для валидации решений — еще 2-3 недели. Полный цикл от идеи до production зависит от сложности, обычно 2-3 месяца.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Как обеспечиваете высокую доступность системы?</h4>
                  <p className="text-sm text-muted-foreground">Реализуем отказоустойчивость через репликацию, балансировку нагрузки, автоматический failover и мониторинг в режиме 24/7. Целевой uptime — 99.9%.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integration" className="bg-card border border-border rounded-xl px-6 overflow-hidden">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Plug" className="text-primary" size={24} />
                  <span className="text-lg font-bold">Интеграции и API</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-6">
                <div>
                  <h4 className="font-semibold mb-2">С какими системами вы можете интегрироваться?</h4>
                  <p className="text-sm text-muted-foreground">Интегрируемся с любыми системами через REST/GraphQL API, webhooks, очереди сообщений (RabbitMQ, Kafka). Опыт работы с 1C, SAP, Salesforce, популярными CRM/ERP, платежными системами и маркетинговыми платформами.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Как обеспечиваете безопасность при интеграциях?</h4>
                  <p className="text-sm text-muted-foreground">Используем OAuth 2.0, JWT-токены, шифрование трафика (TLS), rate limiting и API gateway для контроля доступа. Все секретные данные хранятся в защищенных хранилищах (Vault).</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Нужна ли нам отдельная инфраструктура для интеграций?</h4>
                  <p className="text-sm text-muted-foreground">Нет, можем работать через облачные решения или развернуть интеграционную шину на вашей инфраструктуре. Для строгих требований безопасности — hybrid или on-premise варианты.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mobile" className="bg-card border border-border rounded-xl px-6 overflow-hidden">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Smartphone" className="text-primary" size={24} />
                  <span className="text-lg font-bold">Мобильная разработка</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-6">
                <div>
                  <h4 className="font-semibold mb-2">Какие технологии используете для мобильной разработки?</h4>
                  <p className="text-sm text-muted-foreground">Для кросс-платформы — React Native и Flutter, для нативной разработки — Swift (iOS) и Kotlin (Android). Выбор зависит от требований к производительности и функционалу.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Сколько стоит разработка мобильного приложения?</h4>
                  <p className="text-sm text-muted-foreground">MVP для одной платформы — от 100 тыс. рублей, для двух платформ (кросс-платформа) — от 150 тыс. рублей. Точная оценка после детального брифа и проектирования.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Поддерживаете ли приложения после запуска?</h4>
                  <p className="text-sm text-muted-foreground">Да, предоставляем полный цикл поддержки: обновления под новые версии ОС, исправление багов, добавление функционала, мониторинг и аналитику использования.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 my-8 sm:my-12 mx-2 sm:mx-4 lg:mx-8 xl:mx-16 2xl:mx-24 border-2 border-border rounded-3xl">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Расскажите о вашем проекте, и мы найдем лучшее решение
            </p>
          </div>
          
          <Card className="bg-card/80 backdrop-blur border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background/50 min-h-32"
                  />
                </div>
                
                <div className="flex items-start gap-2">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                          +7 (499) 391-36-47
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name="Send" className="text-primary" size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-muted-foreground">Telegram</div>
                      <div className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
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
      </section>


    </div>
  );
};

export default Index;