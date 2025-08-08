"use client"

import React, { useEffect, useRef, useState } from 'react';
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
  Languages, 
  Accessibility, 
  Headphones, 
  Bot, 
  ExternalLink, 
  Phone, 
  Mail,
  ShoppingCart,
  ShieldCheck,
  TrendingUp,
  Search,
  BarChart2,
  Award,
  Brain,
  Zap,
  Lock,
  Settings2,
  Wrench,
  EyeOff,
  Cloud,
  Server,
  Code2,
  Smartphone,
  Paintbrush,
  GraduationCap
} from 'lucide-react';

// Interface pour les props du compteur animé
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

// Interface pour les services
interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  values: Array<{
    icon: React.ReactNode;
    label: string;
  }>;
  link: string;
  features: string[];
  price?: string;
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
                const iconElement = React.isValidElement(value.icon) 
                  ? React.cloneElement(value.icon as React.ReactElement<{className?: string}>, { 
                      className: 'w-3 h-3' 
                    })
                  : value.icon;
                
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
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                <div className="text-center">
                  <div className="text-xl font-bold text-amber-700">{service.price}</div>
                  <div className="text-xs text-amber-600">À partir de</div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer avec actions */}
        <div className="p-3 sm:p-4 bg-gray-50 border-t">
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={service.link}
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth < 640; // Tailwind's sm breakpoint

  // Services les plus populaires (au centre)
  const popularServices: Service[] = [
    {
      id: 'web-dev',
      title: "Développement Web",
      shortDescription: "Sites vitrines, plateformes, applications métier, e-commerce",
      fullDescription: "Notre équipe d'experts développe des solutions web sur-mesure adaptées à vos besoins spécifiques. Que vous ayez besoin d'un site vitrine élégant, d'une plateforme e-commerce performante ou d'une application métier complexe, nous maîtrisons les dernières technologies pour vous offrir une solution robuste, sécurisée et évolutive.",
      image: "/website-img-1.jpg",
      values: [
        { icon: <Rocket className="w-5 h-5 text-orange-400" />, label: "Rapidité" },
        { icon: <Shield className="w-5 h-5 text-amber-500" />, label: "Sécurité" },
        { icon: <Sparkles className="w-5 h-5 text-yellow-400" />, label: "UX Moderne" },
      ],
      link: "/services/development",
      features: [
        "Design responsive",
        "SEO optimisé",
        "Performance élevée",
        "Sécurité renforcée",
        "Support technique",
        "Formation utilisateur"
      ],
      price: "À partir de 2500€"
    },
    {
      id: 'mobile-app',
      title: "Applications Mobiles",
      shortDescription: "Apps performantes, connectées à vos outils",
      fullDescription: "Développement d'applications mobiles natives et cross-platform pour iOS et Android. Nos apps sont conçues pour offrir une expérience utilisateur exceptionnelle tout en étant parfaitement intégrées à vos systèmes existants.",
      image: "/DG1.jpg",
      values: [
        { icon: <Rocket className="w-5 h-5 text-orange-400" />, label: "Performance" },
        { icon: <Shield className="w-5 h-5 text-amber-500" />, label: "Sécurité" },
        { icon: <Heart className="w-5 h-5 text-orange-400" />, label: "Support" },
      ],
      link: "/services/mobile",
      features: [
        "Applications natives",
        "Interface intuitive",
        "Synchronisation cloud",
        "Notifications push",
        "Analytics intégrées",
        "Mises à jour OTA"
      ],
      price: "À partir de 4000€"
    },
    {
      id: 'consulting',
      title: "Consulting Digital",
      shortDescription: "Conseil, audit, accompagnement pour votre transformation numérique",
      fullDescription: "Nos consultants experts vous accompagnent dans votre transformation digitale. Audit de l'existant, définition de stratégie, recommandations techniques et accompagnement au changement pour maximiser votre ROI.",
      image: "/website-img-2.webp",
      values: [
        { icon: <Lightbulb className="w-5 h-5 text-orange-400" />, label: "Expertise" },
        { icon: <Users className="w-5 h-5 text-amber-500" />, label: "Accompagnement" },
        { icon: <Globe className="w-5 h-5 text-orange-400" />, label: "Ouverture" },
      ],
      link: "/services/consulting",
      features: [
        "Audit technique complet",
        "Stratégie digitale",
        "Accompagnement au changement",
        "Formation des équipes",
        "Optimisation des processus",
        "Suivi ROI"
      ],
      price: "Sur devis"
    }
  ];

  // Services complémentaires - Tous les services de la navbar
  const additionalServices: Service[] = [
    // Services principaux
    {
      id: 'consulting',
      title: 'Consulting',
      shortDescription: 'Conseil stratégique pour votre transformation digitale.',
      fullDescription: 'Nos experts vous accompagnent dans la définition et la mise en œuvre de votre stratégie numérique pour maximiser votre impact et votre croissance.',
      image: '/consulting.jpg',
      values: [
        { icon: <Lightbulb className="w-5 h-5 text-amber-400" />, label: 'Stratégie' },
        { icon: <TrendingUp className="w-5 h-5 text-amber-400" />, label: 'Croissance' },
        { icon: <Award className="w-5 h-5 text-amber-400" />, label: 'Expertise' }
      ],
      link: '/services/consulting',
      features: [
        'Audit numérique complet',
        'Stratégie digitale sur mesure',
        'Accompagnement au changement',
        'Analyse de marché',
        'Étude de faisabilité',
        'Plan d\'action personnalisé'
      ],
      price: 'Sur devis'
    },
    {
      id: 'development',
      title: 'Développement',
      shortDescription: 'Solutions logicielles sur mesure pour votre entreprise.',
      fullDescription: 'Développement d\'applications web et mobiles personnalisées, évolutives et performantes, adaptées à vos besoins spécifiques.',
      image: '/development.jpg',
      values: [
        { icon: <Code2 className="w-5 h-5 text-amber-400" />, label: 'Code' },
        { icon: <Smartphone className="w-5 h-5 text-amber-400" />, label: 'Mobile' },
        { icon: <Globe className="w-5 h-5 text-amber-400" />, label: 'Web' }
      ],
      link: '/services/development',
      features: [
        'Applications web sur mesure',
        'Applications mobiles natives',
        'Développement frontend/backend',
        'API et intégrations',
        'Tests et déploiement',
        'Maintenance évolutive'
      ],
      price: 'Sur devis'
    },
    {
      id: 'design',
      title: 'Design',
      shortDescription: 'Design créatif pour une expérience utilisateur exceptionnelle.',
      fullDescription: 'Conception d\'interfaces utilisateur intuitives et esthétiques qui améliorent l\'expérience utilisateur et renforcent votre identité de marque.',
      image: '/design.jpg',
      values: [
        { icon: <Paintbrush className="w-5 h-5 text-amber-400" />, label: 'UI/UX' },
        { icon: <Users className="w-5 h-5 text-amber-400" />, label: 'Centré utilisateur' },
        { icon: <Sparkles className="w-5 h-5 text-amber-400" />, label: 'Créatif' }
      ],
      link: '/services/design',
      features: [
        'Design d\'interface utilisateur',
        'Expérience utilisateur (UX)',
        'Identité visuelle',
        'Maquettes interactives',
        'Design system',
        'Prototypage et tests utilisateurs'
      ],
      price: 'À partir de 1500€'
    },
    // Services réseau et sécurité
    {
      id: 'securite-reseau',
      title: 'Sécurité Réseau',
      shortDescription: 'Protection avancée pour vos infrastructures réseau.',
      fullDescription: 'Solutions complètes de sécurité réseau pour protéger vos infrastructures contre les menaces et assurer la continuité de vos activités.',
      image: '/network-security.jpg',
      values: [
        { icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, label: 'Sécurité' },
        { icon: <Shield className="w-5 h-5 text-amber-400" />, label: 'Protection' },
        { icon: <Lock className="w-5 h-5 text-amber-400" />, label: 'Sécurisé' }
      ],
      link: '/services/securite-reseau',
      features: [
        'Audit de sécurité réseau',
        'Pare-feu et VPN',
        'Détection d\'intrusion',
        'Sécurisation Wi-Fi',
        'Surveillance 24/7',
        "Plan de reprise d'activité"
      ],
      price: 'Sur devis'
    },
    {
      id: 'solutions-ia',
      title: 'Solutions IA',
      shortDescription: 'Intégrez l\'intelligence artificielle dans votre entreprise.',
      fullDescription: 'Nous développons des solutions d\'intelligence artificielle sur mesure pour automatiser vos processus, analyser vos données et améliorer votre prise de décision.',
      image: '/ia.jpg',
      values: [
        { icon: <Brain className="w-5 h-5 text-amber-400" />, label: 'IA' },
        { icon: <Zap className="w-5 h-5 text-amber-400" />, label: 'Automatisation' },
        { icon: <Award className="w-5 h-5 text-amber-400" />, label: 'Innovation' }
      ],
      link: '/services/ia-intelligence-artificielle',
      features: [
        'Chatbots intelligents',
        'Analyse prédictive',
        'Traitement du langage naturel',
        'Vision par ordinateur',
        'Automatisation des processus',
        'Solutions personnalisées'
      ],
      price: 'Sur devis'
    },
    // Services de support et formation
    {
      id: 'formation',
      title: 'Formation',
      shortDescription: 'Formations professionnelles sur mesure.',
      fullDescription: 'Programmes de formation adaptés pour maîtriser les technologies et outils numériques essentiels à votre activité.',
      image: '/formation.jpg',
      values: [
        { icon: <GraduationCap className="w-5 h-5 text-amber-400" />, label: 'Formation' },
        { icon: <Users className="w-5 h-5 text-amber-400" />, label: 'Pratique' },
        { icon: <Award className="w-5 h-5 text-amber-400" />, label: 'Certification' }
      ],
      link: '/services/formation',
      features: [
        'Formations sur mesure',
        'Ateliers pratiques',
        'Support pédagogique',
        'Évaluation des compétences',
        'Suivi post-formation',
        'Certification'
      ],
      price: 'Sur devis'
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      shortDescription: 'Maintenance préventive et corrective de vos systèmes.',
      fullDescription: 'Services complets de maintenance pour assurer le bon fonctionnement et la sécurité de vos systèmes d\'information.',
      image: '/maintenance.jpg',
      values: [
        { icon: <Settings2 className="w-5 h-5 text-amber-400" />, label: 'Maintenance' },
        { icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, label: 'Sécurité' },
        { icon: <Wrench className="w-5 h-5 text-amber-400" />, label: 'Support' }
      ],
      link: '/services/maintenance',
      features: [
        'Maintenance préventive',
        'Mises à jour logicielles',
        'Sauvegardes automatisées',
        'Surveillance 24/7',
        'Dépannage technique',
        'Rapports d\'activité'
      ],
      price: 'À partir de 200€/mois'
    }
  ];

  const allServices = [...popularServices, ...additionalServices];

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
            <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">Services Les Plus Demandés</h2>
            <p className="text-gray-300 mb-4">.</p>
          </div>
          
          {/* Container avec fond pour les services en orbite */}
          <div className="relative">
            {/* Fond avec espace suffisant */}
            <div className="absolute inset-0 -mx-4 md:-mx-8 lg:-mx-16 bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-amber-500/10" 
                 style={{ height: 'calc(100% + 120px)', top: '-60px' }}>
            </div>
            
            {/* Cercles décoratifs en arrière-plan */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-amber-500/10 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-orange-500/5 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-amber-500/5 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Container principal avec hauteur fixe adaptative */}
            <div className="relative flex items-center justify-center py-8 sm:py-12 md:py-16" style={{ minHeight: '400px' }}>
              {/* Centre - Logo ou élément central */}
              <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-2xl border-4 border-white/10">
                <div className="text-center">
                  <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-2 animate-pulse" />
                  <div className="text-white text-xs md:text-sm font-bold">Services</div>
                  <div className="text-white text-xs md:text-sm font-bold">Premium</div>
                </div>
              </div>
              
              {/* Services en orbite avec positions optimisées */}
              {popularServices.map((service, index) => {
                // Positions adaptatives selon la taille d'écran  
                const radius = isMobile ? 120 : 200; // Rayon plus petit sur mobile
                
                // Angles optimisés pour éviter les chevauchements
                const angles = isMobile ? [0, 120, 240] : [-90, 30, 150]; // Disposition différente sur mobile
                const angle = angles[index];
                const { x, y } = getCirclePoint(angle, radius);
                
                return (
                  <div
                    key={service.id}
                    className="absolute z-10 cursor-pointer group"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      width: 'min(180px, 40vw)',
                      height: 'min(180px, 40vw)'
                    }}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-amber-500/30 p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:scale-105 sm:hover:scale-110 hover:border-amber-500/60 transition-all duration-300 shadow-xl group-hover:shadow-amber-500/20 hover:z-30 relative group-hover:bg-gradient-to-br group-hover:from-amber-500/10 group-hover:to-orange-500/10">
                      {/* Badge de popularité */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                      
                      <div className="flex gap-1 mb-2 sm:mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        {service.values.slice(0, 2).map((value, i) => (
                          <div key={i} className="transform group-hover:scale-110 transition-transform">
                            {value.icon}
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
                    const angle = angles[index];
                    const startRadius = isMobile ? 40 : 70;
                    const endRadius = radius - (isMobile ? 40 : 60);
                    const { x: x1, y: y1 } = getCirclePoint(angle, startRadius);
                    const { x: x2, y: y2 } = getCirclePoint(angle, endRadius);
                    
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
            {additionalServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 hover:border-amber-500/50 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10"
                onClick={() => handleServiceClick(service)}
              >
                <div className="flex items-center gap-3 mb-4">
                  {service.values.map((value, index) => (
                    <div key={index} className="opacity-70">
                      {value.icon}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                
                {service.price && (
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold">{service.price}</span>
                    <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
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
              icon: <Bot className="w-8 h-8 text-amber-500" />,
              title: "Assistant IA",
              description: "Un guide intelligent pour optimiser vos choix",
              action: "Démarrer l'IA",
              badge: "IA"
            },
            {
              icon: <FileText className="w-8 h-8 text-orange-400" />,
              title: "Brochure PDF",
              description: "Catalogue complet de nos services",
              action: "Télécharger",
              link: "/brochure-ioi.pdf"
            },
            {
              icon: <ExternalLink className="w-8 h-8 text-amber-500" />,
              title: "Carrières",
              description: "Rejoignez notre équipe innovante",
              action: "Voir les offres",
              link: "/jobs"
            },
            {
              icon: <Languages className="w-8 h-8 text-orange-400" />,
              title: "Multilingue",
              description: "Solutions internationales",
              action: "Voir la démo"
            },
            {
              icon: <Accessibility className="w-8 h-8 text-amber-500" />,
              title: "Accessibilité",
              description: "Inclusif et accessible à tous",
              action: "En savoir plus"
            },
            {
              icon: <Headphones className="w-8 h-8 text-orange-400" />,
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
                {item.icon}
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