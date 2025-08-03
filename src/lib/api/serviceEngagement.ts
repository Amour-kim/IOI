import { fetcher } from './fetcher';

export async function fetchServiceEngagements() {
  return fetcher('/api/serviceengagements/');
} 