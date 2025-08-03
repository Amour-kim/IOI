import { fetcher } from './fetcher';

export async function fetchServiceTemoignages() {
  return fetcher('/api/servicetemoignages/');
} 