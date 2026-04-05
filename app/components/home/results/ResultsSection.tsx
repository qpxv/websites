import ResultsSectionHeader from "./ResultsSectionHeader";
import ResultsStatsStrip from "./ResultsStatsStrip";
import ResultsCards from "./ResultsCards";

export default function ResultsSection() {
  return (
    <section id="results" className="relative z-10 px-6 py-24 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Dot grid — analytical/data feel, fades at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(55,98,227,0.18) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <ResultsSectionHeader />
        <ResultsStatsStrip />
        <ResultsCards />
      </div>
    </section>
  );
}
