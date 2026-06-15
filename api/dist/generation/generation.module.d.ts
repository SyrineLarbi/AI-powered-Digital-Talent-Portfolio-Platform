import { PrismaService } from '../prisma/prisma.module';
import { PortfoliosService } from '../portfolios/portfolios.module';
import type { LlmProvider, Section } from './llm/llm-provider.interface';
export declare class GenerateDto {
    section?: Section;
}
export declare class GenerationService {
    private readonly prisma;
    private readonly llm;
    constructor(prisma: PrismaService, llm: LlmProvider);
    run(portfolioId: string, section?: Section): Promise<{
        jobId: string;
        status: string;
        output: {
            headline: string;
            biography: string;
            skills: string[];
            brandSummary: string;
        };
    }>;
    private withRetry;
}
export declare class GenerationController {
    private readonly gen;
    private readonly portfolios;
    private readonly prisma;
    constructor(gen: GenerationService, portfolios: PortfoliosService, prisma: PrismaService);
    generate(userId: string, id: string, dto: GenerateDto): Promise<{
        jobId: string;
        status: string;
        output: {
            headline: string;
            biography: string;
            skills: string[];
            brandSummary: string;
        };
    }>;
    job(userId: string, id: string, jobId: string): Promise<{
        error: string | null;
        id: string;
        status: string;
        createdAt: Date;
        portfolioId: string;
        output: import("@prisma/client/runtime/client").JsonValue | null;
        tokensUsed: number | null;
        section: string;
        provider: string;
        inputSnapshot: import("@prisma/client/runtime/client").JsonValue | null;
        completedAt: Date | null;
    }>;
}
export declare class GenerationModule {
}
