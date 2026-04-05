export default function HeroBadge() {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium"
      style={{
        background: "rgba(55, 98, 227, 0.08)",
        color: "var(--blue)",
        border: "1px solid rgba(55, 98, 227, 0.18)",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ background: "var(--blue)" }}
      />
      Available for new projects
    </div>
  );
}
