import { fetcher } from './fetcher';

export async function fetchTypeDocuments() {
  return fetcher('/api/typedocuments/');
} 