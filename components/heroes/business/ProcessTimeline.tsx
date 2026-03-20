'use client';

import { useState } from 'react';

const steps = [
  {
    n: '01',
    label: 'Diagnose',
    duration: 'Week 1–2',
    title: 'Deep-Dive Diagnostic',
    description:
      'Before we build anything, we tear it down. Full audit of your offers, pricing, team, numbers, and bottlenecks — so the strategy that follows is grounded in reality, not wishful thinking.',
    deliverables: ['Revenue gap analysis', 'Offer audit report', 'Bottleneck map'],
  },
  {
    n: '02',
    label: 'Design',
    duration: 'Week 3–6',
    title: 'Strategy & Architecture',
    description:
      'Your custom 90-day playbook gets built here. Offer stack restructured, pricing dialled in, ICP sharpened, and every week mapped out with a clear deliverable and a clear owner.',
    deliverables: ['Custom offer stack', 'Pricing framework', '90-day execution plan'],
  },
  {
    n: '03',
    label: 'Execute',
    duration: 'Week 7–10',
    title: 'Hands-On Execution',
    description:
      "This is where most coaches disappear. We don't. We build alongside you — SOPs, sales scripts, hiring frameworks, content systems — everything built and battle-tested in real time.",
    deliverables: ['SOPs & hiring playbook', 'Sales script library', 'Content authority system'],
  },
  {
    n: '04',
    label: 'Scale',
    duration: 'Week 11–12',
    title: 'Scale & Handoff',
    description:
      "We stress-test everything, lock in your KPI dashboard, and ignite the compounding flywheel that keeps growing long after we're done. You leave with a machine, not a memo.",
    deliverables: ['KPI dashboard', 'Growth flywheel playbook', 'Accountability system'],
  },
];

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">

      {/* Columns */}
      <div className="flex items-stretch" style={{ minHeight: 320 }}>
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative overflow-hidden cursor-pointer"
            style={{
              flexGrow: active === i ? 4 : 1,
              flexShrink: 1,
              flexBasis: 0,
              minWidth: active === i ? 260 : 52,
              transition: 'flex-grow 0.5s ease, min-width 0.5s ease',
            }}
            onMouseEnter={() => setActive(i)}
          >
            {/* Vertical amber accent line on left edge of each col */}
            {i > 0 && (
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
            )}

            {/* Active col glow */}
            {active === i && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at top left, rgba(245,158,11,0.07) 0%, transparent 70%)',
                }}
              />
            )}

            <div className="relative z-10 p-6 h-full flex flex-col">

              {/* Node + connecting line row */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: active === i ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.04)',
                    border: active === i
                      ? '1px solid rgba(245,158,11,0.4)'
                      : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: active === i ? '0 0 16px rgba(245,158,11,0.25)' : 'none',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{
                      color: active === i ? '#f59e0b' : 'rgba(255,255,255,0.25)',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {step.n}
                  </span>
                </div>

                {/* Horizontal line extending from node */}
                <div
                  className="flex-1 h-px"
                  style={{
                    background: active === i
                      ? 'linear-gradient(to right, rgba(245,158,11,0.5), transparent)'
                      : 'rgba(255,255,255,0.05)',
                    transition: 'background 0.4s ease',
                  }}
                />
              </div>

              {/* Label — always visible, rotates when collapsed */}
              <div
                className="mb-4 overflow-hidden"
                style={{
                  opacity: active === i ? 0 : 1,
                  maxHeight: active === i ? 0 : 40,
                  transition: 'opacity 0.2s ease, max-height 0.4s ease',
                }}
              >
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}
                >
                  {step.label}
                </span>
              </div>

              {/* Expanded content */}
              <div
                style={{
                  opacity: active === i ? 1 : 0,
                  transition: active === i ? 'opacity 0.35s ease 0.2s' : 'opacity 0.15s ease',
                  pointerEvents: active === i ? 'auto' : 'none',
                  flex: 1,
                }}
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/15 text-amber-400 text-[10px] font-semibold tracking-widest uppercase mb-4">
                  {step.duration}
                </span>
                <h3 className="text-white font-bold text-xl tracking-tight mb-3 whitespace-nowrap">
                  {step.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed mb-6" style={{ maxWidth: 340 }}>
                  {step.description}
                </p>
                <div className="flex flex-col gap-2">
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}
                      >
                        <svg className="w-2 h-2 text-amber-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-white/40 text-xs whitespace-nowrap">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom progress track */}
      <div className="mt-6 flex rounded-full overflow-hidden h-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
        {steps.map((_, i) => (
          <div
            key={i}
            className="h-full"
            style={{
              flexGrow: active === i ? 4 : 1,
              transition: 'flex-grow 0.5s ease',
              background: active === i
                ? 'linear-gradient(to right, #f59e0b, rgba(245,158,11,0.4))'
                : 'transparent',
            }}
          />
        ))}
      </div>

      {/* Step labels below track */}
      <div className="flex mt-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="text-center overflow-hidden"
            style={{
              flexGrow: active === i ? 4 : 1,
              flexShrink: 1,
              flexBasis: 0,
              minWidth: 0,
              transition: 'flex-grow 0.5s ease',
            }}
          >
            <span
              className="text-[10px] font-medium tracking-widest uppercase"
              style={{
                color: active === i ? 'rgba(245,158,11,0.6)' : 'rgba(255,255,255,0.15)',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
