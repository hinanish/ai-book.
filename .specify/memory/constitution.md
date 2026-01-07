<!--
Sync Impact Report:
- Version change: N/A → 1.0.0
- Modified principles: N/A (new constitution)
- Added sections: All principles and sections
- Removed sections: N/A
- Templates requiring updates: ✅ updated (.specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md)
- Follow-up TODOs: None
-->
# AI-Native Driven Development – Premium Book Website Constitution

## Core Principles

### Zero External UI Libraries
Only use shadcn/ui and Tailwind for UI components, no other external UI libraries

### Mobile-First Design
Implement mobile-first approach with glassmorphism and gradient design aesthetics

### MDX Content Management
Use MDX for all book content to enable easy future updates

### Accessibility Standards
Ensure 100% accessibility with ARIA labels and keyboard navigation support

### Performance Optimization
Maintain lightning fast performance with <1.5s First Contentful Paint (FCP)

### TypeScript Strict Mode
Enforce TypeScript strict mode for all code to ensure type safety and reduce runtime errors

## Standards and Constraints

All components must be reusable; Chapter content stored in /content/chapters/; Total bundle size must remain under 150KB (excluding images); Only 4 pages allowed: Home, Book, About, Contact; Book contains 5 chapters with 2 topics each; Deploy on Vercel (free tier)

## Development Workflow

Implement dark/light mode toggle; Follow Next.js 15 best practices; Use Tailwind CSS for styling

## Governance

All code must comply with the stated principles; Performance budgets must be maintained; Accessibility requirements are mandatory; Code reviews must verify compliance with all principles

**Version**: 1.0.0 | **Ratified**: 2026-01-06 | **Last Amended**: 2026-01-06

