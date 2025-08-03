import { fetcher } from './fetcher';

export async function fetchTags() {
  return fetcher('/api/tags/');
} 