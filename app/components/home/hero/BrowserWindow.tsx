import BrowserChrome from "./BrowserChrome";
import BrowserContent from "./BrowserContent";

export default function BrowserWindow() {
  return (
    <div
      className="relative w-full max-w-[520px] rounded-2xl overflow-hidden"
      style={{
        border: "1px solid rgba(55, 98, 227, 0.15)",
        boxShadow: "0 24px 64px rgba(55, 98, 227, 0.12), 0 4px 16px rgba(0,0,0,0.08)",
        background: "#fff",
      }}
    >
      <BrowserChrome />
      <BrowserContent />
    </div>
  );
}
