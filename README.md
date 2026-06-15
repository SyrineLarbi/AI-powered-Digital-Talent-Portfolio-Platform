# AI Portfolio Generator — Project Documentation

> Generate a professional, shareable digital portfolio for actresses, models, influencers, and
> content creators in under 2 minutes — from a short form, no designer required.

This `docs/` folder is the complete startup-grade project plan, written before development begins.
It is the single source of truth for product, architecture, and build decisions.

---

## 📌 Project at a glance

| | |
|---|---|
| **Product** | AI Portfolio Generator (a feature inside an existing host app) |
| **Users** | Actresses, models, influencers, content creators |
| **Core promise** | Fill a short form → get a beautiful public portfolio page in < 2 min |
| **Theme** | Modern, editorial **black & white** UI — **photos stay in full color** |
| **Frontend** | Next.js · TypeScript · Tailwind CSS · shadcn/ui |
| **Backend** | NestJS · TypeScript |
| **Database** | MariaDB / MySQL (local for dev · Railway or Aiven free tier when hosted) |
| **Storage** | Cloudinary (photos) |
| **AI** | **Groq** (free, OpenAI-compatible) for testing → swappable to OpenAI / Gemini / Claude |
| **Deploy** | Vercel (web) · Railway/Render (api) · Railway/Aiven MariaDB (db) |

> **Scope note:** Authentication, login, user dashboard, billing, and analytics are **OUT of scope** —
> they already exist in the host application. This project builds **only** the portfolio-generation
> feature (form → AI generation → public portfolio page → share URL). The feature receives an
> authenticated `userId` from the host app. See [01-mvp-scope.md](./01-mvp-scope.md).

---

## 📚 Table of contents

| # | Document | What's inside |
|---|----------|---------------|
| 00 | [Product Vision](./00-product-vision.md) | Vision, target users, problem, value prop, success metrics |
| 01 | [MVP Scope](./01-mvp-scope.md) | In/out of scope, the 2-minute flow, host-app integration |
| 02 | [User Stories](./02-user-stories.md) | Creator + visitor stories, acceptance criteria, MoSCoW |
| 03 | [Requirements](./03-requirements.md) | Functional & non-functional requirements |
| 04 | [Database Schema](./04-database-schema.md) | MariaDB/MySQL tables, ERD, DDL, indexes |
| 05 | [API Design](./05-api-design.md) | NestJS endpoints, DTOs, error model |
| 06 | [System Architecture](./06-system-architecture.md) | Components, data flow, deployment, integration |
| 07 | [AI Workflow](./07-ai-workflow.md) | Prompts, provider abstraction, structured output, guardrails |
| 08 | [Folder Structure](./08-folder-structure.md) | Monorepo layout for web + api + shared |
| 09 | [Security](./09-security.md) | Validation, uploads, rate limiting, privacy, GDPR-lite |
| 10 | [Cost Estimation](./10-cost-estimation.md) | AI/storage/hosting costs at 100 / 1k / 10k portfolios |
| 11 | [Roadmap & Milestones](./11-roadmap-milestones.md) | Week-by-week MVP build plan |
| 12 | [Future Features](./12-future-features.md) | Social metrics, media-kit PDF, themes, paid tiers |
| 13 | [Risks & Limitations](./13-risks-limitations.md) | Key risks and mitigations |
| 14 | [UX/UI Recommendations](./14-ux-ui-recommendations.md) | Keeping the flow simple & friendly |
| 15 | [Design System](./15-design-system.md) | Black & white theme spec, tokens, components |

---

## 🚀 The core flow (MVP)

```
Host app (already has login)
        │  passes userId
        ▼
[1] Short wizard form  →  [2] Upload photos  →  [3] Socials + experience
        │
        ▼
   "Generate" → AI writes bio, headline, skills, brand summary
        │
        ▼
[4] Live preview & light edits  →  [5] Publish
        │
        ▼
   Public portfolio page at  /p/{slug}   →  Share link 🔗
```

## 🎨 Design north star

Editorial, gallery-like, **monochrome** (black, white, greys) typography-led layout — the kind of
clean aesthetic used by modeling/acting agencies — with the talent's **photos rendered in full color**
as the visual focal points. Full spec in [15-design-system.md](./15-design-system.md).
