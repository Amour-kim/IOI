import type { TeamMember } from '../types/base';
import { getIconComponent } from '@/components/ui/icons';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export const teamData: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'CEO & Fondateur',
    bio: 'Expert en stratégie digitale avec plus de 15 ans d\'expérience dans le conseil aux entreprises technologiques.',
    image: {
      src: '/images/team/john-doe.jpg',
      alt: 'Photo de John Doe, CEO & Fondateur'
    },
    socialLinks: [
      { platform: 'linkedin', href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn', icon: 'linkedin' },
      { platform: 'twitter', href: 'https://twitter.com/johndoe', label: 'Twitter', icon: 'twitter' }
    ],
    email: 'john.doe@example.com',
    phone: '+33 6 12 34 56 78',
    skills: ['Stratégie', 'Gestion d\'entreprise', 'Développement commercial'],
    joinDate: new Date('2020-01-15')
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Directrice Technique',
    bio: 'Développeuse full-stack passionnée par les architectures évolutives et les bonnes pratiques de développement.',
    image: {
      src: '/images/team/jane-smith.jpg',
      alt: 'Photo de Jane Smith, Directrice Technique'
    },
    socialLinks: [
      { platform: 'github', href: 'https://github.com/janesmith', label: 'GitHub', icon: 'github' },
      { platform: 'linkedin', href: 'https://linkedin.com/in/janesmith', label: 'LinkedIn', icon: 'linkedin' }
    ],
    email: 'jane.smith@example.com',
    skills: ['React', 'Node.js', 'Architecture logicielle'],
    joinDate: new Date('2020-03-22')
  },
  {
    id: 'marc-dupont',
    name: 'Marc Dupont',
    role: 'Designer UX/UI Senior',
    bio: 'Designer passionné avec plus de 8 ans d\'expérience dans la création d\'interfaces utilisateur intuitives et esthétiques.',
    image: {
      src: '/images/team/marc-dupont.jpg',
      alt: 'Photo de Marc Dupont, Designer UX/UI Senior'
    },
    socialLinks: [
      { platform: 'dribbble', href: 'https://dribbble.com/marcdupont', label: 'Dribbble', icon: 'dribbble' },
      { platform: 'linkedin', href: 'https://linkedin.com/in/marcdupont', label: 'LinkedIn', icon: 'linkedin' }
    ],
    email: 'marc.dupont@example.com',
    skills: ['UI/UX Design', 'Prototypage', 'Recherche utilisateur'],
    joinDate: new Date('2020-05-10')
  },
  {
    id: 'sophie-martin',
    name: 'Sophie Martin',
    role: 'Chef de Projet Digital',
    bio: 'Gestionnaire de projet expérimentée avec une expertise en méthodologies agiles et en gestion d\'équipes pluridisciplinaires.',
    image: {
      src: '/images/team/sophie-martin.jpg',
      alt: 'Photo de Sophie Martin, Chef de Projet Digital'
    },
    socialLinks: [
      { platform: 'twitter', href: 'https://twitter.com/sophiemartin', label: 'Twitter', icon: 'twitter' },
      { platform: 'linkedin', href: 'https://linkedin.com/in/sophiemartin', label: 'LinkedIn', icon: 'linkedin' },
      { platform: 'website', href: 'https://sophiemartin.com', label: 'Site web', icon: 'globe' }
    ],
    email: 'sophie.martin@example.com',
    skills: ['Gestion de projet', 'Méthodologies Agiles', 'Stratégie digitale'],
    joinDate: new Date('2020-07-18')
  }
];
