import { fetcher } from './fetcher';

export async function fetchPartenaireDomaines() {
  return fetcher('/api/partenairedomaines/');
} 