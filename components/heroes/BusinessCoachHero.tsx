export default function BusinessCoachHero() {
  return (
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
  );
}
