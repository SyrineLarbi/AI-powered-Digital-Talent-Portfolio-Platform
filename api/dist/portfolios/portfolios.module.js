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
exports.PortfoliosModule = exports.PortfoliosController = exports.PortfoliosService = exports.UpdatePortfolioDto = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_1 = require("../auth/auth");
const PROFESSIONS = [
    'actress',
    'actor',
    'model',
    'influencer',
    'content_creator',
    'other',
];
class UpdatePortfolioDto {
    fullName;
    gender;
    dateOfBirth;
    email;
    phone;
    location;
    profession;
    description;
    instagramUrl;
    tiktokUrl;
    youtubeUrl;
    instagramFollowers;
    tiktokFollowers;
    youtubeSubscribers;
    headline;
    biography;
    skills;
    brandSummary;
    showPhone;
    showDob;
}
exports.UpdatePortfolioDto = UpdatePortfolioDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(PROFESSIONS),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "profession", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "instagramUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "tiktokUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "youtubeUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePortfolioDto.prototype, "instagramFollowers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePortfolioDto.prototype, "tiktokFollowers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdatePortfolioDto.prototype, "youtubeSubscribers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "headline", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "biography", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdatePortfolioDto.prototype, "skills", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePortfolioDto.prototype, "brandSummary", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePortfolioDto.prototype, "showPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePortfolioDto.prototype, "showDob", void 0);
let PortfoliosService = class PortfoliosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async ensureForUser(userId) {
        const existing = await this.prisma.portfolio.findUnique({ where: { userId } });
        if (existing)
            return existing;
        try {
            return await this.prisma.portfolio.create({
                data: { userId, fullName: '', email: '', location: '', profession: 'other' },
            });
        }
        catch (e) {
            if (e.code === 'P2002') {
                return this.prisma.portfolio.findUniqueOrThrow({ where: { userId } });
            }
            throw e;
        }
    }
    async getOwned(userId, id) {
        const p = await this.prisma.portfolio.findFirst({
            where: { id, userId },
            include: {
                photos: { orderBy: { sortOrder: 'asc' } },
                experiences: { orderBy: { sortOrder: 'asc' } },
            },
        });
        if (!p)
            throw new common_1.ForbiddenException();
        return p;
    }
    async update(userId, id, dto) {
        await this.getOwned(userId, id);
        const data = { ...dto };
        if (dto.dateOfBirth)
            data.dateOfBirth = new Date(dto.dateOfBirth);
        return this.prisma.portfolio.update({ where: { id }, data: data });
    }
};
exports.PortfoliosService = PortfoliosService;
exports.PortfoliosService = PortfoliosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_module_1.PrismaService])
], PortfoliosService);
let PortfoliosController = class PortfoliosController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    create(userId) {
        return this.svc.ensureForUser(userId);
    }
    get(userId, id) {
        return this.svc.getOwned(userId, id);
    }
    update(userId, id, dto) {
        return this.svc.update(userId, id, dto);
    }
};
exports.PortfoliosController = PortfoliosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, auth_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortfoliosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, auth_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PortfoliosController.prototype, "get", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, auth_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdatePortfolioDto]),
    __metadata("design:returntype", void 0)
], PortfoliosController.prototype, "update", null);
exports.PortfoliosController = PortfoliosController = __decorate([
    (0, common_1.UseGuards)(auth_1.HostJwtGuard),
    (0, common_1.Controller)('portfolios'),
    __metadata("design:paramtypes", [PortfoliosService])
], PortfoliosController);
let PortfoliosModule = class PortfoliosModule {
};
exports.PortfoliosModule = PortfoliosModule;
exports.PortfoliosModule = PortfoliosModule = __decorate([
    (0, common_1.Module)({
        controllers: [PortfoliosController],
        providers: [PortfoliosService],
        exports: [PortfoliosService],
    })
], PortfoliosModule);
//# sourceMappingURL=portfolios.module.js.map