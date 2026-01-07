---
id: 1
title: Create Project Constitution for AI-Native Book Website
stage: constitution
date: 2026-01-06
surface: agent
model: gpt-4o
feature: none
branch: main
user: user
command: /sp.constitution
labels: ["constitution", "setup", "principles"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/spec-template.md
 - .specify/templates/tasks-template.md
tests:
 - none
---

## Prompt

```
/sp.constitution Project: AI-Native Driven Development – Premium Book Website (Next.js 15 + Tailwind + MDX)

Core Principles:

Zero external UI libraries except shadcn/ui & Tailwind
Mobile-first, glassmorphism + gradient design
MDX for all book content (easy future updates)
Dark/Light mode toggle
Lightning fast (<1.5s FCP)
100% accessible (ARIA + keyboard nav)
Standards:

TypeScript strict mode
All components reusable
Chapter content in /content/chapters/
Total bundle size < 150KB (without images)
Constraints:

4 pages only: Home, Book, About, Contact
Book = 5 chapters × 2 topics each
Deploy on Vercel (free)
```

## Response snapshot

I've successfully updated the project constitution based on your requirements. Here's the summary:

**New Version**: 1.0.0 (Initial version based on your specified principles)
**Bump Rationale**: This is the initial constitution for the AI-Native Driven Development – Premium Book Website project, incorporating all the principles you specified.

**Files Updated**:
- `.specify/memory/constitution.md` - Contains the new constitution with all your specified principles
- `.specify/templates/plan-template.md` - Updated to include constitution checks for all principles
- `.specify/templates/spec-template.md` - Updated functional requirements to align with principles
- `.specify/templates/tasks-template.md` - Updated to include tasks related to your principles

**Constitution Highlights**:
- Zero External UI Libraries (only shadcn/ui & Tailwind)
- Mobile-first design with glassmorphism + gradient aesthetics
- MDX for all book content
- Dark/Light mode toggle
- Lightning fast performance (<1.5s FCP)
- 100% accessibility (ARIA + keyboard nav)
- TypeScript strict mode
- Bundle size < 150KB
- 4 pages only: Home, Book, About, Contact
- Deploy on Vercel (free)

**Suggested Commit Message**: `docs: add constitution for AI-Native Driven Development book website v1.0.0`

## Outcome

- ✅ Impact: Created project constitution with 6 core principles and aligned templates
- 🧪 Tests: No tests required for constitution creation
- 📁 Files: 4 files updated to align with new constitution
- 🔁 Next prompts: Ready to proceed with feature specification based on new constitution
- 🧠 Reflection: Successfully implemented all requested principles and propagated changes to dependent templates

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A