import CrosshairIllustration from './CrosshairIllustration';
import WireframeIllustration from './WireframeIllustration';
import SparklineIllustration from './SparklineIllustration';

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

        <CrosshairIllustration />
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
        <WireframeIllustration />

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
        <SparklineIllustration />

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
