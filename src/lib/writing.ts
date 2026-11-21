import { getCollection } from 'astro:content';

/** Published essays, newest first. Drafts are included only in `astro dev`. */
export async function getPosts() {
  const posts = await getCollection('writing', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
