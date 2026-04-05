export default function ProblemSectionHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <span
        className="text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ color: "var(--blue)" }}
      >
        Sound familiar?
      </span>
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] tracking-tight mb-4 max-w-2xl">
        Your website might be why great clients{" "}
        <span
          style={{
            background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          don't reach out
        </span>
      </h2>
      <p className="text-base text-muted-text leading-relaxed max-w-md">
        It's not your offer. It's not your coaching. It's three things hiding in plain sight — and they're easier to fix than you think.
      </p>
    </div>
  );
}
