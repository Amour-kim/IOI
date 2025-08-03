import { fetcher } from './fetcher';

export async function fetchServicePersonnels() {
  return fetcher('/api/servicepersonnels/');
} 