import { Service, ServiceImage } from '@/types/services.types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceHeader.module.css';

interface ServiceHeaderProps {
  service: {
    title: string;
    shortDescription: string;
    tags?: string[];
    image: string | ServiceImage;
  };
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
          
          {/* Image */}
          <div className="flex-1 flex items-center justify-center relative min-h-[400px] w-full">
            <div className="relative w-full h-full max-w-md">
              {service.image && (
                <div className="relative w-full h-full rounded-xl shadow-2xl border-4 border-white/20 overflow-hidden">
                  <Image
                    src={getImageSrc(service.image)}
                    alt={getImageAlt(service.image, service.title)}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div 
                    className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                    aria-hidden="true"
                  />
                  <div 
                    className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
