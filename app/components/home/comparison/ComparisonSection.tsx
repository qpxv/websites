import ComparisonSectionHeader from "./ComparisonSectionHeader";
import ComparisonTable from "./ComparisonTable";

export default function ComparisonSection() {
  return (
    <section id="comparison" className="relative z-10 px-6 py-24" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <ComparisonSectionHeader />
        <ComparisonTable />
      </div>
    </section>
  );
}
