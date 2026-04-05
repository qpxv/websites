import SolutionSectionHeader from "./SolutionSectionHeader";
import SolutionOutcomes from "./SolutionOutcomes";

export default function SolutionSection() {
  return (
    <section className="relative z-10 px-6 py-24 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Bloom rising from below — "the answer is emerging" */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(55,98,227,0.06) 0%, transparent 65%)",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SolutionSectionHeader />
        <SolutionOutcomes />
      </div>
    </section>
  );
}
