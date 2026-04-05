export default function NavbarLogo({ dark }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
        style={{ background: "var(--blue)" }}
      >
        B
      </div>
      <span
        className="font-semibold text-sm transition-colors duration-300"
        style={{ color: dark ? "rgba(255,255,255,0.9)" : "var(--foreground)" }}
      >
        BenWinzer
      </span>
    </div>
  );
}
