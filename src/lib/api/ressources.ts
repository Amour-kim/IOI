import { fetcher } from './fetcher';

export async function fetchRessources() {
  return fetcher('/api/ressources/');
} 