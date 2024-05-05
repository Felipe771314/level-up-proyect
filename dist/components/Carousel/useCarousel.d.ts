interface CarouselState {
    activeIndex: number;
    goToIndex: (index: number) => void;
    goToNext: () => void;
    goToPrev: () => void;
}
declare const useCarousel: (totalItems: number) => CarouselState;
export default useCarousel;
