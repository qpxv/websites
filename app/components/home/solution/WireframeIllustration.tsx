'use client';
import { useState } from 'react';

export default function WireframeIllustration() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-28 mb-4 shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        viewBox="0 0 160 100"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
        overflow="visible"
      >
        <defs>
          {/* Clip content to the browser frame */}
          <clipPath id="browser-frame-clip">
            <rect x="13" y="7" width="134" height="86" rx="6" />
          </clipPath>
        </defs>

        {/* Fixed browser frame */}
        <rect x="12" y="6" width="136" height="88" rx="7" stroke="rgba(55,98,227,0.12)" strokeWidth="1" />

        {/* Scrollable content — clipped to frame */}
        <g clipPath="url(#browser-frame-clip)">
          <g
            style={{
              transform: hovered ? 'translateY(-30px)' : 'translateY(0px)',
              transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* ── Above-fold content ── */}
            {/* Navbar */}
            <rect x="20" y="15" width="120" height="7" rx="2.5" fill="rgba(55,98,227,0.08)" />
            {/* Hero section */}
            <rect x="20" y="27" width="120" height="26" rx="4" fill="rgba(55,98,227,0.09)" />
            <rect x="28" y="33" width="44" height="4" rx="2" fill="rgba(55,98,227,0.28)" />
            <rect x="28" y="41" width="28" height="3" rx="1.5" fill="rgba(55,98,227,0.16)" />
            {/* Three feature cards */}
            <rect x="20" y="59" width="34" height="18" rx="3" fill="rgba(55,98,227,0.07)" />
            <rect x="62" y="59" width="34" height="18" rx="3" fill="rgba(55,98,227,0.07)" />
            <rect x="104" y="59" width="28" height="18" rx="3" fill="rgba(55,98,227,0.07)" />
            {/* CTA button */}
            <rect x="52" y="82" width="56" height="9" rx="4.5" fill="rgba(55,98,227,0.20)" />

            {/* ── Below-fold content ── */}
            {/* Section divider */}
            <line x1="20" y1="97" x2="140" y2="97" stroke="rgba(55,98,227,0.07)" strokeWidth="1" />
            {/* Section label */}
            <rect x="20" y="103" width="52" height="4" rx="2" fill="rgba(55,98,227,0.12)" />
            {/* Two testimonial cards */}
            <rect x="20" y="112" width="55" height="26" rx="3" fill="rgba(55,98,227,0.06)" stroke="rgba(55,98,227,0.10)" strokeWidth="0.5" />
            <rect x="83" y="112" width="55" height="26" rx="3" fill="rgba(55,98,227,0.06)" stroke="rgba(55,98,227,0.10)" strokeWidth="0.5" />
            {/* Testimonial content lines */}
            <rect x="26" y="118" width="18" height="3" rx="1.5" fill="rgba(55,98,227,0.18)" />
            <rect x="26" y="124" width="40" height="2.5" rx="1.25" fill="rgba(55,98,227,0.09)" />
            <rect x="26" y="129" width="32" height="2.5" rx="1.25" fill="rgba(55,98,227,0.09)" />
            <rect x="89" y="118" width="18" height="3" rx="1.5" fill="rgba(55,98,227,0.18)" />
            <rect x="89" y="124" width="40" height="2.5" rx="1.25" fill="rgba(55,98,227,0.09)" />
            <rect x="89" y="129" width="32" height="2.5" rx="1.25" fill="rgba(55,98,227,0.09)" />
          </g>
        </g>
      </svg>

      {/* Ghost number */}
      <span
        className="absolute top-1 right-2 text-7xl font-bold leading-none select-none pointer-events-none"
        style={{ color: 'rgba(55,98,227,0.06)', fontFamily: 'var(--font-playfair)' }}
        aria-hidden="true"
      >
        02
      </span>
    </div>
  );
}
