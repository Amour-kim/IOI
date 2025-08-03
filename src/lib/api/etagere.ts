import { fetcher } from './fetcher';

export async function fetchEtageres() {
  return fetcher('/api/etageres/');
} 