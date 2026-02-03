import { defineField, defineType } from 'sanity'

export const heroType = defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Main Heading',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'images',
            title: 'Carousel Images',
            description: 'Upload multiple images for the auto-playing carousel',
            type: 'array',
            of: [{
                type: 'image',
                options: { hotspot: true },
                fields: [
                    defineField({
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative text',
                    }),
                ]
            }],
            options: {
                layout: 'grid',
            }
        }),
        // Keeping legacy field just in case, or we can deprecate it. 
        // For this update, I'll focus on the array.
    ],
})
