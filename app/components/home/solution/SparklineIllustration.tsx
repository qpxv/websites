'use client';
import { useRef, useState } from 'react';

export default function SparklineIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [indicator, setIndicator] = useState<{ x: number; y: number } | null>(null);

  const updateIndicator = (clientX: number) => {
    if (!containerRef.current || !pathRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    // Map clientX to SVG viewBox coordinates (0 0 160 80)
    const svgX = ((clientX - rect.left) / rect.width) * 160;
    const clampedX = Math.max(8, Math.min(152, svgX));

    // Binary search along path length to find the point closest to clampedX
    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    let lo = 0;
    let hi = totalLength;
    for (let i = 0; i < 40; i++) {
      const mid = (lo + hi) / 2;
      if (path.getPointAtLength(mid).x < clampedX) lo = mid;
      else hi = mid;
    }
    const pt = path.getPointAtLength((lo + hi) / 2);
    setIndicator({ x: pt.x, y: pt.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => updateIndicator(e.clientX);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    updateIndicator(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-24 mb-4 shrink-0 cursor-crosshair"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={() => setIndicator(null)}
      onTouchEnd={() => setIndicator(null)}
    >
      <svg viewBox="0 0 160 80" fill="none" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="spark-area-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3762e3" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#3762e3" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <line x1="8" y1="20" x2="152" y2="20" stroke="rgba(55,98,227,0.05)" strokeWidth="1" />
        <line x1="8" y1="40" x2="152" y2="40" stroke="rgba(55,98,227,0.05)" strokeWidth="1" />
        <line x1="8" y1="60" x2="152" y2="60" stroke="rgba(55,98,227,0.05)" strokeWidth="1" />

        {/* Area fill */}
        <path
          d="M8 68 C28 63 42 56 60 48 C78 40 94 32 112 24 C126 18 138 14 152 10 L152 72 L8 72 Z"
          fill="url(#spark-area-fill)"
        />

        {/* Trend line */}
        <path
          ref={pathRef}
          d="M8 68 C28 63 42 56 60 48 C78 40 94 32 112 24 C126 18 138 14 152 10"
          stroke="#3762e3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Mouse indicator */}
        {indicator ? (
          <>
            <line
              x1={indicator.x} y1="72"
              x2={indicator.x} y2={indicator.y}
              stroke="rgba(55,98,227,0.35)"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle cx={indicator.x} cy={indicator.y} r="6" fill="rgba(55,98,227,0.18)" />
            <circle cx={indicator.x} cy={indicator.y} r="2.8" fill="#3762e3" />
          </>
        ) : (
          <>
            <circle cx="152" cy="10" r="5" fill="rgba(55,98,227,0.15)" />
            <circle cx="152" cy="10" r="2.5" fill="#3762e3" />
          </>
        )}
      </svg>

      {/* Ghost number */}
      <span
        className="absolute top-1 right-2 text-7xl font-bold leading-none select-none pointer-events-none"
        style={{ color: 'rgba(55,98,227,0.06)', fontFamily: 'var(--font-playfair)' }}
        aria-hidden="true"
      >
        03
      </span>
    </div>
  );
}
