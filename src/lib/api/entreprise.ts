import { fetcher } from './fetcher';

export async function fetchEntreprises() {
  return fetcher('/api/entreprises/');
} 