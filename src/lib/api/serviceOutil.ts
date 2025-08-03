import { fetcher } from './fetcher';

export async function fetchServiceOutils() {
  return fetcher('/api/serviceoutils/');
}
