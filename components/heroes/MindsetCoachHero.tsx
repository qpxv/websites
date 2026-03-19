export default function MindsetCoachHero() {
  return (
    <section className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">S</span>
          </div>
          <span className="text-gray-900 font-semibold text-sm">Sarah Chen</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {['About', 'Method', 'Stories', 'Blog', 'Work with Me'].map((item) => (
            <span key={item} className="hover:text-gray-600 cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>
        <button className="px-5 py-2 rounded-full border border-violet-200 text-violet-600 text-sm hover:bg-violet-50 transition-colors cursor-pointer">
          Free Discovery Call
        </button>
      </nav>

      {/* Main — centered layout */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-16 max-w-4xl mx-auto w-full">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span className="text-violet-500 text-xs font-semibold tracking-widest uppercase">
            Mindset & Transformation Coach
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
          Your Mind Is Your
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Greatest Asset.
          </span>
        </h1>

        <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
          I guide high-achievers through the mental shifts that unlock their next level —
          in business, relationships, and life. No toxic positivity. Just real transformation.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button
            className="px-8 py-3.5 rounded-full text-white font-semibold text-sm cursor-pointer hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)' }}
          >
            Begin Your Journey
          </button>
          <button className="px-8 py-3.5 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-sm hover:border-gray-300 hover:text-gray-700 transition-all cursor-pointer">
            Hear from clients →
          </button>
        </div>

        {/* Divider with trust */}
        <div className="w-full border-t border-gray-100 pt-10">
          <p className="text-gray-300 text-xs font-medium tracking-widest uppercase mb-6">
            Featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Forbes', 'Entrepreneur', 'Inc.', 'Psychology Today', 'Mindful'].map((pub) => (
              <span key={pub} className="text-gray-300 font-semibold text-sm tracking-tight">{pub}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating testimonial cards */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              quote: '"I finally broke through the self-sabotage patterns that held me back for years."',
              name: 'Rachel T.',
              role: 'Entrepreneur',
            },
            {
              quote: '"Sarah helped me go from burnout to building a life I&apos;m actually excited about."',
              name: 'David K.',
              role: 'Executive Coach',
            },
            {
              quote: '"The clarity I got in 6 weeks was worth more than years of therapy."',
              name: 'Priya M.',
              role: 'Marketing Director',
            },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed italic mb-3">{t.quote}</p>
              <div>
                <div className="text-gray-700 text-xs font-semibold">{t.name}</div>
                <div className="text-gray-300 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
