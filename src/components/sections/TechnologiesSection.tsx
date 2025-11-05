import { forwardRef } from 'react';
import Icon from '@/components/ui/icon';

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
  { name: 'Kubernetes', icon: 'Box' },
  { name: 'Vue.js', icon: 'Code2' },
  { name: 'Angular', icon: 'Triangle' },
  { name: 'Django', icon: 'Server' },
  { name: 'FastAPI', icon: 'Zap' },
  { name: 'MongoDB', icon: 'Database' },
  { name: 'Redis', icon: 'Gauge' },
  { name: 'GraphQL', icon: 'Share2' },
  { name: 'REST API', icon: 'Plug' },
  { name: 'Git', icon: 'GitBranch' },
  { name: 'GitHub Actions', icon: 'GitPullRequest' },
  { name: 'Jenkins', icon: 'Settings' },
  { name: 'Terraform', icon: 'Boxes' },
  { name: 'Ansible', icon: 'Cog' },
  { name: 'Nginx', icon: 'Globe' },
  { name: 'RabbitMQ', icon: 'MessageSquare' },
  { name: 'Kafka', icon: 'Radio' },
  { name: 'Elasticsearch', icon: 'Search' },
  { name: 'Prometheus', icon: 'Activity' },
  { name: 'Grafana', icon: 'BarChart3' },
  { name: 'Sentry', icon: 'Bug' },
  { name: 'Stripe', icon: 'CreditCard' },
  { name: 'Firebase', icon: 'Flame' },
  { name: 'Supabase', icon: 'Layers' },
  { name: 'Vercel', icon: 'Triangle' },
  { name: 'Netlify', icon: 'Globe' },
  { name: 'DigitalOcean', icon: 'Cloud' },
  { name: 'Azure', icon: 'Cloud' },
  { name: 'Google Cloud', icon: 'Cloud' }
];

const TechnologiesSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="tech" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Технологии</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Используем современный стек для создания надежных решений
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Первая рулетка - слева направо */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 min-w-[140px]"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name={tech.icon as any} className="text-primary" size={28} />
                    </div>
                    <span className="text-sm font-medium text-center whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>

          {/* Вторая рулетка - справа налево */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex gap-6 animate-scroll-reverse">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div 
                    key={`reverse-${index}`}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 min-w-[140px]"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name={tech.icon as any} className="text-primary" size={28} />
                    </div>
                    <span className="text-sm font-medium text-center whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Наведите курсор, чтобы остановить прокрутку
          </p>
        </div>
      </div>
    </section>
  );
});

TechnologiesSection.displayName = 'TechnologiesSection';

export default TechnologiesSection;