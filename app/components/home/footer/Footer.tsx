import LegalModals from "./LegalModals";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a call", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative px-6 py-12 border-t"
      style={{ backgroundColor: "#fafafa", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "var(--blue)" }}
          >
            B
          </div>
          <span className="font-semibold text-sm text-foreground">BenWinzer</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted-text hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Legal modals */}
        <LegalModals />

      </div>

      {/* Copyright */}
      <p className="text-center text-[11px] text-muted-text mt-8">
        © {new Date().getFullYear()} BenWinzer. All rights reserved.
      </p>
    </footer>
  );
}
