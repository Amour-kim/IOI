import { fetcher } from './fetcher';

export async function fetchQuestionClients() {
  return fetcher('/api/questionclients/');
} 