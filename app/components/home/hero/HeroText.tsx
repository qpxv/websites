import HeroHeading from "./HeroHeading";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroSocialProof from "./HeroSocialProof";

export default function HeroText() {
  return (
    <div className="relative z-10 flex flex-col items-start">
      <HeroHeading />
      <p className="text-base sm:text-lg text-muted-text leading-relaxed mb-10 max-w-md">
        Premium websites built specifically for <br />coaches. Designed to convert your <br /> audience
         into paying clients.
      </p>
      <HeroCTAButtons />
      <HeroSocialProof />
    </div>
  );
}
