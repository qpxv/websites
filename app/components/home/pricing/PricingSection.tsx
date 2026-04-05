const tiers = [
  {
    name: "Landing Page",
    price: "$750",
    description: "One focused page built to convert. Perfect if you have a single offer and need it sold properly.",
    deliveryTime: "Under 7 days",
    features: [
      "Full copy written for you",
      "Custom design — no templates",
      "Hero, problem, solution, CTA",
      "Mobile optimised",
      "Post-launch support included",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Full Website",
    price: "$1,200",
    description: "The complete sales machine. Every section, every objection handled, built to convert high-ticket clients.",
    deliveryTime: "Under 10 days",
    features: [
      "Everything in Landing Page",
      "Full multi-section site",
      "Testimonials, pricing, FAQ",
      "Process & comparison sections",
      "Analytics setup included",
      "Priority support",
    ],
    cta: "Book a free call",
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative z-10 px-6 py-28 overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Blue radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(55,98,227,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--blue)" }}
          >
            Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight mb-4 max-w-2xl"
            style={{ color: "var(--foreground)" }}
          >
            Simple pricing.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              No surprises.
            </span>
          </h2>
          <p className="text-base text-muted-text leading-relaxed max-w-md">
            One price covers everything — copy, design, revisions, and launch support. Nothing is extra.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative rounded-2xl p-7 flex flex-col"
              style={{
                background: tier.featured
                  ? "radial-gradient(ellipse at 95% 10%, rgba(55,98,227,0.06) 0%, transparent 55%), #fff"
                  : "#fff",
                border: tier.featured
                  ? "1px solid rgba(55,98,227,0.25)"
                  : "1px solid var(--border)",
                boxShadow: tier.featured
                  ? "0 4px 24px rgba(55,98,227,0.12), 0 1px 4px rgba(0,0,0,0.04)"
                  : "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
              }}
            >
              {/* Most popular badge */}
              {tier.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)",
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(55,98,227,0.35)",
                  }}
                >
                  Most popular
                </span>
              )}

              {/* Tier name */}
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: tier.featured ? "var(--blue)" : "var(--muted-text)" }}
              >
                {tier.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1.5 mb-3">
                <span className="text-4xl font-bold leading-none text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm mb-1 text-muted-text">one-time</span>
              </div>

              {/* Delivery */}
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold mb-5" style={{ color: "#16a34a" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                {tier.deliveryTime}
              </span>

              {/* Description */}
              <p className="text-sm text-muted-text leading-relaxed mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span style={{ color: tier.featured ? "var(--blue)" : "var(--muted-text)", fontSize: "14px", lineHeight: 1.5 }}>✓</span>
                    <span className="text-sm text-muted-text">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={
                  tier.featured
                    ? {
                        background: "var(--blue)",
                        color: "#fff",
                        boxShadow: "0 4px 20px rgba(55,98,227,0.4)",
                      }
                    : {
                        background: "#fff",
                        color: "var(--foreground)",
                        border: "1px solid var(--border)",
                      }
                }
              >
                {tier.cta}
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
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-text mt-8">
          Not sure which is right for you? Book a free call — I'll tell you honestly.
        </p>

      </div>
    </section>
  );
}
