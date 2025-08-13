import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  icon: LucideIcon;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ 
  icon: Icon, 
  className = 'w-4 h-4' 
}) => {
  return <Icon className={className} />;
};
