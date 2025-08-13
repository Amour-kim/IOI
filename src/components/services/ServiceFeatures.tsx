import React from 'react';
import { Service } from '@/types/services.types';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle2, Zap, Shield, Clock, BarChart2, Users, Code, Smartphone, Server, Palette } from 'lucide-react';

type ServiceFeaturesProps = {
  service: Service;
};

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'performance': BarChart2,
  'sécurité': Shield,
  'rapidité': Clock,
  'scalable': Users,
  'code': Code,
  'mobile': Smartphone,
  'server': Server,
  'design': Palette,
  'default': Zap
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const ServiceFeatures = ({ service }: ServiceFeaturesProps) => {
  // Fonction pour obtenir l'icône en fonction du nom de la caractéristique
  const getFeatureIcon = (feature: string) => {
    const lowerFeature = feature.toLowerCase();
    const iconKey = Object.keys(featureIcons).find(key => 
      lowerFeature.includes(key)
    ) || 'default';
    
    const IconComponent = featureIcons[iconKey] || featureIcons['default'];
    return <IconComponent className="w-5 h-5 text-amber-400" />;
  };

  // Fonction pour regrouper les fonctionnalités en colonnes
  const groupFeatures = (features: string[], columns: number = 2) => {
    const result = [];
    const chunkSize = Math.ceil(features.length / columns);
    
    for (let i = 0; i < features.length; i += chunkSize) {
      result.push(features.slice(i, i + chunkSize));
    }
    
    return result;
  };

  const featureGroups = groupFeatures(service.features || []);
  const hasFeatures = service.features && service.features.length > 0;
  const hasDomains = service.domains && service.domains.length > 0;
  const hasApproaches = service.approaches && service.approaches.length > 0;

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pourquoi choisir notre service <span className="text-amber-400">{service.title}</span> ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto my-4 rounded-full" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez les avantages et fonctionnalités qui font la différence
          </p>
        </motion.div>

        {/* Grille de fonctionnalités */}
        {hasFeatures && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {service.features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={item}
              >
                <Card className="h-full bg-gray-900/50 border-gray-800 group-hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                        {getFeatureIcon(feature)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {feature}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Solution optimisée pour répondre à vos besoins spécifiques
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Approches et méthodologies */}
        {hasApproaches && (
          <div className="mt-20">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Notre approche
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Une méthodologie éprouvée pour des résultats exceptionnels
              </p>
            </motion.div>

            <div className="relative">
              {/* Ligne de progression */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400/20 to-orange-500/20 -ml-px" />
              
              <div className="space-y-12">
                {service.approaches.map((approach, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={approach.id}
                      className={cn(
                        "relative group",
                        isEven ? "md:pr-1/2 md:pl-1/2 md:text-left" : "md:pl-1/2 md:pr-1/2 md:text-right"
                      )}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className={cn(
                        "relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50",
                        "md:w-5/6",
                        isEven ? "md:mr-auto" : "md:ml-auto",
                        "transform transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10"
                      )}>
                        {/* Point sur la timeline */}
                        <div className={cn(
                          "absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-gray-900 z-10",
                          "hidden md:block",
                          isEven ? "-right-2" : "-left-2"
                        )} />
                        
                        <div className="flex items-start">
                          <div className={cn("flex-shrink-0 mr-4", isEven ? "order-first" : "md:order-last md:ml-4")}>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-amber-400">
                              <span className="text-xl font-bold">{index + 1}</span>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">
                              {approach.title}
                            </h4>
                            <p className="text-gray-300 mb-3">
                              {approach.description}
                            </p>
                            
                            {approach.steps && approach.steps.length > 0 && (
                              <ul className="space-y-2 mt-3">
                                {approach.steps.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-start">
                                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">{step}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Section CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/patterns/grid-pattern.svg')] opacity-10" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Prêt à démarrer avec {service.title} ?
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/20"
                >
                  Parler à un expert
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
