const outcomes = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Visitors instantly know if they're your person",
    description:
      "Sharp positioning and clear messaging mean the right people self-select in — and the wrong ones don't waste your time.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Every page is engineered to convert",
    description:
      "No random layouts, no buried CTAs. Every section is placed with one goal — moving your visitor one step closer to booking.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L10 11M10 11L7 8M10 11L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 13v3a1 1 0 001 1h10a1 1 0 001-1v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Built once. Works forever.",
    description:
      "Done right from day one — no endless revisions, no Squarespace nightmares. You coach. The website does the rest.",
  },
];

export default function SolutionOutcomes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {outcomes.map((outcome, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 p-6 rounded-2xl"
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: "rgba(55, 98, 227, 0.08)",
              color: "var(--blue)",
            }}
          >
            {outcome.icon}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">
              {outcome.title}
            </h3>
            <p className="text-sm text-muted-text leading-relaxed">
              {outcome.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
