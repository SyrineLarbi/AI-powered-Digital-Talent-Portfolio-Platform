import { PrismaService } from '../prisma/prisma.module';
export declare class PublicService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getBySlug(slug: string): Promise<{
        fullName: string;
        profession: string;
        location: string;
        headline: string | null;
        biography: string | null;
        skills: import("@prisma/client/runtime/client").JsonValue;
        brandSummary: string | null;
        photos: {
            url: string;
            isCover: boolean;
        }[];
        experiences: {
            type: string;
            title: string;
            role: string | null;
            year: string | null;
        }[];
        socials: {
            instagram: string | null;
            tiktok: string | null;
            youtube: string | null;
        };
        metrics: {
            instagramFollowers: number | null;
            tiktokFollowers: number | null;
            youtubeSubscribers: number | null;
        };
        contact: {
            email: string;
            phone: string | null;
        };
    }>;
}
export declare class PublicController {
    private readonly svc;
    constructor(svc: PublicService);
    get(slug: string): Promise<{
        fullName: string;
        profession: string;
        location: string;
        headline: string | null;
        biography: string | null;
        skills: import("@prisma/client/runtime/client").JsonValue;
        brandSummary: string | null;
        photos: {
            url: string;
            isCover: boolean;
        }[];
        experiences: {
            type: string;
            title: string;
            role: string | null;
            year: string | null;
        }[];
        socials: {
            instagram: string | null;
            tiktok: string | null;
            youtube: string | null;
        };
        metrics: {
            instagramFollowers: number | null;
            tiktokFollowers: number | null;
            youtubeSubscribers: number | null;
        };
        contact: {
            email: string;
            phone: string | null;
        };
    }>;
}
export declare class PublicModule {
}
