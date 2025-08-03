import { fetcher } from './fetcher';

export async function fetchArchiveFichiers() {
  return fetcher('/api/archivefichiers/');
} 