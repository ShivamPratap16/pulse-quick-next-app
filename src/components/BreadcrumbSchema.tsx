import React from 'react';
import Script from 'next/script';
import { BreadcrumbItem } from '@/lib/breadcrumb';

type Props = {
    items: BreadcrumbItem[];
};

export default function BreadcrumbSchema({ items }: Props) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: item.href ? `https://pulsequik.com${item.href}` : undefined
        }))
    };

    return (
        <Script id="breadcrumb-schema" type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}
