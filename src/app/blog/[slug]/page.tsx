import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import styles from './blog-detail.module.css';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 60;

interface Props {
    params: Promise<{ slug: string }>;
}

function getYouTubeEmbedUrl(url: string) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        return {
            title: 'Blog Not Found',
        };
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || `Read about ${post.title}`,
        alternates: {
            canonical: post.canonicalUrl || `/blog/${slug}`,
        },
        openGraph: {
            images: post.featuredImage ? [urlFor(post.featuredImage).width(1200).height(630).url()] : [],
        }
    };
}

import ReadingProgressBar from '@/components/ReadingProgressBar';
import { Clock } from 'lucide-react';

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            // Add image size class logic
            const sizeClass = value.imageSize === 'full' 
                ? styles.imgFull 
                : value.imageSize === 'wide' 
                    ? styles.imgWide 
                    : styles.imgNormal;

            return (
                <div className={`relative w-full ${value.imageSize === 'full' ? 'full-width-section' : ''}`} style={{ margin: '30px 0' }}>
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog Image'}
                        width={1200}
                        height={675} // 16:9 default dimension
                        className={`rounded-lg object-cover ${sizeClass}`}
                        style={value.imageSize === 'normal' ? {} : { height: 'auto' }}
                    />
                </div>
            );
        },
        youtube: ({ value }: any) => {
            const embedUrl = getYouTubeEmbedUrl(value.url);
            if (!embedUrl) return null;
            return (
                <div className={styles.videoContainer} style={{ margin: '30px 0' }}>
                    <iframe
                        src={embedUrl}
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        }
    }
};

function estimateReadingTime(content: any[]) {
    if (!content) return 1;
    let text = '';
    content.forEach(block => {
        if (block._type === 'block' && block.children) {
            block.children.forEach((child: any) => {
                if (child.text) text += child.text + ' ';
            });
        }
    });
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / 200); // 200 words per minute
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        redirect('/blog');
    }

    const fontClass = post.fontStyle === 'serif' ? styles.fontSerif : styles.fontSans;
    const readTime = estimateReadingTime(post.content);

    return (
        <div className={styles.detailData}>
            <ReadingProgressBar />
            <article className="container">
                <header className={styles.headerSection}>
                    <h1 className={styles.title}>{post.title}</h1>

                    <div className={styles.meta}>
                        <span>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        
                        <span className={styles.separator}></span>
                        
                        <span className={styles.readTime}>
                            <Clock size={16} />
                            {readTime} min read
                        </span>

                        {(post.category || post.city) && <span className={styles.separator}></span>}

                        {post.category && (
                            <span className={styles.tag}>{post.category}</span>
                        )}
                        {post.city && (
                            <span className={styles.tag}>{post.city}</span>
                        )}
                    </div>
                </header>

                <div className={`${styles.contentBody} ${fontClass}`}>
                    <PortableText value={post.content} components={ptComponents} />
                </div>
            </article>
        </div>
    );
}
