'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCarouselStyles } from '@/hooks/useCarouselStyles';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  }[];
  className?: string;
}

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { containerRef } = useCarouselStyles(currentIndex);

  // Filtrer les images valides
  const validImages = images
    .filter(img => {
      const src = img?.src;
      return src && 
             typeof src === 'string' && 
             src.trim() !== '' &&
             img.alt && 
             img.width > 0 && 
             img.height > 0;
    })
    .map(img => ({
      ...img,
      // Ensure src is a valid URL or path
      src: img.src.startsWith('/') || img.src.startsWith('http') ? img.src : `/${img.src}`
    }));

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === validImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [validImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? validImages.length - 1 : prevIndex - 1
    );
  }, [validImages.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const swipeThreshold = 50;
    const swipeDistance = touchStart - touchEnd;

    if (swipeDistance > swipeThreshold) {
      nextSlide();
    } else if (swipeDistance < -swipeThreshold) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-advance slides if there are multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, nextSlide]);

  if (images.length === 0) return null;

  if (validImages.length === 0) {
    console.warn('No valid images provided to ImageCarousel');
    return null;
  }

  const isSingleImage = validImages.length === 1;

  return (
    <div className={cn(styles.carouselContainer, className, {
      [styles.singleSlide]: isSingleImage
    })}>
      <div 
        ref={containerRef}
        className={styles.slidesContainer}
        onTouchStart={isSingleImage ? undefined : handleTouchStart}
        onTouchMove={isSingleImage ? undefined : handleTouchMove}
        onTouchEnd={isSingleImage ? undefined : handleTouchEnd}
        style={isSingleImage ? { transform: 'none' } : undefined}
      >
        {validImages.map((image, index) => (
          <div 
            key={`${image.src}-${index}`} 
            className={styles.slide}
            data-slide
          >
            <div className={styles.slideContent}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={styles.slideImage}
                priority={index === 0}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
              {image.caption && (
                <div className={styles.caption}>
                  {image.caption}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {!isSingleImage && (
        <>
          <button
            onClick={prevSlide}
            className={cn(styles.navButton, styles.navButtonLeft)}
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className={cn(styles.navButton, styles.navButtonRight)}
            aria-label="Next slide"
          >
            &gt;
          </button>
          
          {/* Dots Navigation */}
          <div className={styles.dotsContainer}>
            {validImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(styles.dot, {
                  [styles.dotActive]: index === currentIndex
                })}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
