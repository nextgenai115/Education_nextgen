# Omkar AI Innovation — Partner Landing Page

A fully responsive rebuild of the "Partner 2 — Master the AI Revolution" page,
built from scratch in **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**,
with a professional dark theme.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- lucide-react (icons)
- Google Fonts: Manrope (display), Inter (body), JetBrains Mono (data/labels)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Design tokens (colors, type, base styles)
components/
  Nav.tsx             Sticky header
  Hero.tsx             Headline + pricing card
  MarketStats.tsx      "Why AI Matters Now" stat grid
  Hierarchy.tsx        AI evolution stepped diagram
  Modules.tsx           5-module accordion (Core / New / Hands-On)
  Demo.tsx               Automation showcase
  Income.tsx              8 income-opportunity cards
  WhyUs.tsx                 6 reasons-to-join cards
  Certification.tsx          Certificate details + eligibility checklist
  CTA.tsx                     Final call-to-action band
  FAQ.tsx                       10-question accordion
  Footer.tsx                     Contact, registrations, legal
lib/
  content.ts                     All page copy/content in one typed file
```

## Editing content

Every string on the page (module curriculum, FAQ answers, pricing, stats,
contact details) lives in `lib/content.ts`. Update that file and the whole
site updates — no need to touch component markup for copy changes.

## Design notes

- Palette: deep blue-black background (#0a0e16) with a periwinkle-violet
  primary accent (#7c8cff) and a warm amber secondary accent (#ffb454),
  chosen to feel technical and premium rather than a generic near-black +
  neon-green AI template.
- Type: Manrope for display/headlines, Inter for body copy, JetBrains Mono
  for stats, labels and data.
- The 5 modules and FAQ are interactive accordions; the AI hierarchy is a
  custom stepped-width diagram.
- Fully responsive down to mobile, keyboard-focus visible, and
  prefers-reduced-motion respected.
- No external images are used, so the project has zero image dependencies
  out of the box. Swap in your own logo mark in components/Nav.tsx and
  components/Footer.tsx if needed.
