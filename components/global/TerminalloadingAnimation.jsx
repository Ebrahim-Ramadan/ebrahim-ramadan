// TerminalloadingAnimation.js
import React, { useState, useEffect } from 'react';

const TerminalloadingAnimation = () => {
  const [loadingAnimation, setLoadingAnimation] = useState('|');

  useEffect(() => {
    const animationCharacters = ['|', '/', '-'];

    const updateLoadingAnimation = () => {
      setLoadingAnimation((prevChar) => {
        const currentIndex = animationCharacters.indexOf(prevChar);
        const nextIndex = (currentIndex + 1) % animationCharacters.length;
        return animationCharacters[nextIndex];
      });
    };

    const animationInterval = setInterval(updateLoadingAnimation, 250);

    return () => clearInterval(animationInterval);
  }, []);

  return <span>{loadingAnimation}</span>;
};

export default TerminalloadingAnimation;
