import { fetcher } from './fetcher';

export async function fetchServiceCanals() {
  return fetcher('/api/servicecanals/');
} 