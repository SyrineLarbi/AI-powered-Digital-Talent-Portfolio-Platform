"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosModule = exports.PhotosController = exports.UploadsController = exports.PhotosService = exports.CloudinaryService = exports.UpdatePhotoDto = exports.RegisterPhotoDto = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const class_validator_1 = require("class-validator");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_1 = require("../auth/auth");
class RegisterPhotoDto {
    cloudinaryPublicId;
    url;
    width;
    height;
    isCover;
}
exports.RegisterPhotoDto = RegisterPhotoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterPhotoDto.prototype, "cloudinaryPublicId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterPhotoDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RegisterPhotoDto.prototype, "width", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RegisterPhotoDto.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RegisterPhotoDto.prototype, "isCover", void 0);
class UpdatePhotoDto {
    isCover;
    sortOrder;
}
exports.UpdatePhotoDto = UpdatePhotoDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePhotoDto.prototype, "isCover", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdatePhotoDto.prototype, "sortOrder", void 0);
let CloudinaryService = class CloudinaryService {
    constructor() {
        cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }
    signUpload() {
        const timestamp = Math.round(Date.now() / 1000);
        const folder = 'portfolios';
        const signature = cloudinary_1.v2.utils.api_sign_request({ timestamp, folder }, process.env.CLOUDINARY_API_SECRET);
        return {
            timestamp,
            folder,
            signature,
            apiKey: process.env.CLOUDINARY_API_KEY,
            cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        };
    }
    async destroy(publicId) {
        await cloudinary_1.v2.uploader.destroy(publicId);
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CloudinaryService);
let PhotosService = class PhotosService {
    prisma;
    cloudinary;
    constructor(prisma, cloudinary) {
        this.prisma = prisma;
        this.cloudinary = cloudinary;
    }
    async assertOwned(userId, portfolioId) {
        const owned = await this.prisma.portfolio.findFirst({
            where: { id: portfolioId, userId },
            select: { id: true },
        });
        if (!owned)
            throw new common_1.ForbiddenException();
    }
    async register(userId, portfolioId, dto) {
        await this.assertOwned(userId, portfolioId);
        if (dto.isCover) {
            await this.prisma.photo.updateMany({
                where: { portfolioId },
                data: { isCover: false },
            });
        }
        return this.prisma.photo.create({
            data: {
                portfolioId,
                cloudinaryPublicId: dto.cloudinaryPublicId,
                url: dto.url,
                width: dto.width,
                height: dto.height,
                isCover: dto.isCover ?? false,
            },
        });
    }
    async update(userId, portfolioId, photoId, dto) {
        await this.assertOwned(userId, portfolioId);
        if (dto.isCover === true) {
            await this.prisma.$transaction([
                this.prisma.photo.updateMany({
                    where: { portfolioId },
                    data: { isCover: false },
                }),
                this.prisma.photo.update({
                    where: { id: photoId },
                    data: { isCover: true, sortOrder: dto.sortOrder },
                }),
            ]);
            return this.prisma.photo.findUnique({ where: { id: photoId } });
        }
        return this.prisma.photo.update({
            where: { id: photoId },
            data: { sortOrder: dto.sortOrder, isCover: dto.isCover },
        });
    }
    async remove(userId, portfolioId, photoId) {
        await this.assertOwned(userId, portfolioId);
        const photo = await this.prisma.photo.findUnique({
            where: { id: photoId },
        });
        if (photo) {
            await this.cloudinary.destroy(photo.cloudinaryPublicId);
            await this.prisma.photo.delete({ where: { id: photoId } });
        }
        return { deleted: true };
    }
};
exports.PhotosService = PhotosService;
exports.PhotosService = PhotosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_module_1.PrismaService,
        CloudinaryService])
], PhotosService);
let UploadsController = class UploadsController {
    cloudinary;
    constructor(cloudinary) {
        this.cloudinary = cloudinary;
    }
    signature() {
        return this.cloudinary.signUpload();
    }
};
exports.UploadsController = UploadsController;
__decorate([
    (0, common_1.Get)('signature'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UploadsController.prototype, "signature", null);
exports.UploadsController = UploadsController = __decorate([
    (0, common_1.UseGuards)(auth_1.HostJwtGuard),
    (0, common_1.Controller)('uploads'),
    __metadata("design:paramtypes", [CloudinaryService])
], UploadsController);
let PhotosController = class PhotosController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    register(userId, id, dto) {
        return this.svc.register(userId, id, dto);
    }
    update(userId, id, photoId, dto) {
        return this.svc.update(userId, id, photoId, dto);
    }
    remove(userId, id, photoId) {
        return this.svc.remove(userId, id, photoId);
    }
};
exports.PhotosController = PhotosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, auth_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, RegisterPhotoDto]),
    __metadata("design:returntype", void 0)
], PhotosController.prototype, "register", null);
__decorate([
    (0, common_1.Patch)(':photoId'),
    __param(0, (0, auth_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('photoId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, UpdatePhotoDto]),
    __metadata("design:returntype", void 0)
], PhotosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':photoId'),
    __param(0, (0, auth_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('photoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], PhotosController.prototype, "remove", null);
exports.PhotosController = PhotosController = __decorate([
    (0, common_1.UseGuards)(auth_1.HostJwtGuard),
    (0, common_1.Controller)('portfolios/:id/photos'),
    __metadata("design:paramtypes", [PhotosService])
], PhotosController);
let PhotosModule = class PhotosModule {
};
exports.PhotosModule = PhotosModule;
exports.PhotosModule = PhotosModule = __decorate([
    (0, common_1.Module)({
        controllers: [UploadsController, PhotosController],
        providers: [PhotosService, CloudinaryService],
    })
], PhotosModule);
//# sourceMappingURL=photos.module.js.map