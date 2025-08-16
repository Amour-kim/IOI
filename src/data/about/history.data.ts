import type { AboutHistory, MotPresident } from '../types';

export const aboutHistory: AboutHistory = {
  id: 'about-history',
  title: 'A propos de Nous',
  intro:
    "Depuis 2023, IOI s'est structurée autour d'une ambition claire : apporter des solutions numériques souveraines, robustes et utiles au quotidien des institutions, administrations et établissements éducatifs africains. Notre trajectoire mêle innovation pragmatique, proximité terrain et exigence opérationnelle. Nous expérimentons, apprenons auprès de nos utilisateurs, industrialisons ce qui fonctionne et mettons en production à l'échelle, avec un soin particulier porté à l'éthique, à la sécurité et à la création de valeur mesurable. Cette histoire est jalonnée de programmes d'acculturation, de projets cloud/data/IA, et de partenariats durables avec les écosystèmes locaux pour faire émerger un numérique de confiance, au service de l'impact.",
  heroImage: {
    src: '/logo.png',
    alt: 'Modern office space with team working',
    width: 600,
    height: 400,
  },
  floatingLogo: {
    image: {
      src: '/logo.png',
      alt: 'IOI Logo',
      width: 600,
      height: 600,
    },
    // Optional CSS filter string used by the UI component
    filterCss: 'brightness(0.9) saturate(0.8) opacity(0.15)',
  },
  stats: [
    { id: 'clients', value: '500+', label: 'Clients Satisfaits' },
    { id: 'experts', value: '50+', label: 'Experts' },
    { id: 'countries', value: '15+', label: 'Pays' },
  ],
  teamSpotlight: [
    {
      name: 'Samuel Nzila',
      role: 'CEO & Fondateur',
      image: { src: '/images/DG1.jpg', alt: 'M. Samuel NZILA, President' },
      alt: 'M. Samuel NZILA, President',
    },
    {
      name: 'Alexandre Martin',
      role: 'Directeur Commercial',
      image: { src: '/team/alexandre.jpg', alt: 'Alexandre Martin, Directeur Commercial' },
      alt: 'Alexandre Martin, Directeur Commercial',
    },
  ],
  // Axes éditoriaux
  mission:
    "Accélérer la création de valeur par la donnée, le cloud et l'IA en Afrique, de manière responsable, mesurable et souveraine. Nous outillons les organisations pour automatiser, décider mieux et servir plus vite, tout en respectant la confidentialité, la sécurité et les cadres réglementaires.",
  vision:
    "Rendre le numérique et l'IA aussi accessibles et fiables que l'électricité : disponibles partout, simples à adopter, et générateurs d'opportunités pour la jeunesse africaine. IOI aspire à devenir une référence continentale en matière de plateformes souveraines au service de l'éducation et des services publics.",
  values: [
    { id: 'impact', title: 'Impact', text: 'Mesurer et maximiser la valeur livrée.', icon: 'target' },
    { id: 'excellence', title: 'Excellence', text: 'Standards élevés, qualité et exigence.', icon: 'award' },
    { id: 'ethique', title: 'Éthique', text: 'Transparence, sécurité et respect.', icon: 'shield' },
  ],

  // Infos institutionnelles
  founders: [
    {
      id: 'christian-kallinich',
      name: 'Christian Kallinich',
      role: 'Fondateur & CEO',
      image: { src: '/images/DG1.jpg', alt: 'Christian Kallinich' },
      bio: "Entrepreneur passionné par l'IA appliquée et la création de valeur durable.",
      links: [
        { href: 'https://www.linkedin.com', label: 'LinkedIn' },
      ],
    },
  ],
  locations: [
    { id: 'paris-hq', name: 'Paris - HQ', country: 'France', city: 'Paris', address: '10 Rue Exemple, 75000', coordinates: { lat: 48.8566, lng: 2.3522 } },
    { id: 'abidjan', name: 'Abidjan', country: 'Côte d\'Ivoire', city: 'Abidjan' },
  ],
  awards: [
    { id: 'award-innovation-2022', title: 'Prix de l\'Innovation', organization: 'Tech Awards', year: 2022, description: 'Récompense pour un projet IA à fort impact.', image: { src: '/images/awards/innovation.jpg', alt: 'Prix Innovation 2022' } },
  ],
  partners: [
    { id: 'cloudx', name: 'CloudX', logo: { src: '/images/partners/cloudx.png', alt: 'CloudX' }, url: 'https://cloudx.example.com' },
    { id: 'datasense', name: 'DataSense', logo: { src: '/images/partners/datasense.png', alt: 'DataSense' }, url: 'https://datasense.example.com' },
  ],

  // SEO / CTA / Liens
  seo: {
    title: 'Notre Histoire — IOI',
    description: "Découvrez l'histoire d'IOI, nos valeurs et les étapes clés de notre développement.",
    keywords: ['histoire', 'IA', 'data', 'innovation', 'projets'],
    image: { src: '/ioi-home.jpg', alt: 'IOI Office' },
  },
  ctaText: 'Découvrir nos projets',
  documentationUrl: '/ressources/documentation',
  demoUrl: '/demo',

  // Médias (carrousels images/vidéos)
  mediaCarousels: [
    {
      id: 'office-life',
      title: 'Vie au bureau',
      images: [
        { src: '/images/office/1.jpg', alt: 'Bureau 1', width: 1200, height: 800 },
        { src: '/images/office/2.jpg', alt: 'Bureau 2', width: 1200, height: 800 },
      ],
    },
    {
      id: 'talks',
      title: 'Talks & Conférences',
      videos: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
    },
  ],

  // Timeline (2 périodes exhaustives)
  detailedTimeline: [
    {
      id: 'period-2023-2024',
      title: '2023 - 2024',
      startDate: '2023-01-01',
      endDate: '2024-12-31',
      summary:
        "Structuration de l'offre, premiers déploiements à l'échelle et ancrage institutionnel. 2023 marque l'amorçage opérationnel avec des pilotes concrets; 2024 consolide les fondamentaux (gouvernance, sécurité, fiabilité) et la qualité d'exécution.",
      color: '#F59E0B',
      milestones: [
        {
          id: '2023-acculturation-programs',
          title: "Programmes d'acculturation et montée en compétences",
          date: '2023-02-15',
          description:
            "Lancement de cycles d'acculturation auprès des directions et équipes métiers/IT pour clarifier les cas d'usage à fort impact, sensibiliser aux enjeux de souveraineté et aligner les objectifs avec les priorités des ministères et rectorats. Ateliers pratiques, démonstrations, retours d'expérience et premières feuilles de route co-construites. Ces programmes favorisent une adhésion large et permettent de prioriser des projets immédiatement utiles.",
          highlights: [
            "Ateliers multi-acteurs (ministères, rectorats, établissements)",
            "Plus de 300 participants sensibilisés en 6 mois",
            "Feuilles de route pragmatiques par domaine (inscription, vie scolaire, RH, patrimoine)"
          ],
          links: [
            { href: '/ressources/documentation', label: 'Documentation' },
            { href: '/demo', label: 'Démo IOI' }
          ],
          media: { image: { src: '/images/office/2.jpg', alt: 'Ateliers et acculturation' } },
          tags: ['acculturation', 'gouvernance']
        },
        {
          id: '2023-cloud-foundations',
          title: 'Fondations Cloud & Data (sécurité, observabilité, coûts)',
          date: '2023-06-10',
          description:
            "Mise en place des fondations Cloud & Data: sécurité by design, observabilité (logs/metrics/traces), chiffrement des données, RGPD, revue des accès, et optimisation des coûts. Adoption de pratiques FinOps et d'architectures modulaire/multi-tenant permettant une montée en charge progressive sans sacrifier la sécurité ni la stabilité.",
          highlights: [
            'Chiffrement au repos et en transit',
            'Observabilité end-to-end (SLO/SLA)',
            'Optimisation des coûts (jusqu\'à -35%)'
          ],
          tags: ['cloud', 'data', 'securite']
        },
        {
          id: '2024-first-productions',
          title: 'Mises en production prioritaires (éducation et administration)',
          date: '2024-03-20',
          description:
            "Déploiement des premiers services en production: gestion de dossiers, orchestration d'inscriptions, tableaux de bord de pilotage, et premiers assistants IA (RAG) sur corpus documentaires internes. Retour d'expérience positif: diminution des délais de traitement, traçabilité renforcée et meilleure qualité de service aux usagers.",
          highlights: [
            'Réduction des délais de traitement (-25 à -40%)',
            'Traçabilité et audit renforcés',
            'Satisfaction accrue des usagers'
          ],
          media: { image: { src: '/images/office/genai.jpg', alt: 'Mises en production' } },
          tags: ['production', 'education', 'administration']
        }
      ]
    },
    {
      id: 'period-2025-2027',
      title: '2025 - 2027',
      startDate: '2025-01-01',
      endDate: '2027-12-31',
      summary:
        "Changement d'échelle, plateformes souveraines spécialisées (éducation, services publics) et industrialisation des assistants. 2025 ancre les capacités; 2026-2027 généralisent l'usage avec un écosystème de partenaires locaux et un modèle de gouvernance robuste.",
      color: '#10B981',
      milestones: [
        {
          id: '2025-genai-governance',
          title: 'Gouvernance avancée des assistants et RAG souverains',
          date: '2025-04-12',
          description:
            "Standardisation des assistants (copilotes) par métier, gestion fine des droits, politiques de confidentialité et supervision. Déploiement de pipelines de mise à jour des connaissances, évaluation continue (hallucinations, biais) et tableaux de bord d'usage. Bénéfices: réponses plus fiables, adoption accrue et meilleure intégration aux processus métiers.",
          highlights: [
            'Politiques d\'accès et gouvernance unifiées',
            'Pipelines de knowledge update automatisés',
            'Tableaux de bord d\'usage et qualité'
          ],
          links: [
            { href: '/ressources/documentation', label: 'Cadre de gouvernance' }
          ],
          tags: ['genai', 'gouvernance', 'qualite']
        },
        {
          id: '2026-edu-cloud',
          title: 'Plateforme Cloud Éducative Souveraine',
          date: '2026-09-01',
          description:
            "Lancement d'une plateforme cloud souveraine dédiée à l'éducation: gestion de la vie scolaire, orchestrations administratives, interopérabilité académique, annuaires unifiés et analytics. Cible: fiabilité, sécurité, scalabilité et UX adaptée à la diversité des contextes locaux. Partenariats avec universités/écoles pour faciliter l'insertion et la formation continue.",
          highlights: [
            'Interopérabilité (standards ouverts)',
            'SLA élevés (99,9%)',
            'UX multilingue et accessible'
          ],
          media: { image: { src: '/ioi-home.jpg', alt: 'Plateforme souveraine éducative' } },
          tags: ['education', 'cloud', 'souverainete']
        },
        {
          id: '2027-scale-partnerships',
          title: 'Élargissement multi-pays et écosystème partenaires',
          date: '2027-06-15',
          description:
            "Généralisation dans de nouveaux pays avec un modèle de déploiement reproductible: intégrateurs locaux, programmes de formation pour administrateurs/fonctionnaires, et accompagnement au changement. Objectif: rendre la plateforme réellement utile, utilisable et utilisée, au-delà des pilotes, et créer un réseau de compétences locales pérennes.",
          highlights: [
            'Modèle de déploiement reproductible',
            'Partenaires locaux contractuels',
            'Programmes de formation certifiants'
          ],
          tags: ['scale', 'partenariats', 'formation']
        }
      ]
    }
  ],
};

// Mot du Directeur / Président
export const motPresident: MotPresident = {
  name: 'Samuel Nzila',
  title: 'Président & Directeur Général',
  photo: {
    src: '/images/DG1.jpg', // idéalement PNG avec fond transparent
    alt: 'Samuel Nzila',
    width: 800,
    height: 800,
  },
  ambitions:
    "Porter IOI comme catalyseur d'un numérique souverain, utile et durable pour l'Afrique — avec des plateformes fiables, accessibles et créatrices d'opportunités pour la jeunesse et les institutions.",
  objectifs: [
    'Structurer des plateformes souveraines (éducation, services publics) simples à adopter et à opérer',
    "Industrialiser l'usage de l'IA de manière responsable (sécurité, confidentialité, gouvernance)",
    'Créer de la valeur mesurable pour les usagers et les équipes au quotidien',
  ],
  missions: [
    "Accompagner la transformation numérique par la preuve (pilotes, REX, mise à l'échelle)",
    'Former et acculturer pour ancrer durablement les compétences locales',
    'Fédérer un écosystème de partenaires régionaux engagés',
  ],
  conseils: [
    'Commencer simple, aller vite, mesurer et itérer',
    'Toujours prioriser la sécurité et la qualité de service',
    'Concevoir pour la diversité des contextes locaux',
  ],
  phraseInspirante:
    'La technologie a du sens lorsqu’elle élève les personnes qui la vivent au quotidien.',
  backgroundColor: '#0b1b3a', // bleu foncé par défaut
};
