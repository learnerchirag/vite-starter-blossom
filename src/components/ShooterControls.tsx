import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Zap, X, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface ShooterControlsProps {
  onShot: (quotient: number) => void;
  quotientOptions: number[];
  gameStatus: 'playing' | 'won' | 'lost';
  customQuotient: string;
  setCustomQuotient: React.Dispatch<React.SetStateAction<string>>;
  showCustomInput: boolean;
  setShowCustomInput: React.Dispatch<React.SetStateAction<boolean>>;
  divisor: number;
}

const ShooterControls: React.FC<ShooterControlsProps> = ({
  onShot,
  quotientOptions,
  gameStatus,
  customQuotient,
  setCustomQuotient,
  showCustomInput,
  setShowCustomInput,
  divisor
}) => {
  const [activeShooter, setActiveShooter] = useState<number | null>(null);
  const [firingBarrel, setFiringBarrel] = useState<number | null>(null);
  const [musicOn, setMusicOn] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (showCustomInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showCustomInput]);
  
  const fireBarrel = (barrelIndex: number) => {
    setFiringBarrel(barrelIndex);
    setTimeout(() => setFiringBarrel(null), 500);
    soundManager.playSound('shoot');
  };
  
  const handlePresetShot = (quotient: number) => {
    setActiveShooter(quotient);
    
    // Randomly select a barrel to fire
    const randomBarrel = Math.floor(Math.random() * divisor);
    fireBarrel(randomBarrel);
    
    setTimeout(() => {
      onShot(quotient);
      setActiveShooter(null);
    }, 300);
  };
  
  const handleCustomShot = () => {
    if (customQuotient && !isNaN(parseInt(customQuotient))) {
      // Randomly select a barrel to fire
      const randomBarrel = Math.floor(Math.random() * divisor);
      fireBarrel(randomBarrel);
      
      onShot(parseInt(customQuotient));
      setCustomQuotient("");
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCustomShot();
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomQuotient(value);
    }
  };
  
  const toggleMusic = () => {
    const isPlaying = soundManager.toggleBackgroundMusic();
    setMusicOn(isPlaying);
  };
  
  return (
    <div className="cyber-panel p-4 max-w-md mx-auto">
      <div className="mb-2 text-center flex justify-between items-center">
        <h3 className="text-lg font-bold cyber-text">SHOOTER CONTROLS</h3>
        <button
          onClick={toggleMusic}
          className="cyber-button rounded-full w-10 h-10 flex items-center justify-center p-0 bg-transparent hover:bg-cyber-core/20"
        >
          {musicOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>
      
      {/* Main control area with grid layout */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Left column - Barrel visualization */}
        <div className="relative h-full flex items-center border border-cyber-core/30 rounded-md p-2">
          <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-20"></div>
          <div className="relative z-10 w-full flex flex-col gap-4">
            {Array(divisor).fill(0).map((_, i) => (
              <div key={i} className="h-12 flex items-center">
                <div className={`w-16 h-8 bg-cyber-accent/70 rounded-r-sm relative 
                  ${firingBarrel === i ? 'barrel-fire' : ''}`}>
                  <div className="absolute top-0 bottom-0 right-0 w-2 bg-cyber-accent rounded-r-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right column - Quotient buttons */}
        <div className="grid grid-rows-3 gap-4">
          {quotientOptions.map((option) => (
            <button
              key={option}
              onClick={() => gameStatus === 'playing' && handlePresetShot(option)}
              disabled={gameStatus !== 'playing'}
              className={`cyber-button rounded-full w-16 h-16 mx-auto flex items-center justify-center
                       ${activeShooter === option ? 'animate-shoot' : ''}`}
            >
              <span className="text-xl font-bold">{option}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Custom quotient control */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => gameStatus === 'playing' && setShowCustomInput(!showCustomInput)}
          disabled={gameStatus !== 'playing'}
          className="cyber-button rounded-full w-12 h-12 flex items-center justify-center"
        >
          {showCustomInput ? <X size={18} /> : <Zap size={18} />}
        </button>
        
        <div className={`flex-1 overflow-hidden transition-all duration-300 ${showCustomInput ? 'max-h-14 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={customQuotient}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Custom quotient"
              className="flex-1 bg-cyber-dark border border-cyber-core/30 text-white p-2 rounded-md"
              disabled={gameStatus !== 'playing'}
            />
            <button
              onClick={handleCustomShot}
              disabled={!customQuotient || gameStatus !== 'playing'}
              className="cyber-button px-3"
            >
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShooterControls;
