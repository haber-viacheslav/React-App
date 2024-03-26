import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      if (event.target instanceof Window) {
        setWidth(event.target.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width <= 480,
    isScreenMd: width < 767,
    isScreenLg: width <= 1279,
  };
};
