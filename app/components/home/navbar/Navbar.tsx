import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarCTAButton from "./NavbarCTAButton";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div
        className="flex items-center justify-between px-5 py-3 rounded-2xl border border-border"
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          boxShadow: "0 4px 24px rgba(55, 98, 227, 0.07), 0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <NavbarLogo />
        <NavbarLinks />
        <NavbarCTAButton />
      </div>
    </nav>
  );
}
