import Image from "next/image";
import tylerImg from "@/app/testimonial-pictures-clients/tyler van acker.jpeg";
import CalendlyEmbed from "./CalendlyEmbed";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Grid texture */}
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

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: text + trust + testimonial ── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "var(--blue)" }}
            >
              Let's do this
            </span>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
              <span className="text-foreground">Let's get your website </span>
              <span
                style={{
                  background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                working for you.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-base text-muted-text leading-relaxed mb-8 max-w-sm">
              Pick a time that works for you — it's a free 30-minute call. No pitch, no pressure. Just an honest conversation about your website.
            </p>

            {/* Trust chips */}
            <div className="flex flex-col gap-2.5 mb-10">
              {[
                "Free 30-min call — no obligation",
                "Site delivered in under 10 days",
                "Copy, design & revisions all included",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2.5 text-sm text-muted-text">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                    style={{ background: "rgba(74,222,128,0.15)", color: "#16a34a" }}
                  >
                    ✓
                  </span>
                  {item}
                </span>
              ))}
            </div>

            {/* Testimonial */}
            <div
              className="rounded-2xl p-5"
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

          {/* ── Right: Calendly ── */}
          <div>
            <CalendlyEmbed />
          </div>

        </div>
      </div>
    </section>
  );
}
