import type { Testimonial } from '../types/base';

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    content: 'IOI a transformé notre présence en ligne avec un site web exceptionnel qui a dépassé toutes nos attentes. Leur professionnalisme et leur expertise sont remarquables.',
    author: 'Sophie Laurent',
    role: 'Directrice Marketing',
    company: 'DataFlow',
    image: { src: '/images/testimonials/sophie-laurent.jpg', alt: 'Photo de Sophie Laurent' },
    rating: 5,
    date: new Date('2024-01-15'),
  },
  {
    id: 'testimonial-2',
    content: 'L\'équipe d\'IOI a su comprendre nos besoins spécifiques et a livré une solution sur mesure qui a considérablement amélioré notre productivité. Je recommande vivement leurs services.',
    author: 'Thomas Dubois',
    role: 'PDG',
    company: 'EcoTech',
    image: { src: '/images/testimonials/thomas-dubois.jpg', alt: 'Photo de Thomas Dubois' },
    rating: 5,
    date: new Date('2023-11-22'),
  },
  {
    id: 'testimonial-3',
    content: 'Un travail d\'une qualité exceptionnelle. Leur approche centrée sur l\'utilisateur et leur attention aux détails ont fait toute la différence pour notre projet.',
    author: 'Marie Leroy',
    role: 'Responsable Digital',
    company: 'Style & Co',
    image: { src: '/images/testimonials/marie-leroy.jpg', alt: 'Photo de Marie Leroy' },
    rating: 5,
    date: new Date('2024-02-05'),
  },
  {
    id: 'testimonial-4',
    content: 'Collaborer avec IOI a été une expérience incroyable. Leur réactivité, leur expertise technique et leur compréhension de nos besoins ont été déterminantes pour le succès de notre projet.',
    author: 'Nicolas Martin',
    role: 'CTO',
    company: 'FinTech Solutions',
    image: { src: '/images/testimonials/nicolas-martin.jpg', alt: 'Photo de Nicolas Martin' },
    rating: 5,
    date: new Date('2023-09-18'),
  },
  {
    id: 'testimonial-5',
    content: 'Un partenaire de confiance qui a su nous accompagner à chaque étape de notre transformation digitale. Les résultats sont au rendez-vous !',
    author: 'Émilie Petit',
    role: 'Directrice de la Communication',
    company: 'GreenLife',
    image: { src: '/images/testimonials/emilie-petit.jpg', alt: 'Photo d\'Émilie Petit' },
    rating: 5,
    date: new Date('2024-03-10'),
  }
];
