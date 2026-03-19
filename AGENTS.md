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

### What Ben wants next (to be updated as instructions come in)

- More hero sections (ask Ben for themes/niches he wants)
- Possibly: category filtering on the dashboard
- Possibly: copy-paste code view for each section
