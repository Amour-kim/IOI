import { fetcher } from './fetcher';

export async function fetchContacts() {
  return fetcher('/api/contacts/');
} 