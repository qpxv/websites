import HeroHeading from "./HeroHeading";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroSocialProof from "./HeroSocialProof";

export default function HeroText() {
  return (
    <div className="relative z-10 flex flex-col items-start">
      <HeroHeading />
      <p className="text-base sm:text-lg text-muted-text leading-relaxed mb-10 max-w-md">
        Premium websites engineered for coaches who are done being invisible online.
      </p>
      <HeroCTAButtons />
      <HeroSocialProof />
    </div>
  );
}
