const links = ["Work", "Services", "Pricing", "About"];

export default function NavbarLinks() {
  return (
    <div className="hidden md:flex items-center gap-7">
      {links.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm text-muted-text hover:text-foreground transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
  );
}
