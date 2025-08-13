import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/types/services.types';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ServicePricingProps {
  service: Service;
}

const ServicePricing: React.FC<ServicePricingProps> = ({ service }) => {
  if (!service.pricingTiers || service.pricingTiers.length === 0) {
    return null;
  }

  // Trier les forfaits par ordre de prix croissant
  const sortedTiers = [...service.pricingTiers].sort((a, b) => {
    const priceA = typeof a.price === 'string' ? parseFloat(a.price) : a.price;
    const priceB = typeof b.price === 'string' ? parseFloat(b.price) : b.price;
    return priceA - priceB;
  });
  
  // Trouver les fonctionnalités uniques à travers tous les forfaits
  const allFeatures = new Set<string>();
  service.pricingTiers.forEach(tier => {
    tier.features?.forEach(feature => allFeatures.add(feature));
  });
  const uniqueFeatures = Array.from(allFeatures);

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mb-3">
            Tarification
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Nos offres tarifaires
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
            Choisissez la formule adaptée à vos besoins
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {sortedTiers.map((tier) => (
            <motion.div 
              key={tier.id}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`relative w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.9rem)] xl:w-[calc(25%-1rem)] rounded-xl overflow-hidden transition-all duration-300 ${
                tier.isPopular 
                  ? 'ring-2 ring-blue-500 shadow-lg dark:shadow-blue-900/20' 
                  : 'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 transform translate-x-2 translate-y-2 rotate-12">
                  POPULAIRE
                </div>
              )}
              
              <div className="p-5">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {tier.description}
                  </p>
                </div>
                
                <div className="mb-5">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                      {tier.price === 0 ? 'Sur devis' : `${tier.price}€`}
                    </span>
                    {tier.period && (
                      <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                        /{tier.period === 'month' ? 'mois' : tier.period === 'year' ? 'an' : tier.period}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  className={`w-full mb-4 ${
                    tier.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700'
                  }`}
                >
                  Choisir cette offre
                </Button>

                <div className="space-y-3 text-sm">
                  {uniqueFeatures.slice(0, 5).map((feature, idx) => {
                    const isIncluded = tier.features?.includes(feature);
                    return (
                      <div key={idx} className="flex items-start">
                        {isIncluded ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-4 w-4 text-gray-300 dark:text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`${isIncluded ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                  {uniqueFeatures.length > 5 && (
                    <div className="text-center text-blue-600 dark:text-blue-400 text-xs mt-2">
                      +{uniqueFeatures.length - 5} fonctionnalités
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {service.hasFreeTier && service.freeTierDescription && (
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Essai gratuit :</span> {service.freeTierDescription}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicePricing;
