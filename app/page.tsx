'use client'

import { useRouter } from 'next/navigation'
import { heroes } from '@/lib/heroes'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#060608] relative overflow-hidden">

      {/* ── Ambient background orbs ────────────────────────────────────── */}
      {/* Amber — top-left (business coach) */}
      <div className="absolute pointer-events-none" style={{
        width: 700, height: 700, top: '-8%', left: '-8%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 65%)',
        filter: 'blur(6px)',
      }} />
      {/* Red — top-right (fitness coach) */}
      <div className="absolute pointer-events-none" style={{
        width: 700, height: 700, top: '-8%', right: '-8%',
        background: 'radial-gradient(circle, rgba(239,68,68,0.22) 0%, transparent 65%)',
        filter: 'blur(6px)',
      }} />
      {/* Purple — bottom-left (mindset coach) */}
      <div className="absolute pointer-events-none" style={{
        width: 700, height: 700, bottom: '-8%', left: '-8%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%)',
        filter: 'blur(6px)',
      }} />
      {/* Teal — bottom-right (life coach) */}
      <div className="absolute pointer-events-none" style={{
        width: 700, height: 700, bottom: '-8%', right: '-8%',
        background: 'radial-gradient(circle, rgba(20,184,166,0.20) 0%, transparent 65%)',
        filter: 'blur(6px)',
      }} />

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="relative z-20 px-8 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Logo pill */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full" style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}>
            <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
            </svg>
            <span className="text-white/80 text-sm font-medium">Hero Section Library</span>
          </div>

          {/* Count pill */}
          <div className="px-3.5 py-1.5 rounded-full" style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <span className="text-white/50 text-xs font-mono">{heroes.length} sections</span>
          </div>

        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────────────────── */}
      <main className="relative z-10 max-w-6xl mx-auto px-8 py-14">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/45 mb-4">
            Coaching Website Designs
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.06] text-white mb-5">
            Pick a hero.
            <br />
            <span className="text-white/30">Start building.</span>
          </h1>
          <p className="text-white/65 text-base max-w-md leading-relaxed">
            A growing collection of premium hero sections designed for coaches.
            Click any card to preview the full section.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {heroes.map((hero, index) => (
            <button
              key={hero.slug}
              onClick={() => router.push(`/heroes/${hero.slug}`)}
              className="group text-left w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 0 0 0.5px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {/* Color preview gradient */}
              <div className="relative w-full overflow-hidden" style={{ height: 110 }}>
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(135deg, ${hero.previewColors.from} 0%, ${hero.previewColors.via} 50%, ${hero.previewColors.to} 100%)`,
                }} />
                {/* Subtle noise/grain overlay for depth */}
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)',
                }} />
                {/* Category badge overlaid on the gradient */}
                <div className="absolute bottom-3 left-4">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm"
                    style={{
                      color: hero.tintColor,
                      background: `${hero.tintColor}22`,
                      borderColor: `${hero.tintColor}40`,
                    }}
                  >
                    {hero.category}
                  </span>
                </div>
                {/* Index number top-right */}
                <div className="absolute top-3 right-4">
                  <span className="text-white/20 text-xs font-mono">0{index + 1}</span>
                </div>
              </div>

              {/* Top highlight strip — the "glass lens" edge */}
              <div className="h-px w-full" style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.06) 70%, transparent 100%)',
              }} />

              <div className="p-7">
                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-2.5 group-hover:text-white transition-colors">
                  {hero.title}
                </h2>

                {/* Description */}
                <p className="text-white/65 text-sm leading-relaxed mb-7">
                  {hero.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-md"
                    style={{
                      color: `${hero.tintColor}bb`,
                      background: `${hero.tintColor}14`,
                    }}
                  >
                    {hero.accentLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white/40 group-hover:text-white/65 transition-colors duration-200">
                    <span>Preview</span>
                    <svg
                      className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/20 text-xs">More sections coming soon.</p>
        </div>
      </main>
    </div>
  )
}
