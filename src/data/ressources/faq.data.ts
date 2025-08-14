import type { FAQItems } from './resources.types';

export const faqItems: FAQItems = [
  {
    question: 'Quels sont vos services principaux ?',
    answer:
      'Nous proposons des services de développement web et mobile, consulting, support technique, maintenance, design et marketing digital. Chaque service est adapté aux besoins spécifiques de votre entreprise.',
    category: 'general',
  },
  {
    question: 'Dans quels délais pouvez-vous livrer un projet ?',
    answer:
      "Les délais varient selon la complexité du projet. Un site web simple peut être livré en 2-3 semaines, tandis qu'une application complexe peut prendre 2-3 mois. Nous établissons toujours un planning détaillé en amont.",
    category: 'general',
  },
  {
    question: 'Proposez-vous des services de maintenance après livraison ?',
    answer:
      'Oui, nous proposons différents niveaux de maintenance : basique, premium et enterprise. Cela inclut les mises à jour, la surveillance, les sauvegardes et le support technique.',
    category: 'general',
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      "Nous utilisons les technologies les plus récentes : React, Next.js, Node.js, Python, Flutter, et bien d'autres. Le choix dépend des besoins spécifiques de votre projet.",
    category: 'technical',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      "Absolument. Nous mettons en place les meilleures pratiques de sécurité : chiffrement SSL, authentification sécurisée, sauvegardes régulières et conformité RGPD.",
    category: 'technical',
  },
  {
    question: 'Pouvez-vous intégrer des APIs tierces ?',
    answer:
      "Oui, nous avons une grande expérience dans l'intégration d'APIs tierces (paiement, cartographie, réseaux sociaux, etc.) et nous pouvons également développer nos propres APIs.",
    category: 'technical',
  },
  {
    question: 'Comment fonctionne la facturation ?',
    answer:
      'Nous proposons plusieurs modèles : forfait pour les projets définis, temps et matériaux pour les projets évolutifs, et abonnement pour les services récurrents. Un devis détaillé est toujours fourni en amont.',
    category: 'billing',
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer:
      'Non, nous sommes transparents sur nos tarifs. Tous les coûts sont détaillés dans le devis initial et nous vous informons de tout changement avant de procéder.',
    category: 'billing',
  },
  {
    question: 'Proposez-vous des paiements échelonnés ?',
    answer:
      "Oui, nous proposons des échéances adaptées à votre situation : 30% à la commande, 30% à mi-projet et 40% à la livraison.",
    category: 'billing',
  },
  {
    question: 'Comment puis-je contacter le support ?',
    answer:
      "Vous pouvez nous contacter par email, téléphone, ou via notre chat en ligne. Nos horaires de support sont du lundi au vendredi, 9h-18h, avec un support d'urgence 24/7 pour les clients premium.",
    category: 'support',
  },
  {
    question: 'Quel est le temps de réponse moyen ?',
    answer:
      "Nous répondons généralement dans les 4 heures en heures ouvrables. Pour les urgences, nous intervenons dans l'heure. Les clients enterprise bénéficient d'un support prioritaire.",
    category: 'support',
  },
  {
    question: 'Proposez-vous de la formation ?',
    answer:
      "Oui, nous proposons des sessions de formation pour vos équipes sur l'utilisation des solutions que nous développons, ainsi que des tutoriels et une documentation complète.",
    category: 'support',
  },
];
