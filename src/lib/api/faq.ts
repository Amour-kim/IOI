import { fetcher } from './fetcher';

export async function fetchFaqs() {
  return fetcher('/api/faqs/');
} 