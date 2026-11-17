import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => {
		// A local image (relative path, optimized by Astro) or a remote URL.
		const photo = z.union([image(), z.string().url()]);

		return z.object({
			title: z.string(),
			// Short summary shown on cards and in the post intro.
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// Used by the gallery filters.
			breed: z.enum(['Doodle', 'Spaniel', 'Small breed']),
			// Displayed breed, e.g. "Goldendoodle".
			breedName: z.string(),
			category: z.string(),
			heroImage: photo,
			before: photo.optional(),
			after: photo.optional(),
			// Grooming notes, e.g. { Body: '#4F blade', Tools: 'Slicker, comb' }
			notes: z.record(z.string(), z.string()).default({}),
			draft: z.boolean().default(false),
		});
	},
});

export const collections = { blog };
