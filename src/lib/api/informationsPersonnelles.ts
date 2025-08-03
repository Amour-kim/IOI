import { fetcher } from './fetcher';

export async function fetchInformationsPersonnelles() {
  return fetcher('/api/informationspersonnelles/');
} 