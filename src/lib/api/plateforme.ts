import { fetcher } from './fetcher';

export async function fetchPlateformes() {
  return fetcher('/api/plateformes/');
} 