import { PortfolioGenOutput } from '@portfolio/shared';
import { LlmProvider, PortfolioGenInput, Section } from './llm-provider.interface';
export declare class GroqProvider implements LlmProvider {
    private client;
    generate(input: PortfolioGenInput, _section?: Section): Promise<{
        output: PortfolioGenOutput;
        tokensUsed?: number;
    }>;
}
