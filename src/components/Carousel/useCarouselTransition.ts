import { useState, useEffect } from 'react';

interface CarouselTransitionConfig {
  transitionDuration?: number;
  transitionType?: 'fade' | 'slide' | 'zoom'; // Agregar más tipos de transiciones según sea necesario
  autoplay?: boolean;
  autoplayInterval?: number;
}

const useCarouselTransition = (
  activeIndex: number,
  length: number,
  config: CarouselTransitionConfig = {}
) => {
  const {
    transitionDuration = 500,
    transitionType = 'fade',
    autoplay = false,
    autoplayInterval = 3000,
  } = config;

  const [transitionDirection, setTransitionDirection] = useState('');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (autoplay) {
      timeoutId = setTimeout(() => {
        setTransitionDirection('next');
      }, autoplayInterval);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeIndex, autoplay, autoplayInterval]);

  const nextTransition = () => {
    setTransitionDirection('next');
  };

  const prevTransition = () => {
    setTransitionDirection('prev');
  };

  return { transitionDirection, nextTransition, prevTransition };
};

export default useCarouselTransition;
