import { fetcher } from './fetcher';

export async function fetchPersonnelComptes() {
  return fetcher('/api/personnelcomptes/');
} 