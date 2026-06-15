import { PortfolioGenOutput } from '@portfolio/shared';
export interface PortfolioGenInput {
    fullName: string;
    profession: string;
    gender?: string;
    location: string;
    description?: string;
    experiences: {
        type: string;
        title: string;
        role?: string;
        year?: string;
        note?: string;
    }[];
    socials: {
        instagram?: string;
        tiktok?: string;
        youtube?: string;
    };
    followers?: {
        instagram?: number;
        tiktok?: number;
        youtube?: number;
    };
}
export type Section = 'all' | 'headline' | 'biography' | 'skills' | 'brand_summary';
export interface LlmProvider {
    generate(input: PortfolioGenInput, section?: Section): Promise<{
        output: PortfolioGenOutput;
        tokensUsed?: number;
    }>;
}
export declare const LLM_PROVIDER: unique symbol;
