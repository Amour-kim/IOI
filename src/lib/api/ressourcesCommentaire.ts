import { fetcher } from './fetcher';
 
export async function fetchRessourcesCommentaires() {
  return fetcher('/api/ressourcescommentaires/');
} 