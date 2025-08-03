import { fetcher } from './fetcher';

export async function fetchTypeDossiers() {
  return fetcher('/api/typedossiers/');
} 