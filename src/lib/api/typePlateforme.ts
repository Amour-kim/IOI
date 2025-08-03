import { fetcher } from './fetcher';

export async function fetchTypePlateformes() {
  return fetcher('/api/typeplateformes/');
} 