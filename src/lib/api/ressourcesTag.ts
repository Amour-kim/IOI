import { fetcher } from './fetcher';

export async function fetchRessourcesTags() {
  return fetcher('/api/ressourcestags/');
} 