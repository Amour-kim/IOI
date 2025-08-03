import { fetcher } from './fetcher';

export async function fetchServiceSupportTypes() {
  return fetcher('/api/servicesupporttypes/');
}
