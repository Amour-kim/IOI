// Types de base
export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Link {
  href: string;
  label: string;
  isExternal?: boolean;
}

export interface SocialLink extends Link {
  icon: React.ReactNode;
}

// Types pour les témoignages
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company?: string;
  content: string;
  rating?: number;
  image?: Image;
  date?: Date;
}

// Types pour les membres de l'équipe
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: Image;
  socialLinks: SocialLink[];
  skills: string[];
  joinDate: Date;
}

// Types pour les services
export interface ServiceValue {
  icon: React.ReactNode;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: Image;
  values: ServiceValue[];
  features: string[];
  price?: string;
  isPopular?: boolean;
}

// Types pour les études de cas
export interface CaseStudyResults {
  revenue?: string;
  conversion?: string;
  satisfaction?: string;
  time?: string;
  downloads?: string;
  retention?: string;
  rating?: string;
  clients?: string;
  uptime?: string;
  performance?: string;
  efficiency?: string;
  costs?: string;
  downtime?: string;
  [key: string]: string | undefined;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  slug: string;
  image: Image;
  description: string;
  challenge: string;
  solution: string;
  results: CaseStudyResults;
  technologies: string[];
  color: string;
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
  date: Date;
  duration?: string;
  teamSize?: number;
  budget?: string;
  tags?: string[];
  links?: Link[];
}

// Types pour les articles de blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: TeamMember | string;
  featuredImage: Image;
  categories: string[];
  tags: string[];
  publishedAt: Date;
  updatedAt?: Date;
  readingTime?: number; // en minutes
  isFeatured?: boolean;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// Types pour les projets
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: Image;
  client: string;
  category: string;
  technologies: string[];
  year: number;
  link?: string;
  github?: string;
  isFeatured?: boolean;
  content?: string;
  gallery?: Image[];
  results?: CaseStudyResults; // métriques pour activer les badges dans Projets Réalisés
}

// Types pour les produits
export interface ProductLinks {
  demo?: string;
  docs?: string;
  repo?: string;
  website?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  tags?: string[];
  logo?: Image;
  images?: Image[];
  features: string[];
  technologies?: string[];
  price?: string; // ex: "Gratuit", "À partir de 49€/mois"
  pricingTiers?: PricingPlan[];
  links?: ProductLinks;
  status?: 'alpha' | 'beta' | 'stable' | 'deprecated';
  version?: string;
  releaseDate?: Date;
  isFeatured?: boolean;
  badges?: string[];
  relatedProjectsIds?: string[]; // références vers Project.id
}

// Types pour les compétences
export interface Skill {
  id: string;
  name: string;
  level: number; // 1-10
  category: string;
  icon?: React.ReactNode;
  yearsOfExperience?: number;
}

// Types pour les partenaires/clients
export interface Client {
  id: string;
  name: string;
  logo: Image;
  website: string;
  industry: string;
  testimonial?: string;
  contactPerson?: string;
  startDate: Date;
  isActive: boolean;
}

// Types pour les prix/forfaits
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: 'mois' | 'an' | 'projet';
  features: string[];
  isPopular?: boolean;
  cta: {
    label: string;
    href: string;
  };
  mostPopular?: boolean;
}

// Types pour les FAQ

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Types pour les événements

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  image: Image;
  isVirtual: boolean;
  registrationLink?: string;
  speakers?: (TeamMember | string)[];
  tags?: string[];
  maxAttendees?: number;
  price?: number;
  isFree: boolean;
}

// Types pour les statistiques

export interface Statistic {
  id: string;
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  color?: string;
}

// Types pour les témoignages vidéo

export interface VideoTestimonial extends Testimonial {
  videoUrl: string;
  thumbnail: Image;
  duration: string;
}

// Types pour les prix et récompenses

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  image: Image;
  link?: string;
}

// Ré-export des types de base
export * from './base';

// Ré-export des types spécifiques aux études de cas
export * from './case-studies';
