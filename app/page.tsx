import HeroSection from "./components/home/HeroSection";
import ProblemSection from "./components/home/problem/ProblemSection";
import SolutionSection from "./components/home/solution/SolutionSection";
import ResultsSection from "./components/home/results/ResultsSection";
import WorkSection from "./components/home/work/WorkSection";
import ComparisonSection from "./components/home/comparison/ComparisonSection";
import ProcessSection from "./components/home/process/ProcessSection";
import PricingSection from "./components/home/pricing/PricingSection";
import FaqSection from "./components/home/faq/FaqSection";
import CtaSection from "./components/home/cta/CtaSection";
import Footer from "./components/home/footer/Footer";

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <WorkSection />
      <ComparisonSection />
      <ProcessSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
