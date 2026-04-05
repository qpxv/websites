const stats = [
  { label: "Clients", value: "142", trend: "↑" },
  { label: "Revenue", value: "$84k", trend: "↑" },
  { label: "Conv. rate", value: "38%", trend: "↑" },
];

export default function BrowserContent() {
  return (
    <div className="p-5 space-y-4" style={{ background: "#fafbff" }}>
      {/* Hero stripe */}
      <div
        className="rounded-xl p-5"
        style={{ background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)" }}
      >
        <div className="w-20 h-2 rounded-full bg-white/30 mb-2" />
        <div className="w-40 h-4 rounded-full bg-white/70 mb-2" />
        <div className="w-52 h-3 rounded-full bg-white/40 mb-3" />
        <div className="w-24 h-7 rounded-lg bg-white/90" />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-3 flex flex-col"
            style={{ background: "#fff", border: "1px solid var(--border)" }}
          >
            <span className="text-[10px] text-muted-text mb-1">{stat.label}</span>
            <span className="text-base font-bold" style={{ color: "var(--blue)" }}>
              <span className="text-[10px] text-green-500 font-semibold mr-0.5">{stat.trend}</span>
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Testimonial card — real text, not skeleton */}
      <div
        className="rounded-xl p-4"
        style={{ background: "#fff", border: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
            style={{ background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)" }}
          >
            S
          </div>
          <div>
            <p className="text-[10px] font-semibold text-foreground leading-none">Sarah K.</p>
            <p className="text-[9px] text-muted-text leading-none mt-0.5">Business Coach</p>
          </div>
          <div className="ml-auto text-amber-400 text-[10px]">★★★★★</div>
        </div>
        <p className="text-[8px] text-muted-text leading-relaxed">
          "Went from 2 to 11 booked calls in my first month. The website does the selling for me now."
        </p>
      </div>

      {/* CTA bar */}
      <div
        className="rounded-xl p-4 flex items-center justify-between"
        style={{ background: "rgba(55,98,227,0.06)", border: "1px solid rgba(55,98,227,0.12)" }}
      >
        <div>
          <div className="w-28 h-2.5 rounded-full mb-1.5" style={{ background: "var(--blue)", opacity: 0.6 }} />
          <div className="w-20 h-2 rounded-full bg-muted" />
        </div>
        <div
          className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)" }}
        >
          Book call →
        </div>
      </div>
    </div>
  );
}
