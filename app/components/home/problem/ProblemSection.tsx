import ProblemSectionHeader from "./ProblemSectionHeader";
import ProblemTimeline from "./ProblemTimeline";

export default function ProblemSection() {
  return (
    <section className="relative z-10 px-6 py-24" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="max-w-6xl mx-auto">
        <ProblemSectionHeader />
        <ProblemTimeline />
      </div>
    </section>
  );
}
