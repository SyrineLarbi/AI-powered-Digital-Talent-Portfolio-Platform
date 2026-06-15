"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroqProvider = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = __importDefault(require("openai"));
const shared_1 = require("@portfolio/shared");
const SYSTEM = `You are a professional copywriter for talent portfolios (actors, models, influencers, creators).
Write confident, polished, modern copy.
RULES:
- Use ONLY the facts provided. Never invent credits, brands, awards, or locations.
- Do NOT invent follower numbers. Mention reach ONLY if a follower/subscriber count is given.
- If a fact is missing, write around it gracefully — do not fabricate.
- Match tone to the profession and the user's description.
- skills must be an array of 3 to 10 short strings.
- Output MUST be valid JSON: { "headline": string, "biography": string, "skills": string[], "brandSummary": string }.`;
function buildUserPrompt(i) {
    const exp = i.experiences
        .map((e) => `- ${e.type}: ${e.title}${e.role ? `, ${e.role}` : ''}${e.year ? `, ${e.year}` : ''}${e.note ? `; ${e.note}` : ''}`)
        .join('\n') || '- (none provided)';
    const ig = i.followers?.instagram
        ? ` (${i.followers.instagram} followers)`
        : '';
    const tt = i.followers?.tiktok ? ` (${i.followers.tiktok} followers)` : '';
    const yt = i.followers?.youtube
        ? ` (${i.followers.youtube} subscribers)`
        : '';
    return `PROFILE
- Name: ${i.fullName}
- Profession: ${i.profession}
- Gender: ${i.gender ?? '—'}
- Location: ${i.location}
- Self-description: ${i.description ?? '—'}

EXPERIENCE
${exp}

SOCIALS (links + self-reported follower counts; reference numbers ONLY if present)
- Instagram: ${i.socials.instagram ?? '—'}${ig}
- TikTok: ${i.socials.tiktok ?? '—'}${tt}
- YouTube: ${i.socials.youtube ?? '—'}${yt}

Write headline, biography (2-4 short paragraphs), skills (5-10), brandSummary (2-3 sentences). JSON only.`;
}
let GroqProvider = class GroqProvider {
    client = new openai_1.default({
        apiKey: process.env.AI_API_KEY,
        baseURL: process.env.AI_BASE_URL,
    });
    async generate(input, _section = 'all') {
        const res = await this.client.chat.completions.create({
            model: process.env.AI_MODEL ?? 'llama-3.3-70b-versatile',
            response_format: { type: 'json_object' },
            max_tokens: 1200,
            messages: [
                { role: 'system', content: SYSTEM },
                { role: 'user', content: buildUserPrompt(input) },
            ],
        });
        const raw = res.choices[0]?.message?.content ?? '{}';
        const output = shared_1.PortfolioGenOutput.parse(JSON.parse(raw));
        return { output, tokensUsed: res.usage?.total_tokens };
    }
};
exports.GroqProvider = GroqProvider;
exports.GroqProvider = GroqProvider = __decorate([
    (0, common_1.Injectable)()
], GroqProvider);
//# sourceMappingURL=groq.provider.js.map