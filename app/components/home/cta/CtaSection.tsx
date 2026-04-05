import Image from "next/image";
import tylerImg from "@/app/testimonial-pictures-clients/tyler van acker.jpeg";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Grid texture — same as hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(180, 185, 210, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 185, 210, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, black 80%)",
        }}
      />

      {/* Blue radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(55,98,227,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">

        {/* Eyebrow */}
        <span
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--blue)" }}
        >
          Ready?
        </span>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-foreground">Stop losing clients </span>
          <span
            style={{
              background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            to a website that doesn't work.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base text-muted-text leading-relaxed mb-10 max-w-md">
          The call is free. The site takes 10 days. The results speak for themselves.
        </p>

        {/* CTA button */}
        <a
          href="#"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] transition-all duration-200 mb-6"
          style={{ boxShadow: "0 4px 24px rgba(55, 98, 227, 0.45)" }}
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

        {/* Trust chips */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {["Free 30-min call", "No commitment", "Results in 10 days"].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs text-muted-text">
              <span style={{ color: "#4ade80" }}>✓</span>
              {item}
            </span>
          ))}
        </div>

        {/* Closing testimonial */}
        <div
          className="w-full max-w-md rounded-2xl p-5 text-left"
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            boxShadow: "0 4px 24px rgba(55,98,227,0.07), 0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={tylerImg}
              alt="Tyler V."
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-xs font-semibold text-foreground leading-none">Tyler V.</p>
              <p className="text-[11px] text-muted-text leading-none mt-0.5">Health Coach</p>
            </div>
            <div className="ml-auto text-amber-400 text-xs">★★★★★</div>
          </div>
          <p className="text-xs text-muted-text leading-relaxed">
            "Before Ben, I had a carrd site that only converted people who already trusted me. Now I have a sales page that converts cold traffic — it paid for itself in 3 days."
          </p>
        </div>

      </div>
    </section>
  );
}
