export default function CalendlyEmbed() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 32px rgba(55,98,227,0.10), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <iframe
        src="https://calendly.com/benwinzer/website-call?hide_gdpr_banner=1&primary_color=3762e3&embed_type=Inline"
        width="100%"
        height="660"
        style={{ border: "none", display: "block" }}
        title="Book a free strategy call"
      />
    </div>
  );
}
