import { fetcher } from './fetcher';

export async function fetchPlateformeComptes() {
  return fetcher('/api/plateformecomptes/');
} 