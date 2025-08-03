import { fetcher } from './fetcher';

export async function fetchDocuments() {
  return fetcher('/api/documents/');
} 