import { fetcher } from './fetcher';

export async function fetchDomaines() {
  return fetcher('/api/domaines/');
}