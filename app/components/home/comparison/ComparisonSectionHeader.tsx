export default function ComparisonSectionHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <span
        className="text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ color: "var(--blue)" }}
      >
        Let's be real
      </span>
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] tracking-tight mb-4 max-w-2xl">
        Why coaches come to me{" "}
        <span
          style={{
            background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          instead of an agency
        </span>
      </h2>
      <p className="text-base text-muted-text leading-relaxed max-w-md">
        Agencies are built for big brands with big budgets. If you're a coach who needs a great site fast, here's how it actually stacks up.
      </p>
    </div>
  );
}
