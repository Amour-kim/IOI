import { fetcher } from './fetcher';

export async function fetchProductFonctionnalites() {
  return fetcher('/api/productfonctionnalites/');
} 