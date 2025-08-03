export type CardType = "video" | "article"

export type VideoCardType = {
  id: number
  type: "video"
  title: string
  description: string
  thumbnail: string // Path to thumbnail image
  videoUrl: string // URL for the video source
  duration: string
  channel: string
  channelAvatar: string // Path to channel avatar image
  views: string
  time: string // e.g., "2 months ago"
  tags?: string[]
  comments?: CommentType[]
  publishedAt: string // Date ISO string
}

export type ArticleCardType = {
  id: number
  type: "article"
  title: string
  description: string
  thumbnail: string
  author: string
  date: string
  tags?: string[]
  publishedAt: string // Date ISO string
}

export type CommentType = {
  id: number
  user: string
  avatar: string
  time: string
  text: string
}

export type DocsDataType = {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  version: string[];
  type: 'gratuit' | 'payant';
  fileUrl: string;
  docType: string;
  domain: string;
  audience: string[];
  cover: string;
};

export const allCards: (VideoCardType | ArticleCardType)[] = [
  {
    id: 1,
    type: "video",
    title: "Vercel Ship Keynote: Introducing the frontend cloud",
    description:
      "Today, we're introducing the frontend cloud, where frontend developers build, test, and deploy high-quality web applications efficiently and quickly, all on Vercel. This keynote covers all the exciting new features and improvements, showcasing how Vercel empowers developers to create performant and scalable web applications with ease. From new deployment strategies to enhanced developer tools, this presentation highlights the future of web development on the Vercel platform. Don't miss out on the insights and innovations that will shape your next project!",
    thumbnail: "/placeholder.svg?height=225&width=400",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", // Sample video URL
    duration: "15:30",
    channel: "Vercel",
    channelAvatar: "/placeholder-user.jpg",
    views: "1.2M",
    time: "2 months ago",
    tags: ["Next.js", "Vercel", "Frontend", "Cloud"],
    comments: [
      {
        id: 1,
        user: "@iamwillpursell",
        avatar: "/placeholder-user.jpg",
        time: "5 months ago",
        text: "I really love the ecosystem Vercel is creating. The way each component can be added and modified with ease really makes these tools attractive.",
      },
      {
        id: 2,
        user: "@HackSoft",
        avatar: "/placeholder-user.jpg",
        time: "2 months ago",
        text: "We are more than excited to leverage all the new stuff, building better products for our clients ✨",
      },
      {
        id: 3,
        user: "@greed7513",
        avatar: "/placeholder-user.jpg",
        time: "6 days ago",
        text: "does anyone know which monospace are they using when showing code?",
      },
      {
        id: 4,
        user: "@webdevfan",
        avatar: "/placeholder-user.jpg",
        time: "1 day ago",
        text: "This is truly inspiring! The future of frontend development looks bright with Vercel.",
      },
      {
        id: 5,
        user: "@code_master",
        avatar: "/placeholder-user.jpg",
        time: "3 weeks ago",
        text: "Amazing features! Can't wait to try them out in my next project.",
      },
    ],
    publishedAt: "2024-06-01",
  },
  {
    id: 2,
    type: "video",
    title: "Introducing v0: Generative UI",
    description:
      "Discover v0, Vercel's new generative UI tool that helps you build beautiful interfaces faster than ever before. This revolutionary tool leverages AI to generate stunning user interfaces from simple text prompts, accelerating your design and development workflow. See how v0 can transform your ideas into production-ready UI components in minutes.",
    thumbnail: "/placeholder.svg?height=225&width=400",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "08:45",
    channel: "Vercel",
    channelAvatar: "/placeholder-user.jpg",
    views: "300K",
    time: "5 days ago",
    tags: ["AI", "UI", "Generative", "Vercel"],
    comments: [],
    publishedAt: "2024-06-01",
  },
  {
    id: 3,
    type: "video",
    title: "Using Vercel KV with Svelte",
    description:
      "Learn how to integrate Vercel KV with your Svelte applications for fast and scalable data storage. This tutorial walks you through setting up Vercel KV, performing basic operations, and integrating it seamlessly into your Svelte projects to build robust and performant applications.",
    thumbnail: "/placeholder.svg?height=225&width=400",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "12:10",
    channel: "Lee Robinson",
    channelAvatar: "/placeholder-user.jpg",
    views: "21K",
    time: "1 week ago",
    tags: ["Svelte", "Vercel KV", "Database"],
    comments: [],
    publishedAt: "2024-06-01",
  },
  {
    id: 4,
    type: "video",
    title: "Loading UI with Next.js 13",
    description:
      "A deep dive into the new loading UI patterns introduced in Next.js 13 for better user experience. This session explores various strategies for implementing effective loading states, suspense boundaries, and streaming HTML to create highly responsive and engaging user interfaces in your Next.js applications.",
    thumbnail: "http://localhost:8080/media/tutoriel/1/1742369565757.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "09:00",
    channel: "Delba",
    channelAvatar: "/placeholder-user.jpg",
    views: "12K",
    time: "10 days ago",
    tags: ["Next.js", "UI", "Performance"],
    comments: [],
    publishedAt: "2024-06-01",
  },
  {
    id: 5,
    type: "article",
    title: "The Future of Server Components",
    description: "An in-depth look at how Server Components are changing the landscape of web development.",
    thumbnail: "/placeholder.svg?height=225&width=400",
    author: "Jane Doe",
    date: "July 1, 2025",
    tags: ["React", "Server Components", "Frontend"],
    publishedAt: "2024-06-01",
  },
  {
    id: 6,
    type: "video",
    title: "Building a Real-time Chat App with Next.js and WebSockets",
    description:
      "Learn how to build a real-time chat application using Next.js and WebSockets. This tutorial covers setting up your backend, integrating WebSockets, and creating a dynamic frontend for instant messaging.",
    thumbnail: "/placeholder.svg?height=225&width=400",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    duration: "20:00",
    channel: "Acme Dev",
    channelAvatar: "/placeholder-user.jpg",
    views: "50K",
    time: "3 weeks ago",
    tags: ["Next.js", "WebSockets", "Real-time", "Chat"],
    comments: [],
    publishedAt: "2024-06-01",
  },
  {
    id: 7,
    type: "video",
    title: "Mastering CSS Grid for Responsive Layouts",
    description:
      "Unlock the power of CSS Grid to create complex and responsive layouts with ease. This comprehensive guide covers everything from basic grid properties to advanced techniques for modern web design.",
    thumbnail: "/placeholder.svg?height=225&width=400",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    duration: "18:15",
    channel: "Design Hub",
    channelAvatar: "/placeholder-user.jpg",
    views: "80K",
    time: "1 month ago",
    tags: ["CSS", "Grid", "Responsive Design", "Frontend"],
    comments: [],
    publishedAt: "2024-06-01",
  },
  {
    id: 8,
    type: "article",
    title: "Understanding React Server Actions",
    description: "A practical guide to using Server Actions in React for better data fetching and mutations.",
    thumbnail: "/website-img-1.jpg",
    author: "John Smith",
    date: "July 10, 2025",
    tags: ["React", "Server Actions", "Data Fetching"],
    publishedAt: "2024-06-01",
  },
  {
    id: 9,
    type: "article",
    title: "Optimizing Web Performance with Next.js",
    description: "Tips and tricks to make your Next.js apps faster and more efficient.",
    thumbnail: "/website-img-2.webp",
    author: "Alice Johnson",
    date: "July 12, 2025",
    tags: ["Next.js", "Performance", "Optimization"],
    publishedAt: "2024-06-01",
  },
  {
    id: 10,
    type: "article",
    title: "A Deep Dive into CSS Variables",
    description: "How to leverage CSS variables for scalable and maintainable design systems.",
    thumbnail: "/website-img-3.jpg",
    author: "Emily Brown",
    date: "July 15, 2025",
    tags: ["CSS", "Design System", "Frontend"],
    publishedAt: "2024-06-01",
  },
  {
    id: 11,
    type: "article",
    title: "API Routes in Next.js: Best Practices",
    description: "Learn how to structure and secure your API routes in Next.js projects.",
    thumbnail: "/pys.jpg",
    author: "Michael Green",
    date: "July 18, 2025",
    tags: ["Next.js", "API", "Backend"],
    publishedAt: "2024-06-01",
  },
  {
    id: 12,
    type: "article",
    title: "Accessibility in Modern Web Apps",
    description: "Essential techniques to make your web applications accessible to everyone.",
    thumbnail: "/images/DG1.jpg",
    author: "Sophie Lee",
    date: "July 20, 2025",
    tags: ["Accessibility", "Web", "Frontend"],
    publishedAt: "2024-06-01",
  },
  {
    id: 13,
    type: "video",
    title: "Deploying Next.js Apps on Vercel",
    description: "Step-by-step guide to deploying your Next.js applications on the Vercel platform.",
    thumbnail: "/ioi-home.jpg",
    videoUrl: "/p-ioi.mp4",
    duration: "10:20",
    channel: "Vercel",
    channelAvatar: "/placeholder-user.jpg",
    views: "75K",
    time: "2 weeks ago",
    tags: ["Next.js", "Vercel", "Deployment"],
    comments: [],
    publishedAt: "2024-06-01",
  },
  {
    id: 14,
    type: "video",
    title: "State Management in React: Context vs Redux",
    description: "Comparing Context API and Redux for state management in React applications.",
    thumbnail: "/skills.avif",
    videoUrl: "/p-api.mp4",
    duration: "14:05",
    channel: "React Academy",
    channelAvatar: "/placeholder-user.jpg",
    views: "42K",
    time: "4 days ago",
    tags: ["React", "State Management", "Redux", "Context API"],
    comments: [],
    publishedAt: "2024-06-01",
  },
]

export const docsData: DocsDataType[] = [
  {
    id: 'getting-started',
    category: 'Démarrage Rapide',
    title: "Installation et configuration",
    description: "Comment installer et configurer la solution.",
    content: "Voici comment installer...",
    tags: ['installation', 'configuration'],
    version: ['current', 'previous'],
    type: 'gratuit',
    fileUrl: '/docs/installation.pdf',
    docType: 'pdf',
    domain: 'Développement',
    audience: ['Débutant', 'PME'],
    cover: '/covers/installation.jpg',
  },
  {
    id: 'api-auth',
    category: 'Référence API',
    title: "Authentification API",
    description: "Tout sur l'authentification de l'API.",
    content: "Pour authentifier...",
    tags: ['api', 'authentification'],
    version: ['current', 'beta'],
    type: 'payant',
    fileUrl: '/docs/api-auth.pdf',
    docType: 'pdf',
    domain: 'Sécurité',
    audience: ['Start-Up', 'Personnels'],
    cover: '/covers/api-auth.jpg',
  },
  {
    id: 'best-practices-security',
    category: 'Bonnes Pratiques',
    title: "Sécurité avancée",
    description: "Meilleures pratiques de sécurité.",
    content: "Pour sécuriser...",
    tags: ['sécurité', 'pratiques'],
    version: ['current', 'previous', 'beta'],
    type: 'gratuit',
    fileUrl: '/docs/securite.pdf',
    docType: 'ppt',
    domain: 'Sécurité',
    audience: ['PME', 'Débutant'],
    cover: '/covers/securite.jpg',
  },
  // ... autres docs ...
];

// FAQ Types and Data
export type FAQCategory = 'general' | 'technical' | 'billing' | 'support';

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQData = {
  [key in FAQCategory]: FAQItem[];
};

export const faqData: FAQData = {
  general: [
    {
      question: 'Quels sont vos services principaux ?',
      answer: 'Nous proposons des services de développement web et mobile, consulting, support technique, maintenance, design et marketing digital. Chaque service est adapté aux besoins spécifiques de votre entreprise.'
    },
    {
      question: 'Dans quels délais pouvez-vous livrer un projet ?',
      answer: "Les délais varient selon la complexité du projet. Un site web simple peut être livré en 2-3 semaines, tandis qu'une application complexe peut prendre 2-3 mois. Nous établissons toujours un planning détaillé en amont."
    },
    {
      question: 'Proposez-vous des services de maintenance après livraison ?',
      answer: 'Oui, nous proposons différents niveaux de maintenance : basique, premium et enterprise. Cela inclut les mises à jour, la surveillance, les sauvegardes et le support technique.'
    }
  ],
  technical: [
    {
      question: 'Quelles technologies utilisez-vous ?',
      answer: "Nous utilisons les technologies les plus récentes : React, Next.js, Node.js, Python, Flutter, et bien d'autres. Le choix dépend des besoins spécifiques de votre projet."
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Absolument. Nous mettons en place les meilleures pratiques de sécurité : chiffrement SSL, authentification sécurisée, sauvegardes régulières et conformité RGPD.'
    },
    {
      question: 'Pouvez-vous intégrer des APIs tierces ?',
      answer: "Oui, nous avons une grande expérience dans l'intégration d'APIs tierces (paiement, cartographie, réseaux sociaux, etc.) et nous pouvons également développer nos propres APIs."
    }
  ],
  billing: [
    {
      question: 'Comment fonctionne la facturation ?',
      answer: 'Nous proposons plusieurs modèles : forfait pour les projets définis, temps et matériaux pour les projets évolutifs, et abonnement pour les services récurrents. Un devis détaillé est toujours fourni en amont.'
    },
    {
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Non, nous sommes transparents sur nos tarifs. Tous les coûts sont détaillés dans le devis initial et nous vous informons de tout changement avant de procéder.'
    },
    {
      question: 'Proposez-vous des paiements échelonnés ?',
      answer: 'Oui, nous proposons des échéances adaptées à votre situation : 30% à la commande, 30% à mi-projet et 40% à la livraison.'
    }
  ],
  support: [
    {
      question: 'Comment puis-je contacter le support ?',
      answer: 'Vous pouvez nous contacter par email, téléphone, ou via notre chat en ligne. Nos horaires de support sont du lundi au vendredi, 9h-18h, avec un support d\'urgence 24/7 pour les clients premium.'
    },
    {
      question: 'Quel est le temps de réponse moyen ?',
      answer: 'Nous répondons généralement dans les 4 heures en heures ouvrables. Pour les urgences, nous intervenons dans l\'heure. Les clients enterprise bénéficient d\'un support prioritaire.'
    },
    {
      question: 'Proposez-vous de la formation ?',
      answer: 'Oui, nous proposons des sessions de formation pour vos équipes sur l\'utilisation des solutions que nous développons, ainsi que des tutoriels et une documentation complète.'
    }
  ]
};

export const faqCategories = [
  { id: 'all', name: 'Toutes', count: 12, icon: '❓', color: 'bg-blue-500' },
  { id: 'general', name: 'Général', count: 3, icon: '❓', color: 'bg-blue-500' },
  { id: 'technical', name: 'Technique', count: 3, icon: '⚙️', color: 'bg-green-500' },
  { id: 'billing', name: 'Facturation', count: 3, icon: '💰', color: 'bg-purple-500' },
  { id: 'support', name: 'Support', count: 3, icon: '🛠️', color: 'bg-orange-500' }
];
