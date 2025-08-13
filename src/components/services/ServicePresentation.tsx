import React from 'react';
import { Service } from '@/types/services.types';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

type ServicePresentationProps = {
  service: Service;
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ServicePresentation = ({ service }: ServicePresentationProps) => {
  // Fonction utilitaire pour obtenir l'URL de l'image
  const getImageSrc = (img: string | { src: string; alt?: string; width?: number; height?: number }): string => {
    return typeof img === 'string' ? img : img.src;
  };

  // Fonction utilitaire pour obtenir le texte alternatif de l'image
  const getImageAlt = (img: string | { src: string; alt?: string }, fallback: string): string => {
    return (typeof img === 'object' && img.alt) ? img.alt : fallback;
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95" />
        <div className="absolute inset-0 bg-[url('/images/patterns/grid-pattern.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-400 bg-amber-500/10 rounded-full mb-4">
                {service.type.replace('-', ' ')}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              variants={fadeInUp}
            >
              {service.title}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              {service.fullDescription || service.shortDescription}
            </motion.p>

            {service.features && service.features.length > 0 && (
              <motion.div 
                className="space-y-3 pt-4"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-white">Ce que nous proposons :</h3>
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <motion.div 
                        className="flex items-start w-full"
                        variants={fadeInUp}
                      >
                        <svg className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={fadeInUp}
            >
              {service.ctaText && (
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/20"
                >
                  {service.ctaText}
                </a>
              )}
              
              {service.documentationUrl && (
                <a
                  href={service.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                >
                  Voir la documentation
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            
            {service.image && (
              <Image
                src={getImageSrc(service.image)}
                alt={getImageAlt(service.image, service.title)}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
            
            {/* Badge de statut */}
            {service.status === 'coming-soon' && (
              <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 animate-pulse">
                Bientôt disponible
              </div>
            )}
            
            {service.status === 'beta' && (
              <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                Version Bêta
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicePresentation;
