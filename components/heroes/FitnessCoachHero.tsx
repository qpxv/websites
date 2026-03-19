import { ArrowRight } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';
import ProcessSection from '@/components/heroes/fitness/ProcessSection';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function FitnessCoachHero() {
  return (
    <>

      {/* ─────────────────────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-[#0a0a0a] flex flex-col">

        {/* Nav */}
        <nav className="max-w-7xl mx-auto w-full flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#dc2626] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-[10px] tracking-tight">MT</span>
            </div>
            <span className="text-white font-bold text-sm tracking-tight">Mike Torres</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/35">
            {['Programs', 'Transformations', 'Nutrition', 'About'].map((item) => (
              <span key={item} className="hover:text-white/65 cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
          <button className="px-5 py-2 border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all cursor-pointer">
            Book a Session
          </button>
        </nav>

        {/* Main */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-8 py-12">

          <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-10">
            Certified Strength &amp; Conditioning Coach — 8 years
          </p>

          <h1
            className={`${bebas.className} uppercase leading-[0.88] tracking-wide text-white mb-10`}
            style={{ fontSize: 'clamp(64px, 11vw, 128px)' }}
          >
            I DON&apos;T<br />
            TRAIN<br />
            <span className="text-[#dc2626]">BEGINNERS.</span>
          </h1>

          <div className="w-full h-px bg-white/10 mb-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-md">
                I create athletes. Eight years, 1,200 clients, a track record that doesn&apos;t
                need a sales page. Either you&apos;re ready to commit — or you&apos;re not.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-7 py-3.5 bg-[#dc2626] text-white font-bold text-sm hover:bg-[#b91c1c] transition-colors cursor-pointer">
                  Book a Session
                </button>
                <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/60 text-sm hover:border-white/30 hover:text-white/80 transition-all cursor-pointer">
                  See Transformations <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                { value: '1,200', label: 'Clients trained' },
                { value: '94%', label: 'Still training after 1yr' },
                { value: '8yr', label: 'In the industry' },
                { value: 'NSCA', label: 'Certified' },
              ].map((stat) => (
                <div key={stat.value} className="border-t border-white/10 pt-4">
                  <div className={`${bebas.className} text-white text-3xl tracking-wide`}>{stat.value}</div>
                  <div className="text-white/40 text-xs mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────────────
          PROBLEM — agitate the pain
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0">
              The Problem
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Split: headline left / pain points right */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start mb-20">

            {/* Left: confrontational headline */}
            <div>
              <h2
                className={`${bebas.className} text-white leading-[0.9] tracking-wide`}
                style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
              >
                WHY YOU&apos;RE<br />
                STILL WHERE<br />
                YOU STARTED.
              </h2>
            </div>

            {/* Right: pain points */}
            <div className="flex flex-col gap-8">
              {[
                {
                  n: '01',
                  text: "You've followed every program you found online. Each one worked for exactly two weeks.",
                },
                {
                  n: '02',
                  text: "You eat well enough. You train hard enough. You still can't explain why nothing's moving.",
                },
                {
                  n: '03',
                  text: "You've watched more YouTube tutorials than most trainers watch in their entire career.",
                },
                {
                  n: '04',
                  text: "You're not lazy. You're not weak. You're doing things in the wrong order — and nobody's been honest enough to tell you that.",
                },
              ].map(({ n, text }) => (
                <div key={n} className="flex gap-6 items-start">
                  <span
                    className={`${bebas.className} text-[#dc2626] leading-none flex-shrink-0`}
                    style={{ fontSize: 'clamp(28px, 2.5vw, 40px)' }}
                  >
                    {n}
                  </span>
                  <p className="text-white/65 text-base leading-relaxed pt-1">{text}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Closing hook — bridge to solution */}
          <div className="border-t border-white/10 pt-10 pb-16">
            <p
              className={`${bebas.className} tracking-wide`}
              style={{ fontSize: 'clamp(22px, 2.8vw, 38px)' }}
            >
              <span className="text-white">THAT&apos;S NOT A MOTIVATION PROBLEM.</span>
              {'  '}
              <span className="text-white/30">THAT&apos;S A SYSTEM PROBLEM.</span>
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          TRANSITION — diagonal slash, Problem → Solution
      ───────────────────────────────────────────────────────────────── */}
      <div className="bg-[#0a0a0a]">
        <div
          className="w-full pointer-events-none"
          style={{
            height: 80,
            background: '#0f0f0f',
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
          }}
        />
      </div>


      {/* ─────────────────────────────────────────────────────────────────
          SOLUTION TEASER — The MT Method
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] relative overflow-hidden">

        {/* Red radial ellipse glow — top center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 1000,
            height: 520,
            background: 'radial-gradient(ellipse at top, rgba(220,38,38,0.13) 0%, transparent 65%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Ghost watermark — "SYSTEM" echoing the Problem bridge line */}
        <div
          aria-hidden="true"
          className={`${bebas.className} absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden`}
          style={{ paddingTop: '5rem' }}
        >
          <span
            className="text-white uppercase leading-none"
            style={{
              fontSize: 'clamp(120px, 18vw, 260px)',
              opacity: 0.028,
              letterSpacing: '0.14em',
            }}
          >
            SOLUTION
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16 relative z-10">
            <span className="text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0">
              The Solution
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Headline + subhead */}
          <div className="mb-20 relative z-10">
            <h2
              className={`${bebas.className} text-white leading-[0.9] tracking-wide mb-5`}
              style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
            >
              THE MT METHOD.<br />
              THREE CHANGES.<br />
              <span className="text-[#dc2626]">PERMANENT RESULTS.</span>
            </h2>
            <p className="text-white/40 text-sm tracking-[0.15em] uppercase">
              Not a program. A precision system built around your biology.
            </p>
          </div>

          {/* Three-column pillar grid — gap-px bleeds through as dividers */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 relative z-10 mb-20"
            style={{
              gap: '1px',
              background: 'rgba(255,255,255,0.06)',
            }}
          >
            {[
              {
                number: '01',
                label: 'Biological Baseline',
                body: "Most programs ignore your starting biology. Before anything else, we identify exactly why your metabolism, recovery, and hormonal environment have been working against you.",
                tag: 'Where you actually are',
              },
              {
                number: '02',
                label: 'Progressive Overload Built to You',
                body: "Not textbook progression. Your recovery rate determines your training load — not the other way around. You stop breaking down and start building up.",
                tag: 'How you actually grow',
              },
              {
                number: '03',
                label: 'Nutrition Timed to Training',
                body: "Generic macros don't exist in the MT Method. Your food timing is mapped to your training windows. Eat the same calories. Get completely different results.",
                tag: 'Why the food finally works',
              },
            ].map(({ number, label, body, tag }) => (
              <div key={number} className="bg-[#0f0f0f] px-8 py-10 flex flex-col gap-6">

                {/* Pillar number */}
                <span
                  className={`${bebas.className} text-[#dc2626] leading-none`}
                  style={{ fontSize: 'clamp(36px, 3vw, 52px)' }}
                >
                  {number}
                </span>

                {/* Pillar name + split rule + body */}
                <div className="flex flex-col gap-4 flex-1">
                  <h3
                    className={`${bebas.className} text-white tracking-wide leading-tight`}
                    style={{ fontSize: 'clamp(22px, 2vw, 30px)' }}
                  >
                    {label}
                  </h3>

                  {/* Split rule — red pip + white fade (new element) */}
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-px bg-[#dc2626]" />
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                </div>

                {/* Bottom purpose tag — anchors to bottom of card */}
                <div className="pt-6 border-t border-white/[0.07] mt-auto">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">
                    {tag}
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Bridge to Process section */}
          <div className="border-t border-white/[0.06] pt-10 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">

              <p
                className={`${bebas.className} leading-tight tracking-wide`}
                style={{ fontSize: 'clamp(20px, 2.5vw, 34px)' }}
              >
                <span className="text-white/80">THREE PILLARS.</span><br />
                <span className="text-white/30">ONE PRECISE SEQUENCE.</span>
              </p>

              <div className="flex items-center gap-3 text-white/25 text-xs tracking-[0.2em] uppercase pb-1">
                <span>How it works</span>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-px bg-white/20" />
                  <div className="w-2 h-px bg-[#dc2626]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          TRANSITION — reverse diagonal slash, Solution → Process
      ───────────────────────────────────────────────────────────────── */}
      <div className="bg-[#0f0f0f]">
        <div
          className="w-full pointer-events-none"
          style={{
            height: 80,
            background: '#0a0a0a',
            clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
          }}
        />
      </div>


      {/* ─────────────────────────────────────────────────────────────────
          PROCESS — The MT Method sequence
      ───────────────────────────────────────────────────────────────── */}
      <ProcessSection />


      {/* ─────────────────────────────────────────────────────────────────
          TRANSITION — right-leaning slash, Process → Testimonials
      ───────────────────────────────────────────────────────────────── */}
      <div className="bg-[#0a0a0a]">
        <div
          className="w-full pointer-events-none"
          style={{
            height: 80,
            background: '#0f0f0f',
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
          }}
        />
      </div>


      {/* ─────────────────────────────────────────────────────────────────
          TESTIMONIALS — Real results, real names
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] relative overflow-hidden">

        {/* Bottom-right red glow — third unique glow position across the page */}
        <div
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: 700,
            height: 700,
            background: 'radial-gradient(ellipse at bottom right, rgba(220,38,38,0.09) 0%, transparent 65%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Ghost watermark — "RESULTS" */}
        <div
          aria-hidden="true"
          className={`${bebas.className} absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden`}
          style={{ paddingTop: '4rem' }}
        >
          <span
            className="text-white uppercase leading-none"
            style={{
              fontSize: 'clamp(100px, 16vw, 220px)',
              opacity: 0.025,
              letterSpacing: '0.16em',
            }}
          >
            RESULTS
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16 relative z-10">
            <span className="text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0">
              Transformations
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Headline */}
          <div className="mb-16 relative z-10">
            <h2
              className={`${bebas.className} text-white leading-[0.9] tracking-wide`}
              style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
            >
              THEY CAME IN<br />
              SKEPTICAL.<br />
              <span className="text-[#dc2626]">THEY LEFT WITH RECEIPTS.</span>
            </h2>
          </div>

          {/* ── Featured testimonial ──────────────────────────────────── */}
          <div
            className="relative z-10 mb-px bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              borderRight: '1px solid rgba(255,255,255,0.07)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              borderLeft: '2px solid #dc2626',
            }}
          >
            {/* Decorative ghost quote mark */}
            <div
              aria-hidden="true"
              className={`${bebas.className} absolute top-6 left-8 leading-none pointer-events-none select-none`}
              style={{
                fontSize: 'clamp(80px, 10vw, 140px)',
                color: 'rgba(220,38,38,0.06)',
                lineHeight: 1,
              }}
            >
              &ldquo;
            </div>

            <div className="p-10 md:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 items-end">

                {/* Quote */}
                <div>
                  <p
                    className="text-white/80 leading-relaxed mb-10 relative z-10"
                    style={{ fontSize: 'clamp(16px, 1.6vw, 22px)' }}
                  >
                    I&apos;ve hired three trainers before Mike. The difference isn&apos;t the
                    workouts — it&apos;s that he explains <em>why</em> every decision is made.
                    I stopped guessing and started understanding my own body. That shift
                    alone is worth every dollar.
                  </p>

                  {/* Client info row */}
                  <div className="flex items-center gap-5">
                    {/* Monogram avatar — new element */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        background: 'rgba(220,38,38,0.12)',
                        border: '1px solid rgba(220,38,38,0.25)',
                      }}
                    >
                      <span className="text-[#dc2626] text-xs font-bold tracking-wider">MD</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Marcus D.</div>
                      <div className="text-white/35 text-xs tracking-wide mt-0.5">Client since 2023 · Online coaching</div>
                    </div>
                  </div>
                </div>

                {/* Result stat callout — new element */}
                <div
                  className="lg:border-l lg:border-white/[0.07] lg:pl-12 flex flex-col gap-1"
                >
                  <div
                    className={`${bebas.className} text-[#dc2626] leading-none`}
                    style={{ fontSize: 'clamp(44px, 4.5vw, 68px)' }}
                  >
                    −38
                    <span className="text-[0.45em] tracking-wider"> LBS</span>
                  </div>
                  <div className="text-white/35 text-xs tracking-[0.15em] uppercase">14 weeks</div>
                  <div className="mt-3 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#dc2626] text-xs">★</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Supporting testimonials — gap-px grid ────────────────── */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 relative z-10 mb-20"
            style={{
              gap: '1px',
              background: 'rgba(255,255,255,0.06)',
            }}
          >
            {[
              {
                initials: 'JR',
                name: 'Jordan R.',
                meta: 'In-person · 2022',
                quote: "Down 22 lbs and my bench went up 45 lbs. I thought those two things couldn't happen at the same time. Apparently they can.",
                stat: '−22',
                unit: 'LBS',
                sub: '10 weeks',
              },
              {
                initials: 'PS',
                name: 'Priya S.',
                meta: 'Online coaching · 2024',
                quote: "I was deeply skeptical about the nutrition timing piece. Then week three happened and I completely stopped being skeptical.",
                stat: '−19',
                unit: 'LBS',
                sub: '8 weeks',
              },
              {
                initials: 'AT',
                name: 'Alex T.',
                meta: 'In-person · 2023',
                quote: "The recalibration calls alone are worth the price. He caught a plateau before I even noticed it.",
                stat: '+41',
                unit: 'LBS',
                sub: 'bench press',
              },
              {
                initials: 'DK',
                name: 'Daniel K.',
                meta: 'Online coaching · 2023',
                quote: "Six months of spinning my wheels on my own. Eight weeks with Mike and I had abs for the first time in my adult life.",
                stat: '−31',
                unit: 'LBS',
                sub: '12 weeks',
              },
              {
                initials: 'SC',
                name: 'Sofia C.',
                meta: 'In-person · 2024',
                quote: "I came in wanting to lose weight. I left understanding how my body actually works. The weight loss was almost secondary.",
                stat: '−26',
                unit: 'LBS',
                sub: '11 weeks',
              },
              {
                initials: 'RM',
                name: 'Ryan M.',
                meta: 'Online coaching · 2022',
                quote: "Every trainer I had before gave me the same generic plan. Mike's plan looked nothing like anything I'd seen. That's when I knew.",
                stat: '+28',
                unit: 'LBS',
                sub: 'total muscle',
              },
              {
                initials: 'TN',
                name: 'Tara N.',
                meta: 'In-person · 2024',
                quote: "I was post-partum and terrified of getting back into training. He rebuilt my baseline from zero without ever making me feel behind.",
                stat: '−24',
                unit: 'LBS',
                sub: '14 weeks',
              },
              {
                initials: 'BW',
                name: 'Brandon W.',
                meta: 'Online coaching · 2023',
                quote: "I travel 3 weeks a month. He built a system that doesn't fall apart when I'm in a hotel gym. First coach who actually solved that problem.",
                stat: '−17',
                unit: 'LBS',
                sub: '9 weeks',
              },
              {
                initials: 'LH',
                name: 'Lauren H.',
                meta: 'In-person · 2022',
                quote: "My previous trainer had me doing the same workout for 7 months. Mike changed my program every 4 weeks and I never stopped progressing.",
                stat: '−29',
                unit: 'LBS',
                sub: '16 weeks',
              },
            ].map(({ initials, name, meta, quote, stat, unit, sub }) => (
              <div key={name} className="group bg-[#0f0f0f] hover:bg-[#161616] transition-colors duration-200 px-8 py-10 flex flex-col gap-6">

                {/* Quote */}
                <p className="text-white/50 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>

                {/* Divider — split rule, same as Solution pillars */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-[#dc2626]" />
                  <div className="flex-1 h-px bg-white/08" />
                </div>

                {/* Bottom row: avatar + name left, stat right */}
                <div className="flex items-end justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: 32,
                        height: 32,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.09)',
                      }}
                    >
                      <span className="text-white/40 text-[10px] font-bold tracking-wide">{initials}</span>
                    </div>
                    <div>
                      <div className="text-white/75 text-xs font-semibold">{name}</div>
                      <div className="text-white/25 text-[10px] tracking-wide mt-0.5">{meta}</div>
                    </div>
                  </div>

                  {/* Compact stat */}
                  <div className="text-right flex-shrink-0">
                    <div
                      className={`${bebas.className} text-[#dc2626] leading-none`}
                      style={{ fontSize: 'clamp(22px, 2.2vw, 32px)' }}
                    >
                      {stat}
                      <span className="text-[0.55em] tracking-wide"> {unit}</span>
                    </div>
                    <div className="text-white/25 text-[10px] tracking-[0.12em] uppercase mt-0.5">{sub}</div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bridge to Pricing */}
          <div className="border-t border-white/[0.06] pt-10 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <p
                className={`${bebas.className} leading-tight tracking-wide`}
                style={{ fontSize: 'clamp(20px, 2.5vw, 34px)' }}
              >
                <span className="text-white/80">1,200 CLIENTS.</span><br />
                <span className="text-white/30">ONE CONSISTENT RESULT.</span>
              </p>
              <div className="flex items-center gap-3 text-white/25 text-xs tracking-[0.2em] uppercase pb-1">
                <span>Investment</span>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-px bg-white/20" />
                  <div className="w-2 h-px bg-[#dc2626]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          FIXED FOOTER BAR — always visible at bottom of viewport
      ───────────────────────────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.06]"
        style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
            <span className="text-white/40 text-xs tracking-wide">Currently accepting clients</span>
          </div>
          <span className="text-white/25 text-xs">★★★★★ — 200+ reviews on Google</span>
        </div>
      </div>

    </>
  );
}
