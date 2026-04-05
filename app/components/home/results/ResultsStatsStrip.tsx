const stats = [
  { value: "142+", label: "Coaches worked with" },
  { value: "5.0 ★", label: "Average Google rating" },
  { value: "↑ 38%", label: "Avg conversion lift" },
  { value: "< 3 wks", label: "Average delivery" },
];

export default function ResultsStatsStrip() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x rounded-2xl mb-10 overflow-hidden"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
        divideColor: "var(--border)",
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex-1 flex flex-col items-center justify-center py-5 px-6 w-full"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="text-2xl font-bold leading-none mb-1"
            style={{ color: "var(--blue)" }}
          >
            {stat.value}
          </span>
          <span className="text-xs text-muted-text text-center">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
