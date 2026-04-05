const smallCards = [
  {
    initial: "M",
    name: "Marcus T.",
    niche: "Fitness Coach",
    quote: "My site now reflects what I charge. Enquiries went from 2 a week to 9.",
    result: "+$8,400/mo",
  },
  {
    initial: "D",
    name: "Diana R.",
    niche: "Life Coach",
    quote: "Four discovery calls booked in the first week the site went live.",
    result: "3× revenue",
  },
  {
    initial: "J",
    name: "James W.",
    niche: "Mindset Coach",
    quote: "Clients tell me they booked because the site felt expensive. That's the point.",
    result: "9 calls/wk",
  },
];

export default function ResultsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Featured card — full width */}
      <div
        className="md:col-span-2 relative overflow-hidden rounded-2xl p-8"
        style={{
          background: "radial-gradient(ellipse at 95% 10%, rgba(55,98,227,0.06) 0%, transparent 55%), #fff",
          border: "1px solid rgba(55, 98, 227, 0.15)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
        }}
      >
        {/* Ghost quote mark */}
        <span
          className="absolute -top-4 left-4 text-[160px] font-bold leading-none select-none pointer-events-none"
          style={{
            color: "rgba(55,98,227,0.05)",
            fontFamily: "var(--font-playfair)",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          "
        </span>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end gap-6">
          <div className="flex-1">
            {/* Stars */}
            <div className="text-amber-400 text-sm mb-4">★★★★★</div>

            {/* Quote */}
            <p
              className="text-lg sm:text-xl font-semibold text-foreground leading-snug mb-6 max-w-2xl"
              style={{ letterSpacing: "-0.2px" }}
            >
              "Going from 3 to 14 booked calls in 8 weeks was wild. Ben didn't just build a site — he built a sales machine that works while I sleep."
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)" }}
              >
                S
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-none">Sarah K.</p>
                <p className="text-xs text-muted-text leading-none mt-0.5">Business Coach</p>
              </div>
            </div>
          </div>

          {/* Result badge */}
          <div className="shrink-0">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                background: "rgba(22,163,74,0.08)",
                border: "1px solid rgba(22,163,74,0.2)",
                color: "#16a34a",
              }}
            >
              ↑ 367% booked calls
            </span>
          </div>
        </div>
      </div>

      {/* 3 smaller cards — reuse md:grid-cols-3 nested grid */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      {smallCards.map((card) => (
        <div
          key={card.name}
          className="relative overflow-hidden rounded-2xl p-6 flex flex-col"
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
          }}
        >
          {/* Author row */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)" }}
            >
              {card.initial}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-none">{card.name}</p>
              <p className="text-xs text-muted-text leading-none mt-0.5">{card.niche}</p>
            </div>
            <div className="ml-auto text-amber-400 text-xs">★★★★★</div>
          </div>

          {/* Quote */}
          <p className="text-sm text-muted-text leading-relaxed flex-1">
            "{card.quote}"
          </p>

          {/* Result badge */}
          <div className="mt-4">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: "rgba(22,163,74,0.08)",
                border: "1px solid rgba(22,163,74,0.2)",
                color: "#16a34a",
              }}
            >
              {card.result}
            </span>
          </div>
        </div>
      ))}
      </div>

    </div>
  );
}
