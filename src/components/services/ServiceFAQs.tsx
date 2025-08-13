import React from 'react';
import { Service } from '@/types/services.types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ServiceFAQsProps {
  service: Service;
}

const ServiceFAQs: React.FC<ServiceFAQsProps> = ({ service }) => {
  if (!service.faqs || service.faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {service.faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`faq-${faq.id}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQs;
