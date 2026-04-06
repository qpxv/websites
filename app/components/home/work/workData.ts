export type WorkItem = {
  id: string;
  clientName: string;
  niche: string;
  siteUrl: string | null;      // live site in iframe
  imageUrl?: string;           // screenshot fallback (takes priority over iframe if set)
  displayUrl: string;
};

export const workItems: WorkItem[] = [
  {
    id: "tyler",
    clientName: "Tyler Van Acker",
    niche: "Health Coach",
    siteUrl: "https://tylervanacker.framer.website",
    displayUrl: "tylervanacker.com",
  },
  // Add more clients as URLs are confirmed — siteUrl: null = "Coming soon"
  {
    id: "manuela",
    clientName: "Manuela W.",
    niche: "Wellness Coach",
    siteUrl: "https://benwinzerbiz.wixstudio.com/winzermassage",
    displayUrl: "winzermassage.de",
  },
  {
    id: "darrell",
    clientName: "Darrell Kawooya",
    niche: "Ecom Coach",
    siteUrl: null,
    imageUrl: "/67ca1f098c502a5d6738399b_refined-berlin-case-study-preview-picture-website.png",
    displayUrl: "refined-berlin.de",
  },
];
