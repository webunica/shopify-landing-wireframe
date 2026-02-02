import { defineField, defineType } from 'sanity'

export const featureType = defineType({
    name: 'feature',
    title: 'Features',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'badge',
            title: 'Badge Text',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Feature Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'reversed',
            title: 'Reverse Layout?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
        }),
    ],
})
