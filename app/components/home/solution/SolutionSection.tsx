import SolutionSectionHeader from "./SolutionSectionHeader";
import SolutionOutcomes from "./SolutionOutcomes";

export default function SolutionSection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SolutionSectionHeader />
        <SolutionOutcomes />
      </div>
    </section>
  );
}
