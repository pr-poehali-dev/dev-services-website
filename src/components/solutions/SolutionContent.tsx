import Icon from '@/components/ui/icon';
import type { SolutionData } from '@/data/solutionsData';

interface SolutionContentProps {
  solution: SolutionData;
}

const SolutionContent = ({ solution }: SolutionContentProps) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
        Описание решения
      </h2>
      <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
        {solution.description}
      </p>

      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Ключевые преимущества
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {solution.benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Check" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
        Возможности системы
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {solution.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm sm:text-base text-foreground/80">{feature}</span>
          </div>
        ))}
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
        Этапы разработки
      </h3>
      <div className="space-y-6">
        {solution.process.map((step) => (
          <div key={step.step} className="flex gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-primary">{step.step}</span>
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionContent;
