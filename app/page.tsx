import HeroSection from "./components/home/HeroSection";
import ProblemSection from "./components/home/problem/ProblemSection";
import SolutionSection from "./components/home/solution/SolutionSection";

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
    </div>
  );
}
