export default function BrowserContent() {
  const scale = 0.55;
  const inverse = `${(1 / scale) * 100}%`;

  return (
    <div className="flex-1 relative overflow-hidden">
      <iframe
        src="https://tylervanacker.framer.website"
        title="Tyler Van Acker — client website"
        style={{
          width: inverse,
          height: inverse,
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
