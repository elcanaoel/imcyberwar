import React, { useEffect } from 'react';

const RainAnimation: React.FC = () => {
  useEffect(() => {
    const createRain = () => {
      const rainContainer = document.createElement('div');
      rainContainer.className = 'rain-container';
      document.body.insertBefore(rainContainer, document.body.firstChild);
      
      const isMobile = window.innerWidth <= 768;
      const rainCount = isMobile ? 50 : 100;
      
      for (let i = 0; i < rainCount; i++) {
        const rain = document.createElement('div');
        rain.className = 'rain';
        rain.style.left = Math.random() * 100 + '%';
        rain.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        rain.style.animationDelay = Math.random() * 2 + 's';
        rainContainer.appendChild(rain);
      }
      
      const lightning = document.createElement('div');
      lightning.className = 'lightning';
      document.body.insertBefore(lightning, document.body.firstChild);
      
      const thunderOverlay = document.createElement('div');
      thunderOverlay.className = 'thunder-overlay';
      document.body.insertBefore(thunderOverlay, document.body.firstChild);
      
      setInterval(() => {
        if (Math.random() > 0.7) {
          lightning.style.animation = 'none';
          setTimeout(() => {
            lightning.style.animation = 'flash 0.3s';
          }, 10);
        }
      }, 5000);
    };

    createRain();
  }, []);

  return null;
};

export default RainAnimation;
