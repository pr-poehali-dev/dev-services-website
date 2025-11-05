import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Gamification = () => {
  const [points, setPoints] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const savedPoints = localStorage.getItem('userPoints');
    const savedAchievements = localStorage.getItem('userAchievements');
    if (savedPoints) setPoints(parseInt(savedPoints));
    if (savedAchievements) setAchievements(JSON.parse(savedAchievements));
  }, []);

  useEffect(() => {
    localStorage.setItem('userPoints', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('userAchievements', JSON.stringify(achievements));
  }, [achievements]);

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    setPoints(points + 10);
    setShowReward(true);
    setTimeout(() => setShowReward(false), 2000);

    if (newClickCount === 5 && !achievements.includes('explorer')) {
      setAchievements([...achievements, 'explorer']);
      alert('🎉 Достижение разблокировано: Исследователь! Вы кликнули 5 раз!');
    }
    if (newClickCount === 20 && !achievements.includes('enthusiast')) {
      setAchievements([...achievements, 'enthusiast']);
      alert('🏆 Достижение разблокировано: Энтузиаст! Вы кликнули 20 раз!');
    }
  };

  const handleReset = () => {
    setPoints(0);
    setAchievements([]);
    setClickCount(0);
    localStorage.removeItem('userPoints');
    localStorage.removeItem('userAchievements');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {showReward && (
          <div className="animate-fade-in bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
            +10 баллов! 🎯
          </div>
        )}
        
        <div className="bg-card border-2 border-primary/30 rounded-2xl shadow-2xl p-4 min-w-[200px]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" className="text-primary" size={20} />
              <span className="font-bold text-lg">{points}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleReset}
              className="h-6 w-6"
            >
              <Icon name="RotateCcw" size={14} />
            </Button>
          </div>

          <Button 
            onClick={handleClick}
            className="w-full mb-3"
            size="sm"
          >
            <Icon name="Rocket" size={16} className="mr-2" />
            Получить баллы
          </Button>

          {achievements.length > 0 && (
            <div className="space-y-1 pt-2 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-1">Достижения:</p>
              <div className="flex gap-1">
                {achievements.includes('explorer') && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center" title="Исследователь">
                    <Icon name="Compass" size={16} className="text-primary" />
                  </div>
                )}
                {achievements.includes('enthusiast') && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center" title="Энтузиаст">
                    <Icon name="Star" size={16} className="text-primary" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gamification;
