import type { CaseStudy } from '../types/base';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'ecommerce-luxe',
    title: 'E-commerce Luxe',
    client: 'Maison Élégance',
    category: 'E-commerce & UX',
    slug: 'ecommerce-luxe-maison-elegance',
    image: {
      src: '/images/case-studies/ecommerce-luxe.jpg',
      alt: 'Capture d\'écran du site e-commerce de Maison Élégance',
      width: 1200,
      height: 630
    },
    description: 'Transformation digitale complète d\'une maison de couture parisienne avec création d\'une plateforme e-commerce haut de gamme.',
    challenge: 'Digitaliser une marque centenaire tout en préservant son identité luxueuse et son savoir-faire artisanal.',
    solution: 'Plateforme e-commerce sur-mesure avec expérience immersive, configurateur 3D et service client premium.',
    results: {
      revenue: '+340%',
      conversion: '+85%',
      satisfaction: '98%',
      time: '6 mois'
    },
    technologies: ['Next.js', 'Shopify Plus', 'Three.js', 'Stripe'],
    color: 'from-purple-600 to-pink-500',
    testimonial: {
      text: 'IOI a su comprendre notre univers et créer une expérience digitale qui reflète parfaitement nos valeurs. Les résultats dépassent nos attentes.',
      author: 'Marie Dubois',
      role: 'Directrice Marketing'
    },
    date: new Date('2024-03-15'),
    duration: '6 mois',
    teamSize: 5,
    budget: '75 000 €',
    tags: ['ecommerce', 'luxe', 'ux', 'développement web'],
    links: [
      { href: 'https://maison-elegance.com', label: 'Voir le site', isExternal: true }
    ]
  },
  {
    id: 'app-fitness-revolution',
    title: 'App Fitness Revolution',
    client: 'FitTech Pro',
    category: 'Application Mobile',
    slug: 'app-fitness-revolution-fittech-pro',
    image: {
      src: '/images/case-studies/fitness-app.jpg',
      alt: 'Capture d\'écran de l\'application Fitness Revolution',
      width: 1200,
      height: 630
    },
    description: 'Développement d\'une application mobile révolutionnaire pour le coaching sportif personnalisé avec IA.',
    challenge: 'Créer une app qui rivalise avec les leaders du marché tout en proposant une approche innovante du coaching.',
    solution: 'Application native avec IA pour coaching personnalisé, réalité augmentée et communauté intégrée.',
    results: {
      downloads: '500K+',
      retention: '75%',
      rating: '4.8/5',
      time: '8 mois'
    },
    technologies: ['React Native', 'TensorFlow', 'Firebase', 'ARKit'],
    color: 'from-green-600 to-emerald-500',
    testimonial: {
      text: 'L\'équipe IOI a transformé notre vision en réalité. L\'app dépasse toutes nos attentes en termes de performance et d\'engagement utilisateur.',
      author: 'Thomas Martin',
      role: 'CEO FitTech Pro'
    },
    date: new Date('2023-11-20'),
    duration: '8 mois',
    teamSize: 6,
    budget: '120 000 €',
    tags: ['mobile', 'IA', 'sport', 'application'],
    links: [
      { href: 'https://apps.apple.com/fr/app/fitness-revolution', label: 'App Store', isExternal: true },
      { href: 'https://play.google.com/store/apps/details?id=com.fittech.revolution', label: 'Google Play', isExternal: true }
    ]
  },
  {
    id: 'saas-b2b-analytics',
    title: 'Plateforme SaaS B2B',
    client: 'DataFlow Solutions',
    category: 'SaaS & Dashboard',
    slug: 'saas-b2b-analytics-dataflow',
    image: {
      src: '/images/case-studies/saas-analytics.jpg',
      alt: 'Tableau de bord analytique DataFlow',
      width: 1200,
      height: 630
    },
    description: 'Création d\'une plateforme SaaS complète pour la gestion et l\'analyse de données en temps réel pour les entreprises.',
    challenge: 'Développer une solution scalable capable de traiter des millions de données en temps réel avec une UX intuitive.',
    solution: 'Architecture microservices avec dashboard temps réel, API robuste et système de notifications intelligent.',
    results: {
      clients: '200+',
      uptime: '99.9%',
      performance: '+60%',
      time: '12 mois'
    },
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
    color: 'from-blue-600 to-cyan-500',
    testimonial: {
      text: 'IOI a livré une plateforme exceptionnelle qui a révolutionné notre façon de travailler. La qualité technique est remarquable.',
      author: 'Sophie Laurent',
      role: 'CTO DataFlow'
    },
    date: new Date('2023-06-10'),
    duration: '12 mois',
    teamSize: 8,
    budget: '250 000 €',
    tags: ['saas', 'analytics', 'big data', 'dashboard'],
    links: [
      { href: 'https://dataflow-solutions.com', label: 'Site web', isExternal: true }
    ]
  },
  {
    id: 'transformation-digitale-industrie',
    title: 'Transformation Digitale',
    client: 'Groupe Industriel Alpha',
    category: 'Digital Transformation',
    slug: 'transformation-digitale-industrie-alpha',
    image: {
      src: '/images/case-studies/digital-transformation.jpg',
      alt: 'Usine connectée du Groupe Alpha',
      width: 1200,
      height: 630
    },
    description: 'Modernisation complète du système d\'information d\'un groupe industriel avec migration cloud et automatisation.',
    challenge: 'Moderniser un système legacy de 20 ans sans interrompre les opérations critiques de production.',
    solution: 'Migration progressive vers le cloud avec automatisation des processus et formation des équipes.',
    results: {
      efficiency: '+45%',
      costs: '-30%',
      downtime: '0%',
      time: '18 mois'
    },
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins'],
    color: 'from-orange-600 to-red-500',
    testimonial: {
      text: 'IOI a géré cette transformation complexe avec un professionnalisme exemplaire. Aucune interruption de service pendant 18 mois.',
      author: 'Jean-Pierre Moreau',
      role: 'Directeur IT'
    },
    date: new Date('2022-09-05'),
    duration: '18 mois',
    teamSize: 12,
    budget: '500 000 €',
    tags: ['transformation digitale', 'cloud', 'devops', 'industrie'],
    links: []
  }
];
