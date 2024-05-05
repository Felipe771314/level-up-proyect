interface CarouselTransitionConfig {
    transitionDuration?: number;
    transitionType?: 'fade' | 'slide' | 'zoom';
    autoplay?: boolean;
    autoplayInterval?: number;
}
declare const useCarouselTransition: (activeIndex: number, length: number, config?: CarouselTransitionConfig) => {
    transitionDirection: string;
    nextTransition: () => void;
    prevTransition: () => void;
};
export default useCarouselTransition;
