"use client"

import React, { useEffect, useRef, useState } from 'react';
import { servicesData } from '@/data/services/services.data';
import { 
  ChevronRight, 
  X, 
  Rocket, 
  Shield, 
  Heart, 
  Sparkles, 
  Users, 
  Globe, 
  Lightbulb, 
  FileText, 
  ExternalLink, 
  Phone,
  TrendingUp,
  Search,
  BarChart2,
  Award,
  Brain,
  Zap,
  Lock,
  Settings,
  Wrench,
  EyeOff,
  Cloud,
  Server,
  Code,
  Smartphone as PhoneIcon,
  Paintbrush,
  GraduationCap,
  Monitor,
  Terminal,
  MessageSquare,
  Clock,
  Settings2,
  User,
  Linkedin,
  type LucideIcon,
  Briefcase
} from 'lucide-react';
import styles from './service.module.css';
import type { 
  Service, 
  ServiceType, 
  ServiceValue, 
  ServiceDomain, 
  ServiceApproach,
  ServicePricingTier,
  ServiceFaq,
  ServiceTestimonial
} from '@/types/services.types';

// Interface pour les props du compteur animé
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

// Compteur animé
function AnimatedCounter({ value, duration = 2000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(ref.current);
      }
    }
    
    animate();
    return () => cancelAnimationFrame(ref.current);
  }, [value, duration]);
  
  return <span>{count}{suffix}</span>;
}

// Modal pour afficher les détails du service
function ServiceModal({ service, isOpen, onClose }: { service: Service | null; isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  // Fermer la modal en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen || !service) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl my-8 bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300"
      >
        {/* Header avec image de fond */}
        <div className="relative h-36 sm:h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600" />
          <div className="absolute inset-0 bg-black/20" />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="absolute bottom-3 left-4 right-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{service.title}</h2>
            <p className="text-white/90 text-xs sm:text-sm line-clamp-2">{service.shortDescription}</p>
          </div>
        </div>
        
        {/* Contenu scrollable */}
        <div className="max-h-[calc(100vh-300px)] sm:max-h-[70vh] overflow-y-auto">
          <div className="p-4 sm:p-6">
            {/* Valeurs/avantages */}
            <div className="flex flex-wrap gap-2 mb-4">
              {service.values.map((value, index) => {
                let iconElement: React.ReactNode = null;
                
                if (value.icon) {
                  if (typeof value.icon === 'string') {
                    // Si c'est une chaîne, on l'affiche telle quelle
                    iconElement = <span className="text-xs font-medium">{value.icon}</span>;
                  } else if (React.isValidElement(value.icon)) {
                    // Si c'est un élément React, on le clone avec la bonne classe
                    const iconProps = {
                      ...(value.icon.props || {}),
                      className: 'w-3 h-3'
                    } as React.HTMLAttributes<HTMLElement>;
                    iconElement = React.cloneElement(value.icon, iconProps);
                  } else {
                    // Si c'est un composant d'icône, on le rend avec la classe
                    const IconComponent = value.icon as React.ComponentType<{ className?: string }>;
                    iconElement = <IconComponent className="w-3 h-3" />;
                  }
                }
                
                return (
                  <div key={index} className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-50 border border-amber-200">
                    {iconElement}
                    <span className="text-xs font-medium text-amber-800">{value.label}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Description complète */}
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Description détaillée</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{service.fullDescription}</p>
            </div>
            
            {/* Fonctionnalités */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Fonctionnalités incluses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Prix si disponible */}
            {service.price && (
              <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                <div className="text-center">
                  <div className="text-xl font-bold text-amber-700">{service.price}</div>
                  <div className="text-xs text-amber-600">À partir de</div>
                </div>
              </div>
            )}
            
            {/* Cas d'Usage & Industries */}
            {service.useCases && service.useCases.length > 0 && (
              <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-3">Cas d'Usage & Industries</h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.useCases.map((useCase) => (
                    <div key={useCase.id} className="p-3 border rounded-lg bg-white shadow-sm hover:shadow transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 bg-amber-100 rounded-lg">
                          {useCase.icon && (
                            <span className="text-amber-600">
                              {(() => {
                                const icon = useCase.icon;
                                if (!icon) return null;
                                
                                if (typeof icon === 'string') {
                                  return <span className="text-sm font-medium">{icon}</span>;
                                }
                                
                                if (React.isValidElement(icon)) {
                                  return React.cloneElement(icon, { 
                                    className: 'w-4 h-4' 
                                  } as React.HTMLAttributes<HTMLElement>);
                                }
                                
                                // Si c'est un composant d'icône
                                const IconComponent = icon as React.ComponentType<{ className?: string }>;
                                return <IconComponent className="w-4 h-4" />;
                              })()}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{useCase.title}</h4>
                          <p className="text-xs text-gray-600 mb-2">{useCase.description}</p>
                          
                          {useCase.industries && useCase.industries.length > 0 && (
                            <div className="mt-1">
                              <span className="text-xs font-medium text-gray-500">Industries : </span>
                              <span className="text-xs text-gray-700">
                                {useCase.industries.join(', ')}
                              </span>
                            </div>
                          )}
                          
                          {useCase.benefits && useCase.benefits.length > 0 && (
                            <div className="mt-2">
                              <ul className="space-y-1">
                                {useCase.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-amber-500 mr-1">•</span>
                                    <span className="text-xs text-gray-700">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Nos Experts Consulting */}
            {service.experts && service.experts.length > 0 && (
              <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-3">Nos Experts Consulting</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.experts.map((expert) => (
                    <div key={expert.id} className="flex items-start gap-3 p-3 border rounded-lg bg-white">
                      <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                        {expert.avatar ? (
                          <img 
                            src={expert.avatar} 
                            alt={expert.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-amber-100 text-amber-600">
                            <User className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{expert.name}</h4>
                            <p className="text-xs text-amber-600">{expert.role}</p>
                          </div>
                          {expert.linkedinUrl && (
                            <a 
                              href={expert.linkedinUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-amber-500 transition-colors"
                              aria-label={`Profil LinkedIn de ${expert.name}`}
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{expert.bio}</p>
                        
                        {expert.skills && expert.skills.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {expert.skills.slice(0, 3).map((skill, idx) => (
                              <span 
                                key={idx} 
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700"
                              >
                                {skill}
                              </span>
                            ))}
                            {expert.skills.length > 3 && (
                              <span className="text-xs text-gray-500 self-center">
                                +{expert.skills.length - 3} autres
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Nos Technologies */}
            {service.serviceTechnologies && service.serviceTechnologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-3">Nos Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {service.serviceTechnologies.map((tech) => (
                    <div 
                      key={tech.id} 
                      className="p-3 border rounded-lg bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {tech.icon && (
                          <span className="text-amber-500">
                            {(() => {
                              const icon = tech.icon;
                              if (!icon) return null;
                              
                              if (typeof icon === 'string') {
                                return <span className="text-sm font-medium">{icon}</span>;
                              }
                              
                              if (React.isValidElement(icon)) {
                                return React.cloneElement(icon, { 
                                  className: 'w-4 h-4' 
                                } as React.HTMLAttributes<HTMLElement>);
                              }
                              
                              // Si c'est un composant d'icône
                              const IconComponent = icon as React.ComponentType<{ className?: string }>;
                              return <IconComponent className="w-4 h-4" />;
                            })()}
                          </span>
                        )}
                        <h4 className="font-medium text-sm text-gray-900">{tech.name}</h4>
                      </div>
                      
                      {tech.description && (
                        <p className="text-xs text-gray-600 line-clamp-2">{tech.description}</p>
                      )}
                      
                      {tech.category && (
                        <div className="mt-1">
                          <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-600 rounded">
                            {tech.category}
                          </span>
                        </div>
                      )}
                      
                      {tech.url && (
                        <a 
                          href={tech.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center text-xs text-amber-600 hover:text-amber-700 transition-colors"
                        >
                          En savoir plus
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer avec actions */}
        <div className="p-3 sm:p-4 bg-gray-50 border-t">
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={`/services/${service.slug}`}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-md"
            >
              Voir le service
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <button 
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-amber-500 text-amber-600 font-medium hover:bg-amber-50 transition-colors"
              onClick={() => {
                onClose();
                // Ici, vous pouvez ajouter la logique pour ouvrir le formulaire de contact
                // par exemple : document.getElementById('contact')?.scrollIntoView();
              }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hook personnalisé pour gérer la largeur de l'écran
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Fonction pour mettre à jour la taille de la fenêtre
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Mettre à jour la taille initiale
    handleResize();
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', handleResize);
    
    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

// Composant pour gérer le rendu côté client uniquement
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return mounted ? <>{children}</> : null;
};

export default function Service() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Fonction utilitaire pour obtenir l'URL de l'image
  const getImageSrc = (img: string | { src: string; alt?: string; width?: number; height?: number }): string => {
    return typeof img === 'string' ? img : img.src;
  };
  
  // Fonction utilitaire pour obtenir le texte alternatif de l'image
  const getImageAlt = (
    img: string | { src: string; alt?: string; width?: number; height?: number }, 
    fallback: string
  ): string => {
    return (typeof img === 'object' && img.alt) ? img.alt : fallback;
  };
  
  // Mappage des icônes Lucide
  const iconComponents = {
    Monitor,
    Smartphone: PhoneIcon,
    Terminal,
    FileText,
    TrendingUp,
    Clock,
    Users,
    MessageSquare,
    BarChart2,
    Award,
    Brain,
    Zap,
    Lock,
    Settings,
    Settings2,
    Wrench,
    EyeOff,
    Cloud,
    Server,
    Code,
    Paintbrush,
    GraduationCap,
    Shield,
    Search,
    Rocket,
    Heart,
    Sparkles,
    Globe,
    Lightbulb,
    Briefcase
  } as const;
  
  // Définir un type pour les noms d'icônes valides
  type IconName = keyof typeof iconComponents;
  
    // Fonction utilitaire pour obtenir un composant d'icône par son nom
  const getIconComponent = (iconName: string): React.ComponentType<{ className?: string }> => {
    const Icon = iconComponents[iconName as keyof typeof iconComponents];
    return Icon || Globe;
  };
  
  // Type pour les propriétés d'icône étendues
  interface IconProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
  }
  
  // Fonction utilitaire pour rendre une icône de manière sécurisée
  const renderServiceIcon = (
    icon: string | LucideIcon | React.ReactElement | undefined, 
    className = 'w-4 h-4 text-amber-400'
  ): React.ReactNode => {
    if (!icon) return null;
    
    // Si c'est une chaîne, on l'affiche comme texte
    if (typeof icon === 'string') {
      return <span className="text-sm font-medium">{icon}</span>;
    }
    
    // Si c'est un élément React valide, on le clone avec la classe
    if (React.isValidElement(icon)) {
      const currentProps = icon.props as IconProps;
      const newClassName = [
        currentProps?.className,
        className
      ].filter(Boolean).join(' ');
      
      // Créer un nouvel objet props sans la propriété className existante
      const { className: _, ...otherProps } = currentProps || {};
      
      // Retourner l'élément cloné avec les nouvelles propriétés
      return React.cloneElement(icon, {
        ...otherProps,
        className: newClassName
      } as React.HTMLAttributes<HTMLElement>);
    }
    
    // Si c'est une icône Lucide, on la rend avec la classe
    const IconComponent = icon as React.ComponentType<{ className?: string }>;
    return <IconComponent className={className} />;
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth < 640; // Tailwind's sm breakpoint
  // Récupérer les services populaires et complémentaires
  const popularServices = servicesData.filter(service => service.isPopular);
  const allServices = servicesData; // Tous les services depuis la source centralisée
  
  // Fonction utilitaire pour obtenir l'icône d'une valeur de service
  const getValueIcon = (value: ServiceValue): React.ReactNode => {
    if (!value.icon) return <Globe className="w-5 h-5 text-amber-400" />;
    const icon = renderServiceIcon(value.icon);
    return icon || <Globe className="w-5 h-5 text-amber-400" />;
  };
  
  // Fonction utilitaire pour obtenir l'icône d'un domaine de service
  const getDomainIcon = (domain: ServiceDomain): React.ReactNode => {
    if (!domain.icon) return <Globe className="w-5 h-5 text-blue-500" />;
    const icon = renderServiceIcon(domain.icon);
    return icon || <Globe className="w-5 h-5 text-blue-500" />;
  };
  
  // Fonction utilitaire pour obtenir l'icône d'une approche de service
  const getApproachIcon = (approach: ServiceApproach): React.ReactNode => {
    if (!approach.icon) return <Globe className="w-5 h-5 text-green-500" />;
    const icon = renderServiceIcon(approach.icon);
    return icon || <Globe className="w-5 h-5 text-green-500" />;
  };
  
  // Fonction utilitaire pour obtenir l'icône d'un service
  const getServiceIcon = (service: Service): React.ReactNode => {
    if (!service.icon) return <Globe className="w-5 h-5 text-purple-500" />;
    const icon = renderServiceIcon(service.icon);
    return icon || <Globe className="w-5 h-5 text-purple-500" />;
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  // Fonction pour obtenir les coordonnées d'un point sur un cercle
  // avec arrondi pour éviter les problèmes d'hydratation
  const getCirclePoint = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    const x = Math.round(Math.cos(radian) * radius * 1000000) / 1000000;
    const y = Math.round(Math.sin(radian) * radius * 1000000) / 1000000;
    return { x, y };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Fond animé avec logo flottant */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm mb-4 tracking-wider uppercase">Nos Services</p>
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Solutions Digitales
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Sur-Mesure
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Transformez vos idées en réalité digitale avec nos solutions innovantes et notre expertise reconnue
          </p>
        </div>

        {/* Services populaires - Disposition circulaire avec fond dédié */}
        <div className="relative mb-32">
          <div className="text-center mb-12 md:mb-16">
          </div>
          
          {/* Container avec fond pour les services en orbite */}
          <div className={styles.serviceOrbitContainer}>
            {/* Fond avec espace suffisant */}
            <div className={styles.serviceOrbitBackground}></div>
            
            {/* Cercles décoratifs en arrière-plan */}
            <div className={styles.serviceOrbitCircles}>
              <div className={`${styles.serviceOrbitCircle} ${styles.serviceOrbitCircle1}`}></div>
              <div className={`${styles.serviceOrbitCircle} ${styles.serviceOrbitCircle2}`}></div>
              <div className={`${styles.serviceOrbitCircle} ${styles.serviceOrbitCircle3}`}></div>
            </div>
            
            {/* Container principal avec hauteur fixe adaptative */}
            <div className={styles.serviceOrbitContent}>
              {/* Centre - Logo ou élément central */}
              <div className={styles.serviceCenterLogo}>
                <div className={styles.serviceCenterLogoText}>
                  <Sparkles className={styles.serviceCenterLogoIcon} />
                  <div className={styles.serviceCenterLogoLabel}>Services</div>
                  <div className={styles.serviceCenterLogoLabel}>Premium</div>
                </div>
              </div>
              
              {/* Services en orbite avec positions optimisées */}
              {/* Composant pour un élément d'orbite */}
              {popularServices.map((service, index) => {
                // Positions adaptatives selon la taille d'écran  
                const radius = isMobile ? 120 : 200; // Rayon plus petit sur mobile
                
                // Angles optimisés pour éviter les chevauchements
                const angles = isMobile ? [0, 120, 240] : [-90, 30, 150];
                const angle = angles[index] || 0; // Valeur par défaut si l'angle n'est pas défini
                const { x, y } = getCirclePoint(angle, radius);
                
                // Créer un identifiant unique pour cet élément d'orbite
                const orbitItemId = `orbit-item-${service.id}-${index}`;
                
                // S'assurer que x et y sont des nombres valides
                const posX = isNaN(x) ? 0 : x;
                const posY = isNaN(y) ? 0 : y;
                
                return (
                  <div
                    key={service.id}
                    id={orbitItemId}
                    className={`${styles.serviceOrbitItem} ${styles.orbitItemPositioned}`}
                    data-x={posX}
                    data-y={posY}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className={`${styles.serviceCard} group`}>
                      {/* Badge de popularité */}
                      <div className={styles.popularBadge}>
                        <span className={styles.popularBadgeText}>★</span>
                      </div>
                      
                      <div className="flex gap-1 mb-2 sm:mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        {service.values.slice(0, 2).map((value, i) => (
                          <div key={i} className="transform group-hover:scale-110 transition-transform">
                            {renderServiceIcon(value.icon)}
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-white font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 leading-tight group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-[10px] xs:text-xs sm:text-sm leading-tight xs:leading-relaxed mb-2 sm:mb-3 group-hover:text-gray-200 transition-colors line-clamp-2">
                        {service.shortDescription}
                      </p>
                      
                      {service.price && (
                        <div className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-500/20 text-amber-400 text-[10px] xs:text-xs font-semibold border border-amber-500/30 group-hover:bg-amber-500/30 group-hover:border-amber-500/50 transition-all whitespace-nowrap">
                          {service.price}
                        </div>
                      )}
                      
                      {/* Indicateur de clic */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-4 h-4 text-amber-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Lignes de connexion subtiles - Rendu côté client uniquement */}
              {isClient && (
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                  style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                  key="connection-lines"
                >
                  <defs>
                    <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  {popularServices.map((_, index) => {
                    const radius = isMobile ? 120 : 200;
                    const angles = isMobile ? [0, 120, 240] : [-90, 30, 150];
                    // Ensure angle is always defined even if there are more services than angles
                    const safeAngle = angles.length > 0 ? angles[index % angles.length] : 0;
                    const startRadius = isMobile ? 40 : 70;
                    const endRadius = radius - (isMobile ? 40 : 60);
                    const { x: x1, y: y1 } = getCirclePoint(safeAngle, startRadius);
                    const { x: x2, y: y2 } = getCirclePoint(safeAngle, endRadius);
                    
                    return (
                      <line
                        key={`line-${index}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#connection-gradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity="0.3"
                      />
                    );
                  })}
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Services complémentaires - Grille classique */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">Services Complémentaires</h2>
            <p className="text-gray-300">Solutions additionnelles pour compléter votre projet</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 hover:border-amber-500/50 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10"
                onClick={() => handleServiceClick(service)}
              >
                <div className="w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  {service.image ? (
                    <img 
                      src={typeof service.image === 'string' ? service.image : service.image.src} 
                      alt={typeof service.image === 'string' ? service.title : service.image.alt || service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Globe className="w-12 h-12 text-gray-500" />
                  )}
                </div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  {service.values && service.values.map((value, index) => (
                    <div key={value.id || index} className="opacity-70">
                      {renderServiceIcon(value.icon)}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.shortDescription || service.excerpt}</p>
                
                {service.pricingTiers && service.pricingTiers.length > 0 && (
                  <a 
                    href={`/services/${service.slug}`} 
                    className="text-amber-400 hover:text-amber-300 flex items-center group-hover:underline"
                  >
                    <span className="text-amber-400 font-bold">
                      À partir de {service.pricingTiers[0].price}€
                    </span>
                    <ChevronRight className="w-4 h-4 ml-1 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="relative mb-20">
          <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-500/20 px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Rocket className="w-8 h-8 text-orange-400 mx-auto mb-3 animate-bounce" />
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  <AnimatedCounter value={120} />
                </div>
                <div className="text-sm text-gray-300">Projets livrés</div>
              </div>
              
              <div className="text-center">
                <Users className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  <AnimatedCounter value={80} />
                </div>
                <div className="text-sm text-gray-300">Clients satisfaits</div>
              </div>
              
              <div className="text-center">
                <Heart className="w-8 h-8 text-orange-400 mx-auto mb-3 animate-pulse" />
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  <AnimatedCounter value={98} suffix="%" />
                </div>
                <div className="text-sm text-gray-300">Taux de satisfaction</div>
              </div>
              
              <div className="text-center">
                <Globe className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  <AnimatedCounter value={12} />
                </div>
                <div className="text-sm text-gray-300">Pays couverts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules complémentaires */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: 'Bot',
              iconColor: 'text-amber-500',
              title: "Assistant IA",
              description: "Un guide intelligent pour optimiser vos choix",
              action: "Démarrer l'IA",
              badge: "IA"
            },
            {
              icon: 'FileText',
              iconColor: 'text-orange-400',
              title: "Brochure PDF",
              description: "Catalogue complet de nos services",
              action: "Télécharger",
              link: "/brochure-ioi.pdf"
            },
            {
              icon: 'ExternalLink',
              iconColor: 'text-amber-500',
              title: "Carrières",
              description: "Rejoignez notre équipe innovante",
              action: "Voir les offres",
              link: "/jobs"
            },
            {
              icon: 'Languages',
              iconColor: 'text-orange-400',
              title: "Multilingue",
              description: "Solutions internationales",
              action: "Voir la démo"
            },
            {
              icon: 'Accessibility',
              iconColor: 'text-amber-500',
              title: "Accessibilité",
              description: "Inclusif et accessible à tous",
              action: "En savoir plus"
            },
            {
              icon: 'Headphones',
              iconColor: 'text-orange-400',
              title: "Support 24/7",
              description: "Équipe disponible en permanence",
              action: "Contacter"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 hover:border-amber-500/50 transition-all duration-300 group">
              {item.badge && (
                <span className="inline-block px-2 py-1 mb-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 text-white text-xs font-bold">
                  {item.badge}
                </span>
              )}
              
              <div className="flex items-center gap-3 mb-3">
                {renderServiceIcon(item.icon, `w-8 h-8 ${item.iconColor}`)}
                <h3 className="text-white font-bold">{item.title}</h3>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              
              {item.link ? (
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all text-sm"
                >
                  {item.action}
                  <ChevronRight className="w-4 h-4" />
                </a>
              ) : (
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all text-sm">
                  {item.action}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}