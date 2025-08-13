import { Linkedin, Twitter, Github, Dribbble, Globe2 } from 'lucide-react';
import React from 'react';

// Définition des types
type IconName = 'linkedin' | 'twitter' | 'github' | 'dribbble' | 'globe';

// Mappage des noms d'icônes vers les composants
const iconComponents = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  dribbble: Dribbble,
  globe: Globe2,
} as const;

// Composant pour afficher une icône par son nom
export const Icon = ({ 
  name, 
  className = 'w-4 h-4' 
}: { 
  name: IconName; 
  className?: string;
}) => {
  const IconComponent = iconComponents[name] || Globe2;
  return <IconComponent className={className} />;
};

// Fonction utilitaire pour obtenir un composant d'icône
export const getIconComponent = (name: IconName) => {
  return iconComponents[name] || Globe2;
};
