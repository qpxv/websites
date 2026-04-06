import Image from "next/image";

type Props = {
  src: string | null;
  imageUrl?: string;
};

export default function WorkBrowserContent({ src, imageUrl }: Props) {
  const iframeWidth = 1280;
  const iframeHeight = 800;
  const scale = 0.42;
  const containerHeight = iframeHeight * scale;

  // Screenshot image — takes priority over iframe
  if (imageUrl) {
    return (
      <div className="relative overflow-hidden" style={{ height: containerHeight }}>
        <Image
          src={imageUrl}
          alt="Website screenshot"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  // Live iframe
  if (src) {
    return (
      <div className="relative overflow-hidden" style={{ height: containerHeight }}>
        {/* Click blocker */}
        <div className="absolute inset-0 z-10" />
        <iframe
          src={src}
          title="Client website"
          style={{
            width: iframeWidth,
            height: iframeHeight,
            border: "none",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
    );
  }

  // Coming soon placeholder
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: containerHeight, background: "linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%)" }}
    >
      <span
        className="text-xs font-semibold px-3 py-1.5 rounded-full"
        style={{ background: "rgba(55,98,227,0.1)", color: "var(--blue)", border: "1px solid rgba(55,98,227,0.2)" }}
      >
        Coming soon
      </span>
    </div>
  );
}
