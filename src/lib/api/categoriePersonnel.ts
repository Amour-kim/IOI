import { fetcher } from './fetcher';

export async function fetchCategoriePersonnels() {
  return fetcher('/api/categoriepersonnels/');
} 