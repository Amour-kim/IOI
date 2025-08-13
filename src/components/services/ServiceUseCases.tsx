import React from 'react';
import { Service } from '@/types/services.types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Monitor, Smartphone, Code, Globe, Server, Shield, Lock, Cpu, Database, 
  Users, Briefcase, Layout, Terminal, ShoppingCart, BarChart2, 
  MessageSquare, Clock, TrendingUp, Award, Brain, Zap, Settings, Wrench, 
  EyeOff, Cloud, Paintbrush, GraduationCap, Heart
} from 'lucide-react';

interface ServiceUseCasesProps {
  service: Service;
}

const ServiceUseCases: React.FC<ServiceUseCasesProps> = ({ service }) => {
  if (!service.useCases || service.useCases.length === 0) {
    return null;
  }

  // Grouper les cas d'utilisation par industrie
  const groupedUseCases = service.useCases.reduce((acc, useCase) => {
    const category = (useCase.industries && useCase.industries.length > 0) 
      ? useCase.industries[0] 
      : 'Général';
      
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(useCase);
    return acc;
  }, {} as Record<string, typeof service.useCases>);

  // Mapper les noms d'icônes aux composants d'icônes
  const getIconComponent = (iconName?: string | React.ComponentType<any>) => {
    if (!iconName) return null;
    
    // Si c'est déjà un composant React
    if (typeof iconName !== 'string') {
      const IconComponent = iconName as React.ComponentType<any>;
      return <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-300" />;
    }
    
    // Mapper les noms d'icônes aux composants
    const iconMap: Record<string, React.ComponentType<any>> = {
      'Monitor': Monitor,
      'Smartphone': Smartphone,
      'Code': Code,
      'Globe': Globe,
      'Server': Server,
      'Shield': Shield,
      'Lock': Lock,
      'Cpu': Cpu,
      'Database': Database,
      'Users': Users,
      'Briefcase': Briefcase,
      'Layout': Layout,
      'Terminal': Terminal,
      'ShoppingCart': ShoppingCart,
      'BarChart2': BarChart2,
      'MessageSquare': MessageSquare,
      'Clock': Clock,
      'TrendingUp': TrendingUp,
      'Award': Award,
      'Brain': Brain,
      'Zap': Zap,
      'Settings': Settings,
      'Wrench': Wrench,
      'EyeOff': EyeOff,
      'Cloud': Cloud,
      'Paintbrush': Paintbrush,
      'GraduationCap': GraduationCap,
      'Heart': Heart
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-300" />
    ) : (
      <div className="w-6 h-6 flex items-center justify-center text-blue-600 dark:text-blue-300">
        {iconName.charAt(0).toUpperCase()}
      </div>
    );
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cas d'utilisation
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {service.useCases.map((useCase) => (
            <motion.div
              key={useCase.id}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.9rem)] xl:w-[calc(25%-0.9rem)]"
            >
                      <Card className="h-full flex flex-col border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all overflow-hidden group">
                        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700"></div>
                        <CardHeader className="pb-3">
                          <div className="flex items-start space-x-3">
                            <div className="p-2.5 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                              {getIconComponent(useCase.icon)}
                            </div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">
                              {useCase.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {useCase.description}
                          </p>
                          
                          {useCase.benefits && useCase.benefits.length > 0 && (
                            <div className="mt-4 space-y-2">
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                Avantages clés
                              </h4>
                              <ul className="space-y-2 mt-2">
                                {useCase.benefits.slice(0, 3).map((benefit, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <svg className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {useCase.industries && useCase.industries.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                              <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                Industries concernées
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {useCase.industries.slice(0, 3).map((industry, idx) => (
                                  <span 
                                    key={idx} 
                                    className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/50"
                                  >
                                    {industry}
                                  </span>
                                ))}
                                {useCase.industries.length > 3 && (
                                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
                                    +{useCase.industries.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ServiceUseCases;
