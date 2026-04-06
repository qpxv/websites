import WorkSectionHeader from "./WorkSectionHeader";
import WorkGrid from "./WorkGrid";
import { workItems } from "./workData";

export default function WorkSection() {
  return (
    <section id="work" className="relative z-10 px-6 py-24" style={{ backgroundColor: "#f6f8ff" }}>
      <div className="max-w-6xl mx-auto">
        <WorkSectionHeader />
        <WorkGrid items={workItems} />
      </div>
    </section>
  );
}
