const links = [
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function NavbarLinks({ dark }: { dark?: boolean }) {
  return (
    <div className="hidden md:flex items-center gap-7">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm transition-colors duration-300"
          style={{ color: dark ? "rgba(255,255,255,0.5)" : "var(--muted-text)" }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
