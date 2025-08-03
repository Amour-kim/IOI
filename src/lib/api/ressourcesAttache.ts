import { fetcher } from './fetcher';
 
export async function fetchRessourcesAttaches() {
  return fetcher('/api/ressourcesattaches/');
} 