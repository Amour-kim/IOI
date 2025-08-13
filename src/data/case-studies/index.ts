import type { CaseStudy } from '../types/base';
import { caseStudiesData } from './case-studies.data';

/**
 * Récupère toutes les études de cas
 */
export const getAllCaseStudies = (): CaseStudy[] => {
  return caseStudiesData;
};

/**
 * Récupère une étude de cas par son ID
 */
export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudiesData.find((caseStudy: CaseStudy) => caseStudy.id === id);
};

/**
 * Récupère les études de cas par catégorie
 */
/**
 * Récupère les études de cas par catégorie
 */
export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  return caseStudiesData.filter(
    (caseStudy: CaseStudy) => caseStudy.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Récupère les études de cas les plus récentes
 */
/**
 * Récupère les études de cas les plus récentes
 */
export const getRecentCaseStudies = (limit = 3): CaseStudy[] => {
  return [...caseStudiesData]
    .sort(
      (a: CaseStudy, b: CaseStudy) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, limit);
};

/**
 * Récupère les études de cas par technologie
 */
/**
 * Récupère les études de cas par technologie
 */
export const getCaseStudiesByTechnology = (tech: string): CaseStudy[] => {
  return caseStudiesData.filter((caseStudy: CaseStudy) =>
    caseStudy.technologies.some(
      (technology: string) => technology.toLowerCase() === tech.toLowerCase()
    )
  );
};

/**
 * Récupère les catégories uniques des études de cas
 */
/**
 * Récupère les catégories uniques des études de cas
 */
export const getCaseStudyCategories = (): string[] => {
  const categories = new Set<string>();
  caseStudiesData.forEach((caseStudy: CaseStudy) => {
    categories.add(caseStudy.category);
  });
  return Array.from(categories);
};

/**
 * Récupère les technologies uniques utilisées dans les études de cas
 */
/**
 * Récupère les technologies uniques utilisées dans les études de cas
 */
export const getCaseStudyTechnologies = (): string[] => {
  const techs = new Set<string>();
  caseStudiesData.forEach((caseStudy: CaseStudy) => {
    caseStudy.technologies.forEach((tech: string) => techs.add(tech));
  });
  return Array.from(techs);
};

export default {
  getAllCaseStudies,
  getCaseStudyById,
  getCaseStudiesByCategory,
  getRecentCaseStudies,
  getCaseStudiesByTechnology,
  getCaseStudyCategories,
  getCaseStudyTechnologies,
};
