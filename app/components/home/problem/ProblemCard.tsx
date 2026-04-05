import { ReactNode } from "react";

interface ProblemCardProps {
  title: string;
  description: string;
  isActive: boolean;
  illustration: ReactNode;
  ghostNumber: string;
  cardBackground?: string;
}

export default function ProblemCard({
  title,
  description,
  isActive,
  illustration,
  ghostNumber,
  cardBackground,
}: ProblemCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-500"
      style={{
        background: cardBackground || "#fff",
        border: `1px solid ${isActive ? "rgba(55,98,227,0.20)" : "var(--border)"}`,
        boxShadow: isActive
          ? "0 4px 24px rgba(55,98,227,0.08), 0 1px 4px rgba(0,0,0,0.04)"
          : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Ghost number */}
      <span
        className="absolute bottom-2 left-4 text-[80px] font-bold leading-none select-none pointer-events-none transition-all duration-500"
        style={{
          color: isActive ? "rgba(55,98,227,0.07)" : "rgba(55,98,227,0.04)",
          fontFamily: "var(--font-playfair)",
        }}
        aria-hidden="true"
      >
        {ghostNumber}
      </span>

      {/* Text */}
      <div className="flex-1 relative z-10">
        <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-text leading-relaxed">{description}</p>
      </div>

      {/* Illustration */}
      <div className="shrink-0 w-32 h-24 sm:w-36 sm:h-28 flex items-center justify-center relative z-10">
        {illustration}
      </div>
    </div>
  );
}
