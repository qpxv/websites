export default function FloatingBookingBadge() {
  return (
    <div
      className="absolute -top-4 -right-4 flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 8px 24px rgba(55,98,227,0.15)",
      }}
    >
      {/* Pulse dot with ring */}
      <div className="relative flex items-center justify-center w-4 h-4 shrink-0">
        <span className="absolute w-4 h-4 rounded-full bg-green-400/25 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      <div>
        <p className="text-foreground font-semibold leading-none mb-0.5">Sarah K. booked a call</p>
        <p className="text-muted-text font-normal leading-none">2 min ago</p>
      </div>
    </div>
  );
}
