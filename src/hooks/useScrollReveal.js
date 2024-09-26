import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (config = {}) => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.scroll-reveal', {
      origin: 'bottom',
      distance: '20px',
      duration: 3000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      ...config
    });

    return () => sr.destroy();
  }, [config]);
};

export default useScrollReveal;