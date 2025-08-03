import { fetcher } from './fetcher';

export async function fetchDossiers() {
  return fetcher('/api/dossiers/');
} 