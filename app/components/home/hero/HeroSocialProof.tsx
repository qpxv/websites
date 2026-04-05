const avatars = [
  { initials: "JK", color: "#3762e3" },
  { initials: "SL", color: "#6b8ff7" },
  { initials: "MR", color: "#a5b8fa" },
  { initials: "AH", color: "#c7d3fc" },
];

export default function HeroSocialProof() {
  return (
    <div className="flex items-center gap-3 mt-10">
      <div className="flex -space-x-2">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
            style={{ background: avatar.color }}
          >
            {avatar.initials}
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-0.5 text-amber-400 text-xs">★★★★★</div>
        <p className="text-xs text-muted-text">
          <span className="font-semibold text-foreground">40+ coaches</span> already converted
        </p>
      </div>
    </div>
  );
}
