import { fetcher } from './fetcher';

export async function fetchInformationsSupplementaires() {
  return fetcher('/api/informationssupplementaires/');
} 