export default function FloatingMetricBadge() {
  return (
    <div
      className="absolute -bottom-4 -left-4 flex items-center gap-3 px-3 py-2.5 rounded-xl"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 8px 24px rgba(55,98,227,0.15)",
      }}
    >
      {/* Mini sparkline */}
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="metric-spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3762e3" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#3762e3" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M2 20 C8 17 12 13 18 10 C24 7 30 4 38 2 L38 22 L2 22 Z"
          fill="url(#metric-spark-fill)"
        />
        <path
          d="M2 20 C8 17 12 13 18 10 C24 7 30 4 38 2"
          stroke="#3762e3"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="38" cy="2" r="2" fill="#3762e3" />
      </svg>

      {/* Stat */}
      <div>
        <p className="text-xs font-bold leading-none mb-0.5" style={{ color: "var(--blue)" }}>
          ↑ 38%
        </p>
        <p className="text-[11px] text-muted-text leading-none">Conversion · This month</p>
      </div>
    </div>
  );
}
