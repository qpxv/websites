import HeroSection from "./components/home/HeroSection";

export default function Page() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Grid layer — masked out in the center, visible at edges */}
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

      <HeroSection />
    </div>
  );
}
