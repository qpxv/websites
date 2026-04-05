import HeroSection from "./components/home/HeroSection";
import ProblemSection from "./components/home/problem/ProblemSection";
import SolutionSection from "./components/home/solution/SolutionSection";
import ResultsSection from "./components/home/results/ResultsSection";
import ComparisonSection from "./components/home/comparison/ComparisonSection";

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <ComparisonSection />
    </div>
  );
}
