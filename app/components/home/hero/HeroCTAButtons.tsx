export default function HeroCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
        style={{
          background: "var(--blue)",
          boxShadow: "0 4px 20px rgba(55, 98, 227, 0.4)",
        }}
      >
        Book a free strategy call
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 7h10M8 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href="#work"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-foreground border border-border bg-white/70 transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
      >
        See my work
      </a>
    </div>
  );
}
