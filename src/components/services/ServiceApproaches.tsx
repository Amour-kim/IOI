import React from 'react';
import { Service } from '@/types/services.types';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code, Lightbulb, Settings, BarChart, Users, Zap, Clock, CheckCircle2 } from 'lucide-react';

type ServiceApproachesProps = {
  service: Service;
};

const approachIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'développement': Code,
  'conception': Lightbulb,
  'configuration': Settings,
  'analyse': BarChart,
  'équipe': Users,
  'rapidité': Clock,
  'default': Zap
};

const container: Variants = {
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

const ServiceApproaches: React.FC<ServiceApproachesProps> = ({ service }) => {
  if (!service.approaches || service.approaches.length === 0) return null;

  const getApproachIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    const iconKey = Object.keys(approachIcons).find(key => 
      lowerTitle.includes(key)
    ) || 'default';
    
    const IconComponent = approachIcons[iconKey];
    return <IconComponent className="w-6 h-6 text-amber-400" />;
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/patterns/circuit-board.svg')] opacity-5" />
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
            Notre <span className="text-amber-400">Approche</span> pour {service.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto my-6 rounded-full" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Une méthodologie éprouvée pour des résultats exceptionnels et durables
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {service.approaches.map((approach, index) => (
            <motion.div 
              key={approach.id} 
              className="group relative"
              variants={item}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 group-hover:border-amber-500/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center text-amber-400 mb-4">
                  {getApproachIcon(approach.title)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {approach.description}
                </p>
                
                {approach.steps && approach.steps.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">Étapes clés :</h4>
                    <ul className="space-y-2">
                      {approach.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
            <Zap className="w-5 h-5 text-amber-400 mr-2" />
            <span className="text-amber-300 font-medium">
              Approche flexible et adaptée à vos besoins spécifiques
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceApproaches;
