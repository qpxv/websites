const rows = [
  {
    category: "Turnaround",
    agency: "6–12 weeks",
    ben: "Under 10 days",
  },
  {
    category: "Copywriting",
    agency: "You write it",
    ben: "Done for you",
  },
  {
    category: "Niche expertise",
    agency: "Generalist",
    ben: "Coaching only",
  },
  {
    category: "Investment",
    agency: "$5,000–$20,000+",
    ben: "From $1,200",
  },
  {
    category: "Post-launch support",
    agency: "Extra charge",
    ben: "Included",
  },
];

export default function ComparisonTable() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#fff",
        border: "1px solid rgba(55, 98, 227, 0.12)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
      }}
    >
      {/* Column headers */}
      <div className="grid grid-cols-3 px-6 pt-6 pb-4 gap-4">
        <div />
        <div className="flex justify-center">
          <span
            className="rounded-lg px-4 py-2 text-sm font-semibold"
            style={{ background: "#f3f4f6", color: "var(--muted-text)" }}
          >
            Other agencies
          </span>
        </div>
        <div className="flex justify-center">
          <span
            className="rounded-lg px-4 py-2 text-sm font-semibold"
            style={{
              background: "rgba(55,98,227,0.08)",
              border: "1px solid rgba(55,98,227,0.15)",
              color: "var(--blue)",
            }}
          >
            Ben ✦
          </span>
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={row.category}
          className="grid grid-cols-3 px-6 py-4 gap-4 items-center border-t"
          style={{
            borderColor: "rgba(55,98,227,0.06)",
            background: i % 2 === 1 ? "rgba(55,98,227,0.015)" : "transparent",
          }}
        >
          {/* Category */}
          <span className="text-sm font-semibold text-foreground">{row.category}</span>

          {/* Agency */}
          <div className="flex items-center justify-center gap-2">
            <span style={{ color: "#fca5a5", fontSize: "14px", lineHeight: 1 }}>✗</span>
            <span className="text-sm text-muted-text">{row.agency}</span>
          </div>

          {/* Ben */}
          <div className="flex items-center justify-center gap-2">
            <span style={{ color: "#4ade80", fontSize: "14px", lineHeight: 1 }}>✓</span>
            <span className="text-sm font-semibold" style={{ color: "var(--blue)" }}>{row.ben}</span>
          </div>
        </div>
      ))}

      {/* Bottom CTA bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 border-t"
        style={{
          background: "rgba(55,98,227,0.04)",
          borderColor: "rgba(55,98,227,0.10)",
        }}
      >
        <p className="text-sm font-semibold text-foreground">
          Sound like a better fit?
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] transition-all duration-200 shrink-0"
          style={{ boxShadow: "0 4px 20px rgba(55, 98, 227, 0.4)" }}
        >
          Book a free call
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="btn-arrow"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
