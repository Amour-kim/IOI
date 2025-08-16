import type { Article } from '@/types/article.types';

export const blogPosts: Article[] = [
  {
    id: '1',
    title: 'Introduction à Next.js 14',
    description: 'Découvrez les nouvelles fonctionnalités de Next.js 14',
    content: 'Next.js 14 apporte des améliorations significatives dans le développement web moderne avec des fonctionnalités avancées de rendu, des performances optimisées et une meilleure expérience développeur.',
    thumbnail: '/website-img-1.jpg',
    date: '2024-06-15',
    author: 'Jean Dupont',
    readTime: '5 min',
    category: 'Développement Web',
    tags: ['Next.js', 'React', 'Frontend'],
    slug: 'introduction-a-nextjs-14',
    sections: [
      {
        id: 'nextjs-basics',
        title: 'Les fondamentaux de Next.js 14',
        content: 'Next.js 14 introduit plusieurs améliorations majeures par rapport aux versions précédentes. Le nouveau compilateur Rust permet des temps de build jusqu\'à 3x plus rapides, tandis que les Server Components offrent une meilleure séparation des préoccupations entre le client et le serveur.',
        images: [
          {
            src: '/website-img-1.jpg',
            alt: 'Architecture de Next.js 14',
            width: 800,
            height: 450,
            caption: 'Nouvelle architecture de Next.js 14 avec Server Components'
          }
        ],
        imagePosition: 'right'
      },
      {
        id: 'performance',
        title: 'Optimisation des performances',
        content: 'Les performances sont au cœur de Next.js 14 avec des optimisations comme le chargement incrémental des polices, l\'optimisation automatique des images et un meilleur support du streaming. Ces améliorations permettent d\'obtenir des scores Core Web Vitals exceptionnels dès le premier chargement.',
        images: [
          {
            src: '/website-img-2.webp',
            alt: 'Graphique des performances Next.js 14',
            width: 800,
            height: 450
          },
          {
            src: '/website-img-3.jpg',
            alt: 'Score Lighthouse',
            width: 800,
            height: 450
          }
        ],
        imagePosition: 'left'
      },
      {
        id: 'developer-experience',
        title: 'Expérience développeur améliorée',
        content: 'Avec un meilleur support de TypeScript, des messages d\'erreur plus clairs et une intégration améliorée avec les outils de développement, Next.js 14 offre une expérience développeur incomparable. La nouvelle documentation et les exemples mis à jour facilitent également la prise en main pour les nouveaux venus.'
      }
    ]
  },
  {
    id: '2',
    title: 'Les meilleures pratiques React en 2024',
    description: 'Découvrez les meilleures pratiques pour développer avec React en 2024',
    content: 'React est un framework JavaScript populaire pour la création d\'applications web interactives. Voici quelques-unes des meilleures pratiques pour développer avec React en 2024.',
    thumbnail: '/pys.jpg',
    date: '2024-06-10',
    author: 'Marie Martin',
    readTime: '7 min',
    category: 'Développement Web',
    tags: ['React', 'Frontend', 'Bonnes pratiques'],
    slug: 'meilleures-pratiques-react-2024',
    sections: [
      {
        id: 'react-components',
        title: 'Composants React',
        content: 'Les composants React sont des éléments fondamentaux pour la création d\'applications web interactives. Voici quelques conseils pour créer des composants React efficaces.',
        images: [
          {
            src: '/pys.jpg',
            alt: 'Composants React',
            width: 800,
            height: 450
          }
        ],
        imagePosition: 'right'
      },
      {
        id: 'react-state',
        title: 'Gestion de l\'état dans React',
        content: 'La gestion de l\'état est un aspect crucial pour la création d\'applications web interactives. Voici quelques conseils pour gérer l\'état dans vos applications React.',
        images: [
          {
            src: '/subSkills.jpg',
            alt: 'Gestion de l\'état dans React',
            width: 800,
            height: 450
          }
        ],
        imagePosition: 'left'
      }
    ]
  },
  {
    id: '3',
    title: 'Optimisation des performances avec Next.js',
    description: 'Techniques avancées pour optimiser les performances de vos applications Next.js',
    content: 'Next.js est un framework JavaScript populaire pour la création d\'applications web interactives. Voici quelques techniques avancées pour optimiser les performances de vos applications Next.js.',
    thumbnail: '/ioi-home.jpg',
    date: '2024-06-05',
    author: 'Pierre Dubois',
    readTime: '8 min',
    category: 'Développement Web',
    tags: ['Next.js', 'Performance', 'Optimisation'],
    slug: 'optimisation-performances-nextjs',
    sections: [
      {
        id: 'nextjs-optimization',
        title: 'Optimisation des performances avec Next.js',
        content: 'Next.js offre plusieurs techniques pour optimiser les performances de vos applications web. Voici quelques-unes des techniques les plus efficaces.',
        images: [
          {
            src: '/ioi-home.jpg',
            alt: 'Optimisation des performances avec Next.js',
            width: 800,
            height: 450
          }
        ],
        imagePosition: 'right'
      }
    ]
  },
  // Ajoutez d'autres articles ici
];
