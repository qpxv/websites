import { ArrowRight } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';

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
