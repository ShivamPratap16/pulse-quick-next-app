
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '3s41k5k3', // I need to verify this ID, finding it in sanity.lib.client or env
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Force fresh data
});

const query = `*[_type == "post"] { _id, title, slug, publishedAt }`;

async function main() {
  console.log('Fetching posts...');
  try {
    const posts = await client.fetch(query);
    console.log(`Found ${posts.length} posts.`);
    posts.forEach((p: any) => {
        console.log(`- ${p.title} (Slug: ${p.slug?.current}, Date: ${p.publishedAt})`);
    });
  } catch (error) {
    console.error('Error fetching:', error);
  }
}

main();
