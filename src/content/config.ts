import { defineCollection, z } from 'astro:content';

// const video = defineCollection({
// 	// Type-check frontmatter using a schema
// 	schema: z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		heroImage: z.string().optional(),
// 		icon: z.string().optional(),
// 		chanel: z.string(),
// 		views: z.string(),
// 		time: z.string(),
// 		subscribers: z.string(),
// 	}),
// });

const topic = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		class: z.string(),
	}),
});

export const collections = { topic};
