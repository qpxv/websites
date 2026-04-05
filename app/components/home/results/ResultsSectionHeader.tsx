export default function ResultsSectionHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <span
        className="text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ color: "var(--blue)" }}
      >
        Results
      </span>
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] tracking-tight mb-4 max-w-2xl">
        Real coaches.{" "}
        <span
          style={{
            background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Real results.
        </span>
      </h2>
      <p className="text-base text-muted-text leading-relaxed max-w-md">
        Every coach on this page had a website that wasn't pulling its weight. Here's what changed.
      </p>
    </div>
  );
}
