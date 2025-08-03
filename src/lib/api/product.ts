import { fetcher } from './fetcher';

export async function fetchProducts() {
  return fetcher('/api/products/');
} 