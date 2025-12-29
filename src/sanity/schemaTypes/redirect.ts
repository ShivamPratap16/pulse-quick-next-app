import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'redirect',
    title: 'Redirect',
    type: 'document',
    fields: [
        defineField({
            name: 'source',
            title: 'Source Path',
            type: 'string',
            description: 'The old path (e.g. /blog/old-slug)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'destination',
            title: 'Destination Path',
            type: 'string',
            description: 'The new path (e.g. /blog/new-slug)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'permanent',
            title: 'Permanent (301)',
            type: 'boolean',
            initialValue: true,
            description: 'Check for 301, Uncheck for 302',
        }),
    ],
})
