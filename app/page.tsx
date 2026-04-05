import HeroSection from "./components/home/HeroSection";
import ProblemSection from "./components/home/problem/ProblemSection";

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <HeroSection />
      <ProblemSection />
    </div>
  );
}
