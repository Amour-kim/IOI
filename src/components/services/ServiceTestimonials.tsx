import React from 'react';
import { Service } from '@/types/services.types';
import { motion, Variants } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

type ServiceTestimonialsProps = {
  service: Service;
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <Star 
      key={i} 
      className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-600'}`} 
    />
  ));
};

const ServiceTestimonials: React.FC<ServiceTestimonialsProps> = ({ service }) => {
  if (!service.testimonials || service.testimonials.length === 0) return null;

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ce que nos clients <span className="text-amber-400">en pensent</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto my-6 rounded-full" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Dcouvrez les retours de nos clients satisfaits par nos services
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {service.testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="group relative h-full"
              variants={item}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 group-hover:border-amber-500/30 transition-all duration-300">
                <div className="absolute top-6 right-6 text-amber-400/20 group-hover:text-amber-400/30 transition-colors duration-300">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/30">
                      {testimonial.avatar ? (
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-400 text-xl font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">
                    {testimonial.rating}.0/5.0
                  </span>
                </div>
                
                <blockquote className="text-gray-300 italic mb-4">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="text-sm text-gray-400 mt-4 pt-4 border-t border-gray-700/50">
                  <span className="font-medium text-amber-400">Projet :</span>{' '}
                  {testimonial.projectLink ? (
                    <a 
                      href={testimonial.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:text-amber-200 transition-colors duration-300"
                    >
                      Voir le projet
                    </a>
                  ) : (
                    <span>Non spcifi</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <span className="text-amber-300 font-medium">
              Vous souhaitez partager votre exprience ?{' '}
              <a 
                href="/temoignage" 
                className="text-white hover:text-amber-300 transition-colors duration-300 underline underline-offset-4"
              >
                Laissez un avis
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;