import { fetcher } from './fetcher';

export async function fetchServiceDomaines() {
  return fetcher('/api/servicedomaines/');
} 