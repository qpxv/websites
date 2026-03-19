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

## Fitness Coach — design system (reference for all future sections)

The FitnessCoach page is the most complete. Every new section built on it should follow these rules exactly unless Ben explicitly says otherwise.

### Core tokens

| Token | Value | Usage |
|---|---|---|
| Background A | `#0a0a0a` | Hero, Problem, Process — "dark" sections |
| Background B | `#0f0f0f` | Solution, Testimonials — "slightly lighter" sections |
| Accent red | `#dc2626` | All highlights, CTAs, active states |
| Red hover | `#b91c1c` | Button hover only |
| Display font | Bebas Neue (Google, weight 400) | All headlines, numbers, labels |
| Body font | System (inherited) | All body copy, tags, metadata |

### Background alternation rule

Sections alternate A → B → A → B. This is intentional — the brain registers each zone as distinct even though the difference is subtle. Never use the same background for two consecutive sections.

```
Hero        #0a0a0a  (A)
Problem     #0a0a0a  (A)  ← exception: same as Hero, they read as one zone
Solution    #0f0f0f  (B)
Process     #0a0a0a  (A)
Testimonials #0f0f0f (B)
Pricing     #0a0a0a  (A)
CTA         #0f0f0f  (B)
FAQs        #0a0a0a  (A)
Footer      #0a0a0a  (A)
```

### Diagonal transitions between sections

Every section boundary uses a CSS `clip-path` triangle instead of a plain `border-t`. The triangles alternate direction — right-leaning then left-leaning — creating a visual zigzag.

```jsx
{/* Right-leaning: A → B  (e.g. Problem → Solution, Process → Testimonials) */}
<div className="bg-[#0a0a0a]">
  <div className="w-full pointer-events-none" style={{
    height: 80,
    background: '#0f0f0f',
    clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
  }} />
</div>

{/* Left-leaning: B → A  (e.g. Solution → Process, Testimonials → Pricing) */}
<div className="bg-[#0f0f0f]">
  <div className="w-full pointer-events-none" style={{
    height: 80,
    background: '#0a0a0a',
    clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
  }} />
</div>
```

### Section label — consistent across every section

Always the same pattern at the top of each section's content block:

```jsx
<div className="flex items-center gap-4 mb-16 relative z-10">
  <span className="text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0">
    The Label
  </span>
  <div className="flex-1 h-px bg-white/10" />
</div>
```

### Section headlines — Bebas Neue sizing

```jsx
<h2
  className={`${bebas.className} text-white leading-[0.9] tracking-wide`}
  style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
>
  LINE ONE<br />
  LINE TWO<br />
  <span className="text-[#dc2626]">THIRD LINE IN RED.</span>  {/* always the last line */}
</h2>
```

The third line always carries the red accent — this is the page's typographic signature.

### Section subheads

```jsx
<p className="text-white/40 text-sm tracking-[0.15em] uppercase">
  Short. Lowercase is fine. Wide tracking.
</p>
```

### Bridge lines (bottom of each section, teases the next)

Left: bold declarative statement. Right: directional label + split rule.

```jsx
<div className="border-t border-white/[0.06] pt-10">
  <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
    <p className={`${bebas.className} leading-tight tracking-wide`} style={{ fontSize: 'clamp(20px, 2.5vw, 34px)' }}>
      <span className="text-white/80">STRONG STATEMENT.</span><br />
      <span className="text-white/30">QUIETER TEASE.</span>
    </p>
    <div className="flex items-center gap-3 text-white/25 text-xs tracking-[0.2em] uppercase pb-1">
      <span>Next section name</span>
      <div className="flex items-center gap-1">
        <div className="w-5 h-px bg-white/20" />
        <div className="w-2 h-px bg-[#dc2626]" />
      </div>
    </div>
  </div>
</div>
```

### Ghost watermarks (one per section, never repeated)

Each section has one large Bebas Neue word at ~3% opacity behind the content. Word is semantically tied to the section.

| Section | Word |
|---|---|
| Solution | SYSTEM |
| Testimonials | RESULTS |
| Pricing | INVEST |

```jsx
<div aria-hidden="true" className={`${bebas.className} absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden`} style={{ paddingTop: '5rem' }}>
  <span className="text-white uppercase leading-none" style={{ fontSize: 'clamp(120px, 18vw, 260px)', opacity: 0.028, letterSpacing: '0.14em' }}>
    WORD
  </span>
</div>
```

Always needs `aria-hidden="true"`. Section must have `relative overflow-hidden`.

### Red radial glows (one per section, position rotates)

Each section introduces a glow in a unique position — never the same position twice in a row. This creates atmospheric depth that shifts as you scroll.

| Section | Position |
|---|---|
| Solution | Top-center |
| Process | Left-center |
| Testimonials | Bottom-right |
| Pricing | Top-right |

```jsx
{/* Example: top-center */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
  width: 1000, height: 520,
  background: 'radial-gradient(ellipse at top, rgba(220,38,38,0.13) 0%, transparent 65%)',
  filter: 'blur(2px)',
}} />
```

Keep opacity between 0.07–0.13. Too high = theatrical. Too low = invisible.

### Split horizontal rule (red pip + white fade)

Used within cards and as step separators. Consistent micro-element across sections.

```jsx
<div className="flex items-center gap-2">
  <div className="w-4 h-px bg-[#dc2626]" />
  <div className="flex-1 h-px bg-white/10" />
</div>
```

### Gap-px grid (used for multi-column card grids)

The grid gap becomes the divider — no explicit border elements needed. Clean and architectural.

```jsx
<div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
  <div className="bg-[#0f0f0f] px-8 py-10">...</div>
  <div className="bg-[#0f0f0f] px-8 py-10">...</div>
  <div className="bg-[#0f0f0f] px-8 py-10">...</div>
</div>
```

For sections on `#0a0a0a` background, use `bg-[#0a0a0a]` on cells.

### Featured card pattern (with red left border)

Used for the featured testimonial. The red left border creates instant visual hierarchy.

```jsx
<div
  className="bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200"
  style={{
    borderTop: '1px solid rgba(255,255,255,0.07)',
    borderRight: '1px solid rgba(255,255,255,0.07)',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    borderLeft: '2px solid #dc2626',
  }}
>
```

### Hover conventions

- Always use Tailwind hover classes (`hover:bg-[...]`, `group` + `group-hover:`) — never `onMouseEnter/onMouseLeave`
- Transition speed: `duration-200` for backgrounds, `duration-300` for color changes
- Supporting grid cards: `group bg-[#0f0f0f] hover:bg-[#161616] transition-colors duration-200`

### Monogram avatars

Used in testimonials. Square (not circle), initials only — no real photos needed.

```jsx
{/* Featured — red tint */}
<div className="flex items-center justify-center" style={{ width: 40, height: 40, background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.25)' }}>
  <span className="text-[#dc2626] text-xs font-bold tracking-wider">MD</span>
</div>

{/* Supporting — neutral */}
<div className="flex items-center justify-center" style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
  <span className="text-white/40 text-[10px] font-bold tracking-wide">JR</span>
</div>
```

### 4px red square dots (list bullets / tag indicators)

Used in Process tag badges and as list indicators. Never use emoji or standard bullets.

```jsx
<div style={{ width: 4, height: 4, background: '#dc2626' }} />
```

### Scroll-driven animation (Process section pattern)

For any section requiring scroll-based interactivity, extract it into a `'use client'` component in a subdirectory (e.g. `components/heroes/fitness/ProcessSection.tsx`). Keep the parent Server Component clean.

Scroll progress calculation — bidirectional, mirrors scroll position in real time:

```tsx
const [progress, setProgress] = useState(0);
const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  const onScroll = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const sectionH = sectionRef.current.offsetHeight;
    // 0 when section top hits viewport center → 1 when section bottom hits viewport center
    const p = Math.max(0, Math.min(1, (vh / 2 - rect.top) / sectionH));
    setProgress(p);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

**Do not** put a CSS `transition` on the fill element — it must track scroll in real time with no lag. Short transitions (0.25–0.3s) are fine on threshold-based color changes.

---

## Coaching website — full section flow

Ben confirmed this is the standard flow for a complete coaching website.

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

**Testimonial copy rules — what makes them feel real:**
- Always include a specific number (lbs, weeks, % increase)
- Always include a timeframe
- Include a "moment of contrast" (before vs. after mindset, not just body)
- Vary the angle across cards — weight loss, strength gain, travel-friendly, post-partum, etc.

---

## Current build status

### FitnessCoachHero.tsx
| Section | Status | File |
|---|---|---|
| Hero | ✅ Done | FitnessCoachHero.tsx |
| Problem | ✅ Done | FitnessCoachHero.tsx |
| Solution Teaser | ✅ Done | FitnessCoachHero.tsx |
| Process | ✅ Done | fitness/ProcessSection.tsx |
| Testimonials | ✅ Done | FitnessCoachHero.tsx |
| Pricing | 🔲 Next | — |
| CTA | 🔲 Todo | — |
| FAQs | 🔲 Todo | — |
| Footer | 🔲 Todo | — |

### Other hero files
- `BusinessCoachHero.tsx` — hero section only
- `MindsetCoachHero.tsx` — hero section only
- `LifeCoachHero.tsx` — hero section only

---

## What Ben wants next

- Continue FitnessCoach page: Pricing → CTA → FAQs → Footer
- More hero sections (ask Ben for themes/niches)
- Possibly: category filtering on the dashboard
- Possibly: copy-paste code view for each section
