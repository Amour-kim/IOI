import { fetcher } from './fetcher';

export async function fetchTypeServices() {
  return fetcher('/api/typeservice/');
} 