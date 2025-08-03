import { fetcher } from './fetcher';

export async function fetchServiceProfils() {
  return fetcher('/api/serviceprofils/');
}