import ProcessTimeline from '@/components/heroes/business/ProcessTimeline';

export default function BusinessCoachHero() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-[#050505] flex flex-col relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 65%)' }}
        />

        {/* Nav */}
        <nav className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <span className="text-black font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">Alex Morgan</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/40">
            {['About', 'Services', 'Results', 'Contact'].map((item) => (
              <span key={item} className="hover:text-white/70 cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
          <button className="px-5 py-2 rounded-full border border-amber-500/30 text-amber-400 text-sm hover:bg-amber-500/10 transition-colors cursor-pointer">
            Book a Call
          </button>
        </nav>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
            {/* Left side */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-amber-400/80 text-xs font-medium tracking-widest uppercase">
                  Business Strategy Coach
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                Scale Your Business
                <br />
                <span className="text-amber-400">Beyond 7 Figures.</span>
              </h1>

              <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-lg">
                I help ambitious entrepreneurs build scalable businesses without burning out.
                In 90 days, you&apos;ll have the systems, strategy, and mindset to reach the next level.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="px-8 py-3.5 rounded-full bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-colors cursor-pointer">
                  Book a Strategy Call
                </button>
                <button className="px-8 py-3.5 rounded-full border border-white/10 text-white/55 text-sm hover:border-white/20 hover:text-white/80 transition-all cursor-pointer">
                  See Case Studies →
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-7 mt-12 pt-10 border-t border-white/[0.07]">
                {[
                  { value: '200+', label: 'Clients coached' },
                  { value: '$40M+', label: 'Revenue generated' },
                  { value: '98%', label: 'Client satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-7">
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/35 text-xs mt-0.5">{stat.label}</div>
                    </div>
                    {i < 2 && <div className="w-px h-9 bg-white/[0.08]" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side — testimonial card */}
            <div className="relative">
              {/* Testimonial card */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    J
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Jason Miller</div>
                    <div className="text-white/35 text-xs mt-0.5">CEO, TechStartup Co.</div>
                  </div>
                  <div className="ml-auto flex gap-0.5 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed italic">
                  &ldquo;Working with Alex was a game changer. We went from $500k to $2.3M in annual revenue in just
                  8 months. The systems and mindset shifts were completely invaluable.&rdquo;
                </p>

                <div className="mt-6 pt-6 border-t border-white/[0.07] flex items-center justify-between">
                  <div className="text-amber-400 font-bold text-xl">+360%</div>
                  <div className="text-white/30 text-xs">Revenue increase in 8 months</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 w-[90px] h-[90px] rounded-full bg-amber-500/8 border border-amber-500/15 flex flex-col items-center justify-center">
                <div className="text-amber-400 text-xl font-bold leading-none">7+</div>
                <div className="text-white/35 text-[10px] text-center mt-0.5 leading-tight">Yrs<br />coaching</div>
              </div>

              {/* Second small card */}
              <div className="mt-4 rounded-xl bg-white/[0.025] border border-white/[0.07] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white/50 text-sm">Next cohort starting soon</span>
                </div>
                <span className="text-white/25 text-xs">3 spots left</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          FEATURES — What You Get
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#050505] pb-32 px-8">

        {/* Amber glowing divider line */}
        <div className="w-full h-px mb-24" style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(245,158,11,0.15) 25%, rgba(245,158,11,0.35) 50%, rgba(245,158,11,0.15) 75%, transparent 100%)',
        }} />

        {/* Soft amber glow — center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
          width: 900, height: 400,
          background: 'radial-gradient(ellipse at top, rgba(245,158,11,0.05) 0%, transparent 65%)',
        }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-amber-400/80 text-xs font-medium tracking-widest uppercase">What You Get</span>
              </div>
              <h2 className="text-white font-bold leading-[1.08] tracking-tight" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
                Everything you need to<br />
                <span className="text-amber-400">break through the ceiling.</span>
              </h2>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs md:mb-1 md:text-right">
              Not a course. Not a template library.<br />
              A hands-on partnership built around your business.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Large featured card — spans 2 cols */}
            <div
              className="lg:col-span-2 rounded-2xl p-8 flex flex-col justify-between min-h-[340px] hover:-translate-y-0.5 transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(255,255,255,0.02) 60%)',
                border: '1px solid rgba(245,158,11,0.18)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">01</span>
                  </div>
                  <span className="text-amber-400/50 text-xs font-medium tracking-widest uppercase">Core Program</span>
                </div>
                <h3 className="text-white font-bold text-2xl tracking-tight mb-3">Strategy & Offer Architecture</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                  We dissect your entire business model — your offers, pricing, positioning, and ideal client — and rebuild it
                  from the ground up. Every dollar you earn stops being accidental and starts being intentional.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {['Offer stack audit', 'Pricing strategy', 'ICP definition', '90-day roadmap', 'Positioning workshop'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/45 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — 2 stacked cards */}
            <div className="flex flex-col gap-4">

              <div
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-7 flex-1 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-5">
                  <span className="text-amber-400 font-bold text-sm">02</span>
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight mb-2">Systems & Delegation</h3>
                <p className="text-white/35 text-sm leading-relaxed">
                  Build the operational layer that lets you stop being the bottleneck — and watch revenue climb when you step back.
                </p>
              </div>

              <div
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-7 flex-1 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-5">
                  <span className="text-amber-400 font-bold text-sm">03</span>
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight mb-2">Scale & Acquisition</h3>
                <p className="text-white/35 text-sm leading-relaxed">
                  Predictable high-ticket client flow through authority content, referral engines, and sales infrastructure that converts.
                </p>
              </div>

            </div>

            {/* Bottom full-width outcome strip */}
            <div className="lg:col-span-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-white/50 text-sm">Average client outcome across all three pillars</span>
              </div>
              <div className="flex items-center gap-10">
                {[
                  { value: '+$340k', label: 'avg. revenue added' },
                  { value: '6 months', label: 'avg. time to result' },
                  { value: '3.4×', label: 'avg. ROI on investment' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-10">
                    <div>
                      <div className="text-amber-400 font-bold text-lg leading-none">{s.value}</div>
                      <div className="text-white/30 text-xs mt-1">{s.label}</div>
                    </div>
                    {i < 2 && <div className="w-px h-8 bg-white/[0.07]" />}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          PROCESS VERSION A — Horizontal expanding timeline
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#050505] pb-32 px-8">

        {/* Glowing amber divider */}
        <div className="w-full h-px mb-24" style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(245,158,11,0.15) 25%, rgba(245,158,11,0.35) 50%, rgba(245,158,11,0.15) 75%, transparent 100%)',
        }} />

        {/* Subtle amber glow — bottom-left */}
        <div className="absolute bottom-0 left-0 pointer-events-none" style={{
          width: 700, height: 500,
          background: 'radial-gradient(ellipse at bottom left, rgba(245,158,11,0.05) 0%, transparent 65%)',
        }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-amber-400/80 text-xs font-medium tracking-widest uppercase">The Process</span>
              </div>
              <h2 className="text-white font-bold leading-[1.08] tracking-tight" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
                90 days. Four phases.<br />
                <span className="text-amber-400">One transformation.</span>
              </h2>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs md:mb-1 md:text-right">
              No fluff, no generic advice.<br />
              Every week has a deliverable and a deadline.
            </p>
          </div>

          <ProcessTimeline />

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          COMPARISON — The Honest Table
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#050505] pb-32 px-8">

        {/* Glowing amber divider */}
        <div className="w-full h-px mb-24" style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(245,158,11,0.15) 25%, rgba(245,158,11,0.35) 50%, rgba(245,158,11,0.15) 75%, transparent 100%)',
        }} />

        {/* Glow — top left */}
        <div className="absolute top-0 left-0 pointer-events-none" style={{
          width: 700, height: 500,
          background: 'radial-gradient(ellipse at top left, rgba(245,158,11,0.05) 0%, transparent 65%)',
        }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-amber-400/80 text-xs font-medium tracking-widest uppercase">The Honest Comparison</span>
              </div>
              <h2 className="text-white font-bold leading-[1.08] tracking-tight" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
                You have options.<br />
                <span className="text-amber-400">Here's the truth about them.</span>
              </h2>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs md:mb-1 md:text-right">
              Not a hit piece on the alternatives.<br />
              Just an honest look at what you're trading.
            </p>
          </div>

          {/* Comparison table */}
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Column headers */}
            <div className="grid grid-cols-4">
              {/* Empty first cell */}
              <div className="px-6 py-5 border-b border-r border-white/[0.06] bg-white/[0.01]">
                <span className="text-white/20 text-xs uppercase tracking-widest">Comparing by</span>
              </div>

              {/* Alex — highlighted column header */}
              <div
                className="px-6 py-5 border-b border-r flex flex-col gap-1"
                style={{ background: 'rgba(245,158,11,0.06)', borderColor: 'rgba(245,158,11,0.2)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-amber-500 flex items-center justify-center">
                    <span className="text-black font-bold text-[10px]">A</span>
                  </div>
                  <span className="text-amber-400 text-sm font-semibold">Alex Morgan</span>
                </div>
                <span className="text-amber-400/40 text-xs">Private coaching</span>
              </div>

              <div className="px-6 py-5 border-b border-r border-white/[0.06] bg-white/[0.01] flex flex-col gap-1">
                <span className="text-white/45 text-sm font-medium">Going it alone</span>
                <span className="text-white/20 text-xs">DIY / figure it out</span>
              </div>

              <div className="px-6 py-5 border-b border-white/[0.06] bg-white/[0.01] flex flex-col gap-1">
                <span className="text-white/45 text-sm font-medium">Courses & programs</span>
                <span className="text-white/20 text-xs">Self-paced learning</span>
              </div>
            </div>

            {/* Rows */}
            {[
              {
                label: 'Accountability',
                alex: { text: 'Weekly calls, hard deadlines, real pressure', positive: true },
                diy: { text: 'You vs. you — usually loses', positive: false },
                courses: { text: 'None. You log in when you feel like it.', positive: false },
              },
              {
                label: 'Personalisation',
                alex: { text: 'Built entirely around your business and numbers', positive: true },
                diy: { text: '100% — but without outside perspective', positive: false },
                courses: { text: 'Generic frameworks for a generic business', positive: false },
              },
              {
                label: 'Speed to results',
                alex: { text: 'Avg. 6 months to significant revenue shift', positive: true },
                diy: { text: '2–5 years of trial and error, if ever', positive: false },
                courses: { text: 'Knowledge without implementation = zero', positive: false },
              },
              {
                label: 'When you get stuck',
                alex: { text: 'Direct access — you\'re never left hanging', positive: true },
                diy: { text: 'Forums, YouTube rabbit holes, guesswork', positive: false },
                courses: { text: 'Re-watch the module and hope for the best', positive: false },
              },
              {
                label: 'ROI track record',
                alex: { text: '3.4× average return. Documented.', positive: true },
                diy: { text: 'Unmeasured. Most never quantify the cost.', positive: false },
                courses: { text: 'Completion rate under 10%. Results rare.', positive: false },
              },
              {
                label: 'Thinking partner',
                alex: { text: 'Someone who\'s seen 200+ businesses like yours', positive: true },
                diy: { text: 'You\'re the smartest person in the room. Always.', positive: false },
                courses: { text: 'A pre-recorded stranger with no context on you', positive: false },
              },
            ].map((row, i, arr) => (
              <div key={row.label} className={`grid grid-cols-4 ${i < arr.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>

                {/* Row label */}
                <div className="px-6 py-5 border-r border-white/[0.06] flex items-center">
                  <span className="text-white/30 text-sm font-medium">{row.label}</span>
                </div>

                {/* Alex cell — amber glow column */}
                <div
                  className="px-6 py-5 border-r flex items-center"
                  style={{ background: 'rgba(245,158,11,0.025)', borderColor: 'rgba(245,158,11,0.12)' }}
                >
                  <span className="text-amber-400/80 text-sm leading-snug">{row.alex.text}</span>
                </div>

                {/* DIY cell */}
                <div className="px-6 py-5 border-r border-white/[0.06] flex items-center">
                  <span className="text-white/25 text-sm leading-snug">{row.diy.text}</span>
                </div>

                {/* Courses cell */}
                <div className="px-6 py-5 flex items-center">
                  <span className="text-white/25 text-sm leading-snug">{row.courses.text}</span>
                </div>

              </div>
            ))}

            {/* Verdict strip */}
            <div className="grid grid-cols-4 border-t" style={{ borderColor: 'rgba(245,158,11,0.15)', background: 'rgba(245,158,11,0.03)' }}>
              <div className="px-6 py-4 border-r border-white/[0.06] flex items-center">
                <span className="text-white/20 text-[10px] uppercase tracking-widest">Verdict</span>
              </div>
              <div className="px-6 py-4 border-r flex items-center gap-2" style={{ borderColor: 'rgba(245,158,11,0.15)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-amber-400 text-xs font-semibold">The obvious choice if results matter</span>
              </div>
              <div className="px-6 py-4 border-r border-white/[0.06] flex items-center">
                <span className="text-white/20 text-xs">High risk, slow, expensive in hindsight</span>
              </div>
              <div className="px-6 py-4 flex items-center">
                <span className="text-white/20 text-xs">Great for learning. Bad for growing.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          TESTIMONIALS — The Scoreboard
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#050505] pb-32 px-8">

        {/* Glowing amber divider */}
        <div className="w-full h-px mb-24" style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(245,158,11,0.15) 25%, rgba(245,158,11,0.35) 50%, rgba(245,158,11,0.15) 75%, transparent 100%)',
        }} />

        {/* Subtle glow — top right */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{
          width: 700, height: 500,
          background: 'radial-gradient(ellipse at top right, rgba(245,158,11,0.05) 0%, transparent 65%)',
        }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px rgba(74,222,128,0.6)' }} />
                <span className="text-amber-400/80 text-xs font-medium tracking-widest uppercase">Client Results</span>
              </div>
              <h2 className="text-white font-bold leading-[1.08] tracking-tight" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
                The numbers<br />
                <span className="text-amber-400">don't lie.</span>
              </h2>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs md:mb-1 md:text-right">
              Real clients. Real revenue.<br />
              No fabricated screenshots.
            </p>
          </div>

          {/* Top grid: featured case + mini result cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

            {/* Featured case — spans 2 cols */}
            <div
              className="lg:col-span-2 rounded-2xl p-8 flex flex-col justify-between min-h-[360px]"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(255,255,255,0.02) 60%)',
                border: '1px solid rgba(245,158,11,0.18)',
              }}
            >
              {/* Client header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-base flex-shrink-0">
                    S
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Sarah Chen</div>
                    <div className="text-white/35 text-xs mt-0.5">Founder, Luxe Consulting Group</div>
                  </div>
                </div>
                <div className="flex gap-0.5 flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Before / After metric blocks */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-5 py-4">
                  <div className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Before</div>
                  <div className="text-white/45 text-2xl font-bold">$380k</div>
                  <div className="text-white/20 text-xs mt-1">annual revenue · stuck 2 years</div>
                </div>
                <div className="rounded-xl px-5 py-4" style={{
                  background: 'rgba(245,158,11,0.06)',
                  border: '1px solid rgba(245,158,11,0.2)',
                }}>
                  <div className="text-amber-400/60 text-[10px] uppercase tracking-widest mb-2">After · 7 months</div>
                  <div className="text-amber-400 text-2xl font-bold">$1.4M</div>
                  <div className="text-amber-400/35 text-xs mt-1">annual revenue · still scaling</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-white/45 text-sm leading-relaxed italic border-l-2 border-amber-500/30 pl-4">
                "I came to Alex thinking I needed more clients. Turns out I needed to stop being the cheapest option in the room.
                Repriced everything, cut my client count in half, and tripled revenue. I genuinely didn't think that was possible."
              </blockquote>

              {/* Growth badge */}
              <div className="flex items-center gap-3 mt-6">
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(245,158,11,0.12)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}
                >
                  +268% revenue
                </div>
                <span className="text-white/20 text-xs">in 7 months</span>
              </div>
            </div>

            {/* Right column: stacked compact result cards */}
            <div className="flex flex-col gap-4">
              {[
                { initial: 'M', name: 'Marcus Webb', biz: 'Executive Coach', result: '+$220k', period: '5 months' },
                { initial: 'D', name: 'Diana Ross', biz: 'Agency Owner', result: '+410%', period: '9 months' },
                { initial: 'T', name: 'Tom Nguyen', biz: 'SaaS Founder', result: '$2.1M ARR', period: '12 months' },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] px-6 py-5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/15 flex items-center justify-center text-amber-400 font-bold text-sm flex-shrink-0">
                      {c.initial}
                    </div>
                    <div>
                      <div className="text-white/65 text-sm font-medium">{c.name}</div>
                      <div className="text-white/25 text-xs mt-0.5">{c.biz}</div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-amber-400 font-bold text-base">{c.result}</div>
                    <div className="text-white/25 text-xs mt-0.5">{c.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloomberg-terminal performance table */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">

            {/* Table header */}
            <div className="grid grid-cols-5 px-6 py-3 border-b border-white/[0.05]">
              {['CLIENT', 'INDUSTRY', 'STARTING REVENUE', 'RESULT', 'TIMELINE'].map((h) => (
                <div key={h} className="text-white/20 text-[10px] font-medium tracking-widest">{h}</div>
              ))}
            </div>

            {/* Table rows */}
            {[
              { name: 'Rachel Kim', industry: 'Life Coaching', start: '$95k / yr', result: '$520k / yr', time: '8 mo', growth: '+447%' },
              { name: 'James Okafor', industry: 'Real Estate', start: '$1.2M', result: '$3.8M', time: '11 mo', growth: '+217%' },
              { name: 'Priya Sharma', industry: 'HR Consulting', start: '$280k', result: '$740k', time: '6 mo', growth: '+164%' },
              { name: 'Luke Brennan', industry: 'Fitness Brand', start: '$60k / yr', result: '$390k / yr', time: '10 mo', growth: '+550%' },
            ].map((row, i, arr) => (
              <div
                key={row.name}
                className={`grid grid-cols-5 px-6 py-4 items-center hover:bg-white/[0.015] transition-colors ${i < arr.length - 1 ? 'border-b border-white/[0.04]' : ''}`}
              >
                <div className="text-white/60 text-sm font-medium">{row.name}</div>
                <div className="text-white/30 text-sm">{row.industry}</div>
                <div className="text-white/30 text-sm">{row.start}</div>
                <div className="text-white/70 text-sm font-semibold">{row.result}</div>
                <div className="flex items-center gap-2">
                  <span className="text-white/30 text-sm">{row.time}</span>
                  <span
                    className="px-2 py-0.5 rounded text-[11px] font-bold"
                    style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B' }}
                  >
                    {row.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          PRICING — The Investment
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#050505] pb-32 px-8">

        {/* Glowing amber divider */}
        <div className="w-full h-px mb-24" style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(245,158,11,0.15) 25%, rgba(245,158,11,0.35) 50%, rgba(245,158,11,0.15) 75%, transparent 100%)',
        }} />

        {/* Glow — center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
          width: 900, height: 500,
          background: 'radial-gradient(ellipse at top, rgba(245,158,11,0.06) 0%, transparent 65%)',
        }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/8 border border-amber-500/15 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-amber-400/80 text-xs font-medium tracking-widest uppercase">Investment</span>
              </div>
              <h2 className="text-white font-bold leading-[1.08] tracking-tight" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
                Not a cost.<br />
                <span className="text-amber-400">A capital decision.</span>
              </h2>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs md:mb-1 md:text-right">
              Every client below thought hard about this number.<br />
              None of them wish they'd waited longer.
            </p>
          </div>

          {/* ROI reframe bar */}
          <div
            className="rounded-xl px-7 py-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)' }}
          >
            <span className="text-amber-400/60 text-sm">Based on documented client averages across 200+ engagements</span>
            <div className="flex items-center gap-8 flex-shrink-0">
              {[
                { label: 'Avg. investment', value: '$15k' },
                { label: 'Avg. revenue added', value: '$340k' },
                { label: 'Avg. return', value: '3.4×' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div>
                    <div className="text-amber-400 font-bold text-base leading-none">{s.value}</div>
                    <div className="text-white/30 text-xs mt-1">{s.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-7 bg-amber-500/15" />}
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

            {/* Featured — Private Partnership — spans 2 cols */}
            <div
              className="lg:col-span-2 rounded-2xl p-9 flex flex-col"
              style={{
                background: 'linear-gradient(145deg, rgba(245,158,11,0.08) 0%, rgba(255,255,255,0.02) 55%)',
                border: '1px solid rgba(245,158,11,0.22)',
              }}
            >
              {/* Offer label + badge */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-amber-400/60 text-[10px] uppercase tracking-widest mb-2">Private Partnership</div>
                  <h3 className="text-white font-bold text-2xl tracking-tight">1:1 Coaching Program</h3>
                  <p className="text-white/35 text-sm mt-2">
                    For founders between $300k–$3M who are ready to stop guessing and start compounding.
                  </p>
                </div>
                <div
                  className="flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold ml-4"
                  style={{ background: 'rgba(245,158,11,0.15)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.3)' }}
                >
                  Most popular
                </div>
              </div>

              {/* What's included — prose lines with dividers */}
              <div className="flex-1 mb-9">
                {[
                  { title: '12 weekly 1:1 strategy sessions', detail: '90 min each. Recorded. Yours to keep.' },
                  { title: 'Full business & offer audit', detail: 'Week one. Nothing moves until this is done.' },
                  { title: 'Direct Slack access', detail: 'Async support between sessions — no waiting a week to unblock.' },
                  { title: '90-day revenue roadmap', detail: 'A prioritised plan with milestones, not a wishlist.' },
                  { title: 'Pricing & positioning overhaul', detail: 'The thing most coaches skip. The one that moves the needle most.' },
                ].map((item, i, arr) => (
                  <div key={item.title} className={`flex items-start gap-4 py-4 ${i < arr.length - 1 ? 'border-b border-white/[0.06]' : ''}`}>
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: '#F59E0B', boxShadow: '0 0 6px rgba(245,158,11,0.5)' }}
                    />
                    <div>
                      <div className="text-white/70 text-sm font-medium">{item.title}</div>
                      <div className="text-white/30 text-xs mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-white/[0.08]">
                <div>
                  <div className="text-white/25 text-xs uppercase tracking-widest mb-1">Investment</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white font-bold text-4xl tracking-tight">$18,000</span>
                    <span className="text-white/30 text-sm">or 3 × $6,500</span>
                  </div>
                  <div className="text-white/25 text-xs mt-1.5">Per 90-day engagement · renews only if you want to</div>
                </div>
                <button
                  className="px-8 py-3.5 rounded-full text-black font-semibold text-sm cursor-pointer flex-shrink-0 transition-all hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}
                >
                  Apply for a spot →
                </button>
              </div>
            </div>

            {/* Group Accelerator — right col */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col">
              <div className="mb-8">
                <div className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Group Program</div>
                <h3 className="text-white font-bold text-xl tracking-tight">The Accelerator</h3>
                <p className="text-white/30 text-sm mt-2 leading-relaxed">
                  For entrepreneurs at $100k–$500k who want the framework, the cohort, and the accountability — without the private rate.
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
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                    <span className="text-white/40 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="pt-6 border-t border-white/[0.07]">
                <div className="text-white/25 text-xs uppercase tracking-widest mb-1">Investment</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-white font-bold text-3xl tracking-tight">$4,500</span>
                  <span className="text-white/25 text-sm">/ cohort</span>
                </div>
                <div className="text-white/20 text-xs mb-5">Next cohort: April 14, 2026</div>
                <button className="w-full px-6 py-3 rounded-full border border-white/15 text-white/55 text-sm hover:border-white/25 hover:text-white/75 transition-all cursor-pointer">
                  Join the waitlist
                </button>
              </div>
            </div>
          </div>

          {/* Cost of doing nothing strip */}
          <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-px h-10 bg-white/[0.12] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white/50 text-sm font-medium">The cost of waiting another year</div>
                <div className="text-white/25 text-sm mt-0.5">
                  At your current trajectory, that's roughly $340k in unrealised revenue. This engagement costs $18k.
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-white/20 text-xs uppercase tracking-widest mb-1">Opportunity cost</div>
              <div className="text-white/60 font-bold text-xl">$322k net</div>
              <div className="text-white/20 text-xs mt-0.5">if you don't act</div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
