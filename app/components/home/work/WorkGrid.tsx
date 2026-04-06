import WorkCard from "./WorkCard";
import { WorkItem } from "./workData";

export default function WorkGrid({ items }: { items: WorkItem[] }) {
  if (items.length === 1) {
    return (
      <div className="max-w-3xl mx-auto">
        <WorkCard item={items[0]} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item) => (
        <WorkCard key={item.id} item={item} />
      ))}
    </div>
  );
}
