const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "30 minutes. You tell me about your offer, your audience, and what's not working. I ask the questions agencies never bother to ask.",
    duration: "30 min",
  },
  {
    number: "02",
    title: "Design & build",
    description:
      "I handle everything — copy, layout, design. You don't write a word unless you want to. I'll check in with questions if I need them.",
    duration: "Days 1–8",
  },
  {
    number: "03",
    title: "Review",
    description:
      "You see the full site. Revisions are included — no extra invoice, no awkward back-and-forth. We keep going until it's right.",
    duration: "Day 9",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Site goes live. You get the files, the access, and my continued support. The hard work starts paying off from day one.",
    duration: "Day 10",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative z-10 px-6 py-28 overflow-hidden"
      style={{ background: "#06080F" }}
    >
      {/* Radial blue glow — top center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(55,98,227,0.45) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(55,98,227,0.18) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(55,98,227,0.9)" }}
          >
            The process
          </span>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight mb-4 max-w-2xl"
            style={{ color: "#fff" }}
          >
            From first call to live site{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6b8ff7 0%, #3762e3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in 10 days.
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", maxWidth: "28rem", lineHeight: 1.7 }}>
            No project management tools. No status updates. Just a clear path from today to launch.
          </p>
        </div>

        {/* Steps — desktop: horizontal, mobile: vertical */}
        <div className="relative">

          {/* Connecting line — desktop only */}
          <div
            className="absolute top-[28px] left-0 right-0 hidden lg:block pointer-events-none"
            style={{ height: "1px" }}
          >
            {/* Base faint line */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(55,98,227,0.15)" }}
            />
            {/* Glowing center line */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(55,98,227,0.6) 20%, rgba(107,143,247,0.8) 50%, rgba(55,98,227,0.6) 80%, transparent 100%)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Node */}
                <div className="relative flex items-center justify-center mb-6 shrink-0">
                  {/* Outer glow ring */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "rgba(55,98,227,0.12)",
                      boxShadow: "0 0 0 8px rgba(55,98,227,0.06)",
                    }}
                  />
                  {/* Node circle */}
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "linear-gradient(135deg, rgba(55,98,227,0.9) 0%, rgba(107,143,247,0.8) 100%)",
                      border: "1px solid rgba(107,143,247,0.5)",
                      color: "#fff",
                      boxShadow: "0 0 20px rgba(55,98,227,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Duration badge */}
                <span
                  className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "rgba(55,98,227,0.7)" }}
                >
                  {step.duration}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#fff" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-20">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)",
              boxShadow: "0 4px 20px rgba(55,98,227,0.45)",
            }}
          >
            Start with a free call
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
        </div>

      </div>
    </section>
  );
}
