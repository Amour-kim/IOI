import { fetcher } from './fetcher';

export async function fetchAssistanceDemandes() {
  return fetcher('/api/assistancedemandes/');
} 