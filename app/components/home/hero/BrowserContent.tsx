const avatars = ["S", "M", "J"];

export default function BrowserContent() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Mini nav */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ borderColor: "rgba(55, 98, 227, 0.08)" }}
      >
        <span className="text-[11px] font-bold" style={{ color: "var(--blue)" }}>Alex Morgan</span>
        <div className="flex items-center gap-3">
          <span className="text-[9px]" style={{ color: "var(--muted-text)" }}>About</span>
          <span className="text-[9px]" style={{ color: "var(--muted-text)" }}>Results</span>
          <span
            className="text-[9px] text-white font-semibold px-2 py-1 rounded-md"
            style={{ background: "var(--blue)" }}
          >
            Book a call
          </span>
        </div>
      </div>

      {/* Hero section */}
      <div
        className="px-5 pt-6 pb-7"
        style={{ background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)" }}
      >
        <span className="text-[8px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>
          Business Coach &amp; Strategist
        </span>
        <h1
          className="font-bold text-white leading-tight mt-1.5 mb-2.5"
          style={{ fontSize: "17px", letterSpacing: "-0.3px" }}
        >
          Scale Your Coaching<br />to 7 Figures
        </h1>
        <p className="leading-relaxed mb-4" style={{ fontSize: "9px", color: "rgba(255,255,255,0.65)" }}>
          I help ambitious coaches build premium offers and websites that turn visitors into high-ticket clients — without burning out.
        </p>
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] font-semibold px-3 py-1.5 rounded-lg"
            style={{ background: "#fff", color: "#3762e3" }}
          >
            Book a free call →
          </span>
          <span
            className="text-[9px] px-3 py-1.5 rounded-lg"
            style={{ color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            See results
          </span>
        </div>
      </div>

      {/* Social proof strip */}
      <div
        className="flex items-center gap-2.5 px-4 py-3 border-t"
        style={{ borderColor: "rgba(55, 98, 227, 0.08)" }}
      >
        <div className="flex -space-x-1.5 shrink-0">
          {avatars.map((a) => (
            <div
              key={a}
              className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[7px] font-bold ring-2 ring-white"
              style={{ background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)" }}
            >
              {a}
            </div>
          ))}
        </div>
        <p style={{ fontSize: "9px", color: "var(--muted-text)" }}>
          Trusted by <strong style={{ color: "var(--foreground)" }}>142+ coaches</strong> worldwide
        </p>
        <span className="ml-auto text-amber-400" style={{ fontSize: "9px" }}>★★★★★</span>
      </div>

    </div>
  );
}
