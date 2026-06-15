import { z } from 'zod';
export declare const Profession: z.ZodEnum<["actress", "actor", "model", "influencer", "content_creator", "other"]>;
export declare const PortfolioGenOutput: z.ZodObject<{
    headline: z.ZodString;
    biography: z.ZodString;
    skills: z.ZodArray<z.ZodString, "many">;
    brandSummary: z.ZodString;
}, "strip", z.ZodTypeAny, {
    headline: string;
    biography: string;
    skills: string[];
    brandSummary: string;
}, {
    headline: string;
    biography: string;
    skills: string[];
    brandSummary: string;
}>;
export type PortfolioGenOutput = z.infer<typeof PortfolioGenOutput>;
export declare const ExperienceEntry: z.ZodObject<{
    type: z.ZodEnum<["acting_credit", "brand_collab", "other"]>;
    title: z.ZodString;
    role: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "other" | "acting_credit" | "brand_collab";
    title: string;
    role?: string | undefined;
    year?: string | undefined;
    note?: string | undefined;
}, {
    type: "other" | "acting_credit" | "brand_collab";
    title: string;
    role?: string | undefined;
    year?: string | undefined;
    note?: string | undefined;
}>;
export type ExperienceEntry = z.infer<typeof ExperienceEntry>;
