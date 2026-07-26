import React, { useState, useEffect } from 'react';

interface LoaderProps {
  fadeOut?: boolean;
}

const TypewriterText: React.FC<{ text: string; delay?: number; speed?: number; className?: string }> = ({ text, delay = 0, speed = 50, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout;

    const startTyping = () => {
      timer = setInterval(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
        if (index >= text.length) {
          setIsDone(true);
          clearInterval(timer);
        }
      }, speed);
    };

    const delayTimer = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [text, delay, speed]);

  return (
    <p className={className}>
      {displayText}
      {!isDone && <span className="animate-pulse text-[#C5A028] ml-0.5">|</span>}
    </p>
  );
};

const Loader: React.FC<LoaderProps> = ({ fadeOut = false }) => {
  const [word, setWord] = useState('');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setWord('Lights...'), 800);
    const t2 = setTimeout(() => setWord('Camera...'), 2000);
    const t3 = setTimeout(() => setWord('Action!'), 3200);
    const t4 = setTimeout(() => {
      setWord('');
      setShowLogo(true);
    }, 4400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1838] transition-opacity duration-500 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {!showLogo && (
          <>
            <div className="jelly" />
            <svg width={0} height={0} className="jelly-maker">
              <defs>
                <filter id="uib-jelly-ooze">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6.25" result="blur" />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="ooze"
                  />
                  <feBlend in="SourceGraphic" in2="ooze" />
                </filter>
              </defs>
            </svg>
          </>
        )}
        
        {showLogo && (
          <div className="animate-fade-in flex flex-col items-center gap-4">
            <img 
              src="/Horizontal-Main-Logo.png" 
              alt="Seed Pictures Logo" 
              className="h-14 md:h-16 w-auto object-contain"
            />
            <TypewriterText 
              text="Stories at the heart of community" 
              delay={350} 
              speed={30} 
              className="text-white/80 text-xs uppercase tracking-[0.25em] font-semibold min-h-[16px]"
            />
          </div>
        )}

        {!showLogo && (
          <div className="min-h-[28px] flex items-center justify-center">
            {word && (
              <span
                key={word}
                className="font-display text-base uppercase tracking-[0.25em] text-[#C5A028] font-bold animate-fade-in block"
              >
                {word}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
