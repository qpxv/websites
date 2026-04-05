import HeroHeading from "./HeroHeading";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroSocialProof from "./HeroSocialProof";

export default function HeroText() {
  return (
    <div className="relative z-10 flex flex-col items-start">
      <HeroHeading />
      <p className="text-base sm:text-lg text-muted-text leading-relaxed mb-10 max-w-md">
        You're an incredible coach. I build websites that make that impossible to miss — so the right clients find you, trust you, and book you.
      </p>
      <HeroCTAButtons />
      <HeroSocialProof />
    </div>
  );
}
