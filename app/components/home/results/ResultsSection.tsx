import ResultsSectionHeader from "./ResultsSectionHeader";
import ResultsStatsStrip from "./ResultsStatsStrip";
import ResultsCards from "./ResultsCards";

export default function ResultsSection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <ResultsSectionHeader />
        <ResultsStatsStrip />
        <ResultsCards />
      </div>
    </section>
  );
}
