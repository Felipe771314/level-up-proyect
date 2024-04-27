import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { ImageItem } from '../../src/components/Carousel/types';

const images: ImageItem[] = [
  {
    src: 'https://media.istockphoto.com/id/517188688/es/foto/paisaje-de-monta%C3%B1a.jpg?s=612x612&w=0&k=20&c=EnSd5sJdxih_svZHscQ5Hfzr3RSOdXO9MpdmKK4CMTs=',
    title: 'Paisaje de montaña',
    description: 'Una hermosa vista de las montañas'
  },
  {
    src: 'https://content.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg',
    title: 'Playa de Isuntza',
    description: 'Una playa tranquila y hermosa'
  }
];

function Home() {
  return (
    <Carousel images={images} items={[]} />
  );
}

export default Home;
