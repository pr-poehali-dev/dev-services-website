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
  { name: 'Kubernetes', icon: 'Box' }
];

const TechnologiesSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="tech" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Технологии</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Используем современный стек для создания надежных решений
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name={tech.icon as any} className="text-primary" size={24} />
              </div>
              <span className="text-sm sm:text-base font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TechnologiesSection.displayName = 'TechnologiesSection';

export default TechnologiesSection;
