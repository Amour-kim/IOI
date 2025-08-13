import { servicesData } from './services.data';

/**
 * Récupère tous les services disponibles
 */
export const getAllServices = () => {
  return servicesData;
};

/**
 * Récupère un service par son ID
 * @param id - L'ID du service (peut être une chaîne ou un nombre)
 * @returns Le service correspondant ou undefined si non trouvé
 */
export const getServiceById = (id: string | number) => {
  // Convertir l'ID en nombre pour la comparaison
  const idNum = typeof id === 'string' ? parseInt(id, 10) : id;
  return servicesData.find(service => service.id === idNum);
};

/**
 * Récupère les services par type
 * @param type - Le type de service à filtrer (par exemple: 'web-development')
 * @returns Un tableau de services correspondant au type spécifié
 */
export const getServicesByType = (type: string) => {
  return servicesData.filter(service => 
    service.type?.toLowerCase() === type.toLowerCase()
  );
};

/**
 * Récupère les services récemment ajoutés
 * @param limit Nombre maximum de services à retourner (optionnel)
 */
export const getRecentServices = (limit?: number) => {
  const services = [...servicesData];
  // Trier par date d'ajout (si disponible) ou retourner les premiers
  return limit ? services.slice(0, limit) : services;
};

/**
 * Récupère les types de services uniques
 * @returns Un tableau des types de services disponibles
 */
export const getServiceTypes = () => {
  const types = new Set<string>();
  servicesData.forEach(service => {
    if (service.type) {
      types.add(service.type);
    }
  });
  return Array.from(types);
};
