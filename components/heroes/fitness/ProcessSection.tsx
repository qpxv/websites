'use client';

import { useEffect, useRef, useState } from 'react';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

const steps = [
  {
    number: '01',
    label: 'Assessment',
    body: "30-minute intake call. No fluff. I find your biological starting point, your training history, and the exact gaps in your current approach.",
    tag: 'Day 1',
  },
  {
    number: '02',
    label: 'Blueprint',
    body: "Your MT Method plan built from scratch. Training load, progressive overload schedule, nutrition timing — all specific to your recovery rate and metabolic baseline.",
    tag: 'Days 2–3',
  },
  {
    number: '03',
    label: 'Execution',
    body: "You train. I watch every metric. Weekly form reviews, load adjustments, and real-time accountability — not a chatbot, not a PDF.",
    tag: 'Weeks 1–12',
  },
  {
    number: '04',
    label: 'Recalibrate',
    body: "Every 4 weeks we re-baseline your biology. Most coaches skip this entirely. It's exactly why their clients plateau at week 8.",
    tag: 'Every 4 Weeks',
  },
];

export default function ProcessSection() {
  const [activeSteps, setActiveSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Max index that has been activated (drives the fill line height)
  const maxActive = activeSteps.size === 0 ? -1 : Math.max(...activeSteps);
  const fillPercent = activeSteps.size === 0
    ? 0
    : (maxActive / (steps.length - 1)) * 100;

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSteps(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.35, rootMargin: '0px 0px -8% 0px' }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <section id="process" className="bg-[#0a0a0a] relative overflow-hidden">

      {/* Subtle left-edge red glow — different position from Solution's top-center */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-32 pointer-events-none"
        style={{
          width: 600,
          height: 800,
          background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.07) 0%, transparent 65%)',
          filter: 'blur(2px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#dc2626] text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0">
            The Process
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Headline */}
        <div className="mb-20">
          <h2
            className={`${bebas.className} text-white leading-[0.9] tracking-wide mb-5`}
            style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
          >
            THE SEQUENCE<br />
            MOST COACHES<br />
            <span className="text-[#dc2626]">SKIP.</span>
          </h2>
          <p className="text-white/40 text-sm tracking-[0.15em] uppercase">
            Four steps. In this order. No shortcuts.
          </p>
        </div>

        {/* Timeline + steps */}
        <div className="relative">

          {/* Timeline track — gray background line */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: 19,
              top: 8,
              bottom: 8,
              width: 1,
              background: 'rgba(255,255,255,0.08)',
            }}
          />

          {/* Timeline fill — red, animates height on step activation */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: 19,
              top: 8,
              width: 1,
              height: `${fillPercent}%`,
              background: '#dc2626',
              transition: 'height 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 8px rgba(220,38,38,0.5)',
            }}
          />

          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isActive = activeSteps.has(i);
              const isLast = i === steps.length - 1;

              return (
                <div
                  key={step.number}
                  ref={el => { stepRefs.current[i] = el; }}
                  className={`flex gap-10 items-start ${isLast ? '' : 'pb-20 md:pb-24'}`}
                >
                  {/* Node column */}
                  <div className="flex-shrink-0 w-10 flex justify-center pt-1.5">
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        background: isActive ? '#dc2626' : 'rgba(255,255,255,0.15)',
                        boxShadow: isActive ? '0 0 14px rgba(220,38,38,0.7)' : 'none',
                        transition: 'background 0.5s ease, box-shadow 0.5s ease',
                      }}
                    />
                  </div>

                  {/* Content column */}
                  <div className="flex-1 relative">

                    {/* Ghost step number — per-step, shifts from near-invisible to red-tinted on activation */}
                    <div
                      aria-hidden="true"
                      className={`${bebas.className} absolute -top-5 right-0 leading-none pointer-events-none select-none`}
                      style={{
                        fontSize: 'clamp(80px, 10vw, 140px)',
                        color: isActive ? 'rgba(220,38,38,0.07)' : 'rgba(255,255,255,0.025)',
                        transition: 'color 0.6s ease',
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Tag badge — new element type */}
                    <div
                      className="inline-flex items-center gap-2 mb-4"
                      style={{
                        opacity: isActive ? 1 : 0.3,
                        transition: 'opacity 0.5s ease',
                      }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          background: isActive ? '#dc2626' : 'rgba(255,255,255,0.4)',
                          transition: 'background 0.5s ease',
                        }}
                      />
                      <span
                        className="text-[10px] tracking-[0.22em] uppercase font-medium"
                        style={{
                          color: isActive ? '#dc2626' : 'rgba(255,255,255,0.35)',
                          transition: 'color 0.5s ease',
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    {/* Step headline */}
                    <h3
                      className={`${bebas.className} tracking-wide leading-tight mb-4 relative z-10`}
                      style={{
                        fontSize: 'clamp(28px, 3vw, 44px)',
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.25)',
                        transition: 'color 0.5s ease',
                      }}
                    >
                      {step.label}
                    </h3>

                    {/* Body */}
                    <p
                      className="text-sm leading-relaxed max-w-lg relative z-10"
                      style={{
                        color: isActive ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.22)',
                        transition: 'color 0.5s ease',
                      }}
                    >
                      {step.body}
                    </p>

                    {/* Step separator — only between steps, not after last */}
                    {!isLast && (
                      <div
                        className="mt-10 flex items-center gap-3"
                        style={{ opacity: isActive ? 0.4 : 0.12, transition: 'opacity 0.5s ease' }}
                      >
                        <div className="w-3 h-px bg-[#dc2626]" />
                        <div className="flex-1 h-px bg-white/10 max-w-[120px]" />
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bridge to Testimonials */}
        <div className="border-t border-white/[0.06] mt-24 pt-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p
              className={`${bebas.className} leading-tight tracking-wide`}
              style={{ fontSize: 'clamp(20px, 2.5vw, 34px)' }}
            >
              <span className="text-white/80">THE SYSTEM IS PROVEN.</span><br />
              <span className="text-white/30">THE RESULTS SPEAK FOR THEMSELVES.</span>
            </p>
            <div className="flex items-center gap-3 text-white/25 text-xs tracking-[0.2em] uppercase pb-1">
              <span>Real clients</span>
              <div className="flex items-center gap-1">
                <div className="w-5 h-px bg-white/20" />
                <div className="w-2 h-px bg-[#dc2626]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
