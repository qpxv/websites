"use client";

import { useEffect, useRef, useState } from "react";
import ProblemCard from "./ProblemCard";

const problems = [
  {
    title: "Nobody knows who you're for",
    description:
      "Generic websites speak to everyone and resonate with no one. If a visitor can't see themselves in your offer within 5 seconds, they leave — and they don't come back.",
  },
  {
    title: "Traffic comes. Clients don't.",
    description:
      "You're getting eyes on your site but no bookings. Weak copy, no trust signals, a buried CTA. Your website is a digital brochure — not a sales machine.",
  },
  {
    title: "You're doing the wrong work",
    description:
      "Every hour spent tweaking your website is an hour stolen from coaching. Your time has a cost. Right now it's being spent on something you didn't start your business to do.",
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
            // exiting downward out of center zone = user scrolled back up
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
    <div className="relative max-w-xl mx-auto">
      {problems.map((problem, i) => {
        const isLast = i === problems.length - 1;
        const isNumberActive = i < activeCount;
        const isSegmentActive = activeCount >= i + 2;

        return (
          <div
            key={i}
            className="flex gap-8"
            ref={(el) => { cardRefs.current[i] = el; }}
          >
            {/* Left col: number circle + connecting line */}
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10 transition-all duration-500"
                style={{
                  background: isNumberActive ? "var(--blue)" : "#fff",
                  color: isNumberActive ? "#fff" : "var(--muted-text)",
                  border: `2px solid ${isNumberActive ? "var(--blue)" : "var(--border)"}`,
                  boxShadow: isNumberActive
                    ? "0 0 0 4px rgba(55, 98, 227, 0.12)"
                    : "none",
                }}
              >
                0{i + 1}
              </div>

              {!isLast && (
                <div
                  className="w-0.5 flex-1 my-2 rounded-full transition-colors duration-500"
                  style={{
                    background: isSegmentActive ? "var(--blue)" : "var(--border)",
                    minHeight: "48px",
                  }}
                />
              )}
            </div>

            {/* Right col: card */}
            <div className={`flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
              <ProblemCard
                title={problem.title}
                description={problem.description}
                isActive={isNumberActive}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
