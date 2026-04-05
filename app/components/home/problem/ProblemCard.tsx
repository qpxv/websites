interface ProblemCardProps {
  title: string;
  description: string;
  isActive: boolean;
}

export default function ProblemCard({ title, description, isActive }: ProblemCardProps) {
  return (
    <div
      className="rounded-2xl p-6 transition-all duration-500"
      style={{
        background: "#fff",
        border: `1px solid ${isActive ? "rgba(55, 98, 227, 0.25)" : "var(--border)"}`,
        boxShadow: isActive
          ? "0 4px 24px rgba(55, 98, 227, 0.08)"
          : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <h3
        className="text-base font-semibold mb-2 transition-colors duration-500"
        style={{ color: isActive ? "var(--foreground)" : "var(--foreground)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-muted-text leading-relaxed">{description}</p>
    </div>
  );
}
