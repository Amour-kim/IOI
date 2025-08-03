import { fetcher } from './fetcher';

export async function fetchPersonnels() {
  return fetcher('/api/personnels/');
}
