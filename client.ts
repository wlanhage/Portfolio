import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'xj4ovmtr',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-10-01', // use a UTC date string
});