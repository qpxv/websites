export default function WorkBrowserChrome({ url }: { url: string }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-3 border-b shrink-0"
      style={{ background: "#f8f9fc", borderColor: "rgba(55, 98, 227, 0.1)" }}
    >
      <div className="group flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400/70 flex items-center justify-center cursor-default">
          <span className="opacity-0 group-hover:opacity-100 text-red-800/80 leading-none select-none" style={{ fontSize: "8px", fontWeight: 700 }}>✕</span>
        </div>
        <div className="w-3 h-3 rounded-full bg-amber-400/70 flex items-center justify-center cursor-default">
          <span className="opacity-0 group-hover:opacity-100 text-amber-800/80 leading-none select-none" style={{ fontSize: "8px", fontWeight: 700 }}>−</span>
        </div>
        <div className="w-3 h-3 rounded-full bg-green-400/70 flex items-center justify-center cursor-default">
          <span className="opacity-0 group-hover:opacity-100 text-green-800/80 leading-none select-none" style={{ fontSize: "7px", fontWeight: 700 }}>⤢</span>
        </div>
      </div>
      <div
        className="flex-1 mx-3 px-3 py-1 rounded-md text-[11px] text-muted-text text-center truncate"
        style={{ background: "#eef0f7" }}
      >
        {url}
      </div>
    </div>
  );
}
