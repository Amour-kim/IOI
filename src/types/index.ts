// Types de base
export * from '../data/types';

// Types spécifiques à l'application
export * from './article';

// Types pour le menu 3D
export interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

// Réexporter uniquement les types non déjà exportés depuis services.types
export type { 
  ServiceType, 
  ServiceStatus, 
  BillingPeriod,
  ServiceImage,
  ServiceDomain,
  ServiceApproach,
  ServicePricingTier,
  ServiceTestimonial,
  ServiceFaq,
  ServiceSeo,
  ServiceUseCase,
  ServiceExpert,
  ServiceTechnology
} from './services.types';
