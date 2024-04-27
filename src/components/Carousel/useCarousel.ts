import { useState } from 'react';

interface CarouselState {
  activeIndex: number;
  goToIndex: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
}

const useCarousel = (totalItems: number): CarouselState => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToIndex = (index: number) => {
    if (index >= 0 && index < totalItems) {
      setActiveIndex(index);
    }
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
  };

  return {
    activeIndex,
    goToIndex,
    goToNext,
    goToPrev,
  };
};

export default useCarousel;
