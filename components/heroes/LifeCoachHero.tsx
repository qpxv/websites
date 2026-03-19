export default function LifeCoachHero() {
  return (
    <section className="min-h-screen bg-[#090f0e] flex flex-col relative overflow-hidden">
      {/* Background teal glow */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-[-100px] left-[-60px] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.04) 0%, transparent 65%)' }}
      />

      {/* Nav */}
      <nav className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-teal-500/30 flex items-center justify-center">
            <span className="text-teal-400 font-bold text-xs">E</span>
          </div>
          <span className="text-white font-medium text-sm">Emma Dawson</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/35">
          {['My Story', 'Coaching', 'Podcast', 'Resources', 'Contact'].map((item) => (
            <span key={item} className="hover:text-white/60 cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>
        <button className="px-5 py-2 rounded-full border border-teal-500/25 text-teal-400/80 text-sm hover:bg-teal-500/8 hover:border-teal-500/40 transition-all cursor-pointer">
          Schedule a Chat
        </button>
      </nav>

      {/* Main content — left-aligned */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left */}
          <div>
            {/* Decorative quote mark */}
            <div
              className="text-8xl font-serif leading-none mb-2 select-none"
              style={{ color: 'rgba(20,184,166,0.15)', lineHeight: 1 }}
            >
              &ldquo;
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/8 border border-teal-500/15 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span className="text-teal-400/70 text-xs font-medium tracking-widest uppercase">
                Certified Life & Wellness Coach
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Design the Life
              <br />
              You Were{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #5eead4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Born to Live.
              </span>
            </h1>

            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-lg">
              You know there&apos;s more. I help you get clear on what you actually want —
              and give you the tools, support, and accountability to build it.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <button
                className="px-8 py-3.5 rounded-full text-[#090f0e] font-semibold text-sm cursor-pointer hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #5eead4)' }}
              >
                Book Free Consultation
              </button>
              <button className="px-8 py-3.5 rounded-full border border-white/[0.08] text-white/45 text-sm hover:border-white/15 hover:text-white/65 transition-all cursor-pointer">
                My approach →
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-5">
              {[
                { icon: '✓', text: '300+ lives transformed' },
                { icon: '✓', text: 'ICF Certified' },
                { icon: '✓', text: '5★ rated on Google' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-teal-400 text-xs font-bold">{item.icon}</span>
                  <span className="text-white/35 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacked cards */}
          <div className="flex flex-col gap-4">
            {/* Main offer card */}
            <div className="rounded-2xl bg-white/[0.025] border border-white/[0.07] p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  Signature Program
                </span>
                <span className="text-teal-400/60 text-xs bg-teal-500/8 border border-teal-500/12 px-2.5 py-1 rounded-full">
                  12 weeks
                </span>
              </div>
              <div className="text-white text-xl font-bold mb-2">The Clarity Blueprint</div>
              <p className="text-white/35 text-sm leading-relaxed mb-5">
                A guided 12-week experience to uncover your values, design your vision, and build the habits
                that actually stick.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Weekly 1:1 sessions', 'Workbooks & tools', 'Accountability check-ins', 'Lifetime community'].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/40 text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof mini cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #14b8a6, #5eead4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  300+
                </div>
                <div className="text-white/30 text-xs leading-tight">Clients who redesigned their lives</div>
              </div>
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #14b8a6, #5eead4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  8yr
                </div>
                <div className="text-white/30 text-xs leading-tight">Coaching & psychology background</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
