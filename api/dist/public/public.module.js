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
exports.PublicModule = exports.PublicController = exports.PublicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
let PublicService = class PublicService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getBySlug(slug) {
        const p = await this.prisma.portfolio.findFirst({
            where: { slug, status: 'published' },
            include: {
                photos: { orderBy: { sortOrder: 'asc' } },
                experiences: { orderBy: { sortOrder: 'asc' } },
            },
        });
        if (!p)
            throw new common_1.NotFoundException();
        return {
            fullName: p.fullName,
            profession: p.profession,
            location: p.location,
            headline: p.headline,
            biography: p.biography,
            skills: p.skills,
            brandSummary: p.brandSummary,
            photos: p.photos.map((ph) => ({ url: ph.url, isCover: ph.isCover })),
            experiences: p.experiences.map((e) => ({
                type: e.type,
                title: e.title,
                role: e.role,
                year: e.year,
            })),
            socials: {
                instagram: p.instagramUrl,
                tiktok: p.tiktokUrl,
                youtube: p.youtubeUrl,
            },
            metrics: {
                instagramFollowers: p.instagramFollowers,
                tiktokFollowers: p.tiktokFollowers,
                youtubeSubscribers: p.youtubeSubscribers,
            },
            contact: { email: p.email, phone: p.showPhone ? p.phone : null },
        };
    }
};
exports.PublicService = PublicService;
exports.PublicService = PublicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_module_1.PrismaService])
], PublicService);
let PublicController = class PublicController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    get(slug) {
        return this.svc.getBySlug(slug);
    }
};
exports.PublicController = PublicController;
__decorate([
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "get", null);
exports.PublicController = PublicController = __decorate([
    (0, common_1.Controller)('public/portfolios'),
    __metadata("design:paramtypes", [PublicService])
], PublicController);
let PublicModule = class PublicModule {
};
exports.PublicModule = PublicModule;
exports.PublicModule = PublicModule = __decorate([
    (0, common_1.Module)({
        controllers: [PublicController],
        providers: [PublicService],
    })
], PublicModule);
//# sourceMappingURL=public.module.js.map