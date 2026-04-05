"use client";

import { useEffect, useRef, useState } from "react";
import ProblemCard from "./ProblemCard";

const problems = [
  {
    title: "Nobody knows who you're for",
    description:
      "Generic websites speak to everyone and resonate with no one. If a visitor can't see themselves in your offer within 5 seconds, they leave — and they don't come back.",
    ghostNumber: "01",
    cardBackground: "radial-gradient(ellipse at 95% 50%, rgba(55,98,227,0.05) 0%, transparent 55%), #fff",
    illustration: (
      <svg viewBox="0 0 144 96" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Scattered grey circles — the noise of "every audience" */}
        <circle cx="28" cy="28" r="18" fill="rgba(200,205,220,0.45)" />
        <circle cx="58" cy="56" r="14" fill="rgba(200,205,220,0.38)" />
        <circle cx="112" cy="22" r="20" fill="rgba(200,205,220,0.45)" />
        <circle cx="88" cy="68" r="15" fill="rgba(200,205,220,0.38)" />
        <circle cx="18" cy="72" r="11" fill="rgba(200,205,220,0.32)" />
        <circle cx="130" cy="62" r="13" fill="rgba(200,205,220,0.38)" />
        <circle cx="100" cy="46" r="10" fill="rgba(200,205,220,0.30)" />
        {/* One blue circle — your actual person, lost in the crowd */}
        <circle cx="52" cy="30" r="16" fill="rgba(55,98,227,0.13)" stroke="rgba(55,98,227,0.28)" strokeWidth="1.2" />
        <circle cx="52" cy="30" r="5" fill="rgba(55,98,227,0.45)" />
      </svg>
    ),
  },
  {
    title: "Traffic comes. Clients don't.",
    description:
      "You're getting eyes on your site but no bookings. Weak copy, no trust signals, a buried CTA. Your website is a digital brochure — not a sales machine.",
    ghostNumber: "02",
    cardBackground: "linear-gradient(135deg, rgba(239,242,253,0.45) 0%, #fff 50%)",
    illustration: (
      <svg viewBox="0 0 144 96" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Tall bar — visitors/traffic */}
        <rect x="22" y="12" width="38" height="68" rx="5" fill="rgba(55,98,227,0.12)" />
        <rect x="22" y="12" width="38" height="68" rx="5" fill="rgba(55,98,227,0.08)" />
        {/* Dots streaming into left bar */}
        <circle cx="41" cy="20" r="2.5" fill="rgba(55,98,227,0.35)" />
        <circle cx="34" cy="30" r="2" fill="rgba(55,98,227,0.25)" />
        <circle cx="48" cy="38" r="2.5" fill="rgba(55,98,227,0.30)" />
        <circle cx="37" cy="48" r="2" fill="rgba(55,98,227,0.25)" />
        <circle cx="44" cy="58" r="2.5" fill="rgba(55,98,227,0.30)" />
        {/* Short bar — zero bookings */}
        <rect x="86" y="68" width="38" height="12" rx="5" fill="rgba(200,205,220,0.45)" />
        {/* Down arrow between bars */}
        <path d="M76 30 L76 55" stroke="rgba(220,80,80,0.40)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
        <path d="M72 51 L76 57 L80 51" stroke="rgba(220,80,80,0.40)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Labels */}
        <rect x="22" y="84" width="38" height="5" rx="2" fill="rgba(55,98,227,0.20)" />
        <rect x="86" y="84" width="38" height="5" rx="2" fill="rgba(200,205,220,0.40)" />
      </svg>
    ),
  },
  {
    title: "You're doing the wrong work",
    description:
      "Every hour spent tweaking your website is an hour stolen from coaching. Your time has a cost. Right now it's being spent on something you didn't start your business to do.",
    ghostNumber: "03",
    cardBackground: "#fff",
    illustration: (
      <svg viewBox="0 0 144 96" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Donut chart — time split */}
        {/* Background ring = website work (80%) */}
        <circle
          cx="72" cy="46" r="30"
          fill="none"
          stroke="rgba(200,205,220,0.50)"
          strokeWidth="14"
        />
        {/* Foreground arc = coaching time (20%) */}
        {/* circumference = 2π*30 ≈ 188.5, 20% = 37.7, offset = 47.1 (start at top) */}
        <circle
          cx="72" cy="46" r="30"
          fill="none"
          stroke="#3762e3"
          strokeWidth="14"
          strokeDasharray="37.7 150.8"
          strokeDashoffset="47.1"
          strokeLinecap="round"
          style={{ opacity: 0.75 }}
        />
        {/* Center label */}
        <circle cx="72" cy="46" r="16" fill="rgba(55,98,227,0.06)" />
        <rect x="62" y="43" width="20" height="3" rx="1.5" fill="rgba(55,98,227,0.30)" />
        <rect x="66" y="49" width="12" height="2.5" rx="1.25" fill="rgba(200,205,220,0.60)" />
        {/* Legend dots */}
        <circle cx="28" cy="86" r="4" fill="rgba(55,98,227,0.70)" />
        <rect x="36" y="83" width="28" height="5" rx="2" fill="rgba(55,98,227,0.15)" />
        <circle cx="88" cy="86" r="4" fill="rgba(200,205,220,0.70)" />
        <rect x="96" y="83" width="24" height="5" rx="2" fill="rgba(200,205,220,0.35)" />
      </svg>
    ),
  },
];

export default function ProblemTimeline() {
  const [activeCount, setActiveCount] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = problems.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCount((prev) => Math.max(prev, i + 1));
          } else if (entry.boundingClientRect.top > 0) {
            setActiveCount(i);
          }
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      const ref = cardRefs.current[i];
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto">
      {problems.map((problem, i) => {
        const isLast = i === problems.length - 1;
        const isNumberActive = i < activeCount;
        const isSegmentActive = activeCount >= i + 2;

        return (
          <div key={i}>
            {/* Card row */}
            <div
              className="flex gap-6 items-center"
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              {/* Timeline number circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10 transition-all duration-500"
                style={{
                  background: isNumberActive ? "var(--blue)" : "#fff",
                  color: isNumberActive ? "#fff" : "var(--muted-text)",
                  border: `2px solid ${isNumberActive ? "var(--blue)" : "var(--border)"}`,
                  boxShadow: isNumberActive ? "0 0 0 4px rgba(55,98,227,0.12)" : "none",
                }}
              >
                0{i + 1}
              </div>

              <div className="flex-1">
                <ProblemCard
                  title={problem.title}
                  description={problem.description}
                  isActive={isNumberActive}
                  illustration={problem.illustration}
                  ghostNumber={problem.ghostNumber}
                  cardBackground={problem.cardBackground}
                />
              </div>
            </div>

            {/* Connecting line segment */}
            {!isLast && (
              <div className="flex gap-6">
                <div className="w-10 flex justify-center">
                  <div
                    className="w-0.5 rounded-full transition-colors duration-500"
                    style={{
                      height: "80px",
                      background: isSegmentActive ? "var(--blue)" : "var(--border)",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
