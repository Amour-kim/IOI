import { Service, ServiceType, ServiceStatus, BillingPeriod } from '@/types/services.types';

// Noms d'icônes de Lucide React
export const ICONS = {
  MONITOR: 'Monitor',
  SMARTPHONE: 'Smartphone',
  TERMINAL: 'Terminal',
  FILE_TEXT: 'FileText',
  TRENDING_UP: 'TrendingUp',
  CLOCK: 'Clock',
  USERS: 'Users',
  MESSAGE_SQUARE: 'MessageSquare',
  BAR_CHART_2: 'BarChart2',
  AWARD: 'Award',
  BRAIN: 'Brain',
  ZAP: 'Zap',
  LOCK: 'Lock',
  SETTINGS: 'Settings',
  WRENCH: 'Wrench',
  EYE_OFF: 'EyeOff',
  CLOUD: 'Cloud',
  SERVER: 'Server',
  CODE: 'Code',
  PAINTBRUSH: 'Paintbrush',
  GRADUATION_CAP: 'GraduationCap',
  SHIELD: 'Shield',
  SEARCH: 'Search',
  SHOPPING_CART: 'ShoppingCart',
  BRIEFCASE: 'Briefcase',
  GLOBE: 'Globe',
  LAYOUT: 'Layout',
  SMARTPHONE_ICON: 'Smartphone',
  TERMINAL_ICON: 'Terminal',
  HEART: 'Heart'
} as const;

const now = new Date().toISOString();

/**
 * Données des services
 * Cette structure suit l'interface Service définie dans services.types.ts
 */
export const servicesData: Service[] = [
  {
    // === Identification ===
    id: 1,
    type: 'web-development',
    status: 'active',
    slug: 'developpement-web',
    
    // === Contenu principal ===
    title: 'Développement Web',
    shortDescription: 'Sites web sur mesure et applications web performantes',
    fullDescription: 'Création de sites web et applications web sur mesure, optimisés pour les performances et le référencement. Nous concevons des solutions adaptées à vos besoins spécifiques, en utilisant les dernières technologies du web.',
    excerpt: 'Solutions web sur mesure pour tous vos besoins en ligne, du site vitrine aux applications web complexes.',
    
    // === Visuels ===
    image: {
      src: 'http://localhost:8080/media/services/web-development.jpg',
      alt: 'Développement Web - Sites et applications sur mesure',
      width: 1600,
      height: 900,
      caption: 'Développement web sur mesure',
      credits: 'IOI Digital'
    },
    gallery: [
      {
        src: 'http://localhost:8080/media/services/web-dev-1.jpg',
        alt: 'Exemple de site web moderne',
        width: 1200,
        height: 630
      },
      {
        src: 'http://localhost:8080/media/services/web-dev-2.jpg',
        alt: 'Processus de développement',
        width: 1200,
        height: 630
      }
    ],
    icon: 'Code',
    
    // === Métadonnées ===
    isPopular: true,
    isFeatured: true,
    tags: ['web', 'développement', 'sites internet', 'applications web'],
    order: 1,
    
    // === Détails du service ===
    values: [
      {
        id: 1,
        icon: ICONS.MONITOR,
        label: 'Sites vitrines',
        description: 'Présentez votre entreprise en ligne avec élégance.',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.SMARTPHONE_ICON,
        label: 'Applications web',
        description: 'Solutions interactives et dynamiques pour vos utilisateurs.',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.TERMINAL_ICON,
        label: 'Solutions sur mesure',
        description: 'Développements adaptés à vos besoins spécifiques.',
        order: 3
      }
    ],
    
    features: [
      'Développement Frontend (React, Vue, Angular)',
      'Développement Backend (Node.js, Python, PHP)',
      'Bases de données (MongoDB, PostgreSQL, MySQL)',
      'Responsive Design',
      'Optimisation SEO',
      'Hébergement et déploiement',
      'Maintenance et support'
    ],
    
    domains: [
      {
        id: 1,
        name: 'Sites vitrines',
        description: 'Présentez votre entreprise en ligne avec un site web élégant et professionnel.',
        icon: 'Layout',
        order: 1
      },
      {
        id: 2,
        name: 'E-commerce',
        description: 'Boutique en ligne complète avec gestion des commandes et des paiements.',
        icon: 'ShoppingCart',
        order: 2
      },
      {
        id: 3,
        name: 'Applications web',
        description: 'Solutions web interactives avec des fonctionnalités avancées.',
        icon: 'Monitor',
        order: 3
      }
    ],
    
    approaches: [
      {
        id: 1,
        title: 'Découverte',
        description: 'Analyse de vos besoins et définition des objectifs du projet.',
        icon: 'Search',
        steps: [
          'Échange initial',
          'Analyse des besoins',
          'Étude de faisabilité',
          'Proposition détaillée'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Conception',
        description: 'Création des maquettes et de l\'architecture technique.',
        icon: 'Layout',
        steps: [
          'Maquettes graphiques',
          'Architecture technique',
          'Validation client',
          'Planification détaillée'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Développement',
        description: 'Implémentation technique selon les spécifications validées.',
        icon: 'Code',
        steps: [
          'Développement frontend',
          'Développement backend',
          'Intégration',
          'Tests unitaires'
        ],
        order: 3
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 2 500 €',
    pricingTiers: [
      {
        id: 1,
        name: 'Starter',
        description: 'Idéal pour les petites entreprises',
        price: 2500,
        period: 'project' as BillingPeriod,
        currency: 'EUR',
        features: [
          'Site vitrine 5 pages',
          'Design responsive',
          'Formulaire de contact',
          'Hébergement 1 an offert',
          'Formation 1h',
          'Support 3 mois'
        ],
        isPopular: true,
        ctaText: 'Choisir cette offre',
        order: 1
      },
      {
        id: 2,
        name: 'Business',
        description: 'Parfait pour les PME en croissance',
        price: 4500,
        period: 'project' as BillingPeriod,
        currency: 'EUR',
        features: [
          'Site vitrine 10 pages',
          'Espace client',
          'Rendez-vous en ligne',
          'Blog intégré',
          'Hébergement 1 an offert',
          'Formation 2h',
          'Support 6 mois'
        ],
        ctaText: 'Choisir cette offre',
        order: 2
      },
      {
        id: 3,
        name: 'Premium',
        description: 'Solution sur mesure pour les grands projets',
        price: 7500,
        period: 'project' as BillingPeriod,
        currency: 'EUR',
        features: [
          'Site sur mesure',
          'Fonctionnalités avancées',
          'Intégration API',
          'Optimisation SEO complète',
          'Hébergement 1 an offert',
          'Formation 4h',
          'Support 12 mois'
        ],
        ctaText: 'Choisir cette offre',
        order: 3
      }
    ],
    hasFreeTier: true,
    freeTierDescription: 'Audit gratuit de votre site existant et devis personnalisé sans engagement.',
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quel est le délai moyen de réalisation ?',
        answer: 'Un site vitrine simple peut être livré en 2 à 4 semaines, tandis qu\'une application web complexe peut nécessiter plusieurs mois de développement.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Proposez-vous un accompagnement après la livraison ?',
        answer: 'Oui, nous proposons différents forfaits de maintenance et de support pour vous accompagner après la mise en ligne de votre projet.',
        category: 'Support',
        order: 2
      },
      {
        id: 3,
        question: 'Quelles technologies utilisez-vous ?',
        answer: 'Nous utilisons les dernières technologies web modernes comme React, Next.js, Node.js, et des bases de données comme MongoDB ou PostgreSQL, selon les besoins spécifiques de votre projet.',
        category: 'Technique',
        order: 3
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Marie Dubois',
        role: 'Directrice Marketing',
        company: 'Entreprise ABC',
        content: 'Notre nouveau site web a dépassé nos attentes. L\'équipe a su comprendre nos besoins et livrer un produit de qualité dans les délais impartis.',
        rating: 5,
        date: '2023-03-15',
        avatar: '/images/testimonials/avatar-1.jpg',
        projectLink: 'https://www.entreprise-abc.com'
      },
      {
        id: 2,
        author: 'Thomas Martin',
        role: 'CEO',
        company: 'Startup XYZ',
        content: 'Le développement de notre application web a été réalisé avec professionnalisme. L\'accompagnement et le suivi sont au top !',
        rating: 5,
        date: '2023-05-22',
        avatar: '/images/testimonials/avatar-2.jpg'
      }
    ],
    
    // === Références ===
    relatedServices: [2, 3, 5], // IDs des services liés (ex: mobile, e-commerce, SEO)
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
    
    // === Cas d'Usage & Industries ===
    useCases: [
      {
        id: 1,
        title: 'Sites vitrines professionnels',
        description: 'Créez une présence en ligne professionnelle qui reflète l\'image de votre entreprise.',
        icon: 'Monitor',
        industries: ['PME', 'Professionnels libéraux', 'Associations'],
        benefits: ['Augmentation de la visibilité', 'Présence 24/7', 'Coûts réduits par rapport au marketing traditionnel'],
        order: 1
      },
      {
        id: 2,
        title: 'Applications web métier',
        description: 'Automatisez vos processus métiers avec des applications web sur mesure.',
        icon: 'Layout',
        industries: ['Industrie', 'Santé', 'Éducation', 'Services'],
        benefits: ['Gain de productivité', 'Réduction des erreurs', 'Accès à distance sécurisé'],
        order: 2
      },
      {
        id: 3,
        title: 'Portails clients et extranets',
        description: 'Offrez à vos clients un accès sécurisé à leurs données et services.',
        icon: 'Shield',
        industries: ['Banque', 'Assurance', 'Services B2B'],
        benefits: ['Fidélisation client', 'Service 24/7', 'Réduction des coûts support'],
        order: 3
      }
    ],
    
    // === Nos Experts Consulting ===
    experts: [
      {
        id: 1,
        name: 'Jean Dupont',
        role: 'Architecte Solutions',
        bio: '15 ans d\'expérience dans le développement d\'applications web complexes et évolutives.',
        avatar: '/images/team/jean-dupont.jpg',
        experience: 15,
        skills: ['Architecture logicielle', 'Node.js', 'Microservices', 'Cloud'],
        certifications: ['AWS Certified Solutions Architect', 'Google Cloud Professional'],
        linkedinUrl: 'https://linkedin.com/in/jeandupont',
        order: 1
      },
      {
        id: 2,
        name: 'Marie Martin',
        role: 'UX/UI Designer Senior',
        bio: 'Spécialiste en conception d\'interfaces utilisateur intuitives et accessibles.',
        avatar: '/images/team/marie-martin.jpg',
        experience: 10,
        skills: ['UI/UX Design', 'Prototypage', 'Recherche utilisateur', 'Accessibilité'],
        certifications: ['Google UX Design Professional'],
        linkedinUrl: 'https://linkedin.com/in/mariemartin',
        order: 2
      },
      {
        id: 3,
        name: 'Thomas Leroy',
        role: 'Développeur Full-Stack',
        bio: 'Expert en développement frontend et backend avec une forte orientation qualité.',
        avatar: '/images/team/thomas-leroy.jpg',
        experience: 8,
        skills: ['React', 'TypeScript', 'Node.js', 'Tests automatisés'],
        certifications: ['AWS Certified Developer'],
        linkedinUrl: 'https://linkedin.com/in/thomasleroy',
        order: 3
      }
    ],
    
    // === Nos Technologies ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'React',
        description: 'Bibliothèque JavaScript pour la construction d\'interfaces utilisateur',
        icon: 'Code',
        category: 'Frontend',
        version: '18.2',
        url: 'https://reactjs.org/',
        order: 1
      },
      {
        id: 2,
        name: 'Next.js',
        description: 'Framework React pour le rendu côté serveur et la génération de sites statiques',
        icon: 'Server',
        category: 'Fullstack',
        version: '13.4',
        url: 'https://nextjs.org/',
        order: 2
      },
      {
        id: 3,
        name: 'Node.js',
        description: 'Environnement d\'exécution JavaScript côté serveur',
        icon: 'Terminal',
        category: 'Backend',
        version: '18.0',
        url: 'https://nodejs.org/',
        order: 3
      },
      {
        id: 4,
        name: 'MongoDB',
        description: 'Base de données NoSQL orientée documents',
        icon: 'Database',
        category: 'Base de données',
        version: '6.0',
        url: 'https://www.mongodb.com/',
        order: 4
      },
      {
        id: 5,
        name: 'TypeScript',
        description: 'Sur-ensemble typé de JavaScript qui se compile en JavaScript',
        icon: 'FileCode',
        category: 'Langage',
        version: '5.0',
        url: 'https://www.typescriptlang.org/',
        order: 5
      }
    ],
    
    // === SEO ===
    seo: {
      metaTitle: 'Développement Web sur Mesure | IOI Digital',
      metaDescription: 'Création de sites et applications web performants, sécurisés et optimisés pour le référencement. Des solutions sur mesure pour votre entreprise.',
      metaKeywords: ['développement web', 'création site internet', 'application web', 'agence web', 'site vitrine', 'site e-commerce'],
      ogTitle: 'Développement Web sur Mesure - IOI Digital',
      ogDescription: 'Des solutions web personnalisées pour propulser votre présence en ligne',
      ogImage: '/images/og/web-development-og.jpg',
      canonicalUrl: 'https://www.ioi-digital.fr/services/developpement-web'
    },
    
    // === Dates ===
    createdAt: '2023-01-15T00:00:00.000Z',
    updatedAt: now,
    publishedAt: '2023-01-15T00:00:00.000Z',
    
    // === Métadonnées techniques ===
    _version: 1,
    
    // Liens
    documentationUrl: '/docs/developpement-web',
    demoUrl: '/demo/developpement-web',
    ctaText: 'Demander un devis gratuit'
  },
  // === Développement Mobile ===
  {
    // === Identification ===
    id: 2,
    type: 'mobile-development',
    status: 'active',
    slug: 'developpement-mobile',
    
    // === Contenu principal ===
    title: 'Développement Mobile',
    shortDescription: 'Applications mobiles natives et cross-plateformes pour iOS et Android',
    fullDescription: 'Nous concevons et développons des applications mobiles performantes et intuitives pour iOS et Android, en utilisant les dernières technologies comme React Native, Flutter, Swift et Kotlin. Nos solutions mobiles sont optimisées pour offrir une expérience utilisateur exceptionnelle tout en respectant les meilleures pratiques de développement.',
    excerpt: 'Applications mobiles natives et cross-plateformes pour iOS et Android, conçues pour offrir une expérience utilisateur exceptionnelle.',
    
    // === Visuels ===
    image: {
      src: 'http://localhost:8080/media/services/mobile-development.jpg',
      alt: 'Développement Mobile - Applications iOS et Android',
      width: 1600,
      height: 900,
      caption: 'Développement mobile sur mesure',
      credits: 'IOI Digital'
    },
    gallery: [
      {
        src: 'http://localhost:8080/media/services/mobile-dev-1.jpg',
        alt: 'Exemple d\'application mobile moderne',
        width: 1200,
        height: 630
      },
      {
        src: 'http://localhost:8080/media/services/mobile-dev-2.jpg',
        alt: 'Processus de développement mobile',
        width: 1200,
        height: 630
      }
    ],
    icon: 'Smartphone',
    
    // === Métadonnées ===
    isPopular: true,
    isFeatured: true,
    tags: ['mobile', 'ios', 'android', 'applications', 'cross-platform'],
    order: 2,
    
    // === Détails du service ===
    values: [
      {
        id: 1,
        icon: ICONS.SMARTPHONE_ICON,
        label: 'Applications Natives',
        description: 'Développement natif iOS et Android pour des performances optimales',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.ZAP,
        label: 'Temps de chargement optimisé',
        description: 'Applications optimisées pour des performances fluides',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.SHIELD,
        label: 'Sécurité renforcée',
        description: 'Protection des données et conformité RGPD',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.LAYOUT,
        label: 'UI/UX mobile-first',
        description: 'Design adapté aux spécificités mobiles',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Applications natives iOS et Android',
      'Développement cross-plateforme avec React Native ou Flutter',
      'Conception UI/UX mobile-first',
      'Intégration d\'APIs et services tiers',
      'Notifications push',
      'Paiements in-app',
      'Synchronisation hors ligne',
      'Publication sur les stores d\'applications',
      'Maintenance et mises à jour',
      'Analytique et suivi des performances'
    ],
    
    // === Domaines d'application ===
    domains: [
      {
        id: 1,
        name: 'Applications Entreprise',
        description: 'Solutions mobiles pour optimiser vos processus métiers',
        icon: ICONS.BRIEFCASE,
        color: '#4F46E5',
        order: 1
      },
      {
        id: 2,
        name: 'E-commerce mobile',
        description: 'Boutiques en ligne mobiles et applications d\'achat',
        icon: ICONS.SHOPPING_CART,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Réseaux sociaux',
        description: 'Applications communautaires et de partage',
        icon: ICONS.USERS,
        color: '#EC4899',
        order: 3
      },
      {
        id: 4,
        name: 'Applications de service',
        description: 'Solutions mobiles pour les services à la demande',
        icon: ICONS.SMARTPHONE_ICON,
        color: '#F59E0B',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Conception Mobile-First',
        description: 'Design pensé d\'abord pour mobile avec une expérience utilisateur optimale',
        icon: ICONS.SMARTPHONE_ICON,
        steps: [
          'Audit des besoins utilisateurs',
          'Création de parcours utilisateur',
          'Prototypage des écrans clés',
          'Tests utilisateurs itératifs'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Développement Agile',
        description: 'Méthodologie Agile avec des livraisons fréquentes',
        icon: ICONS.TERMINAL_ICON,
        steps: [
          'Sprints de 2 semaines',
          'Revues de sprint',
          'Rétrospectives',
          'Amélioration continue'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Tests et qualité',
        description: 'Tests automatisés et manuels pour une qualité optimale',
        icon: ICONS.SHIELD,
        steps: [
          'Tests unitaires',
          'Tests d\'intégration',
          'Tests d\'interface utilisateur',
          'Tests de performance'
        ],
        order: 3
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 15 000 €',
    hasFreeTier: true,
    freeTierDescription: 'Version de base avec fonctionnalités essentielles',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Starter',
        description: 'Idéal pour les petites applications mobiles',
        price: 15000,
        period: 'project',
        currency: 'EUR',
        features: [
          'Application mobile sur une plateforme (iOS ou Android)',
          'Jusqu\'à 10 écrans',
          'Design personnalisé',
          '1 mois de support',
          'Publication sur un store d\'applications'
        ],
        isPopular: false,
        buttonText: 'Démarrer mon projet',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Business',
        description: 'Parfait pour les applications mobiles complètes',
        price: 30000,
        period: 'project',
        currency: 'EUR',
        features: [
          'Applications iOS et Android',
          'Jusqu\'à 25 écrans',
          'Design personnalisé avancé',
          '3 mois de support',
          'Publication sur les stores',
          'Analytics intégrés',
          'Notifications push'
        ],
        isPopular: true,
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Enterprise',
        description: 'Solution mobile complète avec support prioritaire',
        price: 60000,
        period: 'project',
        currency: 'EUR',
        features: [
          'Applications iOS et Android natives',
          'Nombre illimité d\'écrans',
          'Design sur mesure',
          '6 mois de support',
          'Publication sur les stores',
          'Système de messagerie',
          'Paiements in-app',
          'Synchronisation hors ligne',
          'Support prioritaire 24/7'
        ],
        isPopular: false,
        buttonText: 'Contactez-nous',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quelle est la différence entre une application native et une application hybride ?',
        answer: 'Les applications natives sont développées spécifiquement pour une plateforme (iOS ou Android) en utilisant les langages natifs (Swift/Kotlin), offrant des performances optimales. Les applications hybrides utilisent des technologies web (comme React Native ou Flutter) pour fonctionner sur plusieurs plateformes avec un seul code source, ce qui réduit les coûts mais peut affecter légèrement les performances pour les applications complexes.',
        category: 'Technique',
        order: 1
      },
      {
        id: 2,
        question: 'Combien de temps faut-il pour développer une application mobile ?',
        answer: 'Le temps de développement varie en fonction de la complexité de l\'application. Une application simple peut prendre 2-3 mois, tandis qu\'une application complexe avec des fonctionnalités avancées peut nécessiter 6 mois ou plus. Nous établissons un calendrier personnalisé lors de la phase de planification.',
        category: 'Projet',
        order: 2
      },
      {
        id: 3,
        question: 'Quel est le coût de maintenance d\'une application mobile ?',
        answer: 'La maintenance représente généralement 15-20% du coût initial de développement par an. Cela inclut les mises à jour du système d\'exploitation, les correctifs de sécurité, et les améliorations mineures. Nous proposons des contrats de maintenance adaptés à vos besoins.',
        category: 'Budget',
        order: 3
      },
      {
        id: 4,
        question: 'Pouvez-vous m\'aider à publier mon application sur les stores ?',
        answer: 'Absolument ! Nous gérons tout le processus de publication sur l\'App Store et Google Play, y compris la préparation des assets, la rédaction des descriptions, et la soumission. Nous vous guiderons également à travers les directives de chaque plateforme pour une approbation en douceur.',
        category: 'Publication',
        order: 4
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Sophie Martin',
        role: 'Directrice Marketing',
        company: 'EcoMarket',
        content: 'L\'application mobile développée par IOI Digital a transformé notre relation avec nos clients. L\'interface est intuitive et le processus d\'achat fluide. Nous avons vu nos ventes mobiles augmenter de 40% en 3 mois seulement !',
        rating: 5,
        date: '2023-05-15',
        avatar: '/images/testimonials/sophie-martin.jpg',
        order: 1
      },
      {
        id: 2,
        author: 'Thomas Leroy',
        role: 'PDG',
        company: 'FitTrack',
        content: 'Leur expertise en développement mobile est impressionnante. Ils ont su comprendre nos besoins spécifiques et livrer une application qui dépasse nos attentes. Le support après-vente est également excellent.',
        rating: 5,
        date: '2023-07-22',
        avatar: '/images/testimonials/thomas-leroy.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      '/cas-etudes/application-ecommerce-mobile',
      '/cas-etudes/plateforme-fitness-connectee'
    ],
    
    // === Services liés ===
    relatedServices: [1, 3, 5], // Référence aux IDs des services liés (ex: web development, UI/UX design, etc.)
    
    // === Technologies ===
    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Firebase',
      'GraphQL',
      'Redux',
      'TypeScript'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'Applications de réservation',
        description: 'Systèmes de réservation et de prise de rendez-vous pour les professionnels de service.',
        icon: 'Calendar',
        industries: ['Santé', 'Beauté', 'Restauration', 'Tourisme'],
        benefits: [
          'Réduction des rendez-vous manqués',
          'Expérience client améliorée',
          'Gestion simplifiée des disponibilités',
          'Notifications automatiques'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Marketplaces mobiles',
        description: 'Plateformes de mise en relation entre professionnels et particuliers.',
        icon: 'ShoppingCart',
        industries: ['E-commerce', 'Services à la personne', 'Location', 'Prestations'],
        benefits: [
          'Paiements sécurisés intégrés',
          'Gestion des profils utilisateurs',
          'Système d\'évaluation',
          'Messagerie en temps réel'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Applications de fidélité',
        description: 'Programmes de fidélité et cartes de réduction numériques.',
        icon: 'Award',
        industries: ['Commerce de détail', 'Restauration', 'Services', 'Loisirs'],
        benefits: [
          'Augmentation de la fidélisation',
          'Données clients exploitables',
          'Campagnes marketing ciblées',
          'Réduction des coûts d\'impression'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Solutions de livraison',
        description: 'Applications de suivi de livraison en temps réel.',
        icon: 'Package',
        industries: ['Logistique', 'Restauration', 'E-commerce', 'Services'],
        benefits: [
          'Suivi en temps réel',
          'Notifications de statut',
          'Optimisation des tournées',
          'Preuve de livraison'
        ],
        order: 4
      }
    ],
    
    // === Experts ===
    experts: [
      {
        id: 1,
        name: 'Alexandre Dubois',
        role: 'Lead Développeur Mobile',
        bio: 'Expert en développement mobile natif avec plus de 8 ans d\'expérience sur iOS et Android. Passionné par la création d\'applications performantes et élégantes.',
        avatar: '/images/team/alexandre-dubois.jpg',
        experience: 8,
        skills: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'UI/UX mobile'],
        certifications: ['Google Certified Android Developer', 'Apple Certified iOS Developer'],
        linkedinUrl: 'https://linkedin.com/in/alexandredubois',
        order: 1
      },
      {
        id: 2,
        name: 'Camille Leroy',
        role: 'UX Designer Mobile',
        bio: 'Designer d\'expérience utilisateur spécialisée dans les interfaces mobiles. Elle s\'assure que chaque application offre une expérience intuitive et agréable.',
        avatar: '/images/team/camille-leroy.jpg',
        experience: 6,
        skills: ['UI/UX Design', 'Prototypage', 'Recherche utilisateur', 'Tests utilisateurs'],
        certifications: ['Google UX Design Professional', 'Nielsen Norman UX Certification'],
        linkedinUrl: 'https://linkedin.com/in/camilleleroy',
        order: 2
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'React Native',
        description: 'Framework pour le développement d\'applications mobiles multiplateformes',
        icon: 'Code',
        category: 'Framework',
        version: '0.70',
        url: 'https://reactnative.dev',
        order: 1
      },
      {
        id: 2,
        name: 'Flutter',
        description: 'Kit de développement d\'interfaces utilisateur multiplateforme de Google',
        icon: 'Smartphone',
        category: 'Framework',
        version: '3.7',
        url: 'https://flutter.dev',
        order: 2
      },
      {
        id: 3,
        name: 'Swift',
        description: 'Langage de programmation pour le développement iOS natif',
        icon: 'Apple',
        category: 'Langage',
        version: '5.7',
        url: 'https://developer.apple.com/swift/',
        order: 3
      },
      {
        id: 4,
        name: 'Kotlin',
        description: 'Langage de programmation moderne pour le développement Android natif',
        icon: 'Android',
        category: 'Langage',
        version: '1.8',
        url: 'https://kotlinlang.org',
        order: 4
      }
    ],
    
    // === SEO ===
    seo: {
      metaTitle: 'Développement Mobile sur Mesure | Applications iOS & Android',
      metaDescription: 'Créez des applications mobiles natives et cross-plateformes performantes pour iOS et Android. Solutions sur mesure adaptées à vos besoins métiers.',
      metaKeywords: ['développement mobile', 'application ios', 'application android', 'react native', 'flutter', 'développement d\'applications'],
      ogTitle: 'Développement Mobile sur Mesure - Applications iOS & Android',
      ogDescription: 'Créez des applications mobiles natives et cross-plateformes performantes pour iOS et Android. Solutions sur mesure adaptées à vos besoins métiers.',
      ogImage: '/images/og/mobile-development.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/developpement-mobile'
    },
    
    // === Métadonnées ===
    documentationUrl: 'https://docs.ioi-digital.com/mobile',
    demoUrl: 'https://demo.ioi-digital.com/mobile',
    ctaText: 'Démarrer mon projet mobile',
    
    // === Dates ===
    createdAt: '2023-01-15T10:00:00Z',
    updatedAt: now,
    publishedAt: '2023-01-20T09:00:00Z',
    _version: 1
  },
  // === Consulting ===
  {
    // === Identification ===
    id: 3,
    type: 'consulting',
    status: 'active',
    slug: 'consulting',
    
    // === Contenu principal ===
    title: 'Consulting Stratégique',
    shortDescription: 'Expertise et conseil pour la transformation digitale de votre entreprise',
    fullDescription: 'Notre équipe d\'experts vous accompagne dans la définition et la mise en œuvre de votre stratégie digitale. Nous vous aidons à identifier les opportunités, optimiser vos processus et maximiser votre retour sur investissement technologique.',
    excerpt: 'Accompagnement stratégique par des experts pour la transformation digitale de votre entreprise.',
    
    // === Visuels ===
    image: {
      src: 'http://localhost:8080/media/services/consulting.jpg',
      alt: 'Consulting Stratégique - Transformation Digitale',
      width: 1600,
      height: 900,
      caption: 'Consulting en transformation digitale',
      credits: 'IOI Digital'
    },
    gallery: [
      {
        src: 'http://localhost:8080/media/services/consulting-1.jpg',
        alt: 'Réunion de consulting stratégique',
        width: 1200,
        height: 630
      },
      {
        src: 'http://localhost:8080/media/services/consulting-2.jpg',
        alt: 'Analyse et stratégie digitale',
        width: 1200,
        height: 630
      }
    ],
    icon: 'BarChart2',
    
    // === Métadonnées ===
    isPopular: true,
    isFeatured: true,
    tags: ['consulting', 'stratégie', 'transformation digitale', 'accompagnement'],
    order: 3,
    
    // === Détails du service ===
    values: [
      {
        id: 1,
        icon: ICONS.BAR_CHART_2,
        label: 'Analyse Stratégique',
        description: 'Évaluation complète de votre écosystème digital',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.TRENDING_UP,
        label: 'Croissance',
        description: 'Stratégies pour accélérer votre développement',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.SHIELD,
        label: 'Sécurité',
        description: 'Audit et renforcement de votre sécurité IT',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.ZAP,
        label: 'Innovation',
        description: 'Veille technologique et solutions innovantes',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Audit complet de votre infrastructure IT',
      'Stratégie de transformation digitale sur mesure',
      'Accompagnement au changement',
      'Optimisation des processus métiers',
      'Étude de marché et analyse concurrentielle',
      'Roadmap technologique',
      'Formation des équipes',
      'Suivi et évaluation des résultats'
    ],
    
    // === Domaines d'application ===
    domains: [
      {
        id: 1,
        name: 'Stratégie Digitale',
        description: 'Définition et mise en œuvre de votre feuille de route digitale',
        icon: ICONS.BAR_CHART_2,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Transformation Organisationnelle',
        description: 'Accompagnement au changement et évolution des processus',
        icon: ICONS.SETTINGS,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Optimisation Technologique',
        description: 'Audit et amélioration de votre infrastructure IT',
        icon: ICONS.CODE,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Gouvernance des Données',
        description: 'Stratégie de gestion et sécurisation des données',
        icon: ICONS.SHIELD,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Diagnostic Initial',
        description: 'Analyse approfondie de votre situation actuelle',
        icon: ICONS.SEARCH,
        steps: [
          'Entretiens avec les parties prenantes',
          'Analyse des processus existants',
          'Évaluation technologique',
          'Identification des axes d\'amélioration'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Stratégie Personnalisée',
        description: 'Élaboration d\'une feuille de route sur mesure',
        icon: ICONS.BAR_CHART_2,
        steps: [
          'Définition des objectifs',
          'Priorisation des actions',
          'Planification des ressources',
          'Échéancier de mise en œuvre'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Accompagnement',
        description: 'Mise en œuvre et suivi des recommandations',
        icon: ICONS.USERS,
        steps: [
          'Formation des équipes',
          'Support à la mise en œuvre',
          'Suivi des indicateurs clés',
          'Ajustements si nécessaire'
        ],
        order: 3
      }
    ],
    
    // === Tarification ===
    price: 'Sur devis',
    hasFreeTier: true,
    freeTierDescription: 'Audit initial gratuit',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Audit Stratégique',
        description: 'Analyse complète de votre écosystème digital',
        price: 5000,
        period: 'project',
        currency: 'EUR',
        features: [
          'Audit complet (5 jours)',
          'Analyse concurrentielle',
          'Rapport détaillé',
          'Présentation des résultats',
          'Recommandations stratégiques'
        ],
        isPopular: false,
        buttonText: 'Démarrer un audit',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Accompagnement Standard',
        description: 'Stratégie et mise en œuvre',
        price: 20000,
        period: 'month',
        currency: 'EUR',
        features: [
          'Audit complet',
          'Stratégie personnalisée',
          'Accompagnement sur 3 mois',
          '2 réunions stratégiques par mois',
          'Support par email',
          'Rapports mensuels'
        ],
        isPopular: true,
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Partenariat Élite',
        description: 'Accompagnement complet et prioritaire',
        price: 50000,
        period: 'month',
        currency: 'EUR',
        features: [
          'Audit complet',
          'Stratégie personnalisée',
          'Accompagnement sur 12 mois',
          'Support prioritaire 24/7',
          'Accès illimité aux experts',
          'Formation des équipes',
          'Revue trimestrielle avec la direction',
          'Accès à notre réseau de partenaires'
        ],
        isPopular: false,
        buttonText: 'Contactez-nous',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quelle est la durée typique d\'une mission de consulting ?',
        answer: 'La durée varie selon la complexité de la mission. Un audit initial prend généralement 1 à 2 semaines, tandis qu\'un accompagnement complet peut s\'étendre sur plusieurs mois. Nous nous adaptons à vos besoins spécifiques et à votre calendrier.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Comment mesurez-vous le succès de vos interventions ?',
        answer: 'Nous définissons des indicateurs de performance clés (KPI) dès le début de la mission, en fonction de vos objectifs spécifiques. Ces indicateurs nous permettent d\'évaluer l\'efficacité de nos recommandations et d\'ajuster notre approche si nécessaire.',
        category: 'Méthodologie',
        order: 2
      },
      {
        id: 3,
        question: 'Proposez-vous des formations pour nos équipes ?',
        answer: 'Oui, nous intégrons systématiquement des sessions de formation pour vos équipes dans nos missions de consulting. Cela garantit une bonne appropriation des nouvelles pratiques et une transition en douceur vers les nouveaux processus.',
        category: 'Accompagnement',
        order: 3
      },
      {
        id: 4,
        question: 'Quelle est votre approche en matière de confidentialité ?',
        answer: 'La confidentialité est notre priorité. Nous signons des accords de non-divulgation (NDA) avant tout échange d\'informations sensibles. Nos consultants sont formés aux meilleures pratiques en matière de protection des données et respectent une charte éthique stricte.',
        category: 'Sécurité',
        order: 4
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Marie Dubois',
        role: 'Directrice Générale',
        company: 'Innovatech Solutions',
        content: 'Leur expertise nous a permis de redéfinir complètement notre stratégie digitale. Les résultats ont dépassé nos attentes avec une augmentation de 75% de notre trafic en ligne en 6 mois.',
        rating: 5,
        date: '2023-04-10',
        avatar: '/images/testimonials/marie-dubois.jpg',
        order: 1
      },
      {
        id: 2,
        author: 'Thomas Martin',
        role: 'DSI',
        company: 'Groupe Horizon',
        content: 'L\'accompagnement personnalisé et l\'expertise de l\'équipe ont été déterminants dans la réussite de notre transformation digitale. Un partenaire de confiance.',
        rating: 5,
        date: '2023-06-15',
        avatar: '/images/testimonials/thomas-martin.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      '/cas-etudes/transformation-digitale-banque',
      '/cas-etudes/optimisation-processus-industriel'
    ],
    
    // === Services liés ===
    relatedServices: [1, 2, 4], // Référence aux IDs des services liés (ex: web, mobile, etc.)
    
    // === Technologies ===
    technologies: [
      'Stratégie Digitale',
      'Transformation Organisationnelle',
      'Gestion du Changement',
      'Analyse de Données',
      'Optimisation des Processus',
      'Gouvernance IT'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'Transformation Digitale',
        description: 'Accompagnement complet dans la transformation digitale de votre entreprise',
        icon: 'RefreshCw',
        industries: ['Banque', 'Assurance', 'Santé', 'Industrie'],
        benefits: [
          'Modernisation des processus',
          'Amélioration de l\'expérience client',
          'Optimisation des coûts',
          'Innovation continue'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Audit Technologique',
        description: 'Évaluation approfondie de votre infrastructure et de vos systèmes',
        icon: 'Search',
        industries: ['Services Financiers', 'E-commerce', 'Manufacturier', 'Santé'],
        benefits: [
          'Identification des risques',
          'Optimisation des coûts IT',
          'Plan de modernisation',
          'Amélioration de la sécurité'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Stratégie Data',
        description: 'Mise en place d\'une gouvernance des données efficace',
        icon: 'Database',
        industries: ['Retail', 'Assurance', 'Télécoms', 'Services Publics'],
        benefits: [
          'Meilleure prise de décision',
          'Conformité RGPD',
          'Valorisation des données',
          'Automatisation des rapports'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Innovation Technologique',
        description: 'Identification et intégration des technologies émergentes',
        icon: 'Zap',
        industries: ['Technologie', 'Finance', 'Santé', 'Énergie'],
        benefits: [
          'Avantage concurrentiel',
          'Nouveaux modèles économiques',
          'Amélioration des processus',
          'Expérience client innovante'
        ],
        order: 4
      }
    ],
    
    // === Experts ===
    experts: [
      {
        id: 1,
        name: 'Julien Moreau',
        role: 'Directeur Consulting',
        bio: 'Expert en transformation digitale avec plus de 15 ans d\'expérience dans l\'accompagnement des grandes entreprises. Spécialiste de l\'innovation et de la gestion du changement.',
        avatar: '/images/team/julien-moreau.jpg',
        experience: 15,
        skills: ['Stratégie Digitale', 'Transformation', 'Innovation', 'Gestion du Changement'],
        certifications: ['PMP', 'TOGAF', 'Agile Coach'],
        linkedinUrl: 'https://linkedin.com/in/julienmoreau',
        order: 1
      },
      {
        id: 2,
        name: 'Sophie Lambert',
        role: 'Experte en Stratégie Data',
        bio: 'Data Scientist de formation, elle accompagne les entreprises dans la valorisation de leurs données et la mise en place de stratégies data-driven.',
        avatar: '/images/team/sophie-lambert.jpg',
        experience: 10,
        skills: ['Data Science', 'Analyse de Données', 'IA', 'Business Intelligence'],
        certifications: ['CDMP', 'Google Cloud Professional Data Engineer'],
        linkedinUrl: 'https://linkedin.com/in/sophielambert',
        order: 2
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'Stratégie Digitale',
        description: 'Définition et mise en œuvre de votre feuille de route digitale',
        icon: 'BarChart2',
        category: 'Méthodologie',
        version: undefined,
        url: 'https://www.ioi-digital.com/expertise/strategie-digitale',
        order: 1
      },
      {
        id: 2,
        name: 'Transformation Organisationnelle',
        description: 'Accompagnement au changement et évolution des processus',
        icon: 'Users',
        category: 'Méthodologie',
        version: undefined,
        url: 'https://www.ioi-digital.com/expertise/transformation',
        order: 2
      },
      {
        id: 3,
        name: 'Gouvernance des Données',
        description: 'Stratégie de gestion et sécurisation des données',
        icon: 'Shield',
        category: 'Expertise',
        version: undefined,
        url: 'https://www.ioi-digital.com/expertise/gouvernance-donnees',
        order: 3
      },
      {
        id: 4,
        name: 'Innovation Technologique',
        description: 'Veille et intégration des technologies émergentes',
        icon: 'Zap',
        category: 'Expertise',
        version: undefined,
        url: 'https://www.ioi-digital.com/expertise/innovation',
        order: 4
      }
    ],
    
    // === SEO ===
    seo: {
      metaTitle: 'Consulting Stratégique | Transformation Digitale | IOI Digital',
      metaDescription: 'Expertise en consulting stratégique et transformation digitale pour les entreprises. Accompagnement sur mesure par nos consultants expérimentés.',
      metaKeywords: ['consulting', 'stratégie digitale', 'transformation', 'accompagnement', 'innovation'],
      ogTitle: 'Consulting Stratégique - Transformation Digitale - IOI Digital',
      ogDescription: 'Expertise en consulting stratégique et transformation digitale pour les entreprises. Accompagnement sur mesure par nos consultants expérimentés.',
      ogImage: '/images/og/consulting.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/consulting'
    },
    
    // === Métadonnées ===
    documentationUrl: 'https://docs.ioi-digital.com/consulting',
    demoUrl: 'https://demo.ioi-digital.com/consulting',
    ctaText: 'Planifier une consultation',
    
    // === Dates ===
    createdAt: '2023-02-10T09:00:00Z',
    updatedAt: now,
    publishedAt: '2023-02-15T09:00:00Z',
    _version: 1
  },
  // === Maintenance ===
  {
    // === Identification ===
    id: 4,
    type: 'maintenance',
    status: 'active',
    slug: 'maintenance',
    
    // === Contenu principal ===
    title: 'Maintenance & Support',
    shortDescription: 'Services de maintenance proactive et support technique pour garantir la performance et la sécurité de vos applications',
    fullDescription: 'Notre service de maintenance complète assure la pérennité et les performances optimales de vos applications. Nous proposons des solutions de surveillance, de mise à jour et de support technique pour prévenir les problèmes et assurer la continuité de votre activité.',
    excerpt: 'Maintenance proactive et support technique pour des applications performantes et sécurisées.',
    
    // === Visuels ===
    image: {
      src: 'http://localhost:8080/media/services/maintenance.jpg',
      alt: 'Maintenance et Support Technique',
      width: 1600,
      height: 900,
      caption: 'Maintenance proactive et support technique',
      credits: 'IOI Digital'
    },
    gallery: [
      {
        src: 'http://localhost:8080/media/services/maintenance-1.jpg',
        alt: 'Équipe de support technique',
        width: 1200,
        height: 630
      },
      {
        src: 'http://localhost:8080/media/services/maintenance-2.jpg',
        alt: 'Surveillance des performances',
        width: 1200,
        height: 630
      }
    ],
    icon: 'Settings',
    
    // === Métadonnées ===
    isPopular: true,
    isFeatured: true,
    tags: ['maintenance', 'support', 'sécurité', 'mises à jour', 'surveillance'],
    order: 4,
    
    // === Détails du service ===
    values: [
      {
        id: 1,
        icon: ICONS.SHIELD,
        label: 'Sécurité',
        description: 'Mises à jour de sécurité et protection contre les menaces',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.ZAP,
        label: 'Disponibilité',
        description: 'Surveillance 24/7 et temps de réponse rapide',
        order: 2
      },
      {
        id: 3,
        icon: 'Repeat',
        label: 'Mises à jour',
        description: 'Maintenance évolutive et correctives régulières',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.SETTINGS,
        label: 'Support',
        description: 'Assistance technique réactive et compétente',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Surveillance continue des performances',
      'Mises à jour de sécurité régulières',
      'Sauvegardes automatisées',
      'Support technique réactif',
      'Rapports d\'activité mensuels',
      'Maintenance préventive et corrective',
      'Gestion des incidents',
      'Optimisation des performances'
    ],
    
    // === Domaines d'application ===
    domains: [
      {
        id: 1,
        name: 'Maintenance Préventive',
        description: 'Surveillance et optimisation continues pour prévenir les problèmes',
        icon: ICONS.SHIELD,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Support Technique',
        description: 'Assistance réactive pour résoudre vos problèmes techniques',
        icon: ICONS.SETTINGS,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Mises à Jour',
        description: 'Maintenance évolutive et correctives',
        icon: ICONS.SETTINGS,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Sécurité',
        description: 'Protection et conformité de vos applications',
        icon: ICONS.SHIELD,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Analyse et Diagnostic',
        description: 'Évaluation complète de votre système',
        icon: ICONS.SEARCH,
        steps: [
          'Audit de sécurité',
          'Analyse des performances',
          'Identification des points critiques',
          'Rapport détaillé'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Plan d\'Action',
        description: 'Élaboration d\'une stratégie de maintenance',
        icon: ICONS.SETTINGS,
        steps: [
          'Planification des interventions',
          'Définition des priorités',
          'Estimation des ressources',
          'Calendrier des mises à jour'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Mise en Œuvre',
        description: 'Exécution du plan de maintenance',
        icon: ICONS.SETTINGS,
        steps: [
          'Application des correctifs',
          'Mises à jour logicielles',
          'Optimisations',
          'Tests de validation'
        ],
        order: 3
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 299€/mois',
    hasFreeTier: true,
    freeTierDescription: 'Audit de sécurité gratuit',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Essentiel',
        description: 'Pour les petites applications avec des besoins basiques',
        price: 299,
        period: 'month',
        currency: 'EUR',
        features: [
          'Surveillance des temps de réponse',
          'Mises à jour mensuelles',
          'Support par email',
          'Sauvegardes hebdomadaires',
          'Rapport mensuel'
        ],
        isPopular: false,
        buttonText: 'Démarrer',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Professionnel',
        description: 'Pour les applications critiques avec support prioritaire',
        price: 799,
        period: 'month',
        currency: 'EUR',
        features: [
          'Surveillance en temps réel',
          'Mises à jour hebdomadaires',
          'Support par email et chat',
          'Sauvegardes quotidiennes',
          'Temps de réponse garanti',
          'Rapport hebdomadaire',
          '1h de support téléphonique/mois'
        ],
        isPopular: true,
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Entreprise',
        description: 'Solution complète pour les besoins critiques',
        price: 1999,
        period: 'month',
        currency: 'EUR',
        features: [
          'Surveillance 24/7',
          'Mises à jour en continu',
          'Support prioritaire 24/7',
          'Sauvegardes en temps réel',
          'Intervention garantie sous 2h',
          'Rapport quotidien',
          '5h de support téléphonique/mois',
          'Accès à un chef de projet dédié'
        ],
        isPopular: false,
        buttonText: 'Contactez-nous',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quelle est la durée minimale d\'engagement pour un contrat de maintenance ?',
        answer: 'Nos contrats de maintenance sont généralement d\'une durée minimale de 12 mois pour assurer une continuité de service optimale. Cependant, nous proposons également des formules plus flexibles pour répondre à des besoins spécifiques.',
        category: 'Contrat',
        order: 1
      },
      {
        id: 2,
        question: 'Comment se déroule la gestion des incidents critiques ?',
        answer: 'Pour les incidents critiques, nous mettons en place un processus d\'escalade avec des temps de réponse garantis. Notre équipe est disponible 24/7 pour les formules Entreprise, et selon des plages horaires étendues pour les autres formules.',
        category: 'Support',
        order: 2
      },
      {
        id: 3,
        question: 'Les mises à jour sont-elles incluses dans le contrat de maintenance ?',
        answer: 'Oui, toutes les mises à jour de sécurité et correctives sont incluses dans nos forfaits de maintenance. Les mises à jour évolutives peuvent faire l\'objet d\'un devis complémentaire selon leur ampleur.',
        category: 'Mises à jour',
        order: 3
      },
      {
        id: 4,
        question: 'Proposez-vous des audits de sécurité ?',
        answer: 'Oui, nous réalisons des audits de sécurité complets pour évaluer la vulnérabilité de vos applications. Ces audits peuvent être ponctuels ou inclus dans nos formules de maintenance avancées.',
        category: 'Sécurité',
        order: 4
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Nicolas Lefebvre',
        role: 'Directeur Technique',
        company: 'TechCorp Solutions',
        content: 'Depuis que nous avons souscrit au service de maintenance, nous n\'avons plus à nous soucier des mises à jour de sécurité. L\'équipe est réactive et professionnelle.',
        rating: 5,
        date: '2023-05-15',
        avatar: '/images/testimonials/nicolas-lefebvre.jpg',
        order: 1
      },
      {
        id: 2,
        author: 'Sophie Martin',
        role: 'Responsable E-commerce',
        company: 'Boutique en Ligne',
        content: 'Le support technique est exceptionnel. Ils ont résolu notre problème en moins d\'une heure, alors que nous étions en pleine période de soldes. Un vrai soulagement !',
        rating: 5,
        date: '2023-07-22',
        avatar: '/images/testimonials/sophie-martin.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      '/cas-etudes/maintenance-ecommerce',
      '/cas-etudes/optimisation-performances'
    ],
    
    // === Services liés ===
    relatedServices: [1, 2, 3], // Référence aux IDs des services liés (web, mobile, consulting)
    
    // === Technologies ===
    technologies: [
      'Monitoring',
      'Sécurité',
      'Sauvegarde',
      'Performance',
      'Mises à jour',
      'Support technique'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'E-commerce',
        description: 'Maintenance pour sites e-commerce à fort trafic',
        icon: 'ShoppingCart',
        industries: ['Mode', 'High-Tech', 'Cosmétiques', 'Alimentaire'],
        benefits: [
          'Disponibilité maximale',
          'Sécurité des transactions',
          'Optimisation des performances',
          'Support prioritaire'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Applications Métier',
        description: 'Maintenance des applications critiques pour votre entreprise',
        icon: 'Briefcase',
        industries: ['Finance', 'Santé', 'Industrie', 'Services'],
        benefits: [
          'Stabilité des opérations',
          'Mises à jour sécurisées',
          'Support dédié',
          'Conformité réglementaire'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Sites Vitrines',
        description: 'Maintenance pour sites vitrines et blogs',
        icon: 'Layout',
        industries: ['Artisanat', 'Services', 'Éducation', 'Associations'],
        benefits: [
          'Mises à jour régulières',
          'Sécurité renforcée',
          'Sauvegardes automatiques',
          'Support réactif'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Applications Mobiles',
        description: 'Maintenance des applications iOS et Android',
        icon: 'Smartphone',
        industries: ['Services', 'Santé', 'Finance', 'Loisirs'],
        benefits: [
          'Compatibilité OS',
          'Correction des bugs',
          'Mises à jour du store',
          'Analyse des crashs'
        ],
        order: 4
      }
    ],
    
    // === Experts ===
    experts: [
      {
        id: 1,
        name: 'Thomas Dubois',
        role: 'Responsable Support Technique',
        bio: 'Expert en résolution d\'incidents avec plus de 10 ans d\'expérience dans le support technique et la maintenance d\'applications critiques.',
        avatar: '/images/team/thomas-dubois.jpg',
        experience: 10,
        skills: ['Support Technique', 'Résolution d\'Incidents', 'Sécurité', 'DevOps'],
        certifications: ['ITIL', 'AWS Certified', 'Google Cloud Engineer'],
        linkedinUrl: 'https://linkedin.com/in/thomasdubois',
        order: 1
      },
      {
        id: 2,
        name: 'Laura Petit',
        role: 'Chef de Projet Maintenance',
        bio: 'Spécialiste de la gestion des opérations et de l\'amélioration continue, elle assure le suivi des performances et la satisfaction client.',
        avatar: '/images/team/laura-petit.jpg',
        experience: 8,
        skills: ['Gestion de Projet', 'Amélioration Continue', 'KPI', 'Relation Client'],
        certifications: ['PMP', 'Scrum Master', 'ITIL Expert'],
        linkedinUrl: 'https://linkedin.com/in/laurapetit',
        order: 2
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'Surveillance Continue',
        description: 'Monitoring 24/7 des performances et disponibilité',
        icon: 'Activity',
        category: 'Outils',
        version: undefined,
        url: 'https://www.ioi-digital.com/technologies/monitoring',
        order: 1
      },
      {
        id: 2,
        name: 'Sécurité',
        description: 'Protection avancée contre les menaces',
        icon: 'Shield',
        category: 'Sécurité',
        version: undefined,
        url: 'https://www.ioi-digital.com/technologies/securite',
        order: 2
      },
      {
        id: 3,
        name: 'Sauvegarde',
        description: 'Stratégie de sauvegarde et reprise après sinistre',
        icon: 'HardDrive',
        category: 'Sécurité',
        version: undefined,
        url: 'https://www.ioi-digital.com/technologies/sauvegarde',
        order: 3
      },
      {
        id: 4,
        name: 'Support Technique',
        description: 'Assistance et résolution des incidents',
        icon: 'Headphones',
        category: 'Support',
        version: undefined,
        url: 'https://www.ioi-digital.com/support',
        order: 4
      }
    ],
    
    // === SEO ===
    seo: {
      metaTitle: 'Maintenance & Support | Services de Maintenance d\'Applications | IOI Digital',
      metaDescription: 'Services complets de maintenance et support pour assurer la performance, la sécurité et la disponibilité de vos applications web et mobiles. Équipe d\'experts disponible 24/7.',
      metaKeywords: ['maintenance', 'support technique', 'sécurité', 'mises à jour', 'surveillance', 'sauvegarde'],
      ogTitle: 'Maintenance & Support - Services Professionnels | IOI Digital',
      ogDescription: 'Maintenance proactive et support technique expert pour vos applications. Garantissez la performance et la sécurité de vos solutions numériques avec notre équipe dédiée.',
      ogImage: '/images/og/maintenance.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/maintenance'
    },
    
    // === Métadonnées ===
    documentationUrl: 'https://docs.ioi-digital.com/maintenance',
    demoUrl: 'https://demo.ioi-digital.com/maintenance',
    ctaText: 'Demander un audit gratuit',
    
    // === Dates ===
    createdAt: '2023-03-05T09:00:00Z',
    updatedAt: now,
    publishedAt: '2023-03-10T09:00:00Z',
    _version: 1
  },
  // === Design ===
  {
    // === Identification ===
    id: 5,
    type: 'design',
    status: 'active',
    slug: 'design',
    
    // === Contenu principal ===
    title: 'Design Créatif',
    shortDescription: 'Solutions de design sur mesure pour une expérience utilisateur exceptionnelle et une identité de marque forte',
    fullDescription: 'Notre équipe de designers talentueux crée des interfaces utilisateur intuitives et des identités visuelles mémorables. Nous combinons esthétique et fonctionnalité pour concevoir des expériences numériques qui captivent et convertissent.',
    excerpt: 'Design d\'interfaces et identité visuelle pour une expérience utilisateur mémorable.',
    
    // === Visuels ===
    image: {
      src: 'http://localhost:8080/media/services/design.jpg',
      alt: 'Design Créatif - UI/UX Design',
      width: 1600,
      height: 900,
      caption: 'Design d\'interface utilisateur moderne',
      credits: 'IOI Digital'
    },
    gallery: [
      {
        src: 'http://localhost:8080/media/services/design-1.jpg',
        alt: 'Maquettes d\'interface utilisateur',
        width: 1200,
        height: 630
      },
      {
        src: 'http://localhost:8080/media/services/design-2.jpg',
        alt: 'Identité visuelle et branding',
        width: 1200,
        height: 630
      }
    ],
    icon: 'Paintbrush',
    
    // === Métadonnées ===
    isPopular: true,
    isFeatured: true,
    tags: ['design', 'ui/ux', 'identité visuelle', 'expérience utilisateur', 'branding'],
    order: 5,
    
    // === Détails du service ===
    values: [
      {
        id: 1,
        icon: ICONS.PAINTBRUSH,
        label: 'Design Unique',
        description: 'Créations sur mesure adaptées à votre identité',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.SMARTPHONE,
        label: 'Mobile First',
        description: 'Design optimisé pour tous les appareils',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.USERS,
        label: 'Centré Utilisateur',
        description: 'Expérience fluide et intuitive',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.TRENDING_UP,
        label: 'Conversion',
        description: 'Design optimisé pour les résultats',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Design d\'interface utilisateur (UI)',
      'Expérience utilisateur (UX) sur mesure',
      'Identité visuelle et charte graphique',
      'Maquettes interactives',
      'Design system complet',
      'Prototypage et tests utilisateurs',
      'Motion design',
      'Design d\'icônes et illustrations'
    ],
    
    // === Domaines d'application ===
    domains: [
      {
        id: 1,
        name: 'UI/UX Design',
        description: 'Interfaces utilisateur intuitives et expériences fluides',
        icon: ICONS.MONITOR,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Identité Visuelle',
        description: 'Logo, charte graphique et éléments de marque',
        icon: ICONS.PAINTBRUSH,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Design d\'Interface',
        description: 'Maquettes et prototypes interactifs',
        icon: ICONS.LAYOUT,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Motion Design',
        description: 'Animations et micro-interactions',
        icon: ICONS.ZAP,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Découverte',
        description: 'Compréhension de vos besoins et objectifs',
        icon: ICONS.SEARCH,
        steps: [
          'Brief créatif',
          'Analyse de la concurrence',
          'Personas utilisateurs',
          'Arborescence'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Conception',
        description: 'Création des concepts et maquettes',
        icon: ICONS.PAINTBRUSH,
        steps: [
          'Moodboards',
          'Wireframes',
          'Maquettes',
          'Validation itérative'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Prototypage',
        description: 'Tests et affinage',
        icon: ICONS.CODE,
        steps: [
          'Prototypes interactifs',
          'Tests utilisateurs',
          'Ajustements',
          'Livraison des assets'
        ],
        order: 3
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 2 500€',
    hasFreeTier: true,
    freeTierDescription: 'Audit UX gratuit',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Starter',
        description: 'Pour les besoins basiques en design',
        price: 2500,
        period: 'project',
        currency: 'EUR',
        features: [
          'Charte graphique basique',
          '5 maquettes d\'écran',
          '2 itérations',
          'Livraison en 2 semaines',
          'Support par email'
        ],
        isPopular: false,
        buttonText: 'Démarrer un projet',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Professionnel',
        description: 'Solution complète pour les marques établies',
        price: 7500,
        period: 'project',
        currency: 'EUR',
        features: [
          'Identité visuelle complète',
          '10-15 maquettes d\'écran',
          '5 itérations',
          'Prototype interactif',
          'Guide de style',
          'Support prioritaire',
          'Livraison en 4 semaines'
        ],
        isPopular: true,
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Entreprise',
        description: 'Solution sur mesure pour les grands comptes',
        price: 15000,
        period: 'project',
        currency: 'EUR',
        features: [
          'Design system complet',
          'Maquettes illimitées',
          'Itérations illimitées',
          'Tests utilisateurs',
          'Formation équipe',
          'Support 24/7',
          'Chef de projet dédié',
          'Livraison sur mesure'
        ],
        isPopular: false,
        buttonText: 'Demander un devis',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quelle est la différence entre UI et UX Design ?',
        answer: 'L\'UI Design (User Interface) se concentre sur l\'apparence visuelle des interfaces, tandis que l\'UX Design (User Experience) s\'intéresse à l\'expérience globale de l\'utilisateur. Nous combinons les deux approches pour des résultats optimaux.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Combien de temps prend un projet de design ?',
        answer: 'La durée varie selon la complexité du projet. Un site vitrine simple peut prendre 2-3 semaines, tandis qu\'un projet d\'application complète peut nécessiter 2-3 mois. Nous établissons un calendrier précis en phase de découverte.',
        category: 'Délais',
        order: 2
      },
      {
        id: 3,
        question: 'Proposez-vous des services de refonte ?',
        answer: 'Oui, nous proposons des audits UX/UI pour identifier les points d\'amélioration de vos interfaces existantes, suivis d\'une refonte complète ou partielle selon vos besoins.',
        category: 'Services',
        order: 3
      },
      {
        id: 4,
        question: 'Quels formats de fichiers fournissez-vous ?',
        answer: 'Nous fournissons tous les fichiers sources (Figma, Adobe XD, Sketch) ainsi que les exports dans les formats standards (PNG, JPG, SVG, PDF). Nous nous adaptons à votre workflow et à vos besoins spécifiques.',
        category: 'Livrables',
        order: 4
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Camille Laurent',
        role: 'Directrice Marketing',
        company: 'Luxe & Co',
        content: 'Leur approche centrée utilisateur a totalement transformé notre plateforme e-commerce. Les conversions ont augmenté de 40% après la refonte.',
        rating: 5,
        date: '2023-06-10',
        avatar: '/images/testimonials/camille-laurent.jpg',
        order: 1
      },
      {
        id: 2,
        author: 'Thomas Dubreuil',
        role: 'Fondateur',
        company: 'StartUp Tech',
        content: 'L\'équipe a su capturer parfaitement l\'ADN de notre marque. Le design est à la fois moderne et intemporel, exactement ce que nous voulions.',
        rating: 5,
        date: '2023-08-01',
        avatar: '/images/testimonials/thomas-dubreuil.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      '/cas-etudes/refonte-ux-ecommerce',
      '/cas-etudes/design-system-entreprise'
    ],
    
    // === Services liés ===
    relatedServices: [1, 2, 3], // Référence aux IDs des services liés (web, mobile, consulting)
    
    // === Technologies ===
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Adobe Creative Suite',
      'InVision',
      'Principle',
      'After Effects'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'Sites Web',
        description: 'Design de sites vitrines et e-commerce percutants',
        icon: 'Globe',
        industries: ['E-commerce', 'Services', 'Luxe', 'Culture'],
        benefits: [
          'Design responsive',
          'Optimisation conversion',
          'Navigation intuitive',
          'Expérience utilisateur fluide'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Applications Mobiles',
        description: 'Interfaces mobiles intuitives et engageantes',
        icon: 'Smartphone',
        industries: ['Santé', 'Finance', 'Loisirs', 'Réseaux sociaux'],
        benefits: [
          'Design natif iOS/Android',
          'Gestes tactiles',
          'Performance optimisée',
          'Guidelines respectées'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Interfaces SaaS',
        description: 'Design d\'applications métier complexes',
        icon: 'Layout',
        industries: ['Entreprise', 'SaaS', 'Fintech', 'EdTech'],
        benefits: [
          'Workflows optimisés',
          'Design system évolutif',
          'Tableaux de bord clairs',
          'Courbe d\'apprentissage réduite'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Identité de Marque',
        description: 'Design d\'une identité visuelle forte',
        icon: 'Award',
        industries: ['Startups', 'Rebranding', 'Lancement', 'Événementiel'],
        benefits: [
          'Logo et charte graphique',
          'Guide de style complet',
          'Éléments visuels uniques',
          'Cohérence multi-supports'
        ],
        order: 4
      }
    ],
    
    // === Experts ===
    experts: [
      {
        id: 1,
        name: 'Sophie Martin',
        role: 'Directrice Artistique',
        bio: 'Designer UX/UI avec 10 ans d\'expérience dans la création d\'interfaces utilisateur intuitives et esthétiques pour des marques internationales.',
        avatar: '/images/team/sophie-martin.jpg',
        experience: 10,
        skills: ['UI/UX Design', 'Design Thinking', 'Prototypage', 'Design System'],
        certifications: ['Google UX Design', 'Figma Certified', 'IDEO U'],
        linkedinUrl: 'https://linkedin.com/in/sophiemartin',
        order: 1
      },
      {
        id: 2,
        name: 'Alexandre Dubois',
        role: 'Directeur Créatif',
        bio: 'Expert en identité visuelle et expérience utilisateur, il allie créativité et stratégie pour des designs qui marquent les esprits.',
        avatar: '/images/team/alexandre-dubois.jpg',
        experience: 12,
        skills: ['Direction Artistique', 'Branding', 'Motion Design', 'Typographie'],
        certifications: ['Adobe Certified Expert', 'Typekit Pro'],
        linkedinUrl: 'https://linkedin.com/in/alexandredubois',
        order: 2
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'Figma',
        description: 'Outil de design collaboratif en temps réel',
        icon: 'Figma',
        category: 'Outils',
        version: undefined,
        url: 'https://www.figma.com',
        order: 1
      },
      {
        id: 2,
        name: 'Adobe XD',
        description: 'Design et prototypage d\'interfaces',
        icon: 'Layers',
        category: 'Outils',
        version: undefined,
        url: 'https://www.adobe.com/products/xd.html',
        order: 2
      },
      {
        id: 3,
        name: 'Sketch',
        description: 'Design d\'interface vectoriel',
        icon: 'PenTool',
        category: 'Outils',
        version: undefined,
        url: 'https://www.sketch.com',
        order: 3
      },
      {
        id: 4,
        name: 'After Effects',
        description: 'Animation et motion design',
        icon: 'Film',
        category: 'Animation',
        version: undefined,
        url: 'https://www.adobe.com/products/aftereffects.html',
        order: 4
      }
    ],
    
    // === SEO ===
    seo: {
      metaTitle: 'Design Créatif | Agence de Design UI/UX | IOI Digital',
      metaDescription: 'Agence de design créatif spécialisée en UI/UX. Nous concevons des expériences utilisateur mémorables et des interfaces intuitives qui transforment vos utilisateurs en clients fidèles.',
      metaKeywords: ['design', 'ui/ux', 'agence design', 'identité visuelle', 'refonte site', 'design d\'interface'],
      ogTitle: 'Design Créatif - Agence de Design UI/UX | IOI Digital',
      ogDescription: 'Des designs qui captivent et des expériences utilisateur exceptionnelles. Découvrez comment nous transformons vos idées en réalités visuelles percutantes.',
      ogImage: '/images/og/design.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/design'
    },
    
    // === Métadonnées ===
    documentationUrl: 'https://docs.ioi-digital.com/design',
    demoUrl: 'https://demo.ioi-digital.com/design',
    ctaText: 'Demander une consultation design',
    
    // === Dates ===
    createdAt: '2023-04-01T09:00:00Z',
    updatedAt: now,
    publishedAt: '2023-04-05T09:00:00Z',
    _version: 1
  },
  // === Formation ===
  {
    // === Identification ===
    id: 6,
    type: 'training',
    status: 'active',
    slug: 'formation',
    
    // === Contenu principal ===
    title: 'Formation Professionnelle',
    shortDescription: 'Formations certifiantes et sur mesure pour maîtriser les technologies et méthodologies du numérique',
    fullDescription: 'Développez les compétences de vos équipes avec nos formations professionnelles animées par des experts en activité. Nos programmes couvrent un large éventail de technologies et de méthodologies, du développement web aux méthodes agiles, en passant par le design UX/UI et la cybersécurité.',
    excerpt: 'Formations professionnelles certifiantes pour monter en compétences sur les technologies numériques.',
    
    // === Visuels ===
    image: {
      src: 'http://localhost:8080/media/services/formation.jpg',
      alt: 'Formation Professionnelle - IOI Digital',
      width: 1600,
      height: 900,
      caption: 'Session de formation interactive',
      credits: 'IOI Digital'
    },
    gallery: [
      {
        src: 'http://localhost:8080/media/services/formation-1.jpg',
        alt: 'Formation en présentiel',
        width: 1200,
        height: 630
      },
      {
        src: 'http://localhost:8080/media/services/formation-2.jpg',
        alt: 'Atelier pratique',
        width: 1200,
        height: 630
      }
    ],
    icon: 'GraduationCap',
    
    // === Métadonnées ===
    isPopular: true,
    isFeatured: true,
    tags: ['formation', 'certification', 'développement', 'design', 'agile', 'cybersécurité'],
    order: 6,
    
    // === Détails du service ===
    values: [
      {
        id: 1,
        icon: ICONS.GRADUATION_CAP,
        label: 'Certifiante',
        description: 'Formations certifiantes reconnues',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.USERS,
        label: 'En petit groupe',
        description: 'Effectifs limités pour un suivi optimal',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.CLOCK,
        label: 'Flexible',
        description: 'En présentiel ou à distance',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.BRIEFCASE,
        label: 'Professionnelle',
        description: 'Animées par des experts en activité',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Formations sur mesure adaptées à vos besoins',
      'Programmes certifiants reconnus par l\'État',
      'Formateurs experts en activité',
      'Méthodes pédagogiques actives',
      'Supports de cours complets',
      'Exercices pratiques et études de cas',
      'Suivi post-formation',
      'Financement CPF et OPCO possible'
    ],
    
    // === Domaines d'application ===
    domains: [
      {
        id: 1,
        name: 'Développement',
        description: 'Formations aux langages et frameworks modernes',
        icon: ICONS.CODE,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Design',
        description: 'Formations UX/UI et outils de design',
        icon: ICONS.PAINTBRUSH,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Méthodes Agiles',
        description: 'Scrum, Kanban et gestion de projet',
        icon: ICONS.TRENDING_UP,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Cybersécurité',
        description: 'Sécurité des applications et des données',
        icon: ICONS.SHIELD,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Audit',
        description: 'Analyse de vos besoins en formation',
        icon: ICONS.SEARCH,
        steps: [
          'Évaluation des compétences',
          'Définition des objectifs',
          'Personnalisation du programme',
          'Planification des sessions'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Formation',
        description: 'Apprentissage théorique et pratique',
        icon: ICONS.GRADUATION_CAP,
        steps: [
          'Cours théoriques',
          'Exercices pratiques',
          'Études de cas',
          'Mise en situation réelle'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Accompagnement',
        description: 'Suivi post-formation',
        icon: ICONS.USERS,
        steps: [
          'Support après formation',
          'Ressources complémentaires',
          'Certification',
          'Retour d\'expérience'
        ],
        order: 3
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 1 200€',
    hasFreeTier: true,
    freeTierDescription: 'Audit de compétences offert',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Individuel',
        description: 'Pour les professionnels en reconversion',
        price: 1200,
        period: 'week',
        currency: 'EUR',
        features: [
          'Formation en groupe',
          'Support de cours',
          'Exercices pratiques',
          'Certification incluse',
          'Accès à la plateforme en ligne'
        ],
        isPopular: false,
        buttonText: 'Voir les formations',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Équipe',
        description: 'Pour les groupes de 3 à 10 personnes',
        price: 3500,
        period: 'week',
        currency: 'EUR',
        features: [
          'Formation sur mesure',
          'Cours en intra-entreprise',
          'Cas pratiques adaptés',
          'Certification incluse',
          'Support 3 mois',
          'Accès premium à la plateforme'
        ],
        isPopular: true,
        buttonText: 'Demander un devis',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Entreprise',
        description: 'Pour les formations en grand volume',
        price: 9000,
        period: 'month',
        currency: 'EUR',
        features: [
          'Programme sur mesure',
          'Formateurs dédiés',
          'Accompagnement RH',
          'Certifications incluses',
          'Support 6 mois',
          'Plateforme personnalisée',
          'Reporting avancé',
          'Formation des formateurs'
        ],
        isPopular: false,
        buttonText: 'Nous contacter',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quelle est la durée d\'une formation ?',
        answer: 'La durée varie selon les formations, de 1 jour pour les initiations à 12 semaines pour les formations certifiantes complètes. La majorité de nos formations s\'étalent sur 2 à 5 jours consécutifs ou en sessions espacées.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Les formations sont-elles éligibles au CPF ?',
        answer: 'Oui, la plupart de nos formations sont éligibles au Compte Personnel de Formation (CPF) et peuvent être financées par votre OPCO pour les formations en entreprise. Notre équipe vous accompagne dans vos démarches administratives.',
        category: 'Financement',
        order: 2
      },
      {
        id: 3,
        question: 'Proposez-vous des formations en distanciel ?',
        answer: 'Oui, toutes nos formations sont disponibles en présentiel dans nos locaux, en entreprise ou en distanciel via notre plateforme interactive qui permet une expérience d\'apprentissage optimale avec nos formateurs en direct.',
        category: 'Modalités',
        order: 3
      },
      {
        id: 4,
        question: 'Quel est le niveau requis pour suivre vos formations ?',
        answer: 'Le niveau requis varie selon les formations. Nous proposons des parcours pour tous les niveaux, du débutant à l\'expert. Chaque formation indique clairement les prérequis nécessaires et nous proposons des tests de positionnement pour vous orienter vers la formation la plus adaptée à votre niveau.',
        category: 'Prérequis',
        order: 4
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Marie Dupont',
        role: 'Développeuse Full Stack',
        company: 'TechCorp',
        content: 'La formation React avancé m\'a permis d\'approfondir mes compétences et d\'être plus efficace sur mon poste. Les formateurs sont vraiment à l\'écoute et les exercices pratiques très concrets.',
        rating: 5,
        date: '2023-05-15',
        avatar: '/images/testimonials/marie-dupont.jpg',
        order: 1
      },
      {
        id: 2,
        author: 'Thomas Leroy',
        role: 'Responsable IT',
        company: 'Innovatech',
        content: 'Nous avons fait appel à IOI Digital pour former toute notre équipe aux bonnes pratiques DevOps. L\'approche pratique et les cas concrets ont permis une mise en application immédiate dans nos projets.',
        rating: 5,
        date: '2023-07-22',
        avatar: '/images/testimonials/thomas-leroy.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      '/cas-etudes/formation-devops-entreprise',
      '/cas-etudes/transformation-numerique-formation'
    ],
    
    // === Services liés ===
    relatedServices: [1, 2, 4], // Référence aux IDs des services liés (web, mobile, maintenance)
    
    // === Technologies ===
    technologies: [
      'React',
      'Node.js',
      'Docker',
      'AWS',
      'Figma',
      'Scrum',
      'Cybersécurité'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'Montée en compétences',
        description: 'Formations pour les développeurs et designers',
        icon: 'Code',
        industries: ['Tech', 'Startups', 'ESN', 'Grands comptes'],
        benefits: [
          'Mise à jour des compétences',
          'Certifications reconnues',
          'Pédagogie active',
          'Approche pratique'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Transformation numérique',
        description: 'Accompagnement des équipes dans la transition',
        icon: 'RefreshCw',
        industries: ['Banque', 'Assurance', 'Industrie', 'Santé'],
        benefits: [
          'Acculturation digitale',
          'Méthodes agiles',
          'Gestion du changement',
          'Formation des formateurs'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Expertise métier',
        description: 'Formations spécialisées par secteur',
        icon: 'Award',
        industries: ['Finance', 'E-commerce', 'SaaS', 'Médical'],
        benefits: [
          'Expertise sectorielle',
          'Cas pratiques réels',
          'Intervenants experts',
          'Réseau professionnel'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Soft Skills',
        description: 'Développement des compétences relationnelles',
        icon: 'Users',
        industries: ['Tous secteurs'],
        benefits: [
          'Leadership',
          'Gestion de projet',
          'Communication',
          'Travail d\'équipe'
        ],
        order: 4
      }
    ],
    
    // === Experts ===
    experts: [
      {
        id: 1,
        name: 'Julien Moreau',
        role: 'Responsable Pédagogique',
        bio: 'Avec plus de 15 ans d\'expérience dans la formation aux technologies web et mobile, Julien a formé des centaines de professionnels aux bonnes pratiques de développement et aux méthodologies agiles.',
        avatar: '/images/team/julien-moreau.jpg',
        experience: 15,
        skills: ['Développement Full Stack', 'Architecture Logicielle', 'Méthodes Agiles', 'Pédagogie'],
        certifications: ['Scrum Master', 'AWS Certified', 'Google Certified Trainer'],
        linkedinUrl: 'https://linkedin.com/in/julienmoreau',
        order: 1
      },
      {
        id: 2,
        name: 'Amélie Petit',
        role: 'Formatrice UX/UI',
        bio: 'Designer UX/UI depuis 10 ans, Amélie partage son expertise en expérience utilisateur et en design d\'interface à travers des formations pratiques et concrètes, basées sur des cas réels.',
        avatar: '/images/team/amelie-petit.jpg',
        experience: 10,
        skills: ['UX Design', 'UI Design', 'Design Thinking', 'Recherche Utilisateur'],
        certifications: ['NN/g UX Certification', 'IDEO U', 'Figma Certified'],
        linkedinUrl: 'https://linkedin.com/in/ameliepetit',
        order: 2
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'Plateforme LMS',
        description: 'Notre plateforme d\'apprentissage en ligne interactive',
        icon: 'Monitor',
        category: 'Outils',
        version: undefined,
        url: 'https://app.ioi-digital.com/learning',
        order: 1
      },
      {
        id: 2,
        name: 'Salles de classe virtuelles',
        description: 'Environnement d\'apprentissage collaboratif en ligne',
        icon: 'Video',
        category: 'Outils',
        version: undefined,
        url: 'https://meet.ioi-digital.com',
        order: 2
      },
      {
        id: 3,
        name: 'Laboratoires pratiques',
        description: 'Environnements de développement en ligne',
        icon: 'Code',
        category: 'Outils',
        version: undefined,
        url: 'https://labs.ioi-digital.com',
        order: 3
      },
      {
        id: 4,
        name: 'Évaluation des compétences',
        description: 'Plateforme de tests et de certification',
        icon: 'Award',
        category: 'Outils',
        version: undefined,
        url: 'https://certification.ioi-digital.com',
        order: 4
      }
    ],
    
    // === SEO ===
    seo: {
      metaTitle: 'Formation Professionnelle en Développement et Design | IOI Digital',
      metaDescription: 'Développez les compétences de vos équipes avec nos formations professionnelles en développement, design et méthodes agiles. Formations certifiantes animées par des experts.',
      metaKeywords: ['formation', 'développement', 'design', 'certification', 'formation professionnelle', 'CPF'],
      ogTitle: 'Formation Professionnelle - Développement, Design & Méthodes Agiles | IOI Digital',
      ogDescription: 'Formations certifiantes pour professionnels du numérique. Développez vos compétences avec nos experts et obtenez des certifications reconnues par l\'État.',
      ogImage: '/images/og/formation.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/formation'
    },
    
    // === Métadonnées ===
    documentationUrl: 'https://docs.ioi-digital.com/formation',
    demoUrl: 'https://demo.ioi-digital.com/formation',
    ctaText: 'Découvrir nos formations',
    
    // === Dates ===
    createdAt: '2023-03-15T09:00:00Z',
    updatedAt: now,
    publishedAt: '2023-03-20T09:00:00Z',
    _version: 1
  },
  // === Support ===
  {
    // === Identification ===
    id: 7,
    type: 'security',
    status: 'active',
    slug: 'support',
    
    // === Contenu principal ===
    title: 'Support Technique',
    shortDescription: 'Assistance technique réactive et experte pour garantir la continuité de vos services',
    fullDescription: 'Notre équipe de support technique est disponible 24/7 pour résoudre vos problèmes techniques, répondre à vos questions et vous assister dans l\'utilisation de nos solutions. Nous nous engageons à fournir des réponses rapides et des solutions efficaces pour minimiser les temps d\'arrêt de vos services.',
    excerpt: 'Assistance technique réactive et experte pour assurer le bon fonctionnement de vos services numériques.',
    
    // === Visuels ===
    image: {
      src: 'http://localhost:8080/media/services/support.jpg',
      alt: 'Support Technique - IOI Digital',
      width: 1600,
      height: 900,
      caption: 'Équipe de support technique',
      credits: 'IOI Digital'
    },
    gallery: [
      {
        src: 'http://localhost:8080/media/services/support-1.jpg',
        alt: 'Centre d\'assistance',
        width: 1200,
        height: 630
      },
      {
        src: 'http://localhost:8080/media/services/support-2.jpg',
        alt: 'Résolution de problèmes à distance',
        width: 1200,
        height: 630
      }
    ],
    icon: 'Headset',
    
    // === Métadonnées ===
    isPopular: true,
    isFeatured: true,
    tags: ['support', 'assistance', 'technique', 'maintenance', 'dépannage', 'réactivité'],
    order: 7,
    
    // === Détails du service ===
    values: [
      {
        id: 1,
        icon: ICONS.CLOCK,
        label: 'Disponible 24/7',
        description: 'Assistance en continu, 7j/7',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.USERS,
        label: 'Équipe dédiée',
        description: 'Experts techniques qualifiés',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.ZAP,
        label: 'Réactivité',
        description: 'Intervention rapide',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.SHIELD,
        label: 'Sécurisé',
        description: 'Protection des données',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Support technique par email, chat et téléphone',
      'Assistance à distance sécurisée',
      'Gestion des incidents critiques',
      'Suivi des tickets en temps réel',
      'Documentation technique complète',
      'Formation utilisateur',
      'Rapports d\'activité mensuels',
      'Contrats de niveau de service (SLA) personnalisables'
    ],
    
    // === Domaines d'application ===
    domains: [
      {
        id: 1,
        name: 'Support Technique',
        description: 'Résolution des problèmes techniques',
        icon: ICONS.TERMINAL,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Assistance Utilisateur',
        description: 'Aide à l\'utilisation des applications',
        icon: ICONS.USERS,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Maintenance Préventive',
        description: 'Surveillance et optimisation',
        icon: ICONS.SETTINGS,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Sécurité',
        description: 'Protection et conformité',
        icon: ICONS.SHIELD,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Détection',
        description: 'Identification et qualification',
        icon: ICONS.SEARCH,
        steps: [
          'Signalement du problème',
          'Analyse initiale',
          'Niveau de priorité',
          'Affectation à un expert'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Résolution',
        description: 'Traitement et correction',
        icon: ICONS.WRENCH,
        steps: [
          'Diagnostic approfondi',
          'Proposition de solution',
          'Mise en œuvre',
          'Tests de validation'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Suivi',
        description: 'Amélioration continue',
        icon: ICONS.BAR_CHART_2,
        steps: [
          'Feedback client',
          'Analyse de la cause racine',
          'Prévention des récidives',
          'Amélioration des processus'
        ],
        order: 3
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 199€/mois',
    hasFreeTier: true,
    freeTierDescription: 'Diagnostic gratuit',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Essentiel',
        description: 'Pour les petites entreprises',
        price: 199,
        period: 'month',
        currency: 'EUR',
        features: [
          'Support par email',
          'Réponse sous 24h',
          'Pendant les heures ouvrables',
          'Accès à la base de connaissances',
          'Mises à jour de sécurité'
        ],
        isPopular: false,
        buttonText: 'Souscrire',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Professionnel',
        description: 'Pour les PME',
        price: 499,
        period: 'month',
        currency: 'EUR',
        features: [
          'Support email et chat',
          'Réponse sous 4h',
          'Assistance téléphonique',
          'Accès prioritaire',
          'Intervention à distance',
          'Rapports mensuels',
          'Jusqu\'à 5 utilisateurs'
        ],
        isPopular: true,
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Entreprise',
        description: 'Pour les grands comptes',
        price: 1299,
        period: 'month',
        currency: 'EUR',
        features: [
          'Support 24/7',
          'Réponse sous 1h (urgences)',
          'Gestionnaire de compte dédié',
          'Accès illimité aux services',
          'Maintenance préventive',
          'Formation utilisateur',
          'SLA personnalisé',
          'Jusqu\'à 20 utilisateurs',
          '+99.9% de disponibilité'
        ],
        isPopular: false,
        buttonText: 'Contactez-nous',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quels sont vos délais d\'intervention ?',
        answer: 'Nos délais d\'intervention varient selon le niveau de gravité : critiques (1h), majeurs (4h), mineurs (24h). Pour les abonnements Entreprise, nous garantissons une réponse sous 1h pour les urgences critiques 24/7.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Proposez-vous une assistance en français ?',
        answer: 'Oui, toutes nos équipes de support parlent couramment français et anglais. Nous proposons également un support en plusieurs langues selon les besoins spécifiques de nos clients internationaux.',
        category: 'Langues',
        order: 2
      },
      {
        id: 3,
        question: 'Comment accéder au support technique ?',
        answer: 'Plusieurs canaux sont à votre disposition : ticket en ligne via votre espace client, email à support@ioi-digital.com, chat en direct sur notre site, ou par téléphone pour les clients disposant d\'un abonnement Professionnel ou Entreprise.',
        category: 'Accès',
        order: 3
      },
      {
        id: 4,
        question: 'Quelle est votre disponibilité ?',
        answer: 'Nous proposons différents niveaux de disponibilité : horaires de bureau (Essentiel), étendus (Professionnel) ou 24/7 (Entreprise). Notre équipe est également joignable pour les urgences critiques en dehors des heures d\'ouverture pour tous nos clients.',
        category: 'Disponibilité',
        order: 4
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Laurent Martin',
        role: 'DSI',
        company: 'FinTech Solutions',
        content: 'Leur équipe de support a résolu un problème critique en moins d\'une heure, évitant ainsi un arrêt de production coûteux. Leur réactivité et leur expertise sont exceptionnelles.',
        rating: 5,
        date: '2023-06-18',
        avatar: '/images/testimonials/laurent-martin.jpg',
        order: 1
      },
      {
        id: 2,
        author: 'Sophie Dubois',
        role: 'Responsable IT',
        company: 'Retail Pro',
        content: 'Nous avons souscrit à l\'offre Entreprise pour notre support technique et nous ne regrettons pas notre choix. L\'équipe est compétente, réactive et toujours de bon conseil.',
        rating: 5,
        date: '2023-08-05',
        avatar: '/images/testimonials/sophie-dubois.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      '/cas-etudes/support-migration-cloud',
      '/cas-etudes/optimisation-performance-applicative'
    ],
    
    // === Services liés ===
    relatedServices: [1, 2, 3], // Référence aux IDs des services liés (web, mobile, consulting)
    
    // === Technologies ===
    technologies: [
      'Zendesk',
      'Jira Service Desk',
      'TeamViewer',
      'SLA tracking',
      'Monitoring',
      'Bases de connaissances',
      'Chatbots'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'E-commerce',
        description: 'Support pour boutiques en ligne',
        icon: 'ShoppingCart',
        industries: ['E-commerce', 'Retail', 'Marketplace'],
        benefits: [
          'Disponibilité maximale',
          'Support multi-canal',
          'Gestion des pics de charge',
          'Sécurité des paiements'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'SaaS',
        description: 'Support pour applications en mode service',
        icon: 'Cloud',
        industries: ['SaaS', 'Logiciel', 'Tech'],
        benefits: [
          'Intégration API',
          'Support technique avancé',
          'Documentation technique',
          'Gestion des versions'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Entreprise',
        description: 'Support pour grands comptes',
        icon: 'Briefcase',
        industries: ['Finance', 'Santé', 'Industrie', 'Services'],
        benefits: [
          'Compte dédié',
          'SLA personnalisé',
          'Rapports détaillés',
          'Formation utilisateurs'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Startups',
        description: 'Support évolutif',
        icon: 'Zap',
        industries: ['Startups', 'Scale-ups', 'PME innovantes'],
        benefits: [
          'Forfaits flexibles',
          'Évolutivité',
          'Expertise technique',
          'Accompagnement personnalisé'
        ],
        order: 4
      }
    ],
    
    // === Experts ===
    experts: [
      {
        id: 1,
        name: 'Thomas Leroy',
        role: 'Responsable Support',
        bio: 'Avec plus de 12 ans d\'expérience dans le support technique, Thomas dirige notre équipe avec une approche centrée sur la satisfaction client et la résolution rapide des incidents.',
        avatar: '/images/team/thomas-leroy.jpg',
        experience: 12,
        skills: ['Support technique', 'Gestion d\'équipe', 'ITIL', 'Résolution de problèmes'],
        certifications: ['ITIL v4', 'CompTIA A+', 'Google IT Support'],
        linkedinUrl: 'https://linkedin.com/in/thomasleroy',
        order: 1
      },
      {
        id: 2,
        name: 'Julie Moreau',
        role: 'Chef de projet Support',
        bio: 'Julie est spécialisée dans la mise en place de processus de support efficaces et l\'amélioration continue de la qualité de service pour nos clients entreprises.',
        avatar: '/images/team/julie-moreau.jpg',
        experience: 8,
        skills: ['Gestion de projet', 'Service Desk', 'Zendesk', 'SLA Management'],
        certifications: ['ITIL v3', 'PMP', 'Zendesk Expert'],
        linkedinUrl: 'https://linkedin.com/in/juliemoreau',
        order: 2
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'Zendesk',
        description: 'Plateforme de gestion des services d\'assistance',
        icon: 'MessageSquare',
        category: 'Outils',
        version: undefined,
        url: 'https://www.zendesk.fr',
        order: 1
      },
      {
        id: 2,
        name: 'Jira Service Desk',
        description: 'Gestion des tickets et du support client',
        icon: 'List',
        category: 'Outils',
        version: undefined,
        url: 'https://www.atlassian.com/software/jira/service-management',
        order: 2
      },
      {
        id: 3,
        name: 'TeamViewer',
        description: 'Assistance à distance sécurisée',
        icon: 'Monitor',
        category: 'Sécurité',
        version: undefined,
        url: 'https://www.teamviewer.com',
        order: 3
      },
      {
        id: 4,
        name: 'SLA Tracker',
        description: 'Suivi des engagements de service',
        icon: 'BarChart2',
        category: 'Analyse',
        version: undefined,
        url: 'https://www.slatracker.com',
        order: 4
      }
    ],
    
    // === SEO ===
    seo: {
      metaTitle: 'Support Technique Professionnel 24/7 | IOI Digital',
      metaDescription: 'Bénéficiez d\'un support technique réactif et expert pour vos applications et services numériques. Assistance 24/7, résolution rapide et suivi personnalisé.',
      metaKeywords: ['support technique', 'assistance informatique', 'support 24/7', 'dépannage', 'maintenance préventive', 'SLA'],
      ogTitle: 'Support Technique Professionnel - Assistance 24/7 | IOI Digital',
      ogDescription: 'Une équipe d\'experts à votre écoute pour résoudre vos problèmes techniques et assurer la continuité de vos services. Réponse rapide, solutions efficaces.',
      ogImage: '/images/og/support.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/support'
    },
    
    // === Métadonnées ===
    documentationUrl: 'https://docs.ioi-digital.com/support',
    demoUrl: 'https://demo.ioi-digital.com/support',
    ctaText: 'Découvrir nos offres de support',
    
    // === Dates ===
    createdAt: '2023-02-10T09:00:00Z',
    updatedAt: now,
    publishedAt: '2023-02-15T09:00:00Z',
    _version: 1
  },
  // === Sécurité Réseau ===
  {
    // === Identification ===
    id: 8,
    type: 'security',
    status: 'active',
    slug: 'securite-reseau',
    
    // === Contenu principal ===
    title: 'Sécurité Réseau',
    shortDescription: 'Protégez votre infrastructure réseau contre les cybermenaces avec nos solutions de sécurité avancées',
    fullDescription: 'Notre service de sécurité réseau protège votre infrastructure contre les cybermenaces grâce à une approche proactive et complète. Nous combinons technologies de pointe et expertise humaine pour sécuriser vos réseaux, détecter les vulnérabilités et répondre efficacement aux incidents de sécurité.',
    excerpt: 'Solutions de sécurité réseau complètes pour protéger votre infrastructure contre les cybermenaces et assurer la continuité de vos activités.',
    
    // === Visuels ===
    image: {
      src: 'http://localhost:8080/media/services/securite-reseau.jpg',
      alt: 'Sécurité Réseau - IOI Digital',
      width: 1600,
      height: 900,
      caption: 'Protection avancée des réseaux',
      credits: 'IOI Digital'
    },
    gallery: [
      {
        src: 'http://localhost:8080/media/services/securite-reseau-1.jpg',
        alt: 'Surveillance de la sécurité réseau',
        width: 1200,
        height: 630
      },
      {
        src: 'http://localhost:8080/media/services/securite-reseau-2.jpg',
        alt: 'Analyse des menaces',
        width: 1200,
        height: 630
      }
    ],
    icon: 'Shield',
    
    // === Métadonnées ===
    isPopular: true,
    isFeatured: true,
    tags: ['sécurité', 'réseau', 'cybersécurité', 'protection', 'pare-feu', 'vpn', 'audit'],
    order: 8,
    
    // === Détails du service ===
    values: [
      {
        id: 1,
        icon: ICONS.SHIELD,
        label: 'Protection avancée',
        description: 'Contre toutes les menaces',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.SHIELD,
        label: 'Surveillance 24/7',
        description: 'Détection en temps réel',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.LOCK,
        label: 'Chiffrement',
        description: 'Données sécurisées',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.SHIELD,
        label: 'Détection d\'intrusion',
        description: 'Réponse immédiate',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Audit de sécurité complet',
      'Mise en place de pare-feu nouvelle génération',
      'Détection et prévention des intrusions (IDS/IPS)',
      'Sécurisation des accès distants (VPN sécurisé)',
      'Surveillance continue 24/7',
      'Tests d\'intrusion et d\'audit',
      'Gestion des vulnérabilités',
      'Formation des équipes à la cybersécurité'
    ],
    
    // === Domaines d'application ===
    domains: [
      {
        id: 1,
        name: 'Sécurité du réseau',
        description: 'Protection de l\'infrastructure',
        icon: ICONS.SHIELD,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Sécurité des données',
        description: 'Protection des informations sensibles',
        icon: ICONS.LOCK,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Conformité',
        description: 'Respect des réglementations',
        icon: ICONS.SHIELD,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Formation',
        description: 'Sensibilisation des équipes',
        icon: ICONS.USERS,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Évaluation',
        description: 'Analyse des risques',
        icon: ICONS.SEARCH,
        steps: [
          'Audit de sécurité',
          'Identification des vulnérabilités',
          'Analyse des menaces',
          'Évaluation des risques'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Protection',
        description: 'Mise en place des mesures',
        icon: ICONS.SHIELD,
        steps: [
          'Définition de la politique de sécurité',
          'Mise en place des solutions techniques',
          'Configuration des pare-feux',
          'Chiffrement des données'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Surveillance',
        description: 'Détection continue',
        icon: ICONS.SHIELD,
        steps: [
          'Monitoring 24/7',
          'Analyse des logs',
          'Détection des anomalies',
          'Alertes en temps réel'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Réponse',
        description: 'Gestion des incidents',
        icon: ICONS.SHIELD,
        steps: [
          'Plan de réponse aux incidents',
          'Contrôle des dégâts',
          'Éradication de la menace',
          'Retour à la normale'
        ],
        order: 4
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 999€/mois',
    hasFreeTier: true,
    freeTierDescription: 'Audit de sécurité initial gratuit',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Essentiel',
        description: 'Pour les petites entreprises',
        price: 999,
        period: 'month',
        currency: 'EUR',
        features: [
          'Audit de sécurité initial',
          'Pare-feu de base',
          'Analyse de vulnérabilités trimestrielle',
          'Support technique 9h-18h',
          'Rapport mensuel de sécurité'
        ],
        isPopular: false,
        buttonText: 'Souscrire',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Professionnel',
        description: 'Pour les PME',
        price: 2499,
        period: 'month',
        currency: 'EUR',
        features: [
          'Tout inclus dans Essentiel +',
          'Pare-feu nouvelle génération',
          'Surveillance 24/7',
          'Détection d\'intrusion',
          'Tests de pénétration annuels',
          'Support prioritaire',
          'Jusqu\'à 50 utilisateurs'
        ],
        isPopular: true,
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Entreprise',
        description: 'Pour les grands comptes',
        price: 5999,
        period: 'month',
        currency: 'EUR',
        features: [
          'Tout inclus dans Professionnel +',
          'Solution de sécurité complète',
          'Gestion des accès privilégiés',
          'Tests de pénétration trimestriels',
          'Formation des équipes',
          'Support 24/7 avec temps de réponse garanti',
          'Audit de conformité',
          'Jusqu\'à 200 utilisateurs',
          'Accompagnement personnalisé'
        ],
        isPopular: false,
        buttonText: 'Contactez-nous',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quelle est la durée typique d\'un audit de sécurité ?',
        answer: 'La durée d\'un audit de sécurité varie en fonction de la taille et de la complexité de votre infrastructure. En moyenne, comptez entre 5 et 15 jours ouvrables pour un audit complet. Nous commençons par une évaluation préliminaire pour vous fournir une estimation précise.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Proposez-vous des formations en cybersécurité ?',
        answer: 'Oui, nous proposons des formations sur mesure adaptées à différents niveaux (débutant à avancé) couvrant divers aspects de la cybersécurité : sensibilisation aux menaces, bonnes pratiques, réponse aux incidents, conformité RGPD, etc. Ces formations peuvent être organisées en présentiel ou à distance.',
        category: 'Formation',
        order: 2
      },
      {
        id: 3,
        question: 'Comment gérez-vous les urgences en cas de cyberattaque ?',
        answer: 'Notre équipe d\'intervention d\'urgence est disponible 24/7 pour répondre aux incidents critiques. Nous suivons un protocole strict d\'intervention qui inclut l\'endiguement de la menace, l\'évaluation des dommages, l\'éradication de la menace et la récupération des systèmes. Les clients disposant d\'un contrat de support bénéficient d\'un numéro d\'urgence dédié.',
        category: 'Urgence',
        order: 3
      },
      {
        id: 4,
        question: 'Êtes-vous certifiés pour réaliser des audits de conformité ?',
        answer: 'Oui, notre équipe comprend des auditeurs certifiés ISO 27001, HDS, PCI DSS et qualifiés pour le RGPD. Nous pouvons vous accompagner dans vos démarches de conformité réglementaire et vous aider à obtenir les certifications nécessaires à votre activité.',
        category: 'Conformité',
        order: 4
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Marc Dubois',
        role: 'DSI',
        company: 'Banque Européenne',
        content: 'La qualité de leur service de sécurité réseau a dépassé nos attentes. Après avoir détecté une tentative d\'intrusion sophistiquée, leur équipe a réagi en quelques minutes, évitant ainsi une potentielle catastrophe financière.',
        rating: 5,
        date: '2023-05-12',
        avatar: '/images/testimonials/marc-dubois.jpg',
        order: 1
      },
      {
        id: 2,
        author: 'Sophie Martin',
        role: 'Responsable IT',
        company: 'SantéPlus',
        content: 'Leur expertise en sécurité des données de santé nous a été précieuse pour notre mise en conformité HDS. Leur approche proactive et leur réactivité ont fait toute la différence pour notre établissement.',
        rating: 5,
        date: '2023-07-22',
        avatar: '/images/testimonials/sophie-martin.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      '/cas-etudes/securisation-reseau-banque',
      '/cas-etudes/mise-en-conformite-rgpd',
      '/cas-etudes/protection-contre-ransomware'
    ],
    
    // === Services liés ===
    relatedServices: [1, 2, 3, 7], // Référence aux IDs des services liés (web, mobile, consulting, support)
    
    // === Technologies ===
    technologies: [
      'Palo Alto Networks',
      'Cisco',
      'Fortinet',
      'Check Point',
      'SIEM',
      'EDR/XDR',
      'Zerotrust',
      'VPN'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'Secteur Financier',
        description: 'Sécurité des transactions et conformité',
        icon: 'DollarSign',
        industries: ['Banque', 'Assurance', 'FinTech'],
        benefits: [
          'Conformité DSP2/RGPD',
          'Protection des transactions',
          'Détection des fraudes',
          'Audits de sécurité'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Santé',
        description: 'Protection des données sensibles',
        icon: 'Heart',
        industries: ['Hôpitaux', 'Laboratoires', 'Assurance Maladie'],
        benefits: [
          'Certification HDS',
          'Chiffrement des données',
          'Accès sécurisé',
          'Traçabilité des accès'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'E-commerce',
        description: 'Sécurisation des paiements',
        icon: 'ShoppingCart',
        industries: ['E-commerce', 'Marketplace', 'Retail'],
        benefits: [
          'Certification PCI DSS',
          'Protection contre la fraude',
          'Sécurisation des transactions',
          'Haute disponibilité'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Entreprises',
        description: 'Protection des données métier',
        icon: 'Briefcase',
        industries: ['Industrie', 'Services', 'Technologie'],
        benefits: [
          'Sécurité du réseau',
          'Protection des données',
          'Formation des équipes',
          'Gestion des accès'
        ],
        order: 4
      }
    ],
    
    // === Experts ===
    experts: [
      {
        id: 1,
        name: 'Julien Moreau',
        role: 'Responsable Cybersécurité',
        bio: 'Avec plus de 15 ans d\'expérience en cybersécurité, Julien a dirigé des équipes d\'experts dans la protection d\'infrastructures critiques. Expert certifié CISSP et CEH, il est spécialisé dans la gestion des risques et la réponse aux incidents.',
        avatar: '/images/team/julien-moreau.jpg',
        experience: 15,
        skills: ['Gestion des risques', 'Audit de sécurité', 'Pentest', 'Conformité'],
        certifications: ['CISSP', 'CEH', 'ISO 27001 Lead Auditor'],
        linkedinUrl: 'https://linkedin.com/in/julienmoreau',
        order: 1
      },
      {
        id: 2,
        name: 'Camille Leroy',
        role: 'Architecte Sécurité',
        bio: 'Spécialiste des architectures Zero Trust et de la sécurité des réseaux, Camille conçoit des solutions de sécurité sur mesure pour nos clients. Forte de 10 ans d\'expérience, elle est certifiée CCNP Security et Fortinet NSE7.',
        avatar: '/images/team/camille-leroy.jpg',
        experience: 10,
        skills: ['Architecture réseau', 'Zero Trust', 'Pare-feu', 'VPN'],
        certifications: ['CCNP Security', 'Fortinet NSE7', 'CISSP'],
        linkedinUrl: 'https://linkedin.com/in/camilleleroy',
        order: 2
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'Palo Alto Networks',
        description: 'Pare-feu nouvelle génération',
        icon: 'Shield',
        category: 'Sécurité',
        version: 'PAN-OS 11.0',
        url: 'https://www.paloaltonetworks.com',
        order: 1
      },
      {
        id: 2,
        name: 'Cisco Secure',
        description: 'Solutions de sécurité intégrées',
        icon: 'Shield',
        category: 'Sécurité',
        version: undefined,
        url: 'https://www.cisco.com/c/fr_fr/products/security/index.html',
        order: 2
      },
      {
        id: 3,
        name: 'FortiGate',
        description: 'Pare-feu et sécurité réseau',
        icon: 'Shield',
        category: 'Sécurité',
        version: '7.4',
        url: 'https://www.fortinet.com/products/next-generation-firewall.html',
        order: 3
      },
      {
        id: 4,
        name: 'SIEM',
        description: 'Gestion des événements de sécurité',
        icon: 'Activity',
        category: 'Analyse',
        version: undefined,
        url: 'https://www.ibm.com/security/security-intelligence',
        order: 4
      }
    ],
    
    // === SEO ===
    seo: {
      metaTitle: 'Sécurité Réseau et Cybersécurité | IOI Digital',
      metaDescription: 'Protégez votre entreprise contre les cybermenaces avec nos solutions de sécurité réseau complètes. Audit, protection, surveillance et réponse aux incidents par des experts certifiés.',
      metaKeywords: ['sécurité réseau', 'cybersécurité', 'protection des données', 'audit de sécurité', 'pare-feu', 'conformité RGPD', 'sécurité informatique'],
      ogTitle: 'Expert en Sécurité Réseau - Protection contre les Cybermenaces | IOI Digital',
      ogDescription: 'Solutions de sécurité réseau sur mesure pour protéger votre entreprise contre les cyberattaques. Détection avancée, réponse aux incidents et conformité réglementaire.',
      ogImage: '/images/og/cybersecurite.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/securite-reseau'
    },
    
    // === Métadonnées ===
    documentationUrl: 'https://docs.ioi-digital.com/securite',
    demoUrl: 'https://demo.ioi-digital.com/securite',
    ctaText: 'Évaluer votre sécurité réseau',
    
    // === Dates ===
    createdAt: '2023-01-15T09:00:00Z',
    updatedAt: now,
    publishedAt: '2023-01-20T09:00:00Z',
    _version: 1
  },
  // === Maintenance Équipement Réseau ===
  {
    // === Identification ===
    id: 9,
    type: 'maintenance',
    status: 'active',
    slug: 'maintenance-equipement-reseau',
    
    // === Informations principales ===
    title: 'Maintenance d\'Équipement Réseau',
    shortDescription: 'Services complets de maintenance préventive et corrective pour vos équipements réseau',
    fullDescription: 'Notre service de maintenance d\'équipement réseau assure la performance optimale, la sécurité et la disponibilité de votre infrastructure réseau. Nous proposons des contrats de maintenance adaptés à vos besoins, incluant la surveillance, le dépannage, et le remplacement des équipements défectueux.',
    excerpt: 'Maintenance professionnelle pour routeurs, switchs, pare-feux et autres équipements réseau critiques',
    
    // === Images et médias ===
    image: {
      src: 'http://localhost:8080/media/services/maintenance-reseau.jpg',
      alt: 'Maintenance d\'équipement réseau professionnel',
      width: 1200,
      height: 800,
      caption: 'Maintenance professionnelle de votre infrastructure réseau',
      credits: 'IOI Digital'
    },
    
    gallery: [
      {
        src: 'http://localhost:8080/media/services/maintenance-reseau-1.jpg',
        alt: 'Technicien intervenant sur un équipement réseau',
        caption: 'Intervention technique sur site',
        width: 1200,
        height: 800
      },
      {
        src: 'http://localhost:8080/media/services/maintenance-reseau-2.jpg',
        alt: 'Salle réseau avec équipements professionnels',
        caption: 'Infrastructure réseau sécurisée',
        width: 1200,
        height: 800
      }
    ],
    
    // === Métadonnées ===
    icon: ICONS.SERVER,
    isPopular: true,
    isFeatured: true,
    tags: ['maintenance', 'réseau', 'informatique', 'infrastructure', 'sécurité'],
    order: 9,
    
    // === Valeurs et avantages ===
    values: [
      {
        id: 1,
        icon: ICONS.SHIELD,
        label: 'Sécurité optimale',
        description: 'Protection contre les menaces',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.CLOCK,
        label: 'Disponibilité 24/7',
        description: 'Support en continu',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.ZAP,
        label: 'Intervention rapide',
        description: 'Délais courts',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.SETTINGS,
        label: 'Maintenance préventive',
        description: 'Évitez les pannes',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Surveillance 24/7 des équipements',
      'Maintenance préventive programmée',
      'Dépannage et réparation',
      'Mises à jour logicielles',
      'Rapports détaillés',
      'Support technique expert'
    ],
    
    // === Domaines d\'intervention ===
    domains: [
      {
        id: 1,
        name: 'Routeurs',
        description: 'Maintenance des routeurs',
        icon: ICONS.SERVER,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Switchs',
        description: 'Gestion des switchs',
        icon: ICONS.SERVER,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Pare-feux',
        description: 'Sécurité réseau',
        icon: ICONS.SHIELD,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Points d\'accès',
        description: 'Réseau sans fil',
        icon: ICONS.SERVER,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Diagnostic',
        description: 'Analyse complète',
        icon: ICONS.SEARCH,
        steps: [
          'Audit du réseau',
          'Identification des problèmes',
          'Rapport détaillé',
          'Plan d\'action'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Maintenance',
        description: 'Interventions programmées',
        icon: ICONS.SETTINGS,
        steps: [
          'Nettoyage des équipements',
          'Mises à jour logicielles',
          'Vérification des sauvegardes',
          'Tests de performance'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Surveillance',
        description: 'Suivi en temps réel',
        icon: ICONS.EYE_OFF,
        steps: [
          'Monitoring 24/7',
          'Alertes en temps réel',
          'Rapports hebdomadaires',
          'Recommandations'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Support',
        description: 'Assistance technique',
        icon: ICONS.USERS,
        steps: [
          'Hotline dédiée',
          'Assistance à distance',
          'Déplacement sur site',
          'Suivi des interventions'
        ],
        order: 4
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 299€/mois',
    hasFreeTier: true,
    freeTierDescription: 'Audit réseau gratuit',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Essentiel',
        description: 'Pour les petites entreprises',
        price: 299,
        period: 'month',
        currency: 'EUR',
        features: [
          'Surveillance basique',
          'Support par email',
          'Rapports mensuels',
          'Intervention sur RDV',
          'Temps de réponse : 8h'
        ],
        isPopular: false,
        ctaText: 'Démarrer',
        buttonText: 'Choisir cette offre',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Professionnel',
        description: 'Pour les PME',
        price: 599,
        period: 'month',
        currency: 'EUR',
        features: [
          'Surveillance avancée',
          'Support téléphonique',
          'Rapports hebdomadaires',
          'Intervention sous 4h',
          'Maintenance préventive mensuelle',
          'Temps de réponse : 4h'
        ],
        isPopular: true,
        ctaText: 'Nous contacter',
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Entreprise',
        description: 'Pour les grands comptes',
        price: 'Sur devis',
        period: 'month',
        currency: 'EUR',
        features: [
          'Surveillance 24/7',
          'Support prioritaire 24/7',
          'Rapports quotidiens',
          'Intervention d\'urgence 24/7',
          'Maintenance préventive hebdomadaire',
          'Temps de réponse : 1h',
          'Gestion des sauvegardes',
          'Audit trimestriel'
        ],
        isPopular: false,
        ctaText: 'Demander un devis',
        buttonText: 'Nous contacter',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quels types d\'équipements prenez-vous en charge ?',
        answer: 'Nous prenons en charge tous les types d\'équipements réseau : routeurs, switchs, pare-feux, points d\'accès, contrôleurs WLAN, et plus encore. Nous travaillons avec les principales marques du marché.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Quelle est la durée moyenne d\'intervention ?',
        answer: 'La durée d\'intervention varie en fonction de la nature du problème. Pour les interventions standard, nous nous engageons sur un délai de 4 heures ouvrables. Pour les urgences, nous proposons des interventions sous 1 heure selon votre contrat.',
        category: 'Interventions',
        order: 2
      },
      {
        id: 3,
        question: 'Proposez-vous des contrats de maintenance annuels ?',
        answer: 'Oui, nous proposons des contrats de maintenance annuels avec des tarifs préférentiels. Ces contrats incluent généralement des interventions illimitées, des maintenances préventives régulières et des réductions sur les pièces détachées.',
        category: 'Contrats',
        order: 3
      },
      {
        id: 4,
        question: 'Intervenez-vous en dehors des heures ouvrables ?',
        answer: 'Oui, nous proposons des interventions 24/7 pour les clients disposant d\'un contrat Entreprise. Pour les autres formules, des interventions en dehors des heures ouvrables sont possibles avec des frais supplémentaires.',
        category: 'Disponibilité',
        order: 4
      },
      {
        id: 5,
        question: 'Comment se déroule une intervention standard ?',
        answer: 'Une intervention standard commence par un diagnostic à distance lorsque c\'est possible. Si nécessaire, un technicien se déplace sur site pour effectuer les réparations. Un rapport détaillé vous est ensuite fourni avec les actions entreprises et nos recommandations.',
        category: 'Processus',
        order: 5
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Marc DUBOIS',
        role: 'DSI',
        company: 'Entreprise ABC',
        content: 'Depuis que nous avons souscrit au service de maintenance, nos équipements réseau n\'ont connu aucun temps d\'arrêt critique. Réactivité et professionnalisme au rendez-vous !',
        rating: 5,
        date: '2023-05-15',
        avatar: '/images/testimonials/avatar-1.jpg',
        projectLink: 'https://example.com/case-studies/entreprise-abc',
        order: 1
      },
      {
        id: 2,
        author: 'Sophie MARTIN',
        role: 'Responsable IT',
        company: 'Startup XYZ',
        content: 'L\'équipe est réactive et compétente. Les interventions sont rapides et bien documentées. Nous avons considérablement réduit nos temps d\'arrêt depuis que nous travaillons avec eux.',
        rating: 5,
        date: '2023-06-22',
        avatar: '/images/testimonials/avatar-2.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      'Optimisation du réseau pour une entreprise de 200 employés',
      'Migration vers une infrastructure réseau haute disponibilité',
      'Mise en place d\'une solution de surveillance complète'
    ],
    
    // === Services liés ===
    relatedServices: [4, 7, 8], // Maintenance, Support, Sécurité Réseau
    
    // === Technologies ===
    technologies: [
      'Cisco',
      'Juniper',
      'Fortinet',
      'Ubiquiti',
      'HP/Aruba',
      'Palo Alto',
      'Check Point',
      'SonicWall'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'Entreprises multisites',
        description: 'Gestion centralisée des équipements réseau sur plusieurs sites',
        icon: ICONS.GLOBE,
        industries: ['Réseaux d\'entreprise', 'Succursales', 'Réseaux distribués'],
        benefits: [
          'Visibilité centralisée',
          'Maintenance simplifiée',
          'Coûts réduits',
          'Sécurité homogène'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Centres de données',
        description: 'Maintenance des infrastructures critiques',
        icon: ICONS.SERVER,
        industries: ['Hébergeurs', 'Cloud', 'Entreprises'],
        benefits: [
          'Haute disponibilité',
          'Sécurité renforcée',
          'Évolutivité',
          'Optimisation des performances'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Réseaux d\'entreprise',
        description: 'Gestion complète du réseau local',
        icon: ICONS.TERMINAL,
        industries: ['PME', 'Grands comptes', 'Administrations'],
        benefits: [
          'Performance optimale',
          'Sécurité des données',
          'Support réactif',
          'Conformité'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Hôtellerie et restauration',
        description: 'Réseaux WiFi et accès invités sécurisés',
        icon: ICONS.SERVER,
        industries: ['Hôtels', 'Restaurants', 'Cafés'],
        benefits: [
          'Accès invités sécurisé',
          'Bandes passantes gérées',
          'Séparation des réseaux',
          'Support 24/7'
        ],
        order: 4
      }
    ],
    
    // === Nos Experts ===
    experts: [
      {
        id: 1,
        name: 'Thomas LEROY',
        role: 'Expert Réseaux Senior',
        bio: 'Avec plus de 15 ans d\'expérience dans les infrastructures réseau, Thomas a géré des déploiements majeurs pour des entreprises de toutes tailles. Il est certifié CCNP et Fortinet NSE4.',
        avatar: '/images/experts/thomas-leroy.jpg',
        experience: 15,
        skills: ['Routage', 'Sécurité', 'VoIP', 'WiFi'],
        certifications: ['CCNP', 'NSE4', 'ACMP'],
        linkedinUrl: 'https://linkedin.com/in/thomasleroy',
        order: 1
      },
      {
        id: 2,
        name: 'Laura DUBOIS',
        role: 'Ingénieure Support N3',
        bio: 'Spécialiste en résolution de problèmes complexes, Laura excelle dans le diagnostic et la résolution des incidents réseau critiques. Elle est certifiée CCIE et possède une expertise en sécurité des réseaux.',
        avatar: '/images/experts/laura-dubois.jpg',
        experience: 8,
        skills: ['Dépannage', 'Sécurité', 'Performance', 'Automatisation'],
        certifications: ['CCIE', 'PCNSE', 'JNCIE'],
        linkedinUrl: 'https://linkedin.com/in/lauredubois',
        order: 2
      },
      {
        id: 3,
        name: 'Mehdi KHALFALLAH',
        role: 'Technicien Réseaux',
        bio: 'Technicien terrain expérimenté, Mehdi intervient rapidement pour résoudre les problèmes matériels et assurer la maintenance préventive des équipements réseau de nos clients.',
        avatar: '/images/experts/mehdi-khalfallah.jpg',
        experience: 5,
        skills: ['Installation', 'Maintenance', 'Câblage', 'Support'],
        certifications: ['CCNA', 'A+', 'Network+'],
        linkedinUrl: 'https://linkedin.com/in/mehdikh',
        order: 3
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'Surveillance Réseau',
        description: 'Solutions complètes de monitoring',
        icon: ICONS.MONITOR,
        category: 'Logiciel',
        version: '2.5',
        url: 'https://example.com/network-monitoring',
        order: 1
      },
      {
        id: 2,
        name: 'Gestion des Configurations',
        description: 'Sauvegarde et gestion des configurations',
        icon: ICONS.SETTINGS,
        category: 'Outil',
        version: '1.3',
        order: 2
      },
      {
        id: 3,
        name: 'Analyse des Performances',
        description: 'Outils d\'analyse avancée',
        icon: ICONS.BAR_CHART_2,
        category: 'Logiciel',
        version: '3.1',
        order: 3
      },
      {
        id: 4,
        name: 'Sécurité Réseau',
        description: 'Protection avancée',
        icon: ICONS.SHIELD,
        category: 'Sécurité',
        version: '4.2',
        order: 4
      }
    ],
    
    // === Métadonnées SEO ===
    seo: {
      metaTitle: 'Maintenance d\'Équipement Réseau Professionnel | IOI Digital',
      metaDescription: 'Services complets de maintenance préventive et corrective pour vos équipements réseau. Interventions rapides par des experts certifiés. Disponibilité 24/7.',
      metaKeywords: ['maintenance réseau', 'réparation équipement réseau', 'support technique réseau', 'maintenance informatique', 'dépannage réseau'],
      ogTitle: 'Maintenance d\'Équipement Réseau - Services Professionnels | IOI Digital',
      ogDescription: 'Assurez la performance et la sécurité de votre infrastructure réseau avec nos services de maintenance professionnelle. Interventions rapides par des experts certifiés.',
      ogImage: '/images/og/maintenance-reseau.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/maintenance-equipement-reseau'
    },
    
    // === Liens et appels à l'action ===
    documentationUrl: 'https://docs.ioi-digital.com/maintenance-reseau',
    demoUrl: 'https://demo.ioi-digital.com/maintenance-reseau',
    ctaText: 'Demander un audit réseau gratuit',
    
    // === Dates ===
    createdAt: '2023-03-15T10:00:00Z',
    updatedAt: '2023-08-01T14:30:00Z',
    publishedAt: '2023-03-20T09:15:00Z',
    _version: 1
  },
  // === Cyber Sécurité ===
  {
    // === Identification ===
    id: 10,
    type: 'security',
    status: 'active',
    slug: 'cyber-securite',
    
    // === Informations principales ===
    title: 'Cyber Sécurité',
    shortDescription: 'Protection avancée contre les cybermenaces et sécurisation de vos systèmes',
    fullDescription: 'Notre service de Cyber Sécurité offre une protection complète contre les menaces en ligne et les attaques informatiques. Nous mettons en place des solutions de sécurité sur mesure pour protéger vos données sensibles, prévenir les intrusions et assurer la conformité aux réglementations en vigueur.',
    excerpt: 'Solutions de sécurité informatique complètes pour protéger votre entreprise contre les cybermenaces',
    
    // === Images et médias ===
    image: {
      src: 'http://localhost:8080/media/services/cyber-securite.jpg',
      alt: 'Protection avancée contre les cybermenaces',
      width: 1200,
      height: 800,
      caption: 'Solutions de cybersécurité avancées pour votre entreprise',
      credits: 'IOI Digital'
    },
    
    gallery: [
      {
        src: 'http://localhost:8080/media/services/cyber-securite-1.jpg',
        alt: 'Analyse des vulnérabilités de sécurité',
        width: 1200,
        height: 800,
        caption: 'Audit de sécurité approfondi'
      },
      {
        src: '/images/services/cyber-securite-2.jpg',
        alt: 'Protection des données sensibles',
        caption: 'Chiffrement des données'
      }
    ],
    
    // === Métadonnées ===
    icon: ICONS.SHIELD,
    isPopular: true,
    isFeatured: true,
    tags: ['sécurité', 'cybersécurité', 'protection', 'données', 'conformité'],
    order: 10,
    
    // === Valeurs et avantages ===
    values: [
      {
        id: 1,
        icon: ICONS.SHIELD,
        label: 'Protection complète',
        description: 'Contre toutes les menaces',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.LOCK,
        label: 'Confidentialité',
        description: 'Vos données sont sécurisées',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.ZAP,
        label: 'Réactivité',
        description: 'Détection immédiate',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.SHIELD,
        label: 'Conformité',
        description: 'Aux normes en vigueur',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Audit de sécurité complet',
      'Protection contre les malwares et ransomwares',
      'Détection et réponse aux incidents',
      'Formation des employés',
      'Sauvegarde sécurisée',
      'Conformité RGPD'
    ],
    
    // === Domaines d'intervention ===
    domains: [
      {
        id: 1,
        name: 'Sécurité réseau',
        description: 'Protection du périmètre',
        icon: ICONS.SHIELD,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Sécurité des données',
        description: 'Chiffrement et protection',
        icon: ICONS.LOCK,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Test d\'intrusion',
        description: 'Identification des failles',
        icon: ICONS.SEARCH,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Formation',
        description: 'Sensibilisation sécurité',
        icon: ICONS.GRADUATION_CAP,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Évaluation',
        description: 'Analyse des risques',
        icon: ICONS.SEARCH,
        steps: [
          'Audit de sécurité',
          'Cartographie des actifs',
          'Identification des vulnérabilités',
          'Rapport détaillé'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Protection',
        description: 'Mise en place des solutions',
        icon: ICONS.SHIELD,
        steps: [
          'Configuration des pare-feux',
          'Chiffrement des données',
          'Authentification forte',
          'Sauvegardes sécurisées'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Surveillance',
        description: 'Détection des menaces',
        icon: ICONS.EYE_OFF,
        steps: [
          'Monitoring 24/7',
          'Analyse des logs',
          'Détection des anomalies',
          'Alertes en temps réel'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Réponse',
        description: 'Gestion des incidents',
        icon: ICONS.ZAP,
        steps: [
          'Plan de continuité',
          'Contrôle des dégâts',
          'Éradication de la menace',
          'Retour à la normale'
        ],
        order: 4
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 499€/mois',
    hasFreeTier: true,
    freeTierDescription: 'Audit de sécurité gratuit',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Essentiel',
        description: 'Pour les petites entreprises',
        price: 499,
        period: 'month',
        currency: 'EUR',
        features: [
          'Audit de sécurité initial',
          'Analyse des vulnérabilités',
          'Rapport détaillé',
          'Recommandations',
          'Support par email'
        ],
        isPopular: false,
        ctaText: 'Démarrer',
        buttonText: 'Choisir cette offre',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Avancé',
        description: 'Pour les PME',
        price: 999,
        period: 'month',
        currency: 'EUR',
        features: [
          'Tout dans Essentiel',
          'Surveillance 24/7',
          'Détection des menaces',
          'Support téléphonique',
          'Mises à jour régulières',
          'Rapports mensuels'
        ],
        isPopular: true,
        ctaText: 'Nous contacter',
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Entreprise',
        description: 'Pour les grands comptes',
        price: 'Sur devis',
        period: 'month',
        currency: 'EUR',
        features: [
          'Tout dans Avancé',
          'Support prioritaire 24/7',
          'Tests d\'intrusion',
          'Formation des employés',
          'Audits trimestriels',
          'Assistance à la conformité',
          'Gestion des incidents',
          'Rapports personnalisés'
        ],
        isPopular: false,
        ctaText: 'Demander un devis',
        buttonText: 'Nous contacter',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quelle est la différence entre la sécurité réseau et la cybersécurité ?',
        answer: 'La sécurité réseau se concentre sur la protection de l\'infrastructure réseau, tandis que la cybersécurité couvre un spectre plus large, incluant la protection des données, la sécurité des applications, la formation des utilisateurs et la conformité aux réglementations.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Combien de temps dure un audit de sécurité ?',
        answer: 'La durée d\'un audit de sécurité varie en fonction de la taille de votre infrastructure et de la portée de l\'audit. En moyenne, comptez entre 5 et 15 jours ouvrés pour un audit complet. Nous commençons par une évaluation préliminaire pour vous fournir un calendrier précis.',
        category: 'Audit',
        order: 2
      },
      {
        id: 3,
        question: 'Proposez-vous des formations en cybersécurité pour nos employés ?',
        answer: 'Oui, nous proposons des programmes de formation sur mesure pour sensibiliser vos employés aux bonnes pratiques de sécurité, reconnaître les tentatives d\'hameçonnage, et adopter des comportements sécurisés en ligne.',
        category: 'Formation',
        order: 3
      },
      {
        id: 4,
        question: 'Comment gérez-vous les violations de données ?',
        answer: 'En cas de violation de données, notre équipe intervient immédiatement pour contenir l\'incident, évaluer l\'étendue des dégâts, sécuriser les systèmes, et vous accompagner dans les démarches de notification et de conformité légale si nécessaire.',
        category: 'Incidents',
        order: 4
      },
      {
        id: 5,
        question: 'Quelles réglementations couvrez-vous ?',
        answer: 'Nous vous aidons à vous conformer aux principales réglementations comme le RGPD, la directive NIS, la norme ISO 27001, et d\'autres cadres réglementaires spécifiques à votre secteur d\'activité.',
        category: 'Conformité',
        order: 5
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Julien LEFEBVRE',
        role: 'Directeur Technique',
        company: 'FinTech Solutions',
        content: 'La mise en place de leur solution de cybersécurité a considérablement renforcé notre posture de sécurité. Leur équipe est réactive et extrêmement compétente.',
        rating: 5,
        date: '2023-07-10',
        avatar: '/images/testimonials/avatar-3.jpg',
        projectLink: 'https://example.com/case-studies/fintech-solutions',
        order: 1
      },
      {
        id: 2,
        author: 'Camille DUPONT',
        role: 'Responsable RGPD',
        company: 'SantéPlus',
        content: 'Leur expertise en matière de conformité RGPD et de sécurisation des données de santé a été inestimable pour notre établissement. Un partenaire de confiance.',
        rating: 5,
        date: '2023-06-15',
        avatar: '/images/testimonials/avatar-4.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      'Mise en place d\'une politique de sécurité pour une entreprise du secteur financier',
      'Audit de sécurité et renforcement pour un hôpital',
      'Formation à la cybersécurité pour une PME industrielle'
    ],
    
    // === Services liés ===
    relatedServices: [4, 7, 8, 9], // Maintenance, Support, Sécurité Réseau, Maintenance Équipement Réseau
    
    // === Technologies ===
    technologies: [
      'Pare-feux nouvelle génération',
      'EDR (Endpoint Detection and Response)',
      'SIEM (Security Information and Event Management)',
      'Chiffrement avancé',
      'Authentification à facteurs multiples',
      'VPN sécurisés',
      'Gestion des identités et accès (IAM)',
      'Tests d\'intrusion'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'Secteur financier',
        description: 'Protection des transactions et conformité',
        icon: ICONS.BAR_CHART_2,
        industries: ['Banques', 'Assurances', 'Fintech'],
        benefits: [
          'Conformité réglementaire',
          'Protection des transactions',
          'Détection des fraudes',
          'Confidentialité des données'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Santé',
        description: 'Sécurité des données médicales',
        icon: ICONS.HEART,
        industries: ['Hôpitaux', 'Laboratoires', 'Cliniques'],
        benefits: [
          'Conformité RGPD',
          'Protection des DPI',
          'Sécurisation des échanges',
          'Traçabilité des accès'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'E-commerce',
        description: 'Sécurisation des paiements',
        icon: ICONS.SHOPPING_CART,
        industries: ['Boutiques en ligne', 'Marketplaces', 'Services en ligne'],
        benefits: [
          'Protection des paiements',
          'Sécurité des données clients',
          'Prévention des fraudes',
          'Confiance des consommateurs'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Entreprises',
        description: 'Protection globale',
        icon: ICONS.BRIEFCASE,
        industries: ['PME', 'ETI', 'Grands comptes'],
        benefits: [
          'Sécurité des données',
          'Protection du réseau',
          'Formation des employés',
          'Conformité légale'
        ],
        order: 4
      }
    ],
    
    // === Nos Experts ===
    experts: [
      {
        id: 1,
        name: 'Alexandre MARCHAND',
        role: 'Responsable Cybersécurité',
        bio: 'Avec plus de 12 ans d\'expérience en sécurité informatique, Alexandre a dirigé des projets majeurs de sécurisation d\'infrastructures critiques. Expert en gestion des risques et conformité.',
        avatar: '/images/experts/alexandre-marchand.jpg',
        experience: 12,
        skills: ['Gestion des risques', 'Conformité', 'Audit', 'RGPD'],
        certifications: ['CISSP', 'CISM', 'ISO 27001 Lead Auditor'],
        linkedinUrl: 'https://linkedin.com/in/alexandremarchand',
        order: 1
      },
      {
        id: 2,
        name: 'Sarah BENOIT',
        role: 'Experte en Tests d\'Intrusion',
        bio: 'Spécialiste des tests d\'intrusion et de la réponse aux incidents, Sarah a découvert et aidé à corriger des centaines de vulnérabilités critiques pour nos clients.',
        avatar: '/images/experts/sarah-benoit.jpg',
        experience: 8,
        skills: ['Pentesting', 'Forensic', 'Réponse aux incidents', 'OSINT'],
        certifications: ['OSCP', 'CEH', 'GPEN'],
        linkedinUrl: 'https://linkedin.com/in/sarahbenoitsecu',
        order: 2
      },
      {
        id: 3,
        name: 'Thomas LEROY',
        role: 'Architecte Sécurité',
        bio: 'Expert en architecture de sécurité, Thomas conçoit des solutions sur mesure pour protéger les infrastructures les plus complexes contre les cybermenaces avancées.',
        avatar: '/images/experts/thomas-leroy-secu.jpg',
        experience: 15,
        skills: ['Architecture sécurité', 'Cloud Security', 'Zero Trust', 'IAM'],
        certifications: ['CCSP', 'CISSP-ISSAP', 'SABSA'],
        linkedinUrl: 'https://linkedin.com/in/thomasleroysecu',
        order: 3
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'Système de Détection d\'Intrusion',
        description: 'Surveillance avancée du trafic réseau',
        icon: ICONS.SHIELD,
        category: 'Sécurité',
        version: '3.2',
        url: 'https://example.com/ids',
        order: 1
      },
      {
        id: 2,
        name: 'Gestion des Vulnérabilités',
        description: 'Identification et correction des failles',
        icon: ICONS.SEARCH,
        category: 'Outil',
        version: '2.1',
        order: 2
      },
      {
        id: 3,
        name: 'Analyse des Menaces',
        description: 'Intelligence des menaces en temps réel',
        icon: ICONS.BAR_CHART_2,
        category: 'Sécurité',
        version: '4.0',
        order: 3
      },
      {
        id: 4,
        name: 'Chiffrement Avancé',
        description: 'Protection des données sensibles',
        icon: ICONS.LOCK,
        category: 'Sécurité',
        version: '2.8',
        order: 4
      }
    ],
    
    // === Métadonnées SEO ===
    seo: {
      metaTitle: 'Services de Cyber Sécurité Professionnels | Protection des Données | IOI Digital',
      metaDescription: 'Protégez votre entreprise contre les cybermenaces avec nos solutions de cybersécurité complètes. Audit, protection, formation et conformité RGPD par des experts certifiés.',
      metaKeywords: ['cybersécurité', 'protection des données', 'sécurité informatique', 'RGPD', 'audit de sécurité', 'test d\'intrusion'],
      ogTitle: 'Expert en Cybersécurité - Protection contre les Cybermenaces | IOI Digital',
      ogDescription: 'Solutions complètes de cybersécurité pour protéger votre entreprise contre les menaces en ligne. Audit, protection, formation et conformité par des experts.',
      ogImage: '/images/og/cyber-securite.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/cyber-securite'
    },
    
    // === Liens et appels à l'action ===
    documentationUrl: 'https://docs.ioi-digital.com/cyber-securite',
    demoUrl: 'https://demo.ioi-digital.com/cyber-securite',
    ctaText: 'Demander un audit de sécurité gratuit',
    
    // === Dates ===
    createdAt: '2023-04-10T09:30:00Z',
    updatedAt: '2023-08-01T15:45:00Z',
    publishedAt: '2023-04-15T10:00:00Z',
    _version: 1
  },
  // === Solution VPN ===
  {
    // === Identification ===
    id: 11,
    type: 'security',
    status: 'active',
    slug: 'solution-vpn',
    
    // === Informations principales ===
    title: 'Solution VPN',
    shortDescription: 'Réseau privé virtuel sécurisé pour une connectivité à distance fiable',
    fullDescription: 'Notre solution VPN offre une connexion sécurisée et cryptée pour vos employés distants et vos sites distants. Protégez vos données sensibles et assurez une communication sécurisée sur Internet avec notre infrastructure VPN haute performance.',
    excerpt: 'Accès sécurisé à distance pour vos équipes avec une solution VPN fiable et performante',
    
    // === Images et médias ===
    image: {
      src: 'http://localhost:8080/media/services/solution-vpn.jpg',
      alt: 'Réseau privé virtuel sécurisé',
      width: 1200,
      height: 800,
      caption: 'Solution VPN sécurisée pour entreprise',
      credits: 'IOI Digital'
    },
    
    gallery: [
      {
        src: 'http://localhost:8080/media/services/vpn-1.jpg',
        alt: 'Connexion sécurisée à distance',
        caption: 'Accès sécurisé depuis n\'importe où',
        width: 1200,
        height: 800,
        credits: 'IOI Digital'
      },
      {
        src: 'http://localhost:8080/media/services/vpn-2.jpg',
        alt: 'Chiffrement des données',
        caption: 'Protection des données en transit',
        width: 1200,
        height: 800,
        credits: 'IOI Digital'
      }
    ],
    
    // === Métadonnées ===
    icon: ICONS.LOCK,
    isPopular: true,
    isFeatured: true,
    tags: ['vpn', 'sécurité', 'réseau', 'accès distant', 'chiffrement'],
    order: 11,
    
    // === Valeurs et avantages ===
    values: [
      {
        id: 1,
        icon: ICONS.LOCK,
        label: 'Sécurité',
        description: 'Chiffrement des données',
        order: 1
      },
      {
        id: 2,
        icon: ICONS.GLOBE,
        label: 'Accès global',
        description: 'Connectivité mondiale',
        order: 2
      },
      {
        id: 3,
        icon: ICONS.ZAP,
        label: 'Performance',
        description: 'Débit optimisé',
        order: 3
      },
      {
        id: 4,
        icon: ICONS.SHIELD,
        label: 'Conformité',
        description: 'Normes de sécurité',
        order: 4
      }
    ],
    
    // === Fonctionnalités ===
    features: [
      'Chiffrement AES 256 bits',
      'Accès sécurisé à distance',
      'Multi-sites sécurisés',
      'Authentification forte',
      'Journalisation des accès',
      'Support 24/7'
    ],
    
    // === Domaines d'intervention ===
    domains: [
      {
        id: 1,
        name: 'VPN d\'entreprise',
        description: 'Accès sécurisé pour les employés',
        icon: ICONS.BRIEFCASE,
        color: '#3B82F6',
        order: 1
      },
      {
        id: 2,
        name: 'Interconnexion de sites',
        description: 'Réseau privé entre sites',
        icon: ICONS.GLOBE,
        color: '#10B981',
        order: 2
      },
      {
        id: 3,
        name: 'Accès invités',
        description: 'Accès limité pour les partenaires',
        icon: ICONS.USERS,
        color: '#8B5CF6',
        order: 3
      },
      {
        id: 4,
        name: 'Cloud sécurisé',
        description: 'Connexion aux services cloud',
        icon: ICONS.CLOUD,
        color: '#EC4899',
        order: 4
      }
    ],
    
    // === Approches et méthodologies ===
    approaches: [
      {
        id: 1,
        title: 'Audit',
        description: 'Analyse des besoins',
        icon: ICONS.SEARCH,
        steps: [
          'Évaluation des besoins',
          'Analyse de la topologie réseau',
          'Identification des points d\'accès',
          'Recommandations'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Déploiement',
        description: 'Mise en place sécurisée',
        icon: ICONS.SETTINGS,
        steps: [
          'Configuration des serveurs',
          'Déploiement des clients',
          'Tests de sécurité',
          'Documentation'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Sécurisation',
        description: 'Renforcement de la sécurité',
        icon: ICONS.SHIELD,
        steps: [
          'Chiffrement des données',
          'Authentification forte',
          'Pare-feu intégré',
          'Surveillance des accès'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Support',
        description: 'Maintenance continue',
        icon: ICONS.SETTINGS,
        steps: [
          'Mises à jour régulières',
          'Surveillance 24/7',
          'Support technique',
          'Évolutivité'
        ],
        order: 4
      }
    ],
    
    // === Tarification ===
    price: 'À partir de 199€/mois',
    hasFreeTier: true,
    freeTierDescription: 'Audit réseau gratuit',
    
    // === Forfaits de tarification ===
    pricingTiers: [
      {
        id: 1,
        name: 'Essentiel',
        description: 'Pour petites équipes',
        price: 199,
        period: 'month',
        currency: 'EUR',
        features: [
          'Jusqu\'à 10 utilisateurs',
          'Chiffrement AES-256',
          'Support par email',
          'Mises à jour de sécurité',
          'Rapports mensuels'
        ],
        isPopular: false,
        ctaText: 'Démarrer',
        buttonText: 'Choisir cette offre',
        buttonVariant: 'outline',
        order: 1
      },
      {
        id: 2,
        name: 'Professionnel',
        description: 'Pour PME',
        price: 499,
        period: 'month',
        currency: 'EUR',
        features: [
          'Jusqu\'à 50 utilisateurs',
          'Chiffrement AES-256',
          'Support prioritaire',
          'Authentification à deux facteurs',
          'Surveillance 24/7',
          'Rapports hebdomadaires'
        ],
        isPopular: true,
        ctaText: 'Nous contacter',
        buttonText: 'Choisir cette offre',
        buttonVariant: 'default',
        order: 2
      },
      {
        id: 3,
        name: 'Entreprise',
        description: 'Pour grands comptes',
        price: 'Sur devis',
        period: 'month',
        currency: 'EUR',
        features: [
          'Utilisateurs illimités',
          'Chiffrement AES-256',
          'Support 24/7 prioritaire',
          'Authentification avancée',
          'Surveillance avancée',
          'Rapports personnalisés',
          'Formation utilisateurs',
          'Audit de sécurité inclus'
        ],
        isPopular: false,
        ctaText: 'Demander un devis',
        buttonText: 'Nous contacter',
        buttonVariant: 'outline',
        order: 3
      }
    ],
    
    // === FAQ ===
    faqs: [
      {
        id: 1,
        question: 'Quelle est la différence entre un VPN et un réseau privé traditionnel ?',
        answer: 'Un VPN utilise l\'infrastructure Internet publique pour créer un réseau privé virtuel, tandis qu\'un réseau privé traditionnel utilise des lignes louées dédiées. Le VPN offre une alternative plus économique et flexible pour connecter des sites distants ou des utilisateurs mobiles.',
        category: 'Général',
        order: 1
      },
      {
        id: 2,
        question: 'Quel niveau de chiffrement utilisez-vous ?',
        answer: 'Nous utilisons un chiffrement AES-256 bits, la norme industrielle pour le chiffrement des données. Ce niveau de chiffrement est approuvé par les gouvernements et les institutions financières pour la protection des données sensibles.',
        category: 'Sécurité',
        order: 2
      },
      {
        id: 3,
        question: 'Puis-je utiliser le VPN sur plusieurs appareils ?',
        answer: 'Oui, notre solution VPN prend en charge plusieurs appareils par utilisateur (ordinateurs, tablettes, smartphones) avec des licences simultanées configurables selon votre forfait.',
        category: 'Utilisation',
        order: 3
      },
      {
        id: 4,
        question: 'Comment gérez-vous la conformité RGPD avec votre solution VPN ?',
        answer: 'Notre solution est conçue pour être conforme au RGPD. Nous ne conservons que les journaux nécessaires au bon fonctionnement du service et à la sécurité, et ces données sont traitées conformément aux exigences de protection des données. Nous proposons également des options de stockage des données en Europe pour nos clients européens.',
        category: 'Conformité',
        order: 4
      },
      {
        id: 5,
        question: 'Quelle est la durée de mise en place d\'une solution VPN ?',
        answer: 'La mise en place d\'une solution VPN standard prend généralement entre 2 et 5 jours ouvrés après l\'audit initial. Les déploiements plus complexes ou personnalisés peuvent prendre plus de temps en fonction des besoins spécifiques.',
        category: 'Déploiement',
        order: 5
      }
    ],
    
    // === Témoignages ===
    testimonials: [
      {
        id: 1,
        author: 'Sophie DUBOIS',
        role: 'DSI',
        company: 'Groupe TransLog',
        content: 'La solution VPN que nous avons déployée avec IOI Digital a considérablement amélioré la sécurité de nos communications à distance. La transition s\'est faite en douceur et l\'équipe a été réactive à toutes nos demandes.',
        rating: 5,
        date: '2023-05-15',
        avatar: '/images/testimonials/avatar-5.jpg',
        projectLink: 'https://example.com/case-studies/translog-vpn',
        order: 1
      },
      {
        id: 2,
        author: 'Thomas LEROY',
        role: 'Responsable IT',
        company: 'ConsultPlus',
        content: 'Nous avions besoin d\'une solution VPN sécurisée pour nos consultants en déplacement. IOI Digital a fourni une solution parfaitement adaptée à nos besoins, avec un excellent rapport qualité-prix.',
        rating: 5,
        date: '2023-04-22',
        avatar: '/images/testimonials/avatar-6.jpg',
        order: 2
      }
    ],
    
    // === Études de cas ===
    caseStudies: [
      'Mise en place d\'un VPN sécurisé pour une entreprise de conseil avec 200 consultants',
      'Interconnexion sécurisée de 15 sites pour un groupe industriel',
      'Migration vers une solution VPN cloud pour une PME en pleine croissance'
    ],
    
    // === Services liés ===
    relatedServices: [8, 9, 10], // Sécurité Réseau, Maintenance Équipement Réseau, Cyber Sécurité
    
    // === Technologies ===
    technologies: [
      'IPSec',
      'OpenVPN',
      'WireGuard',
      'SSL/TLS',
      'Authentification multi-facteurs',
      'Gestion centralisée des accès',
      'Surveillance réseau',
      'Chiffrement AES-256'
    ],
    
    // === Cas d'usage et industries ===
    useCases: [
      {
        id: 1,
        title: 'Télétravail sécurisé',
        description: 'Accès sécurisé aux ressources d\'entreprise',
        icon: ICONS.BRIEFCASE,
        industries: ['Toutes entreprises', 'Secteur public', 'Santé'],
        benefits: [
          'Accès sécurisé aux applications métier',
          'Protection des données sensibles',
          'Productivité des équipes distantes',
          'Conformité réglementaire'
        ],
        order: 1
      },
      {
        id: 2,
        title: 'Interconnexion de sites',
        description: 'Réseau privé entre plusieurs sites',
        icon: ICONS.GLOBE,
        industries: ['Réseaux d\'agences', 'Succursales', 'Groupes internationaux'],
        benefits: [
          'Communication sécurisée entre sites',
          'Réduction des coûts d\'infrastructure',
          'Centralisation des services',
          'Évolutivité du réseau'
        ],
        order: 2
      },
      {
        id: 3,
        title: 'Accès fournisseurs',
        description: 'Accès contrôlé pour les partenaires',
        icon: ICONS.USERS,
        industries: ['Sous-traitance', 'Prestataires', 'Partenaires commerciaux'],
        benefits: [
          'Accès limité aux ressources nécessaires',
          'Traçabilité des accès',
          'Réduction des risques de sécurité',
          'Gestion simplifiée des droits'
        ],
        order: 3
      },
      {
        id: 4,
        title: 'Cloud sécurisé',
        description: 'Connexion aux services cloud',
        icon: ICONS.CLOUD,
        industries: ['Entreprises utilisant le cloud', 'SaaS', 'IaaS'],
        benefits: [
          'Sécurisation des accès cloud',
          'Chiffrement des données en transit',
          'Conformité des accès distants',
          'Performance optimisée'
        ],
        order: 4
      }
    ],
    
    // === Nos Experts ===
    experts: [
      {
        id: 1,
        name: 'Nicolas MARTIN',
        role: 'Architecte Réseau',
        bio: 'Avec plus de 10 ans d\'expérience dans l\'architecture de réseaux sécurisés, Nicolas a conçu et déployé des solutions VPN pour des entreprises de toutes tailles, des PME aux grands groupes internationaux.',
        avatar: '/images/experts/nicolas-martin.jpg',
        experience: 10,
        skills: ['Réseaux', 'Sécurité', 'Architecture Cloud', 'VPN'],
        certifications: ['CCNP Security', 'CCIE Security', 'PMP'],
        linkedinUrl: 'https://linkedin.com/in/nicolasmartin',
        order: 1
      },
      {
        id: 2,
        name: 'Laura DUPONT',
        role: 'Ingénieure Sécurité',
        bio: 'Spécialiste en cybersécurité, Laura apporte son expertise en cryptographie et en authentification pour garantir la sécurité maximale de nos solutions VPN.',
        avatar: '/images/experts/laura-dupont.jpg',
        experience: 8,
        skills: ['Cybersécurité', 'Cryptographie', 'Authentification', 'Audit'],
        certifications: ['CISSP', 'CEH', 'OSCP'],
        linkedinUrl: 'https://linkedin.com/in/laurasecu',
        order: 2
      },
      {
        id: 3,
        name: 'Mehdi KARIM',
        role: 'Responsable Support',
        bio: 'À la tête de notre équipe support, Mehdi s\'assure que nos clients bénéficient d\'une assistance réactive et compétente pour leurs solutions VPN.',
        avatar: '/images/experts/mehdi-karim.jpg',
        experience: 12,
        skills: ['Support technique', 'Résolution de problèmes', 'Formation utilisateurs', 'Documentation'],
        certifications: ['ITIL', 'CCNA', 'MCSA'],
        linkedinUrl: 'https://linkedin.com/in/mehdikarim',
        order: 3
      }
    ],
    
    // === Technologies du service ===
    serviceTechnologies: [
      {
        id: 1,
        name: 'OpenVPN',
        description: 'Solution VPN open source sécurisée',
        icon: ICONS.LOCK,
        category: 'Sécurité',
        version: '2.5',
        url: 'https://openvpn.net/',
        order: 1
      },
      {
        id: 2,
        name: 'WireGuard',
        description: 'Protocole VPN moderne et performant',
        icon: ICONS.ZAP,
        category: 'Performance',
        version: '1.0',
        order: 2
      },
      {
        id: 3,
        name: 'Authentification Multi-Facteurs',
        description: 'Sécurisation des accès',
        icon: ICONS.SHIELD,
        category: 'Sécurité',
        version: '2.0',
        order: 3
      },
      {
        id: 4,
        name: 'Gestion des Accès',
        description: 'Administration centralisée',
        icon: ICONS.SETTINGS,
        category: 'Administration',
        version: '3.1',
        order: 4
      }
    ],
    
    // === Métadonnées SEO ===
    seo: {
      metaTitle: 'Solution VPN Sécurisée pour Entreprises | IOI Digital',
      metaDescription: 'Déployez un réseau privé virtuel sécurisé pour vos équipes distantes et vos sites distants. Solution VPN haute performance avec chiffrement de bout en bout.',
      metaKeywords: ['vpn entreprise', 'réseau privé virtuel', 'accès distant sécurisé', 'télétravail sécurisé', 'chiffrement vpn', 'solution vpn professionnelle'],
      ogTitle: 'Solution VPN Sécurisée pour Entreprises - IOI Digital',
      ogDescription: 'Protégez vos communications et données d\'entreprise avec notre solution VPN hautement sécurisée. Accès à distance fiable et chiffré pour vos équipes.',
      ogImage: '/images/og/solution-vpn.jpg',
      canonicalUrl: 'https://www.ioi-digital.com/services/solution-vpn'
    },
    
    // === Liens et appels à l'action ===
    documentationUrl: 'https://docs.ioi-digital.com/vpn',
    demoUrl: 'https://demo.ioi-digital.com/vpn',
    ctaText: 'Demander une démonstration',
    
    // === Dates ===
    createdAt: '2023-03-15T10:00:00Z',
    updatedAt: '2023-08-01T16:30:00Z',
    publishedAt: '2023-03-20T09:00:00Z',
    _version: 1
  }
];

// Exemple de fonction utilitaire pour filtrer les services
export const getServicesByType = (type: ServiceType): Service[] => {
  return servicesData.filter(service => service.type === type);
};

export const getPopularServices = (): Service[] => {
  return servicesData.filter(service => service.isPopular);
};

/**
 * Récupère un service par son slug de manière asynchrone
 * @param {string} slug - Le slug du service à récupérer (par exemple: 'developpement-web')
 * @returns {Promise<Service | undefined>} Le service correspondant au slug, ou undefined si non trouvé
 * @throws {Error} Si le paramètre slug n'est pas une chaîne valide
 * 
 * @example
 * // Récupérer un service par son slug de manière asynchrone
 * const service = await getServiceBySlug('developpement-web');
 * if (service) {
 *   console.log(service.title);
 * }
 */
export const getServiceBySlug = async (slug: string): Promise<Service | undefined> => {
  try {
    // Vérification des paramètres d'entrée
    if (typeof slug !== 'string' || !slug.trim()) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Erreur: Le paramètre slug doit être une chaîne non vide');
      }
      return undefined;
    }

    // Simulation d'une opération asynchrone
    return new Promise<Service | undefined>((resolve) => {
      try {
        // Recherche insensible à la casse
        const normalizedSlug = slug.trim().toLowerCase();
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`Recherche du service avec le slug: ${normalizedSlug}`);
        }

        const service = servicesData.find(service => {
          if (!service || typeof service.slug !== 'string') return false;
          return service.slug.toLowerCase() === normalizedSlug;
        }) as Service | undefined;

        if (process.env.NODE_ENV === 'development') {
          if (!service) {
            console.warn(`Aucun service trouvé avec le slug: ${normalizedSlug}`);
            console.log('Slugs disponibles:', servicesData.map(s => s.slug).filter(Boolean));
          } else {
            console.log(`Service trouvé: ${service.title}`);
          }
        }

        resolve(service || undefined);
      } catch (error) {
        console.error('Erreur lors de la recherche du service:', error);
        resolve(undefined);
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération du service:', error);
    return undefined;
  }
};

// Les fonctions utilitaires pour les services ont été déplacées dans src/lib/utils/service-utils.ts
