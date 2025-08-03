import { fetcher } from './fetcher';

export async function fetchProductAvantages() {
  return fetcher('/api/productavantages/');
} 