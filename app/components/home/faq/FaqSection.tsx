"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I already have a website. Do I need to start from scratch?",
    a: "Not necessarily — but in most cases, yes. A website that isn't converting has a structural problem, not a cosmetic one. Redesigning on top of a broken foundation rarely works. That said, we'll talk through it on the discovery call and I'll tell you honestly what makes sense.",
  },
  {
    q: "How much of my time does this actually take?",
    a: "One 30-minute call at the start, and a feedback round when I show you the site. That's it. I handle the copy, the design, and the build. You don't need to write a word, prepare assets, or chase me for updates.",
  },
  {
    q: "You've never coached anyone. How can you write copy that sounds like me?",
    a: "Fair challenge. The discovery call is where I extract your voice, your story, and the language your clients actually use. After 142+ coaching websites, I know the space cold — the objections, the desires, the words that convert. The copy will sound like the best version of you, not a generic coach.",
  },
  {
    q: "I paid for a website before and it didn't convert. Why would this be different?",
    a: "Because most web designers think about how a site looks — not how it sells. Every section I build has a job: move the visitor one step closer to booking. That's a different skill set. It's why coaches who've spent $5k on agencies come to me and get better results for a fraction of the price.",
  },
  {
    q: "What if I want to change my offer or niche later?",
    a: "You get full access to everything — the files, the CMS, all of it. You're never locked in. And if you want me to update it when your offer evolves, post-launch support is already included.",
  },
  {
    q: "Do you work with coaches just starting out, or do I need an established business?",
    a: "Both. If you're just starting, the Landing Page is built to get you your first clients fast. If you're established and leaking conversions, the Full Website fixes the whole funnel. The only thing that matters is that you're serious about coaching — not how long you've been doing it.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative z-10 px-6 py-28 overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(55,98,227,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--blue)" }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            The questions you{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              actually have.
            </span>
          </h2>
          <p className="text-base text-muted-text leading-relaxed">
            No fluff questions. Real objections, real answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => setOpen(isOpen ? null : i)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen(isOpen ? null : i); }}
                className="rounded-2xl transition-all duration-300 cursor-pointer select-none"
                style={{
                  background: isOpen ? "rgba(55,98,227,0.04)" : "#fff",
                  border: isOpen ? "1px solid rgba(55,98,227,0.25)" : "1px solid var(--border)",
                }}
              >
                {/* Question row */}
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <span className="text-sm font-semibold leading-snug text-foreground">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? "rgba(55,98,227,0.1)" : "rgba(0,0,0,0.05)",
                      color: isOpen ? "var(--blue)" : "var(--muted-text)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--muted-text)" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
