"use client";

import { Service, ServiceImage } from '@/types/services.types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceHeader.module.css';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ServiceHeaderProps {
  service: Service;
  primaryCta?: string;
  secondaryCta?: string;
}

const ServiceHeader = ({ 
  service, 
  primaryCta = 'Demander un devis',
  secondaryCta = 'Nous contacter' 
}: ServiceHeaderProps) => {
  const getImageSrc = (img: string | ServiceImage): string => {
    return typeof img === 'string' ? img : img.src;
  };

  const getImageAlt = (img: string | ServiceImage, fallback: string): string => {
    return typeof img === 'string' ? fallback : (img.alt || fallback);
  };

  // Generate a unique class name based on the image URL
  const backgroundImageClass = service.image 
    ? `${styles['service-header__background']} ${styles['has-background']} ${styles[`bg-${getImageSrc(service.image).replace(/[^a-z0-9]/gi, '-').toLowerCase()}`]}`
    : styles['service-header__background'];

  // Build slides from gallery or fallback to single image
  const slides = useMemo(() => {
    const gallery = service.gallery ?? [];
    const normalized = gallery.map((g, idx) => {
      if (typeof g === 'string') {
        return { src: g, alt: `${service.title} - visuel ${idx + 1}` };
      }
      return { src: g.src, alt: g.alt || `${service.title} - visuel ${idx + 1}` };
    });
    // If no gallery, fallback to main image
    if (normalized.length === 0 && service.image) {
      return [{ src: getImageSrc(service.image), alt: getImageAlt(service.image, service.title) }];
    }
    return normalized;
  }, [service.gallery, service.image, service.title]);

  // Carousel state
  const [index, setIndex] = useState(0);
  const [transitionIdx, setTransitionIdx] = useState(0);

  const transitions = useMemo(
    () => [
      {
        key: 'fade',
        variants: {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        }
      },
      {
        key: 'slide-left',
        variants: {
          initial: { x: 50, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -50, opacity: 0 }
        }
      },
      {
        key: 'slide-up',
        variants: {
          initial: { y: 30, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -30, opacity: 0 }
        }
      },
      {
        key: 'zoom-in',
        variants: {
          initial: { scale: 0.96, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 1.02, opacity: 0 }
        }
      }
    ],
    []
  );

  // Auto-play effect
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setTransitionIdx((prev) => (prev + 1) % transitions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, transitions.length]);

  return (
    <section className={styles['service-header']}>
      {/* Background Image */}
      <div className={backgroundImageClass}>
        {service.image && (
          <div 
            className={styles['service-header__image']}
            aria-hidden="true"
          />
        )}
        <div className={styles['service-header__overlay']}></div>
      </div>
      
      {/* Content */}
      <div className={styles['service-header__content']}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className={styles['service-header__title']}>
              {service.title}
            </h1>
            <p className={styles['service-header__description']}>
              {service.shortDescription}
            </p>
            
            {/* Tags */}
            {service.tags && service.tags.length > 0 && (
              <div className={styles['service-header__tags']}>
                {service.tags.slice(0, 6).map((tag: string, i: number) => (
                  <span key={i} className={styles['service-header__tag']}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className={styles['service-header__cta']}>
              <Link 
                href="/contact" 
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                {primaryCta}
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact" 
                className="border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-center"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
          
          {/* Carousel */}
          <div className="flex-1 flex items-center justify-center relative min-h-[400px] w-full">
            <div className="relative w-full h-full max-w-md">
              <div className="relative w-full h-full rounded-xl shadow-2xl border-4 border-white/20 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${index}-${transitions[transitionIdx].key}`}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitions[transitionIdx].variants as any}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    {slides.length > 0 && (
                      <Image
                        src={slides[index].src}
                        alt={slides[index].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
                {/* Decorative blobs */}
                <div 
                  className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                  aria-hidden="true"
                />
                <div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
