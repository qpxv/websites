import ComparisonSectionHeader from "./ComparisonSectionHeader";
import ComparisonTable from "./ComparisonTable";

export default function ComparisonSection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <ComparisonSectionHeader />
        <ComparisonTable />
      </div>
    </section>
  );
}
