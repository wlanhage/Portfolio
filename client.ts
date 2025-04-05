import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'xj4ovmtr',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-10-01', // use a UTC date string
});

// Create an image URL builder
const builder = imageUrlBuilder(sanityClient);

// Helper function to build image URLs
export function urlFor(source: any) {
  return builder.image(source);
}