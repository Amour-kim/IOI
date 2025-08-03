import { fetcher } from './fetcher';

export async function fetchLocalisationsPersonnel() {
  return fetcher('/api/localisationspersonnel/');
}
