export default function HeroCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <a
        href="#contact"
        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] transition-all duration-200"
        style={{ boxShadow: "0 4px 20px rgba(55, 98, 227, 0.4)" }}
      >
        Book a free strategy call
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
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
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-foreground border border-border bg-white/70 transition-all duration-200 hover:border-gray-300"
      >
        See my work
      </a>
    </div>
  );
}
