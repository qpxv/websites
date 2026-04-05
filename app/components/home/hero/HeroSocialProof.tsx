import Image from "next/image";
import danielImg from "@/app/testimonial-pictures-clients/daniel wedel.jpeg";

export default function HeroSocialProof() {
  return (
    <div
      className="flex items-start gap-4 mt-10 p-4 rounded-2xl max-w-sm"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 16px rgba(55,98,227,0.07), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Avatar */}
      <Image
        src={danielImg}
        alt="Daniel W."
        width={36}
        height={36}
        className="w-9 h-9 rounded-full object-cover shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-amber-400 text-[11px] leading-none">
          ★★★★★
        </div>
        <p className="text-xs text-foreground font-medium leading-snug">
          "Genuinely amazed at how fast he delivered. Would absolutely recommend."
        </p>
        <span className="text-[11px] text-muted-text">Daniel W. · Online Coach</span>
      </div>
    </div>
  );
}
