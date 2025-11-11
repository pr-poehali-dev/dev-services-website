import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'Staltara',
      description: 'Платформа для аренды и продажи стальных еврокубов для пищевой промышленности',
      url: 'https://staltara.ru/',
      image: 'https://cdn.poehali.dev/files/9fe33620-e1f2-4e4f-9c25-779cbe23f9b6.png',
      tags: ['Web', 'E-commerce', 'B2B'],
      year: '2024'
    },
    {
      title: 'Optimline',
      description: 'Корпоративный сайт с фокусом на автоматизацию бизнес-процессов и цифровую трансформацию',
      url: 'https://optimline.com/',
      image: 'https://cdn.poehali.dev/files/b2bff799-57ea-4958-80df-472b00e609cb.png',
      tags: ['Corporate', 'Branding', 'Web'],
      year: '2024'
    },
    {
      title: 'Scalper.io Bot',
      description: 'Telegram-бот для автоматизации анализа рынка и трейдинга с использованием ИИ',
      url: 'https://t.me/scalper_io_public',
      image: 'https://cdn.poehali.dev/files/b2bff799-57ea-4958-80df-472b00e609cb.png',
      tags: ['Telegram', 'AI', 'Trading'],
      year: '2024'
    },
    {
      title: 'WorkAIshop',
      description: 'Образовательная платформа для обучения работе с инструментами искусственного интеллекта',
      url: 'https://workaishop.com/',
      image: 'https://cdn.poehali.dev/files/b2bff799-57ea-4958-80df-472b00e609cb.png',
      tags: ['EdTech', 'AI', 'Web Platform'],
      year: '2024'
    },
    {
      title: 'SmartInventory Pro',
      description: 'SaaS-решение для управления складскими запасами с предиктивной аналитикой и ИИ-рекомендациями',
      url: '#',
      image: 'https://cdn.poehali.dev/files/b2bff799-57ea-4958-80df-472b00e609cb.png',
      tags: ['SaaS', 'Inventory', 'AI/ML'],
      year: '2023'
    },
    {
      title: 'MediConnect',
      description: 'Мобильное приложение для телемедицины с видеоконсультациями и электронной медкартой',
      url: '#',
      image: 'https://cdn.poehali.dev/files/b2bff799-57ea-4958-80df-472b00e609cb.png',
      tags: ['Mobile', 'Healthcare', 'iOS/Android'],
      year: '2023'
    }
  ];

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

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Наши проекты</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Разрабатываем продукты, которые решают реальные бизнес-задачи. 
              От стартапов до корпоративных решений — каждый проект уникален.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Image" className="text-primary/20" size={64} />
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.url !== '#' ? (
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90" 
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <Icon name="ExternalLink" className="mr-2" size={16} />
                        Посмотреть проект
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      className="w-full" 
                      variant="outline"
                      disabled
                    >
                      <Icon name="Lock" className="mr-2" size={16} />
                      NDA проект
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="bg-card/50 border-border inline-block">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Rocket" className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Готовы начать свой проект?</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Расскажите о вашей идее, и мы поможем воплотить её в жизнь
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/become-client">
                      <Icon name="FileText" className="mr-2" size={20} />
                      Заполнить анкету
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://t.me/scalper_io_public" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" className="mr-2" size={20} />
                      Написать в Telegram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;