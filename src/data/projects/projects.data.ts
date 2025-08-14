import type { Project, Image } from '../types';

// Centralized flat list of projects
export const projectsItems: Project[] = [
  {
    id: 'proj-website-replatform',
    title: 'Replatforming Site E-commerce',
    slug: 'replatforming-ecommerce',
    description: "Migration d'une plateforme e-commerce vers Next.js et API headless, amélioration des performances et du SEO.",
    image: { src: '/projects/ecom-hero.jpg', alt: 'E-commerce replatform' },
    client: 'Retail Corp',
    category: 'E-commerce',
    technologies: ['Next.js', 'Node.js', 'ElasticSearch', 'Stripe'],
    year: 2024,
    link: 'https://example.com/case/replatform',
    github: undefined,
    isFeatured: true,
    content: 'Refonte complète avec architecture headless et mise en place CI/CD. +35% de conversion, LCP < 2s.',
    results: {
      conversion: '+35%',
      revenue: '+120k€',
      performance: 'LCP < 2s',
      efficiency: '-28% coûts infra'
    },
    gallery: [
      { src: '/projects/ecom-1.jpg', alt: 'Listing produits' },
      { src: '/projects/ecom-2.jpg', alt: 'Fiche produit' },
    ] as Image[],
  },
  {
    id: 'proj-mobile-banking-app',
    title: 'Application Mobile Banking',
    slug: 'mobile-banking-app',
    description:
      "Développement d’une application bancaire sécurisée avec authentification biométrique, notifications en temps réel et suivi des dépenses.",
    image: { src: '/projects/banking-hero.jpg', alt: 'Mobile banking app' },
    client: 'FinTrust Bank',
    category: 'Application Mobile',
    technologies: ['React Native', 'NestJS', 'PostgreSQL', 'Firebase'],
    year: 2023,
    link: 'https://example.com/case/mobile-banking',
    github: undefined,
    isFeatured: false,
    content:
      "App iOS/Android avec CI/CD, crash-free 99.9%, et temps de lancement < 1s. +40% d’engagement mensuel.",
    results: {
      retention: '+40% engagement',
      uptime: '99.9% disponibilité',
      performance: '< 1s lancement',
      rating: '4.8/5 App Stores'
    },
    gallery: [
      { src: '/projects/banking-1.jpg', alt: 'Écran tableau de bord' },
      { src: '/projects/banking-2.jpg', alt: 'Graphiques de dépenses' },
    ] as Image[],
  }
];
