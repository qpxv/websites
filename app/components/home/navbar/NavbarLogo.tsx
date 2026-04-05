export default function NavbarLogo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
        style={{ background: "var(--blue)" }}
      >
        B
      </div>
      <span className="font-semibold text-sm text-foreground">BenWinzer</span>
    </div>
  );
}
