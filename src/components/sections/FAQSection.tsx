import { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Ответы на популярные вопросы о нашей работе
          </p>
        </div>
        
        <Card className="bg-card border-border/50">
          <CardContent className="p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base sm:text-lg">
                  Какие проекты вы реализуете?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Мы специализируемся на разработке веб-приложений, мобильных приложений, 
                  внедрении AI-решений и автоматизации бизнес-процессов. Работаем как с 
                  небольшими стартапами, так и с крупными enterprise-компаниями.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base sm:text-lg">
                  Сколько времени занимает разработка?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Сроки зависят от сложности проекта. MVP можно разработать за 1-2 месяца, 
                  полноценное enterprise-решение — от 3 до 12 месяцев. После первичной 
                  консультации мы предоставим точную оценку для вашего проекта.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base sm:text-lg">
                  Как происходит взаимодействие в процессе работы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Мы работаем по Agile-методологии с еженедельными демонстрациями результатов. 
                  Вы получаете доступ к рабочим инструментам (Jira, Figma, GitHub) и можете 
                  отслеживать прогресс в реальном времени. Общение ведется через удобные для 
                  вас каналы: Telegram, Slack, email или видеозвонки.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base sm:text-lg">
                  Предоставляете ли вы поддержку после запуска?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Да, мы предлагаем несколько вариантов технической поддержки: от базовой 
                  (исправление критических ошибок) до расширенной (включая развитие функционала 
                  и консультации). Условия поддержки обсуждаются индивидуально под ваши потребности.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base sm:text-lg">
                  Можете ли вы работать как субподрядчик?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Да, мы активно работаем в качестве субподрядчика для IT-компаний и digital-агентств. 
                  У нас есть опыт интеграции в существующие команды и процессы разработки. 
                  Можем усилить вашу команду специалистами нужного профиля или взять на себя 
                  отдельные направления разработки.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;
