import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Gamification = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [points, setPoints] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [animations, setAnimations] = useState<string[]>([]);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    // Не загружаем из localStorage - всё сбрасывается при перезагрузке
    setPoints(0);
    setAchievements([]);
    setClickCount(0);
    setAnimations([]);
  }, []);

  // Удалены useEffect для сохранения в localStorage

  const getAnimationForLevel = (level: number): string => {
    const emojis = ['🚀', '🚗', '✈️', '🚤', '🚁', '🚂', '🚜', '🏍️', '🚲', '⛵', '🚁', '🚟', '🚚', '🚑', '🚒'];
    return emojis[(level - 1) % emojis.length];
  };

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    setPoints(points + 10);
    setShowReward(true);
    setTimeout(() => setShowReward(false), 2000);

    if (newClickCount % 10 === 0) {
      const level = newClickCount / 10;
      const animationKey = `level${level}`;
      
      if (!animations.includes(animationKey)) {
        setAnimations([...animations, animationKey]);
        setAchievements([...achievements, animationKey]);
        const emoji = getAnimationForLevel(level);
        alert(`${emoji} Вознаграждение уровня ${level} разблокировано! ${newClickCount} кликов!`);
      }
    }
  };

  const handleReset = () => {
    setPoints(0);
    setAchievements([]);
    setClickCount(0);
    setAnimations([]);
  };

  if (!isDesktop) return null;

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
              <p className="text-xs text-muted-foreground mb-1">Достижения: {achievements.length}</p>
              <div className="flex gap-1 flex-wrap max-h-20 overflow-y-auto">
                {achievements.map((achievement, index) => {
                  const level = parseInt(achievement.replace('level', ''));
                  const emoji = getAnimationForLevel(level);
                  return (
                    <div 
                      key={achievement} 
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm" 
                      title={`Уровень ${level}`}
                    >
                      {emoji}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Анимации-вознаграждения */}
      {animations.map((animation, index) => {
        const level = parseInt(animation.replace('level', ''));
        const emoji = getAnimationForLevel(level);
        
        // 15 уникальных путей анимации
        const paths = [
          { class: 'animate-path-1', style: 'top: 20%; left: 0;' },
          { class: 'animate-path-2', style: 'top: 35%; left: 0;' },
          { class: 'animate-path-3', style: 'top: 50%; left: 0;' },
          { class: 'animate-path-4', style: 'top: 65%; left: 0;' },
          { class: 'animate-path-5', style: 'top: 25%; left: 0;' },
          { class: 'animate-path-6', style: 'top: 40%; left: 0;' },
          { class: 'animate-path-7', style: 'top: 55%; left: 0;' },
          { class: 'animate-path-8', style: 'top: 30%; left: 0;' },
          { class: 'animate-path-9', style: 'top: 45%; left: 0;' },
          { class: 'animate-path-10', style: 'top: 60%; left: 0;' },
          { class: 'animate-path-11', style: 'top: 22%; left: 0;' },
          { class: 'animate-path-12', style: 'top: 38%; left: 0;' },
          { class: 'animate-path-13', style: 'top: 52%; left: 0;' },
          { class: 'animate-path-14', style: 'top: 68%; left: 0;' },
          { class: 'animate-path-15', style: 'top: 42%; left: 0;' },
        ];
        
        const pathIndex = (level - 1) % paths.length;
        const path = paths[pathIndex];
        
        return (
          <div key={animation} className="fixed w-full h-full pointer-events-none z-40 overflow-hidden" style={{ top: 0, left: 0 }}>
            <div className={`${path.class} text-6xl absolute`} style={{ animationDelay: `${index * 1.5}s` }}>
              {emoji}
            </div>
          </div>
        );
      })
    </div>
  );
};

export default Gamification;