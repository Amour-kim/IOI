import { fetcher } from './fetcher';

export async function fetchRessourcesLinks() {
  return fetcher('/api/ressourceslinks/');
} 