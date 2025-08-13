import { CaseStudy } from './index';

export interface CaseStudyFilters {
  category?: string;
  year?: number;
  technologies?: string[];
  client?: string;
  search?: string;
}

export interface CaseStudyPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface CaseStudyResponse {
  data: CaseStudy[];
  pagination: CaseStudyPagination;
  filters: CaseStudyFilters;
}

export interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  relatedCaseStudies?: CaseStudy[];
}

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
  isFeatured?: boolean;
}

export interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  className?: string;
  columns?: number;
}
