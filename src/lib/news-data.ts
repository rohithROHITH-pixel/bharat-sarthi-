import { z } from 'zod';

export const newsSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  category: z.string().min(1, 'Category is required'),
  // imageUrl is handled separately during form submission
  imageUrl: z.string().url('Must be a valid URL').optional(),
  imageHint: z.string().min(1, 'Image hint is required'),
  summary: z.string().min(1, 'Summary is required'),
  content: z.string().min(1, 'Content is required'),
  time: z.string().min(1, 'Time is required'),
  creatorId: z.string().optional(),
  // Can be a server timestamp, a Date object, or a string after serialization
  createdAt: z.any().optional(),
});

// The final type for Firestore documents.
export type NewsArticle = z.infer<typeof newsSchema> & {
    id: string;
    imageUrl: string;
};
