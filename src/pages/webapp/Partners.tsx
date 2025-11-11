import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import SEOHead from '@/components/SEOHead';

const Partners = () => {
  const positions = [
    {
      id: 1,
      title: 'ML/AI разработчик',
      icon: 'Brain',
      image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/8c3736ba-d9d9-4a79-a321-b24acdece735.jpg',
      description: 'Разработка и внедрение ML-моделей, работа с нейросетями и алгоритмами машинного обучения',
      skills: [
        'Python, TensorFlow, PyTorch',
        'Опыт с LLM и Computer Vision',
        'Знание MLOps практик',
        'Понимание архитектур нейросетей'
      ],
      formats: [
        { type: 'Процент от проекта', desc: '15-25% от стоимости AI-компонента' },
        { type: 'Фикс на проект', desc: 'От 150 000₽ за проект' },
        { type: 'Оклад', desc: 'От 200 000₽/мес при полной занятости' }
      ]
    },
    {
      id: 2,
      title: 'Лид-генератор / Маркетолог',
      icon: 'TrendingUp',
      image: 'https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/7445280e-3331-48ad-a84b-62f1b28c5efe.jpg',
      description: 'Привлечение клиентов, построение воронок продаж, развитие каналов лидогенерации',
      skills: [
        'Опыт в B2B продажах IT-услуг',
        'Знание digital-маркетинга',
        'Умение работать с CRM',
        'Аналитика и воронки продаж'
      ],
      formats: [
        { type: 'Процент с привлеченных', desc: '10-20% с каждого закрытого клиента' },
        { type: 'Фикс + процент', desc: '50 000₽ + 5-10% с продаж' },
        { type: 'За лид', desc: 'От 5 000₽ за квалифицированный лид' }
      ]
    }
  ];

  const benefits = [
    {
      icon: 'Rocket',
      title: 'Растущая компания',
      desc: 'Мы в активной фазе роста с сильным продуктом'
    },
    {
      icon: 'Users',
      title: 'Сильная команда',
      desc: 'Работа с опытными профессионалами'
    },
    {
      icon: 'Target',
      title: 'Реальные проекты',
      desc: 'Интересные задачи от крупных клиентов'
    },
    {
      icon: 'TrendingUp',
      title: 'Гибкие условия',
      desc: 'Выбирайте удобный формат сотрудничества'
    },
    {
      icon: 'Wallet',
      title: 'Достойная оплата',
      desc: 'Конкурентные ставки и прозрачные выплаты'
    },
    {
      icon: 'Zap',
      title: 'Быстрый старт',
      desc: 'Оперативное принятие решений'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Партнёрство и вакансии — Работа в Scalper.io"
        description="Присоединяйтесь к команде Scalper.io. Ищем ML/AI разработчиков, фулстек и фронтенд разработчиков. Удаленная работа, интересные проекты."
        image="https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/081772e3-da50-4f0c-a3fd-a6d4c39e9571.jpg"
        url="/partners"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Ищем партнёров<br />для роста
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              У нас есть ресурсы и сильная команда. Нам нужны специалисты, которые помогут масштабировать бизнес и привлечь больше клиентов
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-20 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/eabe363c-f181-4a19-a2e1-ebc4723d198b.jpg"
              alt="Партнёрство" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          {/* Positions */}
          <div className="space-y-16 mb-20">
            {positions.map((position, index) => (
              <div 
                key={position.id} 
                className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto">
                    <img 
                      src={position.image} 
                      alt={position.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:from-transparent md:to-background/80" />
                  </div>
                  
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon name={position.icon} size={32} className="text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{position.title}</h2>
                    </div>
                    
                    <p className="text-muted-foreground text-lg mb-6">
                      {position.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                        Ключевые навыки
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 rounded-xl bg-muted text-muted-foreground text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                        Варианты сотрудничества
                      </h3>
                      <div className="space-y-3">
                        {position.formats.map((format, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-foreground">{format.type}</div>
                              <div className="text-muted-foreground text-sm">{format.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Почему с нами
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other partnerships */}
          <div className="bg-card rounded-3xl p-10 md:p-12 border border-border mb-20">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Handshake" size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Открыты к любым видам сотрудничества
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Указанные позиции — это наши приоритеты, но мы всегда готовы обсуждать другие форматы партнёрства. 
                  Если у вас есть уникальные компетенции или интересные идеи сотрудничества — напишите нам. 
                  Рассмотрим реферальные программы, совместные проекты, аутсорс команд и другие варианты.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 md:p-16 text-center border border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Готовы обсудить сотрудничество?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами, расскажите о своём опыте и предпочтениях. Мы обсудим формат, который будет выгоден обеим сторонам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8"
                onClick={() => window.open('https://t.me/scalperdotio', '_blank')}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => window.location.href = 'mailto:hello@scalper.io'}
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Отправить email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;