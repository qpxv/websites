export default function ComparisonSectionHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <span
        className="text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ color: "var(--blue)" }}
      >
        The honest comparison
      </span>
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] tracking-tight mb-4 max-w-2xl">
        Why coaches choose Ben over{" "}
        <span
          style={{
            background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          a traditional agency
        </span>
      </h2>
      <p className="text-base text-muted-text leading-relaxed max-w-md">
        No fluff. Here's what you actually get — and what you don't.
      </p>
    </div>
  );
}
