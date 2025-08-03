import { fetcher } from './fetcher';

export async function fetchTypeRessources() {
  return fetcher('/api/typeressources/');
} 