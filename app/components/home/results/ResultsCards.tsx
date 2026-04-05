import Image, { StaticImageData } from "next/image";
import darrellImg from "@/app/testimonial-pictures-clients/darrell kawooya.jpeg";
import tylerImg from "@/app/testimonial-pictures-clients/tyler van acker.jpeg";
import danielImg from "@/app/testimonial-pictures-clients/daniel wedel.jpeg";

const smallCards: { initial: string; name: string; niche: string; quote: string; result: string; img?: StaticImageData }[] = [
  {
    initial: "T",
    name: "Tyler V.",
    niche: "Health Coach",
    quote: "I had a carrd site that barely converted. Ben built me a real sales page — it made back its cost and then some within 3 days.",
    result: "$2.2k in 3 days",
    img: tylerImg,
  },
  {
    initial: "M",
    name: "Manuela W.",
    niche: "Wellness Coach",
    quote: "Ben listens well, brings great ideas, and the site came together incredibly fast. I can't recommend him highly enough.",
    result: "Delivered in days",
  },
  {
    initial: "D",
    name: "Daniel W.",
    niche: "Online Coach",
    quote: "Finding someone easy to work with who is genuinely creative and willing to solve your problem is rare. Ben is exactly that.",
    result: "On time, every time",
    img: danielImg,
  },
];

export default function ResultsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Featured card — full width */}
      <div
        className="md:col-span-2 relative overflow-hidden rounded-2xl p-8"
        style={{
          background: "radial-gradient(ellipse at 95% 10%, rgba(55,98,227,0.06) 0%, transparent 55%), #fff",
          border: "1px solid rgba(55, 98, 227, 0.15)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
        }}
      >
        {/* Ghost quote mark */}
        <span
          className="absolute -top-4 left-4 text-[160px] font-bold leading-none select-none pointer-events-none"
          style={{
            color: "rgba(55,98,227,0.05)",
            fontFamily: "var(--font-playfair)",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          "
        </span>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end gap-6">
          <div className="flex-1">
            {/* Stars */}
            <div className="text-amber-400 text-sm mb-4">★★★★★</div>

            {/* Quote */}
            <p
              className="text-lg sm:text-xl font-semibold text-foreground leading-snug mb-6 max-w-2xl"
              style={{ letterSpacing: "-0.2px" }}
            >
              "Ben's speed and initiative are next level. Revenue went from $1.8k to $5.5k a month within 45 days of the site going live — I did not expect results that fast."
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src={darrellImg}
                alt="Darrell K."
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-foreground leading-none">Darrell K.</p>
                <p className="text-xs text-muted-text leading-none mt-0.5">Online Coach</p>
              </div>
            </div>
          </div>

          {/* Result badge */}
          <div className="shrink-0">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                background: "rgba(22,163,74,0.08)",
                border: "1px solid rgba(22,163,74,0.2)",
                color: "#16a34a",
              }}
            >
              $1.8k → $5.5k/mo
            </span>
          </div>
        </div>
      </div>

      {/* 3 smaller cards — reuse md:grid-cols-3 nested grid */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      {smallCards.map((card) => (
        <div
          key={card.name}
          className="relative overflow-hidden rounded-2xl p-6 flex flex-col"
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
          }}
        >
          {/* Author row */}
          <div className="flex items-center gap-3 mb-4">
            {card.img ? (
              <Image
                src={card.img}
                alt={card.name}
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
            ) : (
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ background: "linear-gradient(135deg, #3762e3 0%, #6b8ff7 100%)" }}
              >
                {card.initial}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-foreground leading-none">{card.name}</p>
              <p className="text-xs text-muted-text leading-none mt-0.5">{card.niche}</p>
            </div>
            <div className="ml-auto text-amber-400 text-xs">★★★★★</div>
          </div>

          {/* Quote */}
          <p className="text-sm text-muted-text leading-relaxed flex-1">
            "{card.quote}"
          </p>

          {/* Result badge */}
          <div className="mt-4">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: "rgba(22,163,74,0.08)",
                border: "1px solid rgba(22,163,74,0.2)",
                color: "#16a34a",
              }}
            >
              {card.result}
            </span>
          </div>
        </div>
      ))}
      </div>

    </div>
  );
}
