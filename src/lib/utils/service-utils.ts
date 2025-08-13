import { Service } from '@/types/services.types';

/**
 * Récupère la liste des services uniques avec leur statut
 * @param servicesData Tableau de tous les services
 * @returns Tableau des services uniques avec leur statut
 */
export const getUniqueServices = (servicesData: Service[]) => {
  const uniqueServices = new Map<string, Service>();
  
  servicesData.forEach(service => {
    if (!uniqueServices.has(service.slug)) {
      uniqueServices.set(service.slug, service);
    }
  });

  return Array.from(uniqueServices.values())
    .sort((a, b) => a.title.localeCompare(b.title)); // Tri alphabétique
};

/**
 * Filtre les services par statut
 * @param services Tableau des services
 * @param status Statut à filtrer (par défaut: 'active')
 * @returns Tableau des services filtrés
 */
export const filterServicesByStatus = (services: Service[], status: string = 'active') => {
  return services.filter(service => service.status === status);
};
