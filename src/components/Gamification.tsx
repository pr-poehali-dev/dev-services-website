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
    localStorage.removeItem('userPoints');
    localStorage.removeItem('userAchievements');
    localStorage.removeItem('clickCount');
    localStorage.removeItem('animations');
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
        const animationType = index % 3 === 0 ? 'animate-fly-diagonal' : index % 3 === 1 ? 'animate-drive' : 'animate-fly';
        const position = index % 3 === 0 ? 'top-0' : index % 3 === 1 ? 'bottom-0' : 'top-10';
        
        return (
          <div key={animation} className={`fixed ${position} left-0 w-full h-full pointer-events-none z-40 overflow-hidden`}>
            <div className={`${animationType} text-6xl`} style={{ animationDelay: `${index * 2}s` }}>
              {emoji}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gamification;