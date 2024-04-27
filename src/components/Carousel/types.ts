export interface CarouselItem {
  src: string;
  title?: string;
  description?: string;
  content: JSX.Element;
}

export interface CarouselProps {
  items: CarouselItem[];
}

export interface ImageItem {
  src: string;
  title?: string;
  description?: string;
}


export interface Breakpoints {
  xs?: { count: number; width: number };
  sm?: { count: number; width: number };
  md?: { count: number; width: number };
  lg?: { count: number; width: number };
  xl?: { count: number; width: number };
}

export interface ArrowConfig {
  size: string;
  backgroundColor: string;
  arrowColor: string;
  opacity: number;
}

