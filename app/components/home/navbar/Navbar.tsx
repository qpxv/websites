"use client";

import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarCTAButton from "./NavbarCTAButton";

export default function Navbar() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompact(window.scrollY > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      style={{ width: compact ? "calc(100% - 8rem)" : "calc(100% - 3rem)", maxWidth: compact ? "720px" : "1024px" }}
    >
      <div
        className="flex items-center justify-between rounded-2xl border border-border transition-all duration-300"
        style={{
          padding: compact ? "8px 16px" : "10px 16px",
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
