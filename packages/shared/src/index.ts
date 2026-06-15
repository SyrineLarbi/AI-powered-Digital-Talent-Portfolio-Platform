import { z } from 'zod';

export const Profession = z.enum([
  'actress', 'actor', 'model', 'influencer', 'content_creator', 'other',
]);

// AI generation output — the single source of truth for both apps
export const PortfolioGenOutput = z.object({
  headline: z.string().max(90),
  biography: z.string(),
  skills: z.array(z.string()).min(3).max(10),
  brandSummary: z.string(),
});
export type PortfolioGenOutput = z.infer<typeof PortfolioGenOutput>;

export const ExperienceEntry = z.object({
  type: z.enum(['acting_credit', 'brand_collab', 'other']),
  title: z.string(),
  role: z.string().optional(),
  year: z.string().optional(),
  note: z.string().optional(),
});
export type ExperienceEntry = z.infer<typeof ExperienceEntry>;