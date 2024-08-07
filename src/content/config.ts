import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        date: z.string().transform((str) => new Date(str))
    })
});

export const collections = {
    'blog': blogCollection
};