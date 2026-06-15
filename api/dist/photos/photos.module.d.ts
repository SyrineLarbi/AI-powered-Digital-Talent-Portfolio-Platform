import { PrismaService } from '../prisma/prisma.module';
export declare class RegisterPhotoDto {
    cloudinaryPublicId: string;
    url: string;
    width?: number;
    height?: number;
    isCover?: boolean;
}
export declare class UpdatePhotoDto {
    isCover?: boolean;
    sortOrder?: number;
}
export declare class CloudinaryService {
    constructor();
    signUpload(): {
        timestamp: number;
        folder: string;
        signature: string;
        apiKey: string | undefined;
        cloudName: string | undefined;
    };
    destroy(publicId: string): Promise<void>;
}
export declare class PhotosService {
    private readonly prisma;
    private readonly cloudinary;
    constructor(prisma: PrismaService, cloudinary: CloudinaryService);
    private assertOwned;
    register(userId: string, portfolioId: string, dto: RegisterPhotoDto): Promise<{
        id: string;
        createdAt: Date;
        sortOrder: number;
        cloudinaryPublicId: string;
        url: string;
        width: number | null;
        height: number | null;
        isCover: boolean;
        portfolioId: string;
    }>;
    update(userId: string, portfolioId: string, photoId: string, dto: UpdatePhotoDto): Promise<{
        id: string;
        createdAt: Date;
        sortOrder: number;
        cloudinaryPublicId: string;
        url: string;
        width: number | null;
        height: number | null;
        isCover: boolean;
        portfolioId: string;
    } | null>;
    remove(userId: string, portfolioId: string, photoId: string): Promise<{
        deleted: boolean;
    }>;
}
export declare class UploadsController {
    private readonly cloudinary;
    constructor(cloudinary: CloudinaryService);
    signature(): {
        timestamp: number;
        folder: string;
        signature: string;
        apiKey: string | undefined;
        cloudName: string | undefined;
    };
}
export declare class PhotosController {
    private readonly svc;
    constructor(svc: PhotosService);
    register(userId: string, id: string, dto: RegisterPhotoDto): Promise<{
        id: string;
        createdAt: Date;
        sortOrder: number;
        cloudinaryPublicId: string;
        url: string;
        width: number | null;
        height: number | null;
        isCover: boolean;
        portfolioId: string;
    }>;
    update(userId: string, id: string, photoId: string, dto: UpdatePhotoDto): Promise<{
        id: string;
        createdAt: Date;
        sortOrder: number;
        cloudinaryPublicId: string;
        url: string;
        width: number | null;
        height: number | null;
        isCover: boolean;
        portfolioId: string;
    } | null>;
    remove(userId: string, id: string, photoId: string): Promise<{
        deleted: boolean;
    }>;
}
export declare class PhotosModule {
}
