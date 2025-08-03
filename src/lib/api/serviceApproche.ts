import { fetcher } from './fetcher';

export async function fetchServiceApproches() {
  return fetcher('/api/serviceapproches/');
}
