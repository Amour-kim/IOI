import { fetcher } from './fetcher';

export async function fetchPartenaireDossiers() {
  return fetcher('/api/partenairedossiers/');
} 