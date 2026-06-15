import { PrismaService } from '../prisma/prisma.module';
declare class ExperienceItemDto {
    type: string;
    title: string;
    role?: string;
    year?: string;
    note?: string;
}
export declare class ReplaceExperiencesDto {
    experiences: ExperienceItemDto[];
}
export declare class ExperiencesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    replace(userId: string, portfolioId: string, dto: ReplaceExperiencesDto): Promise<{
        id: string;
        createdAt: Date;
        sortOrder: number;
        portfolioId: string;
        type: string;
        title: string;
        role: string | null;
        year: string | null;
        note: string | null;
    }[]>;
}
export declare class ExperiencesController {
    private readonly svc;
    constructor(svc: ExperiencesService);
    replace(userId: string, id: string, dto: ReplaceExperiencesDto): Promise<{
        id: string;
        createdAt: Date;
        sortOrder: number;
        portfolioId: string;
        type: string;
        title: string;
        role: string | null;
        year: string | null;
        note: string | null;
    }[]>;
}
export declare class ExperiencesModule {
}
export {};
