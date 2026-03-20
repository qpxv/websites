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
      <section className="relative overflow-hidden min-h-screen bg-[#0a0a0a] flex flex-col">

        {/* Red radial glow — bottom-left */}
        <div className="absolute bottom-0 right-0 pointer-events-none" style={{
          width: 900, height: 600,
          background: 'radial-gradient(ellipse at bottom right, rgba(220,38,38,0.12) 0%, transparent 65%)',
          filter: 'blur(2px)',
        }} />

        {/* Nav */}
        <nav className="max-w-7xl mx-auto w-full flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#dc2626] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-[10px] tracking-tight">MT</span>
            </div>
            <span className="text-white font-bold text-sm tracking-tight">Mike Torres</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/30">
            {[
              { label: 'The Method', href: '#solution' },
              { label: 'Process',    href: '#process' },
              { label: 'Results',    href: '#testimonials' },
              { label: 'Pricing',    href: '#pricing' },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-white/60 transition-colors duration-200">
                {label}
              </a>
            ))}
          </div>
          <button className="px-5 py-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold transition-colors duration-200 cursor-pointer">
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
                Eight years. 1,200 clients. I don&apos;t do a pitch — the results make the case.
                Either you&apos;re ready to commit, or you&apos;re not.
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
                  text: "You've run through every program that looked legit. Committed to each one. Made it about two weeks before nothing moved.",
                },
                {
                  n: '02',
                  text: "You're not eating garbage and you're not skipping sessions. So why the hell isn't anything changing?",
                },
                {
                  n: '03',
                  text: "You know more about programming theory than half the trainers at your gym. You're still stuck.",
                },
                {
                  n: '04',
                  text: "You're not lazy. You're not weak. You've just been doing things in the wrong order and no one's been straight with you about it.",
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
      <section id="solution" className="bg-[#0f0f0f] relative overflow-hidden">

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
              Not another program. A system that actually starts from where you are.
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
                body: "Every program out there assumes you're starting from the same place as everyone else. You're not. Before we build anything, we figure out exactly what's been getting in your way.",
                tag: 'Where you actually are',
              },
              {
                number: '02',
                label: 'Progressive Overload Built to You',
                body: "Most coaches apply the same overload schedule to everyone. Your recovery isn't the same as the person next to you. Your load adjusts to match your rate — not the other way around.",
                tag: 'How you actually grow',
              },
              {
                number: '03',
                label: 'Nutrition Timed to Training',
                body: "The calories can stay the same. What changes is when you eat them relative to when you train. That one adjustment changes everything downstream.",
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
                <span className="text-white/30">ONE ORDER. DON&apos;T SKIP STEPS.</span>
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
      <section id="testimonials" className="bg-[#0f0f0f] relative overflow-hidden">

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
                    Had 3 trainers before Mike. The difference isn&apos;t the workouts — it&apos;s
                    that he actually explains the why behind every decision he makes. I
                    stopped second-guessing everything and started actually understanding
                    what I was doing. That shift alone made it worth it.
                  </p>

                  {/* Client info row */}
                  <div className="flex items-center gap-5">
                    {/* Avatar */}
                    <div
                      className="flex-shrink-0 overflow-hidden"
                      style={{
                        width: 40,
                        height: 40,
                        border: '1px solid rgba(220,38,38,0.25)',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://randomuser.me/api/portraits/men/83.jpg" alt="Marcus D." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                photo: 'https://randomuser.me/api/portraits/men/32.jpg',
                name: 'Jordan R.',
                meta: 'In-person · 2022',
                quote: "down 22lbs and added 45 to my bench in the same 10 weeks. genuinely didn't think those two things could happen at the same time lol. they can",
                stat: '−22',
                unit: 'LBS',
                sub: '10 weeks',
              },
              {
                photo: 'https://randomuser.me/api/portraits/women/45.jpg',
                name: 'Priya S.',
                meta: 'Online coaching · 2024',
                quote: "ngl I was fully skeptical about the nutrition timing thing. then week 3 happened and I literally had nothing to say lmao",
                stat: '−19',
                unit: 'LBS',
                sub: '8 weeks',
              },
              {
                photo: 'https://randomuser.me/api/portraits/men/52.jpg',
                name: 'Alex T.',
                meta: 'In-person · 2023',
                quote: "Honestly the recalibration check-ins are worth the price alone. He spotted a plateau before I even knew it was coming.",
                stat: '+41',
                unit: 'LBS',
                sub: 'bench press',
              },
              {
                photo: 'https://randomuser.me/api/portraits/men/22.jpg',
                name: 'Daniel K.',
                meta: 'Online coaching · 2023',
                quote: "spent 6 months doing everything I thought was right and got basically nowhere. 8 weeks with Mike and I had abs for the first time in my actual life",
                stat: '−31',
                unit: 'LBS',
                sub: '12 weeks',
              },
              {
                photo: 'https://randomuser.me/api/portraits/women/68.jpg',
                name: 'Sofia C.',
                meta: 'In-person · 2024',
                quote: "came in just wanting to lose a few pounds, thats genuinely all. ended up actually understanding how my body works for the first time. the weight loss happened but thats honestly not even the main thing anymore",
                stat: '−26',
                unit: 'LBS',
                sub: '11 weeks',
              },
              {
                photo: 'https://randomuser.me/api/portraits/men/41.jpg',
                name: 'Ryan M.',
                meta: 'Online coaching · 2022',
                quote: "Every trainer I had before this gave me the same cookie-cutter plan with my name slapped on it. Mike's looked nothing like anything I'd ever seen. Knew from day one it was different.",
                stat: '+28',
                unit: 'LBS',
                sub: 'total muscle',
              },
              {
                photo: 'https://randomuser.me/api/portraits/women/29.jpg',
                name: 'Tara N.',
                meta: 'In-person · 2024',
                quote: "I was post-partum and genuinely scared to get back into training. He didn't rush me or compare me to anyone. Just met me where I was and built from there. That meant more than I expected.",
                stat: '−24',
                unit: 'LBS',
                sub: '14 weeks',
              },
              {
                photo: 'https://randomuser.me/api/portraits/men/55.jpg',
                name: 'Brandon W.',
                meta: 'Online coaching · 2023',
                quote: "3 weeks out of every month I'm traveling. every trainer before just said 'do what you can' and left it at that. Mike actually built the whole program around it. hotel gym, airport, wherever — it doesn't fall apart.",
                stat: '−17',
                unit: 'LBS',
                sub: '9 weeks',
              },
              {
                photo: 'https://randomuser.me/api/portraits/women/17.jpg',
                name: 'Lauren H.',
                meta: 'In-person · 2022',
                quote: "My last trainer literally had me on the same exact program for 7 months and never said a word about it. Mike changes mine every 4 weeks and I have not plateaued once since I started.",
                stat: '−29',
                unit: 'LBS',
                sub: '16 weeks',
              },
            ].map(({ photo, name, meta, quote, stat, unit, sub }) => (
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
                      className="flex-shrink-0 overflow-hidden"
                      style={{
                        width: 32,
                        height: 32,
                        border: '1px solid rgba(255,255,255,0.09)',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                <span className="text-white/30">SAME RESULT EVERY TIME.</span>
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
          TRANSITION — left-leaning slash, Testimonials → Pricing
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
          PRICING — transparent, no hidden fees
      ───────────────────────────────────────────────────────────────── */}
      <section id="pricing" className="bg-[#0a0a0a] relative overflow-hidden">

        {/* Top-right glow */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 700,
            height: 700,
            background: 'radial-gradient(ellipse at top right, rgba(220,38,38,0.10) 0%, transparent 65%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Ghost watermark */}
        <div
          aria-hidden="true"
          className={`${bebas.className} absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden`}
          style={{ paddingTop: '4rem' }}
        >
          <span
            className="text-white uppercase leading-none"
            style={{ fontSize: 'clamp(100px, 16vw, 220px)', opacity: 0.025, letterSpacing: '0.16em' }}
          >
            INVEST
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16 relative z-10">
            <span className="text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0">
              Investment
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Headline */}
          <div className="mb-16 relative z-10">
            <h2
              className={`${bebas.className} text-white leading-[0.9] tracking-wide mb-5`}
              style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
            >
              NO HIDDEN FEES.<br />
              NO FINE PRINT.<br />
              <span className="text-[#dc2626]">THE PRICE IS THE PRICE.</span>
            </h2>
            <p className="text-white/40 text-sm tracking-[0.15em] uppercase">
              Pick your format. Commit to the process.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 mb-10">

            {/* Online */}
            <div
              className="p-8 md:p-10"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase mb-6">Online Coaching</p>

              <div className="flex items-end gap-2 mb-2">
                <span
                  className={`${bebas.className} text-white leading-none`}
                  style={{ fontSize: 'clamp(56px, 6vw, 88px)' }}
                >
                  $297
                </span>
                <span className="text-white/30 text-sm mb-3">/mo</span>
              </div>
              <p className="text-white/25 text-xs font-mono tracking-wide mb-8">
                billed monthly · 3 month minimum
              </p>

              <div className="w-full h-px bg-white/[0.06] mb-8" />

              <ul className="flex flex-col gap-4 mb-10">
                {[
                  'Custom training plan',
                  'Progressive overload programming',
                  'Weekly 30-min check-in call',
                  'Nutrition timing protocol',
                  '4-week recalibration',
                  'Direct access to me',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div style={{ width: 4, height: 4, background: '#dc2626', flexShrink: 0 }} />
                    <span className="text-white/55 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3.5 border border-white/15 text-white/60 text-sm font-medium hover:border-white/30 hover:text-white/80 transition-all duration-200 cursor-pointer">
                Apply for Online
              </button>
            </div>

            {/* In-Person — featured */}
            <div
              className="p-8 md:p-10 relative"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                borderRight: '1px solid rgba(255,255,255,0.07)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                borderLeft: '2px solid #dc2626',
              }}
            >
              {/* Recommended tag */}
              <span className="absolute top-6 right-8 text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase">
                Recommended
              </span>

              <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase mb-6">In-Person · 1-on-1</p>

              <div className="flex items-end gap-2 mb-2">
                <span
                  className={`${bebas.className} text-[#dc2626] leading-none`}
                  style={{ fontSize: 'clamp(56px, 6vw, 88px)' }}
                >
                  $697
                </span>
                <span className="text-white/30 text-sm mb-3">/mo</span>
              </div>
              <p className="text-white/25 text-xs font-mono tracking-wide mb-8">
                billed monthly · 3 month minimum
              </p>

              <div className="w-full h-px bg-white/[0.06] mb-8" />

              <ul className="flex flex-col gap-4 mb-10">
                {[
                  'Everything in Online',
                  '3× weekly sessions (60–75 min)',
                  'Real-time form correction',
                  'Priority scheduling',
                  'Monthly body composition analysis',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div style={{ width: 4, height: 4, background: '#dc2626', flexShrink: 0 }} />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold transition-colors duration-200 cursor-pointer">
                Apply In-Person
              </button>
            </div>

          </div>

          {/* Trust note */}
          <p className="text-white/20 text-xs text-center tracking-wide relative z-10 mb-20">
            No long-term contracts after month 3 &nbsp;·&nbsp; Cancel with 30 days notice
          </p>

          {/* Bridge to CTA */}
          <div className="border-t border-white/[0.06] pt-10 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <p
                className={`${bebas.className} leading-tight tracking-wide`}
                style={{ fontSize: 'clamp(20px, 2.5vw, 34px)' }}
              >
                <span className="text-white/80">LIMITED SPOTS.</span><br />
                <span className="text-white/30">I DON&apos;T TAKE MORE THAN 20 CLIENTS.</span>
              </p>
              <div className="flex items-center gap-3 text-white/25 text-xs tracking-[0.2em] uppercase pb-1">
                <span>Apply now</span>
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
          TRANSITION — right-leaning slash, Pricing → CTA
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
          CTA — one action, no options
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] relative overflow-hidden">

        {/* Bottom-left glow — completes the diagonal path across sections */}
        <div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: 700,
            height: 600,
            background: 'radial-gradient(ellipse at bottom left, rgba(220,38,38,0.11) 0%, transparent 65%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Ghost watermark */}
        <div
          aria-hidden="true"
          className={`${bebas.className} absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden`}
        >
          <span
            className="text-white uppercase leading-none"
            style={{ fontSize: 'clamp(120px, 20vw, 280px)', opacity: 0.025, letterSpacing: '0.12em' }}
          >
            START
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 md:py-40 relative z-10">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0">
              Apply
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Headline — bigger than other h2s, this is the climax */}
          <h2
            className={`${bebas.className} text-white leading-[0.88] tracking-wide mb-10`}
            style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}
          >
            CLOSE THE TAB<br />
            OR<br />
            <span className="text-[#dc2626]">APPLY.</span>
          </h2>

          {/* Urgency line */}
          <p className="text-white/40 text-sm tracking-[0.15em] uppercase mb-14">
            3 spots remaining this month &nbsp;·&nbsp; Response within 24 hours
          </p>

          {/* The one button */}
          <div className="mb-14">
            <button className="inline-flex items-center gap-3 px-10 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-base transition-colors duration-200 cursor-pointer">
              Apply for Coaching
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust micro-copy */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {[
              "No commitment before the intake call",
              "30 minutes · no fluff",
              "If I can't help you, I'll say so",
            ].map((line) => (
              <div key={line} className="flex items-center gap-2">
                <div style={{ width: 3, height: 3, background: 'rgba(220,38,38,0.5)', flexShrink: 0 }} />
                <span className="text-white/30 text-xs tracking-wide">{line}</span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          TRANSITION — left-leaning slash, CTA → FAQs
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
          FAQs — kill the last objections
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] relative overflow-hidden">

        {/* Right-center glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-32 pointer-events-none"
          style={{
            width: 600,
            height: 800,
            background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.07) 0%, transparent 65%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Ghost watermark */}
        <div
          aria-hidden="true"
          className={`${bebas.className} absolute inset-0 flex items-start justify-center pointer-events-none select-none overflow-hidden`}
          style={{ paddingTop: '4rem' }}
        >
          <span
            className="text-white uppercase leading-none"
            style={{ fontSize: 'clamp(100px, 15vw, 200px)', opacity: 0.025, letterSpacing: '0.16em' }}
          >
            DOUBT
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16 relative z-10">
            <span className="text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0">
              FAQs
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Headline */}
          <div className="mb-16 relative z-10">
            <h2
              className={`${bebas.className} text-white leading-[0.9] tracking-wide`}
              style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
            >
              EVERY OBJECTION<br />
              ANSWERED<br />
              <span className="text-[#dc2626]">HONESTLY.</span>
            </h2>
          </div>

          {/* FAQ accordion — native details/summary, no JS needed */}
          <div className="relative z-10 max-w-3xl">
            {[
              {
                q: 'How quickly will I see results?',
                a: "Most people feel a difference in energy and recovery within the first two weeks. Visible changes usually start showing up around week 4–6. By week 12, you're not asking yourself if it's working anymore.",
              },
              {
                q: "I've tried programs before and nothing stuck. What's different?",
                a: "Generic programs fail because they're built for an average person that doesn't actually exist. I start from your real starting point — your history, your recovery, how your body has been responding. There's no template. The plan is built for you.",
              },
              {
                q: 'How much time do I need to commit each week?',
                a: "Online: 4–5 hours of training per week. In-person: 3 sessions, 60–75 minutes each. The nutrition side doesn't add time to your week — it just changes when, within your existing routine, you eat.",
              },
              {
                q: 'Is online coaching as effective as training in-person?',
                a: "For most people, yes — if your form is solid and you're honest with yourself about accountability. Online is how I work with clients in 14 countries. If you've genuinely never trained before, in-person is the better place to start.",
              },
              {
                q: 'What if I travel a lot or have an unpredictable schedule?',
                a: "Some of my longest-running clients are on the road constantly. Your plan adapts to whatever you have access to — hotel gym, bodyweight, full commercial gym. The whole point is it works in the real world, not some ideal version of it.",
              },
              {
                q: 'Is there a money-back guarantee?',
                a: "No. A refund policy is a magnet for people who aren't actually committed — and those people don't get results anyway. What I offer instead is a free 30-minute intake call before you spend anything. If I don't think I can help you, I'll tell you. I've done it. I'll do it again.",
              },
              {
                q: "How do I know if I'm ready for this?",
                a: "If you've been at it for 6+ months and still can't explain why you're not progressing — you're ready. If you want a quick fix or a 6-week transformation, this isn't it. This is for people who want to understand how their body works and build something that lasts.",
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group border-b border-white/[0.07]">
                <summary className="flex items-center justify-between py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span
                    className={`${bebas.className} text-white/65 group-open:text-white tracking-wide transition-colors duration-200 pr-6`}
                    style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}
                  >
                    {q}
                  </span>
                  <span
                    className="text-[#dc2626] text-xl font-light flex-shrink-0 group-open:rotate-45 transition-transform duration-200 leading-none"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-8 pr-10">
                  <p className="text-white/45 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-8 pt-16 pb-24">

          {/* Top row — logo + nav */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 mb-14">

            {/* Logo + tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#dc2626] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xs tracking-tight">MT</span>
                </div>
                <span className="text-white font-bold text-sm tracking-tight">Mike Torres</span>
              </div>
              <p className="text-white/25 text-sm leading-relaxed max-w-xs">
                Stop guessing. Start training.<br />
                Certified strength coach · 8 years · 1,200 clients.
              </p>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-3 md:items-end">
              {['Programs', 'Transformations', 'Nutrition', 'About', 'Book a Session'].map((link) => (
                <span
                  key={link}
                  className="text-white/30 text-sm hover:text-white/60 transition-colors duration-200 cursor-pointer"
                >
                  {link}
                </span>
              ))}
            </nav>
          </div>

          {/* Divider with red center pip */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <div style={{ width: 4, height: 4, background: '#dc2626' }} />
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Bottom row — copyright + links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white/20 text-xs tracking-wide">
              © 2025 Mike Torres Coaching · All rights reserved
            </p>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', '@miketorresfit'].map((item) => (
                <span
                  key={item}
                  className="text-white/20 text-xs hover:text-white/40 transition-colors duration-200 cursor-pointer tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </footer>


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
