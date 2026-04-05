export default function SolutionOutcomes() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* ── Card 1 — full width, positioning/clarity ────────────── */}
      <div
        className="md:col-span-2 relative overflow-hidden rounded-2xl p-7 min-h-[260px] flex flex-col md:flex-row md:items-center gap-8"
        style={{
          background: "radial-gradient(ellipse at 95% 10%, rgba(55,98,227,0.06) 0%, transparent 55%), #fff",
          border: "1px solid rgba(55, 98, 227, 0.15)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
        }}
      >
        {/* Ghost number */}
        <span
          className="absolute top-4 right-6 text-[96px] font-bold leading-none select-none pointer-events-none"
          style={{ color: "rgba(55,98,227,0.05)", fontFamily: "var(--font-playfair)" }}
          aria-hidden="true"
        >
          01
        </span>

        {/* Text */}
        <div className="relative z-10 max-w-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-3">
            Visitors instantly know if they're your person
          </h3>
          <p className="text-sm text-muted-text leading-relaxed">
            Sharp positioning and clear messaging mean the right people self-select in — and the wrong ones don't waste your time.
          </p>
        </div>

        {/* Signal rings illustration */}
        <div className="relative z-10 flex items-center justify-center shrink-0 w-48 h-48 mx-auto md:ml-auto md:mr-8 opacity-90">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
            <circle cx="100" cy="100" r="90" stroke="rgba(55,98,227,0.07)" strokeWidth="1" />
            <circle cx="100" cy="100" r="66" stroke="rgba(55,98,227,0.10)" strokeWidth="1" />
            <circle cx="100" cy="100" r="42" stroke="rgba(55,98,227,0.15)" strokeWidth="1" />
            <circle cx="100" cy="100" r="20" stroke="rgba(55,98,227,0.22)" strokeWidth="1" />
            <line x1="100" y1="52" x2="100" y2="72" stroke="rgba(55,98,227,0.20)" strokeWidth="1" strokeLinecap="round" />
            <line x1="100" y1="128" x2="100" y2="148" stroke="rgba(55,98,227,0.20)" strokeWidth="1" strokeLinecap="round" />
            <line x1="52" y1="100" x2="72" y2="100" stroke="rgba(55,98,227,0.20)" strokeWidth="1" strokeLinecap="round" />
            <line x1="128" y1="100" x2="148" y2="100" stroke="rgba(55,98,227,0.20)" strokeWidth="1" strokeLinecap="round" />
            <circle cx="100" cy="100" r="7" fill="rgba(55,98,227,0.15)" />
            <circle cx="100" cy="100" r="3.5" fill="#3762e3" />
          </svg>
        </div>
      </div>

      {/* ── Card 2 — page anatomy, conversion ───────────────────── */}
      <div
        className="relative overflow-hidden rounded-2xl p-6 min-h-[220px] flex flex-col"
        style={{
          background: "linear-gradient(180deg, rgba(55,98,227,0.04) 0%, #fff 45%)",
          border: "1px solid var(--border)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
        }}
      >
        {/* Illustration area */}
        <div className="relative w-full h-28 mb-4 shrink-0">
          <svg viewBox="0 0 160 100" fill="none" className="w-full h-full" aria-hidden="true">
            <rect x="12" y="6" width="136" height="88" rx="7" stroke="rgba(55,98,227,0.12)" strokeWidth="1" />
            <rect x="20" y="15" width="120" height="7" rx="2.5" fill="rgba(55,98,227,0.08)" />
            <rect x="20" y="27" width="120" height="26" rx="4" fill="rgba(55,98,227,0.09)" />
            <rect x="28" y="33" width="44" height="4" rx="2" fill="rgba(55,98,227,0.28)" />
            <rect x="28" y="41" width="28" height="3" rx="1.5" fill="rgba(55,98,227,0.16)" />
            <rect x="20" y="59" width="34" height="18" rx="3" fill="rgba(55,98,227,0.07)" />
            <rect x="62" y="59" width="34" height="18" rx="3" fill="rgba(55,98,227,0.07)" />
            <rect x="104" y="59" width="28" height="18" rx="3" fill="rgba(55,98,227,0.07)" />
            <rect x="52" y="82" width="56" height="9" rx="4.5" fill="rgba(55,98,227,0.20)" />
          </svg>
          {/* Ghost number */}
          <span
            className="absolute top-1 right-2 text-7xl font-bold leading-none select-none pointer-events-none"
            style={{ color: "rgba(55,98,227,0.06)", fontFamily: "var(--font-playfair)" }}
            aria-hidden="true"
          >
            02
          </span>
        </div>

        {/* Text */}
        <h3 className="text-base font-bold text-foreground leading-snug mb-2">
          Every page is engineered to convert
        </h3>
        <p className="text-sm text-muted-text leading-relaxed">
          No random layouts, no buried CTAs. Every section is placed with one goal — moving your visitor one step closer to booking.
        </p>
      </div>

      {/* ── Card 3 — sparkline, reliability ─────────────────────── */}
      <div
        className="relative overflow-hidden rounded-2xl p-6 min-h-[220px] flex flex-col"
        style={{
          background: "#fff",
          border: "1px solid var(--border)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
        }}
      >
        {/* Illustration area */}
        <div className="relative w-full h-24 mb-4 shrink-0">
          <svg viewBox="0 0 160 80" fill="none" className="w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="spark-area-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3762e3" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#3762e3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="8" y1="20" x2="152" y2="20" stroke="rgba(55,98,227,0.05)" strokeWidth="1" />
            <line x1="8" y1="40" x2="152" y2="40" stroke="rgba(55,98,227,0.05)" strokeWidth="1" />
            <line x1="8" y1="60" x2="152" y2="60" stroke="rgba(55,98,227,0.05)" strokeWidth="1" />
            <path
              d="M8 68 C28 63 42 56 60 48 C78 40 94 32 112 24 C126 18 138 14 152 10 L152 72 L8 72 Z"
              fill="url(#spark-area-fill)"
            />
            <path
              d="M8 68 C28 63 42 56 60 48 C78 40 94 32 112 24 C126 18 138 14 152 10"
              stroke="#3762e3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="152" cy="10" r="5" fill="rgba(55,98,227,0.15)" />
            <circle cx="152" cy="10" r="2.5" fill="#3762e3" />
          </svg>
          {/* Ghost number */}
          <span
            className="absolute top-1 right-2 text-7xl font-bold leading-none select-none pointer-events-none"
            style={{ color: "rgba(55,98,227,0.06)", fontFamily: "var(--font-playfair)" }}
            aria-hidden="true"
          >
            03
          </span>
        </div>

        {/* Text */}
        <h3 className="text-base font-bold text-foreground leading-snug mb-2">
          Built once. Works forever.
        </h3>
        <p className="text-sm text-muted-text leading-relaxed">
          Done right from day one — no endless revisions, no Squarespace nightmares. You coach. The website does the rest.
        </p>
      </div>

    </div>
  );
}
