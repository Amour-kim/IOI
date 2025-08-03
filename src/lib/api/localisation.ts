import { fetcher } from './fetcher';

export async function fetchLocalisations() {
  return fetcher('/api/localisations/');
} 