import { ArrowRight } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function FitnessCoachHero() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex flex-col">

      {/* Nav */}
      <nav className="max-w-7xl mx-auto w-full flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#000000] flex items-center justify-center flex-shrink-0">
            <span className="text-black font-black text-[10px] tracking-tight">MT</span>
          </div>
          <span className="text-black font-bold text-sm tracking-tight">Mike Torres</span>
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

        {/* Label */}
        <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-10">
          Certified Strength & Conditioning Coach — Since 8 years
        </p>

        {/* Headline — left-aligned, no gradient text */}
        <h1 className={`${bebas.className} uppercase leading-[0.88] tracking-wide text-white mb-10`}
          style={{ fontSize: 'clamp(64px, 11vw, 128px)' }}>
          I DON&apos;T<br />
          TRAIN<br />
          <span className="text-[#dc2626]">BEGINNERS</span>
        </h1>

        {/* Rule */}
        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Two-col: copy + stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: copy + CTAs */}
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

          {/* Right: stats — editorial, not decorative */}
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

      {/* Bottom strip */}
      <div className="border-t border-white/[0.06] max-w-7xl mx-auto w-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
          <span className="text-white/30 text-xs tracking-wide">Currently accepting clients</span>
        </div>
        <span className="text-white/20 text-xs">★★★★★ — 200+ reviews on Google</span>
      </div>

    </section>
  );
}
