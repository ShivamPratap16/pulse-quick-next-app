
import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const posts = await client.fetch(`*[_type == "post"] { _id, title, slug, publishedAt }`);
    return NextResponse.json({ 
        count: posts.length, 
        posts: posts.map((p: any) => ({
            title: p.title,
            slug: p.slug?.current,
            publishedAt: p.publishedAt
        }))
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
