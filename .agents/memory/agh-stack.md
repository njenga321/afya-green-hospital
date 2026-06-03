---
name: Afya Green Hospital stack
description: Tech stack, package constraints, and key conventions for this project
---

## Stack
- CRA (react-scripts 5.0.1), React 18, JavaScript (not TypeScript)
- Tailwind CSS v3.4.19 (NOT v4 — downgraded due to PostCSS config issues)
- Framer Motion, Lucide React v1.17.0, React Hook Form + Zod + @hookform/resolvers
- React Router DOM v6

## Lucide React v1.17.0 Icon Limitations
No Twitter/Facebook/LinkedIn/YouTube icons. Use these instead:
- Globe (website/social link), Link2 (LinkedIn), Rss (news/blog), Video (YouTube)

## Hospital Contact Info
- Main: +254 726 990 825
- Emergency (24/7): 0719 073 000
- Email: info@afyagreenhospital.org
- Address: Off Mombasa Road, Kaloleni, Voi, Kenya
- Founded: 2018

## Workflow
`PORT=5000 HOST=0.0.0.0 DANGEROUSLY_DISABLE_HOST_CHECK=true npm start`

**Why:** react-scripts dev server requires HOST=0.0.0.0 and DANGEROUSLY_DISABLE_HOST_CHECK for Replit's proxy.

## CSS Conventions
- `container-custom` — main page container class (defined in App.css or index.css)
- `btn-primary`, `btn-secondary` — button utility classes
- `section-padding` — vertical section spacing
- `card-premium` — card with shadow and border
