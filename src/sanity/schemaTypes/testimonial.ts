import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
        }),
        defineField({
            name: 'author',
            title: 'Author Name/Role',
            type: 'string',
        }),
        defineField({
            name: 'badge',
            title: 'Badge (e.g. Key Strategy)',
            type: 'string',
        }),
    ],
})
