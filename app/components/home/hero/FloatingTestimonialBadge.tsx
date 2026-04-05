export default function FloatingTestimonialBadge() {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 -left-6 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 8px 24px rgba(55,98,227,0.13)",
      }}
    >
      {/* Google G */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M15.5 8.18c0-.57-.05-1.12-.14-1.64H8v3.1h4.2a3.6 3.6 0 01-1.56 2.37v1.97h2.52c1.47-1.36 2.34-3.36 2.34-5.8z" fill="#4285F4"/>
        <path d="M8 16c2.16 0 3.97-.72 5.29-1.94l-2.52-1.97c-.71.48-1.63.76-2.77.76-2.13 0-3.93-1.44-4.57-3.37H.83v2.03A8 8 0 008 16z" fill="#34A853"/>
        <path d="M3.43 9.48A4.8 4.8 0 013.18 8c0-.51.09-1.01.25-1.48V4.49H.83A8 8 0 000 8c0 1.29.31 2.51.83 3.6l2.6-2.12z" fill="#FBBC05"/>
        <path d="M8 3.18c1.2 0 2.27.41 3.12 1.22l2.34-2.34A8 8 0 00.83 4.5l2.6 2.02C4.07 4.62 5.87 3.18 8 3.18z" fill="#EA4335"/>
      </svg>

      {/* Rating */}
      <div>
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold text-foreground leading-none">5.0</span>
          <span className="text-amber-400 text-[10px] leading-none">★★★★★</span>
        </div>
        <p className="text-[10px] text-muted-text leading-none mt-0.5">12 reviews</p>
      </div>
    </div>
  );
}
