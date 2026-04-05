export default function FloatingMetricBadge() {
  return (
    <div
      className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 8px 24px rgba(55, 98, 227, 0.15)",
      }}
    >
      <span style={{ color: "var(--blue)" }}>↑ 38%</span>
      <span className="text-muted-text">conversion this month</span>
    </div>
  );
}
