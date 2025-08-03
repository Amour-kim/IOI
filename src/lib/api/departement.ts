import { fetcher } from './fetcher';

export async function fetchDepartements() {
  return fetcher('/api/departements/');
} 