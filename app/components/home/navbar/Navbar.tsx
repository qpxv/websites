"use client";

import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarCTAButton from "./NavbarCTAButton";

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompact(window.scrollY > window.innerHeight * 0.2);

      const darkSections = ["process"];
      const inDark = darkSections.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 80 && bottom >= 80;
      });
      setDark(inDark);
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
        className="flex items-center justify-between rounded-2xl transition-all duration-300"
        style={{
          padding: compact ? "8px 16px" : "10px 16px",
          background: dark ? "rgba(6,8,15,0.75)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px) saturate(140%)",
          WebkitBackdropFilter: "blur(10px) saturate(140%)",
          border: `1px solid ${dark ? "rgba(55,98,227,0.2)" : "var(--border)"}`,
          boxShadow: dark
            ? "0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)"
            : "0 4px 24px rgba(55, 98, 227, 0.07), 0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <NavbarLogo dark={dark} />
        <NavbarLinks dark={dark} />
        <NavbarCTAButton />
      </div>
    </nav>
  );
}
