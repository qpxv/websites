import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroSocialProof from "./HeroSocialProof";

export default function HeroText() {
  return (
    <div className="flex flex-col items-start">
      <HeroBadge />
      <HeroHeading />
      <p className="text-base sm:text-lg text-muted-text leading-relaxed mb-10 max-w-md">
        Premium websites built specifically for coaches. Designed to convert your audience
        into paying clients — not just look good.
      </p>
      <HeroCTAButtons />
      <HeroSocialProof />
    </div>
  );
}
