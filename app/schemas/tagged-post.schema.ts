import { z } from 'zod';

export const taggedSchema = z.array(
  z.object({
    id: z.number(),
    img_url: z.string().url(),
    caption: z.string().nullable(),
    created_at: z.string(),
    tagged_by: z.string(),
  })
);

export type TaggedPost = z.infer<typeof taggedSchema>;
