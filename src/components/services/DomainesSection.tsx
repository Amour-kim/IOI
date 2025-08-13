import { Service } from '@/types/services.types';
import { Globe, Monitor, ShoppingCart, Layout, Smartphone, Code, Server, Shield, Settings, Wrench } from 'lucide-react';
import React from 'react';

interface DomainesSectionProps {
  domains: Service['domains'];
}

// Mappage des icônes par nom
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  ShoppingCart,
  Layout,
  Smartphone,
  Code,
  Server,
  Shield,
  Settings,
  Wrench,
  Globe,
};

// Fonction pour obtenir le composant d'icône par son nom
const getIconComponent = (iconName: string) => {
  const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
  return IconComponent || Globe;
};

export const DomainesSection: React.FC<DomainesSectionProps> = ({ domains }) => {
  if (!domains || domains.length === 0) return null;

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Domaines d'Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain) => {
            const Icon = getIconComponent(domain.icon as string);
            
            return (
              <div 
                key={domain.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 mr-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{domain.name}</h3>
                </div>
                <p className="text-gray-300">{domain.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
