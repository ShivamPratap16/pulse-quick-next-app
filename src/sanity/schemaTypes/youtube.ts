import { defineField, defineType } from 'sanity'
import { Youtube } from 'lucide-react'

export const youtube = defineType({
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    icon: Youtube,
    fields: [
        defineField({
            name: 'url',
            type: 'url',
            title: 'YouTube Video URL',
            validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https'],
                allowRelative: false
            }).custom(url => {
                if (!url) return true
                const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
                return pattern.test(url) ? true : 'Must be a YouTube URL'
            })
        })
    ],
    preview: {
        select: {
            url: 'url'
        },
        prepare({ url }) {
            return {
                title: 'YouTube Video',
                subtitle: url
            }
        }
    }
})
