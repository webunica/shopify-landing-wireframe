import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './hero'
import { featureType } from './feature'
import { testimonialType } from './testimonial'
import { logoGridType } from './logoGrid'
import { postType } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [heroType, featureType, testimonialType, logoGridType, postType],
}
