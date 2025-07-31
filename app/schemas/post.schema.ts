import { z } from 'zod';

// Zod schema for a single post object
export const postSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

// Zod schema for an array of posts
export const postsSchema = z.array(postSchema);

// Infer the TypeScript type from the Zod schema.
export type Post = z.infer<typeof postSchema>;
