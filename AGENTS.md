<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project: Hero Section Collection

A Next.js 16 + Tailwind CSS v4 app. A visual library of premium hero section designs for coaching websites.

### What this project is

Ben (the user) is a website designer who builds sites for coaches — business coaches, fitness coaches, mindset coaches, life coaches, etc. This project is a personal design library / showcase where each hero section can be previewed individually from a central dashboard.

### Project structure

```
app/
  page.tsx                        ← Dashboard (lists all hero sections as cards)
  heroes/[slug]/page.tsx          ← Dynamic route — previews one hero section
components/
  heroes/
    BusinessCoachHero.tsx
    FitnessCoachHero.tsx          ← Most built-out — full multi-section page
    MindsetCoachHero.tsx
    LifeCoachHero.tsx
    fitness/
      ProcessSection.tsx          ← 'use client' — scroll-driven animation
lib/
  heroes.ts                       ← Central data file: all hero section metadata
```

### Adding a new hero section

1. Add an entry to `lib/heroes.ts` (slug, title, category, description, previewColors, accentLabel)
2. Create `components/heroes/YourHeroName.tsx`
3. Import and register it in `app/heroes/[slug]/page.tsx` in the `heroComponents` map
4. That's it — the dashboard card appears automatically

### Tech notes (Next.js 16 specifics)

- `params` is a **Promise** in dynamic routes: `const { slug } = await params`
- Use `PageProps<'/heroes/[slug]'>` type OR explicit `{ params: Promise<{ slug: string }> }` — both work
- `generateStaticParams()` is used in `app/heroes/[slug]/page.tsx` to prerender all slugs
- Tailwind v4: config is in CSS (`@import "tailwindcss"`), no `tailwind.config.js` needed
- Inline styles are used for dynamic gradients and radial glows (Tailwind arbitrary values work too)
- All components are Server Components unless marked `'use client'`
- Extract interactive sections into a separate `'use client'` component — keep the parent a Server Component

---

## Coaching website — standard section flow

```
1. Hero              — hook, headline, CTA, quick social proof
2. Problem           — agitate the pain. Make them feel seen. No solutions yet.
3. Solution teaser   — "here's the answer" without revealing everything. Build curiosity.
4. Process           — how it works, step by step. Remove the mystery.
5. Testimonials      — social proof. Real results, specific numbers, real names.
6. Pricing           — transparent price reveal. One or two tiers max for coaches.
7. CTA               — final call to action. Urgency if real (spots left, deadline).
8. FAQs              — handle the last objections before they bounce.
9. Footer            — links, legal, contact.
```

---

## Current build status

### FitnessCoachHero.tsx — ✅ Complete
Full page done. All 9 sections built. Do not use this as a reference template — each new hero is its own fresh design.

### BusinessCoachHero.tsx — 🔨 In progress
- Hero: ✅ Done
- Features (The System): ✅ Done
- Remaining sections: TBD with Ben

### Other hero files
- `MindsetCoachHero.tsx` — hero section only
- `LifeCoachHero.tsx` — hero section only

---

## Design philosophy

Each hero is a **completely independent design** with its own visual identity, color palette, typography, and layout language. Do NOT borrow patterns from other heroes unless Ben explicitly asks for it.
