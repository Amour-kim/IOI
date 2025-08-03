import { fetcher } from './fetcher';

export async function fetchCasiers() {
  return fetcher('/api/casiers/');
} 