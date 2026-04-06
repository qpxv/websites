import WorkBrowserChrome from "./WorkBrowserChrome";
import WorkBrowserContent from "./WorkBrowserContent";
import { WorkItem } from "./workData";

export default function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div>
      {/* Browser mockup */}
      <div
        className="w-full rounded-2xl overflow-hidden flex flex-col"
        style={{
          border: "1px solid rgba(55, 98, 227, 0.15)",
          boxShadow: "0 32px 80px rgba(55,98,227,0.14), 0 8px 24px rgba(0,0,0,0.08)",
          background: "#fff",
        }}
      >
        <WorkBrowserChrome url={item.displayUrl} />
        <WorkBrowserContent src={item.siteUrl} imageUrl={item.imageUrl} />
      </div>

      {/* Metadata row */}
      <div className="flex items-center justify-between mt-4 px-1">
        <div>
          <p className="text-sm font-semibold text-foreground leading-none">{item.clientName}</p>
          <p className="text-xs text-muted-text leading-none mt-1">{item.niche}</p>
        </div>
        {item.siteUrl && (
          <a
            href={item.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn group flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--blue)" }}
          >
            <span className="ghost-btn-text">View site</span>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="btn-arrow">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
