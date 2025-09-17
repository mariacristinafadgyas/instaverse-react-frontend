import { z } from 'zod';

export const reelSchema = z.object({
  id: z.number(),
  video_url: z.string().url(),
  thumbnail_url: z.string().url(),
  caption: z.string().nullable(),
  views: z.number().int().min(0),
  created_at: z.string().optional(),
});

export const reelsSchema = z.array(reelSchema);

export type Reel = z.infer<typeof reelSchema>;
