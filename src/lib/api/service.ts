import { fetcher } from './fetcher';

export async function fetchServices() {
  return fetcher('/api/services/');
} 