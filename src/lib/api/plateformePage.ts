import { fetcher } from './fetcher';

export async function fetchPlateformePages() {
  return fetcher('/api/plateformepages/');
} 