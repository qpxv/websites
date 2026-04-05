export default function HeroSocialProof() {
  return (
    <div
      className="flex items-start gap-4 mt-10 p-4 rounded-2xl max-w-sm"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 16px rgba(55,98,227,0.07), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Avatar */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
        style={{ background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)" }}
      >
        S
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-amber-400 text-[11px] leading-none">
          ★★★★★
        </div>
        <p className="text-xs text-foreground font-medium leading-snug">
          "Went from 2 to 11 booked calls in my first month."
        </p>
        <span className="text-[11px] text-muted-text">Sarah K. · Business Coach</span>
      </div>
    </div>
  );
}
