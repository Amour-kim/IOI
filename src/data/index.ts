// Export des types
export * from './types';

// Export des données des études de cas
export * from './case-studies';

// Export des données des services
export * from './services';

// Export des données de l'équipe
export * from './team';

// Export des témoignages
export * from './testimonials';

// Export des produits
export * from './products';

// Export des projets
export * from './projects';

// Utilitaires communs
export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatCurrency = (value: number | string): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(num);
};
