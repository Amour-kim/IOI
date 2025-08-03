import { fetcher } from './fetcher';

export async function fetchDocumentations() {
  return fetcher('/api/documentations/');
} 