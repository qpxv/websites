import Navbar from "./navbar/Navbar";
import HeroText from "./hero/HeroText";
import HeroImage from "./hero/HeroImage";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#fafafa" }}>
      {/* Grid layer — fades out in center, visible at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(180, 185, 210, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 185, 210, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, black 80%)",
        }}
      />

      {/* Blue radial glow — top left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 65% at -5% -5%, rgba(55, 98, 227, 0.13) 0%, transparent 65%)",
        }}
      />

      {/* Bottom fade-out into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #fafafa)",
        }}
      />

      <Navbar />
      <section className="relative z-10 min-h-screen flex items-center px-6 py-24">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HeroText />
          <HeroImage />
        </div>
      </section>
    </div>
  );
}
