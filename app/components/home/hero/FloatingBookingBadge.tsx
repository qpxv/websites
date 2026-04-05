export default function FloatingBookingBadge() {
  return (
    <div
      className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 8px 24px rgba(55, 98, 227, 0.15)",
      }}
    >
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      New booking · 2 min ago
    </div>
  );
}
