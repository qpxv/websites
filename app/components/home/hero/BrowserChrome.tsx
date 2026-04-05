export default function BrowserChrome() {
  return (
    <div
      className="flex items-center gap-2 px-4 py-3 border-b"
      style={{ background: "#f8f9fc", borderColor: "rgba(55, 98, 227, 0.1)" }}
    >
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400/70" />
        <div className="w-3 h-3 rounded-full bg-amber-400/70" />
        <div className="w-3 h-3 rounded-full bg-green-400/70" />
      </div>
      <div
        className="flex-1 mx-3 px-3 py-1 rounded-md text-[11px] text-muted-text text-center"
        style={{ background: "#eef0f7" }}
      >
        yourcoachsite.com
      </div>
    </div>
  );
}
