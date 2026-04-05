export default function Page() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Grid layer — masked out in the center, visible at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(180, 185, 210, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 185, 210, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, black 80%)",
        }}
      />

      {/* Blue radial glow — top left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 65% at -5% -5%, rgba(55, 98, 227, 0.13) 0%, transparent 65%)",
        }}
      />

      {/* ── Floating Navbar ──────────────────────────────────────── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <div
          className="flex items-center justify-between px-5 py-3 rounded-2xl border border-border"
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            boxShadow: "0 4px 24px rgba(55, 98, 227, 0.07), 0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "var(--blue)" }}
            >
              B
            </div>
            <span className="font-semibold text-sm text-foreground">BenWinzer</span>
          </div>

          {/* Nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-7">
            {["Work", "Services", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-text hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="text-sm font-medium text-white px-4 py-2 rounded-xl transition-all"
            style={{
              background: "var(--blue)",
              boxShadow: "0 2px 12px rgba(55, 98, 227, 0.35)",
            }}
          >
            Book a call
          </a>
        </div>
      </nav>

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative z-10 min-h-screen flex items-center px-6 pt-24 pb-16">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy + CTAs */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium"
              style={{
                background: "rgba(55, 98, 227, 0.08)",
                color: "var(--blue)",
                border: "1px solid rgba(55, 98, 227, 0.18)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--blue)" }}
              />
              Available for new projects
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Websites that turn{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                followers
              </span>{" "}
              into booked calls
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-muted-text leading-relaxed mb-10 max-w-md">
              Premium websites built specifically for coaches. Designed to convert your audience
              into paying clients — not just look good.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--blue)",
                  boxShadow: "0 4px 20px rgba(55, 98, 227, 0.4)",
                }}
              >
                Book a free strategy call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-foreground border border-border bg-white/70 transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
              >
                See my work
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-3 mt-10">
              <div className="flex -space-x-2">
                {["#3762e3", "#6b8ff7", "#a5b8fa", "#c7d3fc"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ background: color }}
                  >
                    {["JK", "SL", "MR", "AH"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-muted-text">
                  <span className="font-semibold text-foreground">40+ coaches</span> already converted
                </p>
              </div>
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow behind mockup */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 60% 40%, var(--blue) 0%, transparent 70%)" }}
            />

            {/* Browser window */}
            <div
              className="relative w-full max-w-[520px] rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(55, 98, 227, 0.15)",
                boxShadow: "0 24px 64px rgba(55, 98, 227, 0.12), 0 4px 16px rgba(0,0,0,0.08)",
                background: "#fff",
              }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ background: "#f8f9fc", borderColor: "rgba(55, 98, 227, 0.1)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div
                  className="flex-1 mx-3 px-3 py-1 rounded-md text-[11px] text-muted-text text-center"
                  style={{ background: "#eef0f7" }}
                >
                  yourcoachsite.com
                </div>
              </div>

              {/* Fake page content */}
              <div className="p-5 space-y-4" style={{ background: "#fafbff" }}>
                {/* Hero stripe */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)",
                  }}
                >
                  <div className="w-28 h-2.5 rounded-full bg-white/40 mb-2" />
                  <div className="w-44 h-4 rounded-full bg-white/70 mb-3" />
                  <div className="w-20 h-7 rounded-lg bg-white/90" />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Clients", value: "142" },
                    { label: "Revenue", value: "$84k" },
                    { label: "Conv. rate", value: "38%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl p-3 flex flex-col"
                      style={{ background: "#fff", border: "1px solid var(--border)" }}
                    >
                      <span className="text-[10px] text-muted-text mb-1">{stat.label}</span>
                      <span className="text-base font-bold" style={{ color: "var(--blue)" }}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Testimonial card */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: "#fff", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ background: "var(--blue)" }}
                    >
                      JK
                    </div>
                    <div>
                      <div className="w-16 h-2 rounded-full bg-foreground/20" />
                      <div className="w-10 h-1.5 rounded-full bg-muted mt-1" />
                    </div>
                    <div className="ml-auto text-amber-400 text-xs">★★★★★</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="w-full h-2 rounded-full bg-muted" />
                    <div className="w-4/5 h-2 rounded-full bg-muted" />
                    <div className="w-3/5 h-2 rounded-full bg-muted" />
                  </div>
                </div>

                {/* CTA bar */}
                <div
                  className="rounded-xl p-4 flex items-center justify-between"
                  style={{ background: "rgba(55, 98, 227, 0.06)", border: "1px solid rgba(55, 98, 227, 0.12)" }}
                >
                  <div>
                    <div className="w-24 h-2.5 rounded-full mb-1.5" style={{ background: "var(--blue)", opacity: 0.7 }} />
                    <div className="w-16 h-2 rounded-full bg-muted" />
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white"
                    style={{ background: "var(--blue)" }}
                  >
                    Book call →
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification badge */}
            <div
              className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium shadow-lg"
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 24px rgba(55, 98, 227, 0.15)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              New booking · 2 min ago
            </div>

            {/* Floating metric badge */}
            <div
              className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 24px rgba(55, 98, 227, 0.15)",
              }}
            >
              <span style={{ color: "var(--blue)" }}>↑ 38%</span>
              <span className="text-muted-text">conversion this month</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
