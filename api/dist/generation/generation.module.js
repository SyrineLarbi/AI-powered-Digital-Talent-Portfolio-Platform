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
exports.GenerationModule = exports.GenerationController = exports.GenerationService = exports.GenerateDto = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_1 = require("../auth/auth");
const portfolios_module_1 = require("../portfolios/portfolios.module");
const groq_provider_1 = require("./llm/groq.provider");
const llm_provider_interface_1 = require("./llm/llm-provider.interface");
class GenerateDto {
    section = 'all';
}
exports.GenerateDto = GenerateDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['all', 'headline', 'biography', 'skills', 'brand_summary']),
    __metadata("design:type", String)
], GenerateDto.prototype, "section", void 0);
let GenerationService = class GenerationService {
    prisma;
    llm;
    constructor(prisma, llm) {
        this.prisma = prisma;
        this.llm = llm;
    }
    async run(portfolioId, section = 'all') {
        const p = await this.prisma.portfolio.findUniqueOrThrow({
            where: { id: portfolioId },
            include: { experiences: { orderBy: { sortOrder: 'asc' } } },
        });
        const input = {
            fullName: p.fullName,
            profession: p.profession,
            gender: p.gender ?? undefined,
            location: p.location,
            description: p.description ?? undefined,
            experiences: p.experiences.map((e) => ({
                type: e.type,
                title: e.title,
                role: e.role ?? undefined,
                year: e.year ?? undefined,
                note: e.note ?? undefined,
            })),
            socials: {
                instagram: p.instagramUrl ?? undefined,
                tiktok: p.tiktokUrl ?? undefined,
                youtube: p.youtubeUrl ?? undefined,
            },
            followers: {
                instagram: p.instagramFollowers ?? undefined,
                tiktok: p.tiktokFollowers ?? undefined,
                youtube: p.youtubeSubscribers ?? undefined,
            },
        };
        const job = await this.prisma.generationJob.create({
            data: {
                portfolioId,
                section,
                status: 'running',
                provider: process.env.AI_PROVIDER ?? 'groq',
                inputSnapshot: input,
            },
        });
        try {
            const { output, tokensUsed } = await this.withRetry(() => this.llm.generate(input, section));
            await this.prisma.$transaction([
                this.prisma.portfolio.update({
                    where: { id: portfolioId },
                    data: {
                        headline: output.headline,
                        biography: output.biography,
                        skills: output.skills,
                        brandSummary: output.brandSummary,
                        status: 'ready',
                    },
                }),
                this.prisma.generationJob.update({
                    where: { id: job.id },
                    data: {
                        status: 'succeeded',
                        output: output,
                        tokensUsed,
                        completedAt: new Date(),
                    },
                }),
            ]);
            return { jobId: job.id, status: 'succeeded', output };
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            await this.prisma.generationJob.update({
                where: { id: job.id },
                data: { status: 'failed', error: message, completedAt: new Date() },
            });
            throw err;
        }
    }
    async withRetry(fn) {
        try {
            return await fn();
        }
        catch {
            return await fn();
        }
    }
};
exports.GenerationService = GenerationService;
exports.GenerationService = GenerationService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(llm_provider_interface_1.LLM_PROVIDER)),
    __metadata("design:paramtypes", [prisma_module_1.PrismaService, Object])
], GenerationService);
let GenerationController = class GenerationController {
    gen;
    portfolios;
    prisma;
    constructor(gen, portfolios, prisma) {
        this.gen = gen;
        this.portfolios = portfolios;
        this.prisma = prisma;
    }
    async generate(userId, id, dto) {
        await this.portfolios.getOwned(userId, id);
        return this.gen.run(id, dto.section ?? 'all');
    }
    async job(userId, id, jobId) {
        await this.portfolios.getOwned(userId, id);
        return this.prisma.generationJob.findUniqueOrThrow({ where: { id: jobId } });
    }
};
exports.GenerationController = GenerationController;
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, auth_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, GenerateDto]),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)('jobs/:jobId'),
    __param(0, (0, auth_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('jobId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "job", null);
exports.GenerationController = GenerationController = __decorate([
    (0, common_1.UseGuards)(auth_1.HostJwtGuard),
    (0, common_1.Controller)('portfolios/:id'),
    __metadata("design:paramtypes", [GenerationService,
        portfolios_module_1.PortfoliosService,
        prisma_module_1.PrismaService])
], GenerationController);
let GenerationModule = class GenerationModule {
};
exports.GenerationModule = GenerationModule;
exports.GenerationModule = GenerationModule = __decorate([
    (0, common_1.Module)({
        imports: [portfolios_module_1.PortfoliosModule],
        controllers: [GenerationController],
        providers: [
            GenerationService,
            { provide: llm_provider_interface_1.LLM_PROVIDER, useClass: groq_provider_1.GroqProvider },
        ],
    })
], GenerationModule);
//# sourceMappingURL=generation.module.js.map