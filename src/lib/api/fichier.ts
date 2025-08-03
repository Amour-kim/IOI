import { fetcher } from './fetcher';

export async function fetchFichiers() {
  return fetcher('/api/fichiers/');
} 