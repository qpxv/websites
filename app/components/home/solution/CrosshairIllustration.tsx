'use client';
import { useState } from 'react';

export default function CrosshairIllustration() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative z-10 flex items-center justify-center shrink-0 w-48 h-48 mx-auto md:ml-auto md:mr-8 opacity-90"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>{`
        @keyframes sonar-ping {
          0%   { transform: scale(0.08); opacity: 0.7; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        .sonar-ring {
          transform-box: fill-box;
          transform-origin: center;
        }
        .sonar-ring-1 { animation: sonar-ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .sonar-ring-2 { animation: sonar-ping 1.8s cubic-bezier(0, 0, 0.2, 1) 0.6s infinite; }
        .sonar-ring-3 { animation: sonar-ping 1.8s cubic-bezier(0, 0, 0.2, 1) 1.2s infinite; }
      `}</style>

      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
        {/* Sonar ping rings — appear on hover */}
        {hovered && (
          <>
            <circle cx="100" cy="100" r="90" stroke="#3762e3" strokeWidth="1" fill="none" className="sonar-ring sonar-ring-1" />
            <circle cx="100" cy="100" r="90" stroke="#3762e3" strokeWidth="1" fill="none" className="sonar-ring sonar-ring-2" />
            <circle cx="100" cy="100" r="90" stroke="#3762e3" strokeWidth="1" fill="none" className="sonar-ring sonar-ring-3" />
          </>
        )}

        {/* Static rings — brighten on hover */}
        <circle
          cx="100" cy="100" r="90"
          stroke={hovered ? 'rgba(55,98,227,0.18)' : 'rgba(55,98,227,0.07)'}
          strokeWidth="1"
          style={{ transition: 'stroke 0.4s ease' }}
        />
        <circle
          cx="100" cy="100" r="66"
          stroke={hovered ? 'rgba(55,98,227,0.22)' : 'rgba(55,98,227,0.10)'}
          strokeWidth="1"
          style={{ transition: 'stroke 0.4s ease' }}
        />
        <circle
          cx="100" cy="100" r="42"
          stroke={hovered ? 'rgba(55,98,227,0.32)' : 'rgba(55,98,227,0.15)'}
          strokeWidth="1"
          style={{ transition: 'stroke 0.4s ease' }}
        />
        <circle
          cx="100" cy="100" r="20"
          stroke={hovered ? 'rgba(55,98,227,0.50)' : 'rgba(55,98,227,0.22)'}
          strokeWidth="1.5"
          style={{ transition: 'stroke 0.4s ease' }}
        />

        {/* Crosshair lines — extend and brighten on hover */}
        <line
          x1="100" y1={hovered ? 40 : 52} x2="100" y2="72"
          stroke={hovered ? 'rgba(55,98,227,0.55)' : 'rgba(55,98,227,0.20)'}
          strokeWidth={hovered ? 1.5 : 1}
          strokeLinecap="round"
          style={{ transition: 'all 0.35s ease' }}
        />
        <line
          x1="100" y1="128" x2="100" y2={hovered ? 160 : 148}
          stroke={hovered ? 'rgba(55,98,227,0.55)' : 'rgba(55,98,227,0.20)'}
          strokeWidth={hovered ? 1.5 : 1}
          strokeLinecap="round"
          style={{ transition: 'all 0.35s ease' }}
        />
        <line
          x1={hovered ? 40 : 52} y1="100" x2="72" y2="100"
          stroke={hovered ? 'rgba(55,98,227,0.55)' : 'rgba(55,98,227,0.20)'}
          strokeWidth={hovered ? 1.5 : 1}
          strokeLinecap="round"
          style={{ transition: 'all 0.35s ease' }}
        />
        <line
          x1="128" y1="100" x2={hovered ? 160 : 148} y2="100"
          stroke={hovered ? 'rgba(55,98,227,0.55)' : 'rgba(55,98,227,0.20)'}
          strokeWidth={hovered ? 1.5 : 1}
          strokeLinecap="round"
          style={{ transition: 'all 0.35s ease' }}
        />

        {/* Center glow + dot */}
        <circle
          cx="100" cy="100" r="7"
          fill={hovered ? 'rgba(55,98,227,0.30)' : 'rgba(55,98,227,0.15)'}
          style={{ transition: 'fill 0.35s ease' }}
        />
        <circle cx="100" cy="100" r="3.5" fill="#3762e3" />
      </svg>
    </div>
  );
}
