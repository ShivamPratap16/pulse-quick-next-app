import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true,
        },
        {
            name: 'seo',
            title: 'SEO Settings',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Blog Title',
            type: 'string',
            group: 'content',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'user' },
            group: 'content',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            group: 'content',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    validation: (Rule) => Rule.required(),
                }
            ]
        }),
        defineField({
            name: 'fontStyle',
            title: 'Blog Font Style',
            type: 'string',
            group: 'content',
            options: {
                list: [
                    { title: 'Modern Sans (Poppins)', value: 'sans' },
                    { title: 'Classic Serif (Merriweather)', value: 'serif' }
                ],
                layout: 'radio'
            },
            initialValue: 'sans'
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            group: 'content',
            options: {
                list: [
                    { title: 'City-based', value: 'City-based' },
                    { title: 'Service-based', value: 'Service-based' },
                    { title: 'General', value: 'General' }
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
            group: 'content',
            hidden: ({ document }) => document?.category !== 'City-based',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'content',
            title: 'Blog Content',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        { name: 'alt', title: 'Alt Text', type: 'string' },
                        { 
                            name: 'imageSize', 
                            title: 'Image Size', 
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Normal', value: 'normal' },
                                    { title: 'Wide', value: 'wide' },
                                    { title: 'Full Width', value: 'full' }
                                ],
                                layout: 'radio',
                                direction: 'horizontal'
                            },
                            initialValue: 'normal'
                        }
                    ]
                },
                {
                    type: 'youtube'
                }
            ],
        }),
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            group: 'seo',
            description: 'Title for search engines (Max 60 chars)',
            validation: (Rule) => Rule.max(60),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            group: 'seo',
            description: 'Description for search engines (Max 160 chars)',
            rows: 3,
            validation: (Rule) => Rule.max(160),
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'url',
            group: 'seo',
            description: 'Manual canonical URL if needed',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            group: 'content',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'featuredImage',
        },
    },
})
