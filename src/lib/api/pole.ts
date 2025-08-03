import { fetcher } from './fetcher';

export async function fetchPoles() {
  return fetcher('/api/poles/');
} 