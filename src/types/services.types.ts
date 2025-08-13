import { LucideIcon } from 'lucide-react';

/**
 * Types de services disponibles
 */
export type ServiceType = 
  | 'web-development'      // Développement Web
  | 'mobile-development'   // Développement Mobile
  | 'ecommerce'           // E-commerce
  | 'seo'                 // Référencement
  | 'marketing'           // Marketing Digital
  | 'design'              // Design
  | 'consulting'          // Conseil en stratégie
  | 'training'            // Formation
  | 'maintenance'         // Maintenance
  | 'security'            // Sécurité
  | 'cloud'               // Solutions Cloud
  | 'ai'                  // Intelligence Artificielle
  | 'iot'                 // Internet des Objets
  | 'blockchain';         // Blockchain

/**
 * Statuts possibles d'un service
 */
export type ServiceStatus = 
  | 'active'              // Service actif et disponible
  | 'inactive'            // Service temporairement indisponible
  | 'coming-soon'         // Service bientôt disponible
  | 'beta'                // Version bêta
  | 'deprecated';         // Service obsolète (maintenu pour compatibilité)

/**
 * Type pour les périodes de facturation
 */
export type BillingPeriod = 
  | 'hour'                // Facturation horaire
  | 'day'                 // Facturation journalière
  | 'week'                // Facturation hebdomadaire
  | 'month'               // Facturation mensuelle
  | 'year'                // Facturation annuelle
  | 'project'             // Forfait projet
  | 'custom';             // Période personnalisée

/**
 * Représente une image avec ses métadonnées
 */
export interface ServiceImage {
  src: string;            // URL de l'image
  alt: string;            // Texte alternatif
  width?: number;         // Largeur en pixels
  height?: number;        // Hauteur en pixels
  caption?: string;       // Légende optionnelle
  credits?: string;       // Crédits de l'image
}

/**
 * Valeur clé ou avantage d'un service
 */
export interface ServiceValue {
  id: number;             // Identifiant unique
  icon: string | LucideIcon; // Icône représentative
  label: string;          // Titre court
  description: string;     // Description détaillée
  order?: number;         // Ordre d'affichage
}

/**
 * Domaine d'application d'un service
 */
export interface ServiceDomain {
  id: number;             // Identifiant unique
  name: string;           // Nom du domaine
  description: string;     // Description du domaine
  icon?: string | LucideIcon; // Icône optionnelle
  color?: string;         // Couleur thématique optionnelle
  order?: number;         // Ordre d'affichage
}

/**
 * Approche ou méthodologie de travail
 */
export interface ServiceApproach {
  id: number;             // Identifiant unique
  title: string;          // Titre de l'approche
  description: string;     // Description détaillée
  icon?: string | LucideIcon; // Icône optionnelle
  steps?: string[];       // Étapes de la méthodologie
  order?: number;         // Ordre d'affichage
}

/**
 * Niveau de tarification pour un service
 */
export interface ServicePricingTier {
  id: number;             // Identifiant unique
  name: string;           // Nom du forfait (ex: Basique, Pro, Entreprise)
  description?: string;   // Description optionnelle
  price: number | string; // Prix (nombre ou texte comme "Sur devis")
  period?: BillingPeriod; // Période de facturation
  currency?: string;      // Devise (par défaut: 'EUR')
  features: string[];     // Liste des fonctionnalités incluses
  isPopular?: boolean;    // Mettre en avant ce forfait
  ctaText?: string;      // Texte personnalisé pour le bouton d'action
  ctaLink?: string;      // Lien personnalisé (optionnel)
  buttonText?: string;   // Texte du bouton (alias pour ctaText)
  buttonVariant?: string; // Variante du bouton (ex: 'default', 'outline', etc.)
  order?: number;        // Ordre d'affichage
}

/**
 * Témoignage client
 */
export interface ServiceTestimonial {
  id: number;             // Identifiant unique
  author: string;         // Nom de l'auteur
  role: string;           // Rôle/fonction
  company: string;        // Entreprise
  content: string;        // Contenu du témoignage
  rating: number;         // Note sur 5
  date: string;           // Date au format ISO
  avatar?: string;        // URL de l'avatar
  projectLink?: string;   // Lien vers le projet (optionnel)
  order?: number;         // Ordre d'affichage (optionnel)
}

/**
 * Question fréquente (FAQ)
 */
export interface ServiceFaq {
  id: number;             // Identifiant unique
  question: string;       // Question
  answer: string;         // Réponse
  category?: string;      // Catégorie optionnelle
  order?: number;         // Ordre d'affichage
}

/**
 * Métadonnées SEO pour un service
 */
export interface ServiceSeo {
  metaTitle?: string;     // Balise title
  metaDescription?: string; // Balise meta description
  metaKeywords?: string[]; // Mots-clés SEO
  ogTitle?: string;       // Titre pour les réseaux sociaux
  ogDescription?: string; // Description pour les réseaux sociaux
  ogImage?: string;       // Image pour les réseaux sociaux
  canonicalUrl?: string;  // URL canonique
}

/**
 * Cas d'usage et industrie pour un service
 */
export interface ServiceUseCase {
  id: number;                   // Identifiant unique
  title: string;                // Titre du cas d'usage
  description: string;          // Description détaillée
  icon?: string | LucideIcon;   // Icône représentative
  industries?: string[];        // Industries concernées
  benefits?: string[];          // Bénéfices pour ce cas d'usage
  order?: number;               // Ordre d'affichage
}

/**
 * Expert ou consultant pour un service
 */
export interface ServiceExpert {
  id: number;                   // Identifiant unique
  name: string;                 // Nom complet de l'expert
  role: string;                 // Rôle ou spécialité
  bio: string;                  // Biographie courte
  avatar?: string;              // Photo de l'expert
  experience?: number;          // Années d'expérience
  skills?: string[];            // Compétences clés
  certifications?: string[];    // Certifications
  linkedinUrl?: string;         // Lien vers le profil LinkedIn
  order?: number;               // Ordre d'affichage
}

/**
 * Technologie utilisée dans un service
 */
export interface ServiceTechnology {
  id: number;                   // Identifiant unique
  name: string;                 // Nom de la technologie
  description?: string;         // Description de la technologie
  icon?: string | LucideIcon;   // Icône ou logo
  category?: string;            // Catégorie (frontend, backend, etc.)
  version?: string;             // Version utilisée
  url?: string;                 // Lien vers la documentation
  order?: number;               // Ordre d'affichage
}

/**
 * Représente un service complet avec toutes ses propriétés
 */
export interface Service {
  // === Identification ===
  id: number;             // Identifiant unique
  type: ServiceType;      // Type de service
  status: ServiceStatus;  // Statut du service
  slug: string;           // URL-friendly ID
  
  // === Contenu principal ===
  title: string;          // Titre du service
  shortDescription: string; // Description courte (max 160 caractères)
  fullDescription: string; // Description complète
  excerpt?: string;       // Extrait pour les aperçus (optionnel)
  
  // === Visuels ===
  image: string | ServiceImage; // Image principale
  gallery?: Array<string | ServiceImage>; // Galerie d'images
  icon?: string;          // Nom de l'icône (optionnel)
  
  // === Métadonnées ===
  isPopular: boolean;     // Service mis en avant
  isFeatured: boolean;    // Service en vedette sur la page d'accueil
  tags: string[];         // Mots-clés pour le filtrage
  order?: number;         // Ordre d'affichage (optionnel)
  
  // === Détails du service ===
  values: ServiceValue[]; // Valeurs clés/avantages
  features: string[];     // Liste des fonctionnalités
  domains: ServiceDomain[]; // Domaines d'application
  approaches: ServiceApproach[]; // Méthodologies
  
  // === Tarification ===
  price: string;          // Prix affiché (ex: "À partir de 2 500 €")
  pricingTiers?: ServicePricingTier[]; // Niveaux de tarification
  hasFreeTier: boolean;   // Propose une offre gratuite
  freeTierDescription?: string; // Description de l'offre gratuite
  
  // === Contenu additionnel ===
  faqs?: ServiceFaq[];    // Questions fréquentes
  testimonials?: ServiceTestimonial[]; // Témoignages clients
  caseStudies?: string[]; // Références d'études de cas
  relatedServices?: number[];   // IDs des services connexes
  technologies?: string[];      // Technologies utilisées (déprécié, utiliser serviceTechnologies)
  
  // Nouveaux groupes de données
  useCases?: ServiceUseCase[];  // Cas d'usage et industries cibles
  experts?: ServiceExpert[];    // Experts dédiés au service
  serviceTechnologies?: ServiceTechnology[]; // Technologies utilisées avec détails
  
  // === SEO ===
  seo?: ServiceSeo;      // Métadonnées pour le référencement
  
  // === Dates ===
  createdAt: string;      // Date de création (ISO)
  updatedAt: string;      // Date de mise à jour (ISO)
  publishedAt?: string;   // Date de publication (ISO, optionnel)
  
  // === Métadonnées techniques ===
  _version?: number;     // Version du schéma (pour les migrations)
  
  // Liens
  documentationUrl?: string;
  demoUrl?: string;
  ctaText?: string;
}
