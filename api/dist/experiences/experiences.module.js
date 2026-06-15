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
exports.ExperiencesModule = exports.ExperiencesController = exports.ExperiencesService = exports.ReplaceExperiencesDto = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_1 = require("../auth/auth");
class ExperienceItemDto {
    type;
    title;
    role;
    year;
    note;
}
__decorate([
    (0, class_validator_1.IsIn)(['acting_credit', 'brand_collab', 'other']),
    __metadata("design:type", String)
], ExperienceItemDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExperienceItemDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExperienceItemDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExperienceItemDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExperienceItemDto.prototype, "note", void 0);
class ReplaceExperiencesDto {
    experiences;
}
exports.ReplaceExperiencesDto = ReplaceExperiencesDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExperienceItemDto),
    __metadata("design:type", Array)
], ReplaceExperiencesDto.prototype, "experiences", void 0);
let ExperiencesService = class ExperiencesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async replace(userId, portfolioId, dto) {
        const owned = await this.prisma.portfolio.findFirst({
            where: { id: portfolioId, userId },
            select: { id: true },
        });
        if (!owned)
            throw new common_1.ForbiddenException();
        await this.prisma.$transaction([
            this.prisma.experience.deleteMany({ where: { portfolioId } }),
            this.prisma.experience.createMany({
                data: dto.experiences.map((e, i) => ({
                    portfolioId,
                    type: e.type,
                    title: e.title,
                    role: e.role,
                    year: e.year,
                    note: e.note,
                    sortOrder: i,
                })),
            }),
        ]);
        return this.prisma.experience.findMany({
            where: { portfolioId },
            orderBy: { sortOrder: 'asc' },
        });
    }
};
exports.ExperiencesService = ExperiencesService;
exports.ExperiencesService = ExperiencesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_module_1.PrismaService])
], ExperiencesService);
let ExperiencesController = class ExperiencesController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    replace(userId, id, dto) {
        return this.svc.replace(userId, id, dto);
    }
};
exports.ExperiencesController = ExperiencesController;
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, auth_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ReplaceExperiencesDto]),
    __metadata("design:returntype", void 0)
], ExperiencesController.prototype, "replace", null);
exports.ExperiencesController = ExperiencesController = __decorate([
    (0, common_1.UseGuards)(auth_1.HostJwtGuard),
    (0, common_1.Controller)('portfolios/:id/experiences'),
    __metadata("design:paramtypes", [ExperiencesService])
], ExperiencesController);
let ExperiencesModule = class ExperiencesModule {
};
exports.ExperiencesModule = ExperiencesModule;
exports.ExperiencesModule = ExperiencesModule = __decorate([
    (0, common_1.Module)({
        controllers: [ExperiencesController],
        providers: [ExperiencesService],
    })
], ExperiencesModule);
//# sourceMappingURL=experiences.module.js.map