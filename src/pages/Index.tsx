import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToPolicy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
    { count: '5', role: 'Backend разработчиков', icon: 'Server' },
    { count: '5', role: 'Frontend разработчиков', icon: 'Code2' },
    { count: '2', role: 'UI/UX дизайнеров', icon: 'Palette' },
    { count: '3', role: 'AI/ML инженеров', icon: 'BrainCircuit' }
  ];

  const clients = [
    { name: 'Добавьте логотип клиента' },
    { name: 'Добавьте логотип клиента' },
    { name: 'Добавьте логотип клиента' },
    { name: 'Добавьте логотип клиента' }
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
            <a href="#clients" className="text-foreground/80 hover:text-primary transition-colors">Клиенты</a>
            <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Icon name="Zap" className="text-primary" size={16} />
            <span className="text-sm text-primary font-medium">Инновации в разработке</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Разрабатываем будущее
            <br />
            <span className="text-primary">
              с помощью AI
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
            Мы — команда профессионалов, создающая современные веб-приложения и AI-решения. 
            Работаем как подрядчики и субподрядчики с компаниями любого масштаба.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
              <Icon name="Phone" className="mr-2" size={20} />
              Обсудить задачу
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
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

      <section id="services" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Полный цикл разработки: от фронтенда и бэкенда до архитектуры, дизайна и сложных ИИ-агентов
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
              <Icon name="CheckCircle2" className="text-primary" size={20} />
              <span className="text-primary font-medium">Закрываем полный цикл разработки</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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

      <section id="tech" className="py-20 px-6">
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

      <section id="team" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              15 специалистов с экспертизой в разных областях
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

      <section id="clients" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют ведущие компании
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="h-32 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center text-muted-foreground text-sm">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответили для вас на часто задаваемые вопросы
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="MessageCircle" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Какие бизнес-задачи лучше всего подходят для автоматизации с помощью ИИ-агентов?</h3>
                  <p className="text-muted-foreground mb-3">Мы разделяем на два варианта бизнес-задач, которые ИИ может закрыть:</p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Первый</strong> – заменить людей, которые делают регулярную однотипную работу, то есть оптимизировать процесс и сократить человеческие ресурсы за счет автоматизации. Например – решение для поддержки, квалификация лидов, онбординг, обработка заявок, первичный анализ данных и др.рутинные задачи.
                    </div>
                    <div>
                      <strong className="text-foreground">Второй</strong> – начать использовать ИИ-агентов, где до этого человек не мог закрыть собой процесс — это уж абсолютно новое направление, которое создает возможность для появления "голубых океанов". Например – мгновенно создавать и тестировать маркетинговый контент повышая CTR оффера до предельного максимума, руками человека это делается целой командой и временными затратами кратно больше чем мгновенно.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Каковы реальные сроки и этапы внедрения ИИ-решения?</h3>
                  <p className="text-muted-foreground">
                    Обычно пилот запускается за <strong className="text-foreground">3–4 недели</strong>, а масштабирование — ещё <strong className="text-foreground">2–4 недели</strong> в зависимости от интеграций и объёма закрываемых задач.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="BarChart3" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Как измерять эффективность и экономический эффект от ИИ?</h3>
                  <p className="text-muted-foreground mb-3">Фиксируем baseline (время/стоимость/конверсия) → запускаем пилот → сравниваем «до/после» по KPI:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>сокращение FTE, время обработки</li>
                    <li>% автоматизации, uplift конверсии и экономия в ₽/$</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="DollarSign" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Сколько стоит внедрение ИИ-агентов в ваш бизнес?</h3>
                  <p className="text-muted-foreground mb-3">Мы работаем по двум моделям:</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>1. Фиксированная оплата на старте проекта где цена может начинаться от 300тр. за интеграцию одного ИИ-агента.</div>
                    <div>2. Оплата по результату внедрения (revenue-share) – мы на старте определяем какую эффективность получим и после запуска берём 25-35% от сэкономленных или заработанных средств. Такой способ помогает снизить ваши риски на старте и мы с вами разделим финансовые результаты после внедрения ИИ в ваши бизнес процессы.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Как обеспечить защиту данных и соблюдение нормативных требований при использовании ИИ?</h3>
                  <p className="text-muted-foreground">
                    Защита достигается сочетанием архитектурных решений (on-prem/Hybrid), шифрования, ограниченного доступа и процедур (data minimization, логирование, DLP). Мы проектируем решения с учётом регуляторики (GDPR, HIPAA и локальных требований).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="Server" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Нужна ли мне отдельная ИТ-инфраструктура для запуска ИИ-агента?</h3>
                  <p className="text-muted-foreground">
                    Не всегда — можно начать с облачных решений (минимальные требования). Для строгих требований безопасности возможен hybrid или on-prem вариант.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">
                        <a href="mailto:info@scalper.io" className="hover:text-primary transition-colors">
                          info@scalper.io
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon name="Phone" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-medium">
                        <a href="tel:+74993913647" className="hover:text-primary transition-colors">
                          +7 (499) 391-36-47
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

      <footer className="py-12 px-6 border-t border-border/50 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={24} />
                <span className="text-xl font-bold">Scalper.io</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Полный цикл разработки от идеи до production
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <a href="tel:+74993913647" className="hover:text-primary transition-colors">
                    +7 (499) 391-36-47
                  </a>
                </div>
                <div className="text-xs leading-relaxed">
                  129164, город Москва,<br />
                  Ракетный б-р, д. 16,<br />
                  эт 13 пом 25 ком 25
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Юридическая информация</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>ООО "ОПТИМЛАЙН"</div>
                <div>ИНН: 7717701387</div>
                <div>ОГРН: 1117746457278</div>
                <div>ОКПО: 92499415</div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-3 items-center text-muted-foreground text-sm">
              <span>© 2024 ООО "ОПТИМЛАЙН"</span>
              <span className="hidden md:block">•</span>
              <a href="/privacy" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;