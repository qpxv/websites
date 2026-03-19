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
  page.tsx                  ← Dashboard (lists all hero sections as cards)
  heroes/[slug]/page.tsx    ← Dynamic route — previews one hero section
components/
  heroes/
    BusinessCoachHero.tsx
    FitnessCoachHero.tsx
    MindsetCoachHero.tsx
    LifeCoachHero.tsx
lib/
  heroes.ts                 ← Central data file: all hero section metadata
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

### Design conventions

- Dashboard: dark theme (`#080808` bg), subtle card grid, gradient color previews
- "Back to Dashboard" floating button on every hero page (fixed top-left, `z-50`)
- Each hero section fills full viewport height (`min-h-screen`)
- Hero sections use coaching-specific copy (fictitious coach names/stats) as placeholder content
- Color schemes so far: gold/dark (business), red-orange/dark (fitness), purple/light (mindset), teal/dark (life)

### Coaching website — full section flow

Ben confirmed this is the standard flow for a complete coaching website. Use this as the blueprint whenever building out a full page beyond the hero.

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

**Copywriting tone per section:**
- Problem: confrontational, specific, no soft language. They should feel a little uncomfortable.
- Solution teaser: confident, not salesy. Show authority, not desperation.
- Process: clear and sequential. Make the unknown known. Reduce perceived effort.
- Testimonials: let the client's words do the work. Don't over-design this section.
- Pricing: direct. No hiding the price. Coaches who hide pricing lose trust.
- CTA: one action only. Don't give them three options.
- FAQs: answer the real objections (price, time, results, "is this for me?")

**Current build status:**
- `FitnessCoachHero.tsx` has Hero + Problem sections done. Solution through Footer = TODO.
- Other hero files (Business, Mindset, Life) are hero-only for now.

### What Ben wants next (to be updated as instructions come in)

- Continue FitnessCoach page: Solution → Process → Testimonials → Pricing → CTA → FAQs → Footer
- More hero sections (ask Ben for themes/niches he wants)
- Possibly: category filtering on the dashboard
- Possibly: copy-paste code view for each section
