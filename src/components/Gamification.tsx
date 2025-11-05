import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Gamification = () => {
  const [points, setPoints] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [animations, setAnimations] = useState<string[]>([]);

  useEffect(() => {
    const savedPoints = localStorage.getItem('userPoints');
    const savedAchievements = localStorage.getItem('userAchievements');
    const savedClickCount = localStorage.getItem('clickCount');
    const savedAnimations = localStorage.getItem('animations');
    if (savedPoints) setPoints(parseInt(savedPoints));
    if (savedAchievements) setAchievements(JSON.parse(savedAchievements));
    if (savedClickCount) setClickCount(parseInt(savedClickCount));
    if (savedAnimations) setAnimations(JSON.parse(savedAnimations));
  }, []);

  useEffect(() => {
    localStorage.setItem('userPoints', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('userAchievements', JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    localStorage.setItem('clickCount', clickCount.toString());
  }, [clickCount]);

  useEffect(() => {
    localStorage.setItem('animations', JSON.stringify(animations));
  }, [animations]);

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
    if (newClickCount === 10 && !animations.includes('rocket')) {
      setAnimations([...animations, 'rocket']);
      setAchievements([...achievements, 'rocket10']);
      alert('🚀 Вознаграждение: Летающая ракета разблокирована!');
    }
    if (newClickCount === 20 && !achievements.includes('enthusiast')) {
      setAchievements([...achievements, 'enthusiast']);
      alert('🏆 Достижение разблокировано: Энтузиаст! Вы кликнули 20 раз!');
    }
    if (newClickCount === 50 && !animations.includes('car')) {
      setAnimations([...animations, 'car']);
      setAchievements([...achievements, 'car50']);
      alert('🚗 Вознаграждение: Катающаяся машинка разблокирована!');
    }
    if (newClickCount === 100 && !animations.includes('plane')) {
      setAnimations([...animations, 'plane']);
      setAchievements([...achievements, 'plane100']);
      alert('✈️ Вознаграждение: Летающий самолёт разблокирован!');
    }
  };

  const handleReset = () => {
    setPoints(0);
    setAchievements([]);
    setClickCount(0);
    setAnimations([]);
    localStorage.removeItem('userPoints');
    localStorage.removeItem('userAchievements');
    localStorage.removeItem('clickCount');
    localStorage.removeItem('animations');
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
                {achievements.includes('rocket10') && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center" title="Ракета">
                    <Icon name="Rocket" size={16} className="text-primary" />
                  </div>
                )}
                {achievements.includes('car50') && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center" title="Машинка">
                    <Icon name="Car" size={16} className="text-primary" />
                  </div>
                )}
                {achievements.includes('plane100') && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center" title="Самолёт">
                    <Icon name="Plane" size={16} className="text-primary" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Анимации-вознаграждения */}
      {animations.includes('rocket') && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-hidden">
          <div className="animate-fly-diagonal text-6xl">
            🚀
          </div>
        </div>
      )}
      
      {animations.includes('car') && (
        <div className="fixed bottom-0 left-0 w-full pointer-events-none z-40 overflow-hidden">
          <div className="animate-drive text-6xl">
            🚗
          </div>
        </div>
      )}
      
      {animations.includes('plane') && (
        <div className="fixed top-10 left-0 w-full pointer-events-none z-40 overflow-hidden">
          <div className="animate-fly text-6xl">
            ✈️
          </div>
        </div>
      )}
    </div>
  );
};

export default Gamification;