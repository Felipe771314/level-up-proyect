import React, { FC } from 'react';
import useCarousel from './useCarousel';
import useCarouselTransition from './useCarouselTransition';
import { CarouselProps, CarouselItem, Breakpoints, ImageItem } from './types';
import './carousel.css';
import { Container } from 'react-bootstrap';

interface Props extends CarouselProps {
  images: ImageItem[];
}

const Carousel: FC<Props> = ({ images }) => {
  const { activeIndex, goToNext, goToPrev } = useCarousel(images.length);
  const { transitionDirection, nextTransition, prevTransition } = useCarouselTransition(activeIndex, images.length, {
    transitionDuration: 500,
    transitionType: 'zoom',
  });

  const handlePrev = () => {
    prevTransition();
    goToPrev();
  };

  const handleNext = () => {
    nextTransition();
    goToNext();
  };

  return (
    <Container fluid className="p-0 carousel-container">
      <div className="carousel">
        <div className="carousel-content">
          {images.map((item, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <div className="carousel-overlay">
                {item.title && <h2 className="carousel-title">{item.title}</h2>}
                {item.description && <p className="carousel-description">{item.description}</p>}
                <div className="carousel-controls">
                  <button className="control-btn prev-btn" onClick={handlePrev}>Previous</button>
                  <button className="control-btn next-btn" onClick={handleNext}>Next</button>
                </div>
              </div>
              <img src={item.src} alt={`Slide ${index + 1}: ${item.title}`} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
