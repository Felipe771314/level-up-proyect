import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel Component', () => {
  const items = [
    { text: 'Item 1', src: 'url_de_la_imagen_1', content: <img src="url_de_la_imagen_1" alt="Item 1" /> },
    { text: 'Item 2', src: 'url_de_la_imagen_2', content: <img src="url_de_la_imagen_2" alt="Item 2" /> },
    { text: 'Item 3', src: 'url_de_la_imagen_3', content: <img src="url_de_la_imagen_3" alt="Item 3" /> },
  ];

  it('renders correctly', () => {
    const { getByText } = render(<Carousel items={items} images={[]} />);
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByText('Item 3')).toBeInTheDocument();
  });

  it('navigates to the next and previous items correctly', () => {
    const { getByText, getByTestId } = render(<Carousel items={items} images={[]} />);
    const nextButton = getByText('Next');
    const prevButton = getByText('Previous');
    const carouselContent = getByTestId('carousel-content');

    // Initial state
    expect(carouselContent.children[0]).toHaveTextContent('Item 1');

    // Navigate to next item
    fireEvent.click(nextButton);
    expect(carouselContent.children[1]).toHaveTextContent('Item 2');

    // Navigate to previous item
    fireEvent.click(prevButton);
    expect(carouselContent.children[0]).toHaveTextContent('Item 1');
  });
});
