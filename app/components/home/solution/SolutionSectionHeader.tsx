export default function SolutionSectionHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <span
        className="text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ color: "var(--blue)" }}
      >
        Here's what changes
      </span>
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground leading-[1.15] tracking-tight max-w-2xl mb-6">
        A website that{" "}
        <span
          style={{
            background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          works as hard
        </span>
        {" "}as you do
      </h2>
      <p className="text-base text-muted-text italic max-w-lg leading-relaxed">
        "Imagine opening your laptop and seeing a new discovery call in your calendar — from someone who found your site, read your story, and already knew they wanted to work with you."
      </p>
    </div>
  );
}
