export default function NavbarCTAButton() {
  return (
    <a
      href="#contact"
      className="text-sm font-medium text-white px-4 py-2 rounded-xl bg-[var(--blue)] hover:bg-[var(--blue-hover)] transition-all duration-200"
      style={{ boxShadow: "0 2px 12px rgba(55, 98, 227, 0.35)" }}
    >
      Book a call
    </a>
  );
}
