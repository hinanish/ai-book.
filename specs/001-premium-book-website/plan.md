# Implementation Plan: Premium Book Website for AI-Native-Driven Development

**Branch**: `001-premium-book-website` | **Date**: 2026-01-07 | **Spec**: [link to spec.md]
**Input**: Feature specification from `/specs/001-premium-book-website/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create a premium Next.js 15 (App Router) + Tailwind + MDX book website with 5 chapters, each containing 2 topics. The website will include Home, Book, About, and Contact pages with smooth scrolling, progress tracking, mobile responsiveness, and dark/light mode. All content will be in MDX format for easy updates.

## Technical Context

**Language/Version**: TypeScript 5.3, Next.js 15 App Router
**Primary Dependencies**: Next.js 15, React 19, Tailwind CSS, shadcn/ui, MDX
**Storage**: localStorage for waitlist form submissions
**Testing**: Jest, React Testing Library
**Target Platform**: Web (all modern browsers)
**Project Type**: Web application
**Performance Goals**: <1.5s First Contentful Paint, <150KB bundle size
**Constraints**: Mobile-first design, accessible with ARIA labels, keyboard navigation
**Scale/Scope**: Single book with 5 chapters, 4 main pages

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Zero External UI Libraries: Only use shadcn/ui and Tailwind for UI components ✅
- Mobile-First Design: Implement mobile-first approach with glassmorphism and gradient design ✅
- MDX Content Management: Use MDX for all book content to enable easy future updates ✅
- Accessibility Standards: Ensure 100% accessibility with ARIA labels and keyboard navigation ✅
- Performance Optimization: Maintain lightning fast performance with <1.5s First Contentful Paint ✅
- TypeScript Strict Mode: Enforce TypeScript strict mode for all code ✅
- Bundle Size: Total bundle size must remain under 150KB (excluding images) ✅
- Dark/Light Mode: Implement dark/light mode toggle ✅
- Vercel Deployment: Deploy on Vercel (free tier) ✅

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── book/
│   │   ├── page.tsx
│   │   └── components/
│   │       ├── ChapterProgress.tsx
│   │       ├── ChapterNavigation.tsx
│   │       └── BookContent.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── components/
│       ├── ui/
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   └── form.tsx
│       ├── Navbar.tsx
│       ├── ThemeToggle.tsx
│       └── Footer.tsx
├── content/
│   └── chapters/
│       ├── chapter-1.mdx
│       ├── chapter-2.mdx
│       ├── chapter-3.mdx
│       ├── chapter-4.mdx
│       └── chapter-5.mdx
├── lib/
│   ├── utils.ts
│   └── types.ts
├── hooks/
│   └── useLocalStorage.ts
└── providers/
    └── ThemeProvider.tsx
```

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|