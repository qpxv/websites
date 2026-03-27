import ProcessTimeline from '@/components/heroes/business/ProcessTimeline';

// ─── Design tokens ────────────────────────────────────────────────────────────
// BG:   #06080F  — midnight blue-black. Completely different feel from warm-black.
// GOLD: #EAB830  — richer, pops hard against cold dark. Not muted amber.
// TEXT: pure white headlines, white/65+ body. Confident, not apologetic.
// HERO: dot-grid texture + gradient text + full-width layout (vs old split col)
// FEATURES: vertical numbered rows (completely replaces the bento grid)
// SECTIONS: large decorative numbers as eyebrow elements

const G = '#EAB830'; // gold
const STAR = 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z';

function Stars() {
  return (
    <div className="flex gap-0.5 flex-shrink-0">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" fill={G} viewBox="0 0 20 20">
          <path d={STAR} />
        </svg>
      ))}
    </div>
  );
}

// Section eyebrow: big decorative number + divider + label
function SectionEyebrow({ n, label, dot }: { n: string; label: string; dot?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span
        className="font-black tracking-tighter leading-none select-none"
        style={{ fontSize: 'clamp(40px, 5vw, 56px)', color: `rgba(234,184,48,0.18)` }}
      >
        {n}
      </span>
      <div className="w-px h-9 bg-white/10" />
      {dot && (
        <div
          className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"
          style={{ boxShadow: '0 0 6px rgba(74,222,128,0.6)' }}
        />
      )}
      <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/30">
        {label}
      </span>
    </div>
  );
}

export default function BusinessCoachHero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO
          — Dot-grid texture (premium visual signature)
          — Gradient text on headline (Vercel/Linear treatment)
          — Stats as right-side vertical list instead of horizontal row
          — Testimonial as a full-width bottom strip instead of a card
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#06080F' }}
      >
        {/* Dot-grid — the single biggest visual differentiator from the old design */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        {/* Mask the grid with a radial gradient so it fades at edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, #06080F 100%)',
          }}
        />
        {/* Top-centre glow — warms the grid */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 1200,
            height: 700,
            background: `radial-gradient(ellipse at top, rgba(234,184,48,0.09) 0%, transparent 58%)`,
          }}
        />

        {/* ── Nav ──────────────────────────────────────────────────────────── */}
        <nav className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between px-8 py-7">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: G }}
            >
              <span className="text-black font-black text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">Alex Morgan</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-white/45">
            {['About', 'Services', 'Results', 'Contact'].map((item) => (
              <span key={item} className="hover:text-white cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
          <button
            className="px-5 py-2 rounded-full text-sm cursor-pointer transition-all hover:bg-white/[0.04]"
            style={{ color: G, border: `1px solid rgba(234,184,48,0.35)` }}
          >
            Book a Call
          </button>
        </nav>

        {/* ── Hero content ─────────────────────────────────────────────────── */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-8 flex flex-col justify-center py-12">

          {/* Full-width eyebrow bar */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/[0.07]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px flex-shrink-0" style={{ background: `rgba(234,184,48,0.5)` }} />
              <span
                className="text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ color: `rgba(234,184,48,0.65)` }}
              >
                Business Strategy Coach
              </span>
            </div>
            <div className="flex items-center gap-5 text-[11px] text-white/25 tracking-widest uppercase">
              <span>Est. 2017</span>
              <div className="w-px h-3 bg-white/15" />
              <span>New York</span>
            </div>
          </div>

          {/* ── Headline + side panel ──────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 xl:gap-20 items-start mb-14">

            {/* Massive headline */}
            <div>
              <h1
                className="font-black leading-[0.9] tracking-tighter"
                style={{ fontSize: 'clamp(58px, 9.5vw, 122px)' }}
              >
                {/* Gradient text — white at top fading slightly at bottom — the premium editorial effect */}
                <span
                  style={{
                    display: 'block',
                    backgroundImage: 'linear-gradient(to bottom, #FFFFFF 50%, rgba(255,255,255,0.72) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  SCALE YOUR
                  <br />
                  BUSINESS
                </span>
                {/* Gold line — "the answer" */}
                <span
                  className="block mt-1"
                  style={{ color: G }}
                >
                  BEYOND 7 FIGURES.
                </span>
              </h1>

              {/* Body + CTAs sit under the headline */}
              <p className="text-white/60 text-lg leading-relaxed mt-8 mb-8 max-w-[520px]">
                I help ambitious entrepreneurs build scalable businesses without burning out.
                In 90 days, you&apos;ll have the systems, strategy, and mindset to reach the
                next level.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-8 py-4 rounded-full text-black font-bold text-sm cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.99]"
                  style={{
                    background: `linear-gradient(135deg, ${G} 0%, #B8901A 100%)`,
                    boxShadow: `0 0 0 1px rgba(234,184,48,0.45), 0 8px 40px rgba(234,184,48,0.22)`,
                  }}
                >
                  Book a Strategy Call
                </button>
                <button
                  className="px-8 py-4 rounded-full text-white/60 text-sm cursor-pointer transition-all hover:text-white/85 hover:bg-white/[0.04]"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  See Case Studies →
                </button>
              </div>
            </div>

            {/* Stats — vertical right-side list (completely different from old horizontal row) */}
            <div className="mt-4 lg:mt-20">
              {[
                { value: '200+', label: 'Clients coached' },
                { value: '$40M+', label: 'Revenue generated' },
                { value: '98%', label: 'Client satisfaction' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-5 ${i < 2 ? 'border-b border-white/[0.07]' : ''}`}
                >
                  <span className="text-white/35 text-sm">{stat.label}</span>
                  <span
                    className="font-black text-3xl tracking-tighter"
                    style={{
                      backgroundImage: 'linear-gradient(to bottom, #FFFFFF 40%, rgba(255,255,255,0.7) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Full-width testimonial strip (replaces the old testimonial card) ── */}
          <div
            className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold flex-shrink-0">
                J
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Jason Miller</div>
                <div className="text-white/40 text-xs mt-0.5">CEO, TechStartup Co.</div>
              </div>
              <Stars />
            </div>
            <div className="w-px h-12 bg-white/[0.08] flex-shrink-0 hidden sm:block" />
            <p className="text-white/60 text-sm leading-relaxed italic flex-1">
              &ldquo;We went from $500k to $2.3M in annual revenue in just 8 months. The systems and
              mindset shifts were completely invaluable.&rdquo;
            </p>
            {/* Result number — big and unmissable */}
            <div className="flex-shrink-0 text-right">
              <div className="font-black text-4xl tracking-tighter leading-none" style={{ color: G }}>
                +360%
              </div>
              <div className="text-white/30 text-xs mt-1">Revenue · 8 months</div>
            </div>
            {/* Divider + availability */}
            <div
              className="flex items-center gap-2.5 flex-shrink-0 pl-6 border-l border-white/[0.08] hidden lg:flex"
            >
              <div
                className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"
                style={{ boxShadow: '0 0 6px rgba(74,222,128,0.6)' }}
              />
              <div>
                <div className="text-white/55 text-xs font-medium">3 spots left</div>
                <div className="text-white/25 text-[10px]">Q2 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURES — vertical numbered rows (replaces bento grid entirely)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-32 px-8 pt-28" style={{ background: '#06080F' }}>

        <div className="w-full max-w-7xl mx-auto h-px mb-24 bg-white/[0.07]" />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 900,
            height: 500,
            background: `radial-gradient(ellipse at top, rgba(234,184,48,0.05) 0%, transparent 60%)`,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex items-end justify-between mb-16 pb-8 border-b border-white/[0.07]">
            <div>
              {/* No section number here — the feature items have their own 01/02/03 */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px flex-shrink-0" style={{ background: `rgba(234,184,48,0.5)` }} />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/30">
                  What You Get
                </span>
              </div>
              <h2
                className="text-white font-bold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Everything you need to
                <br />
                <span style={{ color: G }}>break through the ceiling.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs text-right hidden md:block">
              Not a course. Not a template library.
              <br />
              A hands-on partnership built around your business.
            </p>
          </div>

          {/* Vertical list — editorial, numbered, unmistakably different */}
          {[
            {
              num: '01',
              tag: 'Core Program',
              title: 'Strategy & Offer Architecture',
              body: 'We dissect your entire business model — your offers, pricing, positioning, and ideal client — and rebuild it from the ground up. Every dollar you earn stops being accidental and starts being intentional.',
              tags: ['Offer stack audit', 'Pricing strategy', 'ICP definition', '90-day roadmap', 'Positioning workshop'],
              featured: true,
            },
            {
              num: '02',
              tag: 'Operations',
              title: 'Systems & Delegation',
              body: 'Build the operational layer that lets you stop being the bottleneck — and watch revenue climb when you step back.',
              tags: [],
              featured: false,
            },
            {
              num: '03',
              tag: 'Acquisition',
              title: 'Scale & Acquisition',
              body: 'Predictable high-ticket client flow through authority content, referral engines, and sales infrastructure that converts.',
              tags: [],
              featured: false,
            },
          ].map((item, i, arr) => (
            <div
              key={item.num}
              className={`grid grid-cols-[72px_1fr] gap-8 py-10 ${i < arr.length - 1 ? 'border-b' : ''}`}
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              {/* Large faded number — purely structural/decorative */}
              <div className="pt-1">
                <span
                  className="font-black text-5xl tracking-tighter leading-none"
                  style={{ color: item.featured ? `rgba(234,184,48,0.3)` : 'rgba(255,255,255,0.1)' }}
                >
                  {item.num}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-white font-bold text-xl tracking-tight">{item.title}</h3>
                  <span className="text-white/20 text-xs tracking-widest uppercase flex-shrink-0 hidden sm:block mt-1">
                    {item.tag}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed max-w-2xl ${item.featured ? 'text-white/65' : 'text-white/50'}`}>
                  {item.body}
                </p>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-white/40 text-xs"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.09)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Outcome bar */}
          <div
            className="mt-2 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{
              background: `rgba(234,184,48,0.04)`,
              border: `1px solid rgba(234,184,48,0.12)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: G }} />
              <span className="text-white/45 text-sm">Average client outcome across all three pillars</span>
            </div>
            <div className="flex items-center gap-10">
              {[
                { value: '+$340k', label: 'avg. revenue added' },
                { value: '6 months', label: 'avg. time to result' },
                { value: '3.4×', label: 'avg. ROI' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-10">
                  <div>
                    <div className="font-bold text-lg leading-none" style={{ color: G }}>{s.value}</div>
                    <div className="text-white/30 text-xs mt-1">{s.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-white/[0.07]" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-32 px-8 pt-28" style={{ background: '#06080F' }}>
        <div className="w-full max-w-7xl mx-auto h-px mb-24 bg-white/[0.07]" />
        <div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: 700,
            height: 500,
            background: `radial-gradient(ellipse at bottom left, rgba(234,184,48,0.05) 0%, transparent 65%)`,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-16 pb-8 border-b border-white/[0.07]">
            <div>
              <SectionEyebrow n="02" label="The Process" />
              <h2
                className="text-white font-bold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                90 days. Four phases.
                <br />
                <span style={{ color: G }}>One transformation.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs text-right hidden md:block">
              No fluff, no generic advice.
              <br />
              Every week has a deliverable and a deadline.
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COMPARISON
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-32 px-8 pt-28" style={{ background: '#06080F' }}>
        <div className="w-full max-w-7xl mx-auto h-px mb-24 bg-white/[0.07]" />
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: 700,
            height: 500,
            background: `radial-gradient(ellipse at top left, rgba(234,184,48,0.04) 0%, transparent 65%)`,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-16 pb-8 border-b border-white/[0.07]">
            <div>
              <SectionEyebrow n="03" label="The Honest Comparison" />
              <h2
                className="text-white font-bold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                You have options.
                <br />
                <span style={{ color: G }}>Here&apos;s the truth about them.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs text-right hidden md:block">
              Not a hit piece on the alternatives.
              <br />
              Just an honest look at what you&apos;re trading.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {/* Column headers */}
            <div className="grid grid-cols-4">
              <div
                className="px-6 py-5 border-b border-r border-white/[0.07]"
                style={{ background: 'rgba(255,255,255,0.01)' }}
              >
                <span className="text-white/20 text-xs uppercase tracking-widest">Comparing by</span>
              </div>
              {/* Alex column — gold left border is the visual signal, not a full amber bg */}
              <div
                className="px-6 py-5 border-b border-r flex flex-col gap-1"
                style={{
                  background: `rgba(234,184,48,0.05)`,
                  borderColor: `rgba(234,184,48,0.18)`,
                  borderLeftWidth: 2,
                  borderLeftStyle: 'solid',
                  borderLeftColor: `rgba(234,184,48,0.5)`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: G }}
                  >
                    <span className="text-black font-black text-[10px]">A</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: G }}>Alex Morgan</span>
                </div>
                <span className="text-xs" style={{ color: `rgba(234,184,48,0.4)` }}>Private coaching</span>
              </div>
              <div
                className="px-6 py-5 border-b border-r border-white/[0.07] flex flex-col gap-1"
                style={{ background: 'rgba(255,255,255,0.01)' }}
              >
                <span className="text-white/50 text-sm font-medium">Going it alone</span>
                <span className="text-white/25 text-xs">DIY / figure it out</span>
              </div>
              <div
                className="px-6 py-5 border-b border-white/[0.07] flex flex-col gap-1"
                style={{ background: 'rgba(255,255,255,0.01)' }}
              >
                <span className="text-white/50 text-sm font-medium">Courses & programs</span>
                <span className="text-white/25 text-xs">Self-paced learning</span>
              </div>
            </div>

            {[
              { label: 'Accountability', alex: 'Weekly calls, hard deadlines, real pressure', diy: 'You vs. you — usually loses', courses: 'None. You log in when you feel like it.' },
              { label: 'Personalisation', alex: 'Built entirely around your business and numbers', diy: '100% — but without outside perspective', courses: 'Generic frameworks for a generic business' },
              { label: 'Speed to results', alex: 'Avg. 6 months to significant revenue shift', diy: '2–5 years of trial and error, if ever', courses: 'Knowledge without implementation = zero' },
              { label: 'When you get stuck', alex: "Direct access — you're never left hanging", diy: 'Forums, YouTube rabbit holes, guesswork', courses: 'Re-watch the module and hope for the best' },
              { label: 'ROI track record', alex: '3.4× average return. Documented.', diy: 'Unmeasured. Most never quantify the cost.', courses: 'Completion rate under 10%. Results rare.' },
              { label: 'Thinking partner', alex: "Someone who's seen 200+ businesses like yours", diy: "You're the smartest person in the room. Always.", courses: 'A pre-recorded stranger with no context on you' },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 hover:bg-white/[0.012] transition-colors ${i < arr.length - 1 ? 'border-b' : ''}`}
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
              >
                <div className="px-6 py-5 border-r border-white/[0.06] flex items-center">
                  <span className="text-white/45 text-sm font-medium">{row.label}</span>
                </div>
                <div
                  className="px-6 py-5 border-r flex items-center"
                  style={{
                    background: `rgba(234,184,48,0.025)`,
                    borderColor: `rgba(234,184,48,0.1)`,
                    borderLeftWidth: 2,
                    borderLeftStyle: 'solid',
                    borderLeftColor: `rgba(234,184,48,0.22)`,
                  }}
                >
                  <span className="text-sm leading-snug" style={{ color: `rgba(234,184,48,0.88)` }}>
                    {row.alex}
                  </span>
                </div>
                <div className="px-6 py-5 border-r border-white/[0.06] flex items-center">
                  <span className="text-white/35 text-sm leading-snug">{row.diy}</span>
                </div>
                <div className="px-6 py-5 flex items-center">
                  <span className="text-white/35 text-sm leading-snug">{row.courses}</span>
                </div>
              </div>
            ))}

            <div
              className="grid grid-cols-4 border-t"
              style={{ borderColor: `rgba(234,184,48,0.12)`, background: `rgba(234,184,48,0.02)` }}
            >
              <div className="px-6 py-4 border-r border-white/[0.06] flex items-center">
                <span className="text-white/20 text-[10px] uppercase tracking-widest">Verdict</span>
              </div>
              <div
                className="px-6 py-4 border-r flex items-center gap-2"
                style={{ borderColor: `rgba(234,184,48,0.12)` }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: G }} />
                <span className="text-xs font-semibold" style={{ color: G }}>The obvious choice if results matter</span>
              </div>
              <div className="px-6 py-4 border-r border-white/[0.06] flex items-center">
                <span className="text-white/25 text-xs">High risk, slow, expensive in hindsight</span>
              </div>
              <div className="px-6 py-4 flex items-center">
                <span className="text-white/25 text-xs">Great for learning. Bad for growing.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-32 px-8 pt-28" style={{ background: '#06080F' }}>
        <div className="w-full max-w-7xl mx-auto h-px mb-24 bg-white/[0.07]" />
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 700,
            height: 500,
            background: `radial-gradient(ellipse at top right, rgba(234,184,48,0.05) 0%, transparent 65%)`,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-16 pb-8 border-b border-white/[0.07]">
            <div>
              <SectionEyebrow n="04" label="Client Results" dot />
              <h2
                className="text-white font-bold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                The numbers
                <br />
                <span style={{ color: G }}>don&apos;t lie.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs text-right hidden md:block">
              Real clients. Real revenue.
              <br />
              No fabricated screenshots.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            {/* Featured case — before/after numbers pushed to near-display size */}
            <div
              className="lg:col-span-2 rounded-2xl p-8 flex flex-col justify-between min-h-[380px]"
              style={{
                background: `linear-gradient(135deg, rgba(234,184,48,0.07) 0%, rgba(255,255,255,0.02) 60%)`,
                border: `1px solid rgba(234,184,48,0.15)`,
              }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-base flex-shrink-0">
                    S
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Sarah Chen</div>
                    <div className="text-white/40 text-xs mt-0.5">Founder, Luxe Consulting Group</div>
                  </div>
                </div>
                <Stars />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div
                  className="rounded-xl px-5 py-5"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Before</div>
                  {/* Big number — editorial impact */}
                  <div
                    className="font-black tracking-tighter leading-none"
                    style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    $380k
                  </div>
                  <div className="text-white/25 text-xs mt-2">annual revenue · stuck 2 years</div>
                </div>
                <div
                  className="rounded-xl px-5 py-5"
                  style={{
                    background: `rgba(234,184,48,0.07)`,
                    border: `1px solid rgba(234,184,48,0.2)`,
                  }}
                >
                  <div
                    className="text-[10px] uppercase tracking-widest mb-3"
                    style={{ color: `rgba(234,184,48,0.6)` }}
                  >
                    After · 7 months
                  </div>
                  <div
                    className="font-black tracking-tighter leading-none"
                    style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', color: G }}
                  >
                    $1.4M
                  </div>
                  <div className="text-xs mt-2" style={{ color: `rgba(234,184,48,0.4)` }}>
                    annual revenue · still scaling
                  </div>
                </div>
              </div>

              <blockquote
                className="text-white/65 text-sm leading-relaxed italic border-l-2 pl-4"
                style={{ borderColor: `rgba(234,184,48,0.3)` }}
              >
                &ldquo;I came to Alex thinking I needed more clients. Turns out I needed to stop
                being the cheapest option in the room. Repriced everything, cut my client count in
                half, and tripled revenue.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mt-6">
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: `rgba(234,184,48,0.1)`,
                    color: G,
                    border: `1px solid rgba(234,184,48,0.22)`,
                  }}
                >
                  +268% revenue
                </div>
                <span className="text-white/30 text-xs">in 7 months</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { initial: 'M', name: 'Marcus Webb', biz: 'Executive Coach', result: '+$220k', period: '5 months' },
                { initial: 'D', name: 'Diana Ross', biz: 'Agency Owner', result: '+410%', period: '9 months' },
                { initial: 'T', name: 'Tom Nguyen', biz: 'SaaS Founder', result: '$2.1M ARR', period: '12 months' },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex-1 rounded-2xl px-6 py-5 flex items-center justify-between"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: `rgba(234,184,48,0.08)`, border: `1px solid rgba(234,184,48,0.14)`, color: G }}
                    >
                      {c.initial}
                    </div>
                    <div>
                      <div className="text-white/70 text-sm font-medium">{c.name}</div>
                      <div className="text-white/30 text-xs mt-0.5">{c.biz}</div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-base" style={{ color: G }}>{c.result}</div>
                    <div className="text-white/30 text-xs mt-0.5">{c.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="grid grid-cols-5 px-6 py-3 border-b border-white/[0.06]">
              {['CLIENT', 'INDUSTRY', 'STARTING REVENUE', 'RESULT', 'TIMELINE'].map((h) => (
                <div key={h} className="text-white/20 text-[10px] font-medium tracking-widest">{h}</div>
              ))}
            </div>
            {[
              { name: 'Rachel Kim', industry: 'Life Coaching', start: '$95k / yr', result: '$520k / yr', time: '8 mo', growth: '+447%' },
              { name: 'James Okafor', industry: 'Real Estate', start: '$1.2M', result: '$3.8M', time: '11 mo', growth: '+217%' },
              { name: 'Priya Sharma', industry: 'HR Consulting', start: '$280k', result: '$740k', time: '6 mo', growth: '+164%' },
              { name: 'Luke Brennan', industry: 'Fitness Brand', start: '$60k / yr', result: '$390k / yr', time: '10 mo', growth: '+550%' },
            ].map((row, i, arr) => (
              <div
                key={row.name}
                className={`grid grid-cols-5 px-6 py-4 items-center hover:bg-white/[0.015] transition-colors ${i < arr.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
              >
                <div className="text-white/65 text-sm font-medium">{row.name}</div>
                <div className="text-white/35 text-sm">{row.industry}</div>
                <div className="text-white/35 text-sm">{row.start}</div>
                <div className="text-white/75 text-sm font-semibold">{row.result}</div>
                <div className="flex items-center gap-2">
                  <span className="text-white/35 text-sm">{row.time}</span>
                  <span
                    className="px-2 py-0.5 rounded text-[11px] font-bold"
                    style={{ background: `rgba(234,184,48,0.1)`, color: G }}
                  >
                    {row.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRICING
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-32 px-8 pt-28" style={{ background: '#06080F' }}>
        <div className="w-full max-w-7xl mx-auto h-px mb-24 bg-white/[0.07]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 1000,
            height: 600,
            background: `radial-gradient(ellipse at top, rgba(234,184,48,0.06) 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-12 pb-8 border-b border-white/[0.07]">
            <div>
              <SectionEyebrow n="05" label="Investment" />
              <h2
                className="text-white font-bold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Not a cost.
                <br />
                <span style={{ color: G }}>A capital decision.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs text-right hidden md:block">
              Every client below thought hard about this number.
              <br />
              None of them wish they&apos;d waited longer.
            </p>
          </div>

          {/* ROI reframe */}
          <div
            className="rounded-xl px-7 py-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: `rgba(234,184,48,0.04)`, border: `1px solid rgba(234,184,48,0.12)` }}
          >
            <span className="text-white/45 text-sm">
              Based on documented client averages across 200+ engagements
            </span>
            <div className="flex items-center gap-8 flex-shrink-0">
              {[
                { label: 'Avg. investment', value: '$15k' },
                { label: 'Avg. revenue added', value: '$340k' },
                { label: 'Avg. return', value: '3.4×' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div>
                    <div className="font-bold text-base leading-none" style={{ color: G }}>{s.value}</div>
                    <div className="text-white/35 text-xs mt-1">{s.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-7" style={{ background: `rgba(234,184,48,0.15)` }} />}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            {/* Featured */}
            <div
              className="lg:col-span-2 rounded-2xl p-9 flex flex-col"
              style={{
                background: `linear-gradient(145deg, rgba(234,184,48,0.08) 0%, rgba(255,255,255,0.02) 55%)`,
                border: `1px solid rgba(234,184,48,0.2)`,
                boxShadow: `0 0 80px rgba(234,184,48,0.06)`,
              }}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest mb-2"
                    style={{ color: `rgba(234,184,48,0.55)` }}
                  >
                    Private Partnership
                  </div>
                  <h3 className="text-white font-bold text-2xl tracking-tight">1:1 Coaching Program</h3>
                  <p className="text-white/50 text-sm mt-2">
                    For founders between $300k–$3M who are ready to stop guessing and start compounding.
                  </p>
                </div>
                <div
                  className="flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold ml-4"
                  style={{
                    background: `rgba(234,184,48,0.12)`,
                    color: G,
                    border: `1px solid rgba(234,184,48,0.25)`,
                  }}
                >
                  Most popular
                </div>
              </div>

              <div className="flex-1 mb-9">
                {[
                  { title: '12 weekly 1:1 strategy sessions', detail: '90 min each. Recorded. Yours to keep.' },
                  { title: 'Full business & offer audit', detail: 'Week one. Nothing moves until this is done.' },
                  { title: 'Direct Slack access', detail: 'Async support between sessions — no waiting a week to unblock.' },
                  { title: '90-day revenue roadmap', detail: 'A prioritised plan with milestones, not a wishlist.' },
                  { title: 'Pricing & positioning overhaul', detail: 'The thing most coaches skip. The one that moves the needle most.' },
                ].map((item, i, arr) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 py-4 ${i < arr.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: G, boxShadow: `0 0 6px rgba(234,184,48,0.5)` }}
                    />
                    <div>
                      <div className="text-white/75 text-sm font-medium">{item.title}</div>
                      <div className="text-white/35 text-xs mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-white/[0.08]">
                <div>
                  <div className="text-white/25 text-xs uppercase tracking-widest mb-1">Investment</div>
                  <div className="flex items-baseline gap-2">
                    {/* Big price — font-black, display-sized */}
                    <span className="text-white font-black text-5xl tracking-tighter">$18,000</span>
                    <span className="text-white/35 text-sm">or 3 × $6,500</span>
                  </div>
                  <div className="text-white/30 text-xs mt-1.5">Per 90-day engagement · renews only if you want to</div>
                </div>
                <button
                  className="px-8 py-3.5 rounded-full text-black font-bold text-sm cursor-pointer flex-shrink-0 transition-all hover:scale-[1.02] active:scale-[0.99]"
                  style={{
                    background: `linear-gradient(135deg, ${G} 0%, #B8901A 100%)`,
                    boxShadow: `0 0 0 1px rgba(234,184,48,0.4), 0 8px 32px rgba(234,184,48,0.2)`,
                  }}
                >
                  Apply for a spot →
                </button>
              </div>
            </div>

            {/* Group Accelerator */}
            <div
              className="rounded-2xl p-8 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.09)' }}
            >
              <div className="mb-8">
                <div className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Group Program</div>
                <h3 className="text-white font-bold text-xl tracking-tight">The Accelerator</h3>
                <p className="text-white/45 text-sm mt-2 leading-relaxed">
                  For entrepreneurs at $100k–$500k who want the framework, the cohort, and the
                  accountability — without the private rate.
                </p>
              </div>
              <div className="flex-1 space-y-4 mb-8">
                {[
                  '8-week cohort program',
                  'Weekly group coaching calls',
                  'Full curriculum + templates',
                  'Private community access',
                  'Lifetime access to materials',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: `rgba(234,184,48,0.4)` }}
                    />
                    <span className="text-white/50 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/[0.07]">
                <div className="text-white/25 text-xs uppercase tracking-widest mb-1">Investment</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-white font-black text-3xl tracking-tight">$4,500</span>
                  <span className="text-white/30 text-sm">/ cohort</span>
                </div>
                <div className="text-white/25 text-xs mb-5">Next cohort: April 14, 2026</div>
                <button
                  className="w-full px-6 py-3 rounded-full text-white/60 text-sm cursor-pointer transition-all hover:text-white/80"
                  style={{ border: '1px solid rgba(255,255,255,0.14)' }}
                >
                  Join the waitlist
                </button>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-px h-10 bg-white/[0.12] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white/60 text-sm font-medium">The cost of waiting another year</div>
                <div className="text-white/35 text-sm mt-0.5">
                  At your current trajectory, that&apos;s roughly $340k in unrealised revenue. This
                  engagement costs $18k.
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-white/25 text-xs uppercase tracking-widest mb-1">Opportunity cost</div>
              <div className="text-white/70 font-bold text-xl">$322k net</div>
              <div className="text-white/25 text-xs mt-0.5">if you don&apos;t act</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQs
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-32 px-8 pt-28" style={{ background: '#06080F' }}>
        <div className="w-full max-w-7xl mx-auto h-px mb-24 bg-white/[0.07]" />
        <div
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: 700,
            height: 600,
            background: `radial-gradient(ellipse at bottom right, rgba(234,184,48,0.04) 0%, transparent 65%)`,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-16 pb-8 border-b border-white/[0.07]">
            <div>
              <SectionEyebrow n="06" label="Before You Decide" />
              <h2
                className="text-white font-bold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Ask the hard stuff.
                <br />
                <span style={{ color: G }}>Here are the real answers.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs text-right hidden md:block">
              No FAQ has ever been written by someone
              <br />
              who wanted you to think clearly. This one is.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              {
                q: '"I tried coaching before. It didn\'t do anything for me."',
                a: "Most coaching fails because it stays in the room. You leave with insights and no one checks if you act on them. Every engagement here ends with a deliverable, not a debrief. And you have my number between sessions — because the work doesn't pause for a week just because our call did.",
              },
              {
                q: '"I can\'t justify $18,000 right now."',
                a: "That's a completely reasonable thing to feel about an expense. It's not a reasonable thing to feel about an investment with a documented 3.4× return. The real question isn't whether you can afford this — it's whether you can afford another year of the revenue ceiling you're already sitting under.",
              },
              {
                q: '"I\'m too busy. I don\'t have time for another commitment."',
                a: "Being too busy is usually the symptom, not the constraint. You're busy because the business is built around you — which is exactly what we fix. If your schedule can't absorb four hours a month, that's not a reason to wait. It's the reason to start.",
              },
              {
                q: '"Who is this actually NOT right for? Be honest."',
                a: "Fair. This isn't for people who want someone to hand them a playbook and disappear. It's not for founders below $100k who haven't validated anything yet — the tools here won't land. And it's not for people who aren't willing to change pricing, positioning, or the way they sell.",
              },
              {
                q: '"What if I put in the work and still don\'t get results?"',
                a: "I don't offer a money-back guarantee and I'll tell you why: it creates the wrong relationship. A guarantee lets you opt out when things get uncomfortable — which is usually right before a breakthrough. What I do offer is full transparency before we start. I'd rather lose the sale than take someone's money and underdeliver.",
              },
              {
                q: '"How do I know if I\'m actually ready for this?"',
                a: "You're ready if you have a working business (not an idea), if you're willing to be told things you don't want to hear, and if you can commit fully to 90 days. You're not ready if you need the ROI to be guaranteed before you move.",
              },
            ].map((faq, i, arr) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[80px_1fr_1.4fr] hover:bg-white/[0.012] transition-colors ${i < arr.length - 1 ? 'border-b' : ''}`}
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <div className="px-6 md:px-8 pt-8 md:py-9 flex md:block">
                  <span
                    className="font-black leading-none select-none"
                    style={{
                      fontSize: 'clamp(36px, 4vw, 52px)',
                      color: `rgba(234,184,48,0.15)`,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="px-6 md:px-0 md:pr-10 pb-2 md:py-9 flex items-start">
                  <p className="text-white/80 font-semibold text-base leading-snug tracking-tight italic">
                    {faq.q}
                  </p>
                </div>
                <div
                  className="px-6 md:px-8 pb-8 md:py-9 md:border-l"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white/30 text-sm">Still have a question that isn&apos;t here?</p>
            <button
              className="px-6 py-2.5 rounded-full text-white/45 text-sm cursor-pointer transition-all hover:text-white/65"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Ask before you apply →
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA — theatrical climax
          Gradient text headline. Triple-layer glowing button.
          No amber divider line. Just space and light.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative pb-32 px-8 pt-28 overflow-hidden"
        style={{ background: '#06080F' }}
      >
        {/* Sunrise — builds from bottom centre */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 1400,
            height: 900,
            background: `radial-gradient(ellipse at bottom, rgba(234,184,48,0.14) 0%, rgba(234,184,48,0.04) 28%, transparent 60%)`,
          }}
        />
        <div
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 600,
            height: 400,
            background: `radial-gradient(ellipse at bottom, rgba(234,184,48,0.22) 0%, transparent 65%)`,
          }}
        />

        <div className="w-full max-w-7xl mx-auto h-px mb-32 bg-white/[0.07]" />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-14"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              style={{ boxShadow: '0 0 6px rgba(74,222,128,0.6)' }}
            />
            <span className="text-white/45 text-xs font-medium tracking-[0.15em] uppercase">
              Accepting applications · Q2 2026 · 4 spots remaining
            </span>
          </div>

          {/* Headline — gradient white, then gold. Two visual weights, one message. */}
          <h2
            className="font-black leading-[0.9] tracking-tighter mb-3"
            style={{
              fontSize: 'clamp(52px, 9vw, 112px)',
              backgroundImage: 'linear-gradient(to bottom, #FFFFFF 40%, rgba(255,255,255,0.72) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            THE NEXT 90 DAYS
          </h2>
          <h2
            className="font-black leading-[0.9] tracking-tighter mb-12"
            style={{ fontSize: 'clamp(52px, 9vw, 112px)', color: G }}
          >
            WILL PASS EITHER WAY.
          </h2>

          <p className="text-white/55 text-xl leading-relaxed max-w-xl mb-4">
            You&apos;ve read the results. You&apos;ve seen the process. You know what staying stuck
            costs. The only thing left is the decision.
          </p>
          <p className="text-white/35 text-base leading-relaxed max-w-lg mb-14">
            The call is free. It&apos;s 45 minutes. If it&apos;s not the right fit, I&apos;ll tell
            you that too.
          </p>

          {/* The most important button on the page — triple-layer glow */}
          <button
            className="px-14 py-5 rounded-full text-black font-black text-lg cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.99] mb-10"
            style={{
              background: `linear-gradient(135deg, ${G} 0%, #B8901A 100%)`,
              boxShadow: `0 0 0 1px rgba(234,184,48,0.5), 0 0 50px rgba(234,184,48,0.35), 0 0 100px rgba(234,184,48,0.15)`,
            }}
          >
            Book the strategy call →
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16">
            {[
              'Free · no credit card',
              '45 minutes',
              'Alex reads every application personally',
              'Response within 24 hours',
            ].map((item, i, arr) => (
              <div key={item} className="flex items-center gap-8">
                <span className="text-white/40 text-sm">{item}</span>
                {i < arr.length - 1 && <div className="w-px h-3 bg-white/[0.1]" />}
              </div>
            ))}
          </div>

          <div className="max-w-lg pt-10 border-t border-white/[0.07]">
            <p className="text-white/25 text-sm leading-relaxed italic">
              &ldquo;I built this page to give you everything you need to make a clear decision. If
              you&apos;re still reading, you already know what the right move is.&rdquo;
            </p>
            <p className="text-white/20 text-xs mt-4 not-italic tracking-widest uppercase">
              — Alex Morgan
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="relative px-8 pt-20 pb-10" style={{ background: '#06080F' }}>
        <div
          className="w-full h-px mb-16"
          style={{
            background: `linear-gradient(to right, transparent 0%, rgba(234,184,48,0.15) 25%, rgba(234,184,48,0.28) 50%, rgba(234,184,48,0.15) 75%, transparent 100%)`,
          }}
        />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: G }}
                >
                  <span className="text-black font-black text-sm">A</span>
                </div>
                <span className="text-white font-semibold text-sm">Alex Morgan</span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-7">
                Business strategy coaching for founders who are done leaving money on the table.
                Based in New York. Working globally.
              </p>
              <button
                className="px-6 py-2.5 rounded-full text-sm cursor-pointer transition-all"
                style={{ color: `rgba(234,184,48,0.65)`, border: `1px solid rgba(234,184,48,0.22)` }}
              >
                Book a strategy call →
              </button>
            </div>
            <div>
              <div className="text-white/20 text-[10px] uppercase tracking-widest mb-5">Navigate</div>
              <ul className="space-y-3">
                {['About Alex', 'The Program', 'Client Results', 'The Process', 'FAQ'].map((label) => (
                  <li key={label}>
                    <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-pointer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white/20 text-[10px] uppercase tracking-widest mb-5">Contact</div>
              <ul className="space-y-3">
                {['Book a Strategy Call', 'hello@alexmorgan.com', 'LinkedIn', 'Instagram'].map((label) => (
                  <li key={label}>
                    <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-pointer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.06]"
          >
            <span className="text-white/20 text-xs">© 2026 Alex Morgan Coaching. All rights reserved.</span>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((item) => (
                <a key={item} href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors cursor-pointer">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
