import { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const teamStats = [
  { count: '20+', role: 'Backend разработчиков', icon: 'Server' },
  { count: '15+', role: 'Frontend разработчиков', icon: 'Code2' },
  { count: '8+', role: 'UI/UX дизайнеров', icon: 'Palette' },
  { count: '10+', role: 'AI/ML инженеров', icon: 'BrainCircuit' }
];

const TeamSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="team" className="scroll-mt-20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Наша команда</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Более 50 специалистов готовы работать над вашим проектом
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamStats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name={stat.icon as any} className="text-primary" size={32} />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-3">{stat.count}</div>
                <div className="text-base sm:text-lg text-muted-foreground">{stat.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;