import { testimonialsData } from './testimonials.data';

/**
 * Récupère tous les témoignages
 */
export const getAllTestimonials = () => {
  return testimonialsData;
};

/**
 * Récupère un témoignage par son ID
 */
export const getTestimonialById = (id: string) => {
  return testimonialsData.find(testimonial => testimonial.id === id);
};

/**
 * Récupère les témoignages par entreprise
 */
export const getTestimonialsByCompany = (company: string) => {
  return testimonialsData.filter(
    testimonial => testimonial.company?.toLowerCase() === company.toLowerCase()
  );
};

/**
 * Récupère les témoignages par note minimale
 * @param minRating Note minimale (entre 1 et 5)
 */
export const getTestimonialsByMinRating = (minRating: number) => {
  return testimonialsData.filter(
    testimonial => testimonial.rating && testimonial.rating >= minRating
  );
};

/**
 * Récupère les témoignages les plus récents
 * @param limit Nombre maximum de témoignages à retourner (optionnel)
 */
export const getRecentTestimonials = (limit?: number) => {
  const sortedTestimonials = [...testimonialsData].sort(
    (a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0)
  );
  return limit ? sortedTestimonials.slice(0, limit) : sortedTestimonials;
};

/**
 * Récupère les entreprises uniques ayant laissé des témoignages
 */
export const getTestimonialCompanies = () => {
  const companies = new Set<string>();
  testimonialsData.forEach(testimonial => {
    if (testimonial.company) {
      companies.add(testimonial.company);
    }
  });
  return Array.from(companies).sort();
};
