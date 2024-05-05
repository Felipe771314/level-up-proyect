import { CarouselProps, ImageItem } from './types';
import { FC } from 'react';

interface Props extends CarouselProps {
    images: ImageItem[];
}
declare const Carousel: FC<Props>;
export default Carousel;
