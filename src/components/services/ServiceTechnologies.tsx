import React from 'react';
import { Service } from '@/types/services.types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceTechnologiesProps {
  service: Service;
}

const ServiceTechnologies: React.FC<ServiceTechnologiesProps> = ({ service }) => {
  // Vérifier si des technologies sont disponibles
  if (!service.technologies || service.technologies.length === 0) {
    return null; // Ne rien afficher si aucune technologie n'est définie
  }

  // Fonction utilitaire pour obtenir une icône en fonction du nom de la technologie
  const getTechIcon = (techName: string) => {
    const icons: Record<string, string> = {
      'react': '⚛️',
      'node': '🟢',
      'typescript': '📘',
      'javascript': '📜',
      'nextjs': '⏭️',
      'tailwind': '🎨',
      'graphql': '📊',
      'mongodb': '🍃',
      'postgresql': '🐘',
      'docker': '🐳',
      'aws': '☁️',
      'azure': '🔷',
      'gcp': '☁️',
      'python': '🐍',
      'django': '🎸',
      'flask': '🍶',
      'vue': '🖖',
      'angular': '🅰️',
      'svelte': '✨',
      'nuxt': '🔥',
      'express': '🚀',
      'nestjs': '🪶',
      'mysql': '🐬',
      'redis': '🔴',
      'git': '🐙',
      'github': '🐙',
      'gitlab': '🦊',
      'jenkins': '🤖',
      'kubernetes': '☸️',
      'terraform': '🏗️',
      'ansible': '🔧',
      'linux': '🐧',
      'windows': '🪟',
      'macos': '🍎',
    };

    const normalizedTechName = techName.toLowerCase().trim();
    return icons[normalizedTechName] || '💻';
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies utilisées
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez les technologies et outils que nous maîtrisons pour ce service.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {service.technologies.map((tech, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xl">
                {getTechIcon(tech)}
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTechnologies;
