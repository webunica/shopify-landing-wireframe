import { defineField, defineType } from 'sanity'

export const logoGridType = defineType({
    name: 'logoGrid',
    title: 'Trusted Brands',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Trusted by 100,000+ Ecommerce Brands'
        }),
        defineField({
            name: 'brands',
            title: 'Brand Names',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
