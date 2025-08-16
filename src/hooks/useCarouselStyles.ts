import { useEffect, useRef, useCallback } from 'react';

export function useCarouselStyles(currentIndex: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Update slide position and container height
  const updateCarousel = useCallback(() => {
    if (!containerRef.current) return;
    
    // Update current index CSS variable for transform
    containerRef.current.style.setProperty('--current-index', currentIndex.toString());
    
    // Get all slides
    slidesRef.current = containerRef.current.querySelectorAll<HTMLElement>('[data-slide]');
    
    if (slidesRef.current && currentIndex < slidesRef.current.length) {
      // Update container height based on the current slide
      const currentSlide = slidesRef.current[currentIndex];
      if (currentSlide) {
        containerRef.current.style.height = `${currentSlide.scrollHeight}px`;
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    updateCarousel();
    
    // Set up resize observer to handle window resizing
    if (typeof window !== 'undefined') {
      resizeObserverRef.current = new ResizeObserver(updateCarousel);
      
      if (containerRef.current) {
        resizeObserverRef.current.observe(containerRef.current);
      }
      
      window.addEventListener('resize', updateCarousel);
    }

    return () => {
      if (resizeObserverRef.current && containerRef.current) {
        resizeObserverRef.current.unobserve(containerRef.current);
      }
      window.removeEventListener('resize', updateCarousel);
    };
  }, [updateCarousel]);

  return { containerRef };
}
