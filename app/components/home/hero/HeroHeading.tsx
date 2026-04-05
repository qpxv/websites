export default function HeroHeading() {
  return (
    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
      Websites that turn{" "}
      <span
        style={{
          background: "linear-gradient(135deg, var(--blue) 0%, #6b8ff7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        followers
      </span>{" "}
      into booked calls
    </h1>
  );
}
