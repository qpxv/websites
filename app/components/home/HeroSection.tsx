import Navbar from "./navbar/Navbar";
import HeroText from "./hero/HeroText";
import HeroImage from "./hero/HeroImage";

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <section className="relative z-10 min-h-screen flex items-center px-6 py-24">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HeroText />
          <HeroImage />
        </div>
      </section>
    </>
  );
}
