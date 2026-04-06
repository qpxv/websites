import BrowserChrome from "./BrowserChrome";
import BrowserContent from "./BrowserContent";

export default function BrowserWindow() {
  return (
    <div
      className="relative w-full max-w-[680px] rounded-2xl overflow-hidden flex flex-col"
      style={{
        border: "1px solid rgba(55, 98, 227, 0.15)",
        boxShadow: "0 32px 80px rgba(55,98,227,0.18), 0 8px 24px rgba(0,0,0,0.10)",
        background: "#fff",
        height: "540px",
      }}
    >
      <BrowserChrome />
      <BrowserContent />
    </div>
  );
}
