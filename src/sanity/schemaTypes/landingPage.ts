import { defineField, defineType } from 'sanity'

export const landingPageType = defineType({
    name: 'landingPage',
    title: 'Landing Pages',
    type: 'document',
    fields: [
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'meta.title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'meta',
            title: 'SEO Meta Data',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Meta Title', type: 'string' }),
                defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
            ]
        }),
        defineField({
            name: 'content',
            title: 'Content Wrapper',
            type: 'object',
            fields: [
                defineField({
                    name: 'hero',
                    title: 'Hero Section',
                    type: 'object',
                    fields: [
                        defineField({ name: 'h1', title: 'H1 Title', type: 'string' }),
                        defineField({ name: 'p', title: 'Paragraph', type: 'text' }),
                    ]
                }),
                defineField({
                    name: 'solucion_nicho',
                    title: 'Solución Nicho',
                    type: 'object',
                    fields: [
                        defineField({ name: 'titulo', title: 'Título Sección', type: 'string' }),
                        defineField({
                            name: 'puntos_clave',
                            title: 'Puntos Clave',
                            type: 'array',
                            of: [{
                                type: 'object',
                                fields: [
                                    { name: 'label', title: 'Label', type: 'string' },
                                    { name: 'desc', title: 'Description', type: 'text' }
                                ]
                            }]
                        })
                    ]
                }),
                defineField({
                    name: 'integraciones',
                    title: 'Integraciones Texto',
                    type: 'object',
                    fields: [
                        defineField({ name: 'pagos', title: 'Pagos', type: 'text' }),
                        defineField({ name: 'logistica', title: 'Logistica', type: 'text' }),
                    ]
                }),
                defineField({
                    name: 'faqs',
                    title: 'FAQs',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'q', title: 'Pregunta', type: 'string' },
                            { name: 'a', title: 'Respuesta', type: 'text' }
                        ]
                    }]
                }),
                defineField({
                    name: 'cta',
                    title: 'Call to Actions',
                    type: 'object',
                    fields: [
                        defineField({ name: 'primary', title: 'CTA Primario', type: 'string' }),
                        defineField({ name: 'secondary', title: 'CTA Secundario', type: 'string' }),
                    ]
                })
            ]
        })
    ]
})
