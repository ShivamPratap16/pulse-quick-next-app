import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import styles from './blog.module.css';

export const revalidate = 0; // Disable cache for debugging

interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    featuredImage: any;
    excerpt: string;
    authorName?: string;
}

export default async function BlogListingPage() {
    const posts = await client.fetch<BlogPost[]>(POSTS_QUERY, {}, { cache: 'no-store' });

    return (
        <div className={styles.blogSection}>
            <div className="container">
                <h1 className={styles.sectionTitle}>Our Latest Blog</h1>

                {posts && posts.length > 0 ? (
                    <div className={styles.blogGrid}>
                        {posts.map((post) => (
                            <Link
                                href={`/blog/${post.slug.current}`}
                                key={post._id}
                                className={styles.blogCard}
                            >
                                <div className={styles.imageWrapper}>
                                    {post.featuredImage && (
                                        <Image
                                            src={urlFor(post.featuredImage).url()}
                                            alt={post.title}
                                            fill
                                            className={styles.blogImage}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority
                                        />
                                    )}
                                </div>
                                <div className={styles.blogContent}>
                                    <div className={styles.blogMeta}>
                                        <span className={styles.date}>
                                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        {/* Optional: Add category here if available */}
                                    </div>
                                    <h2 className={styles.blogTitle}>{post.title}</h2>
                                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.author}>{post.authorName || 'Pulse Quick Info'}</span>
                                        <span className={styles.readMore}>Read &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className={styles.noBlogs}>
                        <p>No blogs published yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
