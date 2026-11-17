import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => {
    const photo = z.union([image(), z.string().url()]);
    return z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.string().default('Studio journal'),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      breed: z.enum(['Doodle', 'Spaniel', 'Small breed']).optional(),
      breedName: z.string().optional(),
      heroImage: photo,
      before: photo.optional(),
      after: photo.optional(),
      notes: z.record(z.string(), z.string()).default({}),
      draft: z.boolean().default(false),
    });
  },
});

export const collections = { blog };
