"use client";

import { useState } from "react";

const legalContent = {
  "Terms of Service": `**General Terms and Conditions**

Version: 24.02.2025

**Preamble**
These General Terms and Conditions (GTC) govern the legal framework for the working relationship between Ben Louis Winzer (hereinafter "Provider", "Agency") and his B2B clients (hereinafter "Client"). The Provider offers professional services in the areas of web design and web development. The following provisions serve to clarify the mutual rights and obligations of the parties.

**§ 1 Scope**
(1) These GTC apply in their version valid at the time of commissioning to all contracts between Ben Louis Winzer, Käthe-Paulus-Str. 172, 50829 Cologne, Germany, benwinzer.biz@gmail.com (hereinafter "Provider", "Agency") and the respective client. The parties are collectively referred to as "the Parties".
(2) Deviating GTC of the client shall not apply unless the Provider expressly agrees to their validity in writing.
(3) The Provider renders services in web design and web development exclusively for entrepreneurs within the meaning of § 14 BGB (German Civil Code).
(4) Offers made by the Provider are always non-binding unless expressly designated as binding.

**§ 2 Subject Matter**
The scope of services includes consulting and implementation in web design and web development, as well as the design of digital user interfaces and brand identities. This includes in particular: conception, design and development of websites, landing pages and online platforms; programming and implementation of individual web solutions; integration of CMS systems such as WordPress or Webflow; maintenance, updates and technical support.

The client is solely responsible for creating a legally compliant privacy policy, imprint, and terms and conditions. These are not part of the services provided by the Provider.

**§ 3 Contract Formation, Invoicing, Term**
(1) Contracts are concluded in German, generally via remote communication means such as email.
(2) The client must be at least 18 years of age and fully legally competent.
(3) Prior to a binding commission, the client receives a non-binding proposal outlining the scope and fee. The client makes a binding offer by agreeing to the terms stated; the Provider accepts within five working days.
(4) Invoicing occurs per project. Payment is generally due at the start of the project, prior to commencement of work. Payment is due within 10 days of the invoice date.

**§ 4 Client Cooperation Obligations**
(1) Timely cooperation by the client is required for the Agency to fulfil its obligations, including provision of texts, images, access credentials, and other necessary information.
(2) If the client fails to cooperate, the agreed delivery period extends accordingly. If content is not provided despite written reminder and a further 7-day grace period, the Agency is entitled to invoice the full agreed fee.
(3) The client grants the Agency a non-exclusive, unlimited right to use the client's brand, logo, and protected content for reference purposes (e.g. on the Agency's website). No licence fees apply for this use.

**§ 5 Acceptance, Client Review Obligation**
(1) The Agency will provide completed work promptly and notify the client.
(2) The client must review the delivered work carefully within five days and report any defects in writing.
(3) If no written complaint is made within five days, the work is deemed accepted.
(4) Upon acceptance, the Agency's responsibility for further adjustments ends unless separate maintenance contracts have been agreed.

**§ 6 Change Requests After Contract Formation**
Change requests must be submitted in writing. The Provider may submit a new proposal in response. Contract formation for such changes follows § 3 accordingly.

**§ 7 Place of Performance**
The place of performance is the Provider's registered office. Work may be carried out elsewhere. Travel costs for work at the client's location are borne by the client.

**§ 8 Fees, Invoicing, Due Date**
(1) The agreed fee is due for the Agency's services. Prices are in euros plus applicable VAT.
(2) The client must transfer the agreed fee within 10 days of proper invoicing to the account specified by the Agency.

**§ 9 Warranty for Works**
(1) For contractually agreed work-type services, warranty claims follow the provisions below and applicable law.
(2) In the event of non-compliant performance, the client must notify the Provider in writing immediately and allow at least three weeks for remedy.
(3) If the deadline passes without remedy or the Provider refuses, the client may reduce the fee pursuant to § 638 BGB.
(4) Warranty claims expire one year after acceptance.
(5) The Provider does not guarantee permanent compatibility with all future technical changes.
(6) Unauthorised modifications by the client or third parties void warranty claims.

**§ 10 Limitation of Liability, Force Majeure**
(1) The Provider is liable only for intent and gross negligence. For breach of a cardinal obligation, liability for simple negligence is limited to typically foreseeable damage. Liability for injury to life, body, or health remains unaffected.
(2) Force majeure events — including natural disasters, war, civil unrest, government orders, or strikes — do not constitute a breach of contract. Each party must notify the other immediately in writing.
(3) The Provider accepts no liability for permanent, uninterrupted availability of internet-based communication channels.
(4) The Provider accepts no liability for the legal permissibility of client-supplied content, or for trademark, copyright, or data protection infringements arising from such content.

**§ 11 Copyright and Usage Rights**
(1) The Provider grants the client a non-exclusive, territorially and temporally unlimited right of use for published design and content work.
(2) Usage rights take effect only upon full payment of the agreed fee.
(3) Transfer of usage rights to third parties requires the Provider's written consent.
(4) The Provider may add a discreet credit ("Designed by Ben Louis Winzer"). Removal requires prior written consent.
(5) Material modifications to the deliverables require the Provider's consent.

**§ 12 Confidentiality and Non-Disparagement**
(1) Confidential information disclosed during contract negotiations must be treated as such and not shared with third parties without written consent.
(2) Client representatives must store confidential information securely, limit copies to what is necessary, and notify the Provider immediately of any unauthorised access.
(3) Both parties agree not to make negative or reputation-damaging statements about each other during or after the contract period, unless such statements are objectively justified and proportionate.

**§ 13 Final Provisions**
(1) This contract is governed exclusively by the law of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods. The contract language is German.
(2) The exclusive place of jurisdiction for all disputes is Cologne.
(3) Amendments to this contract require written form. No oral side agreements exist.
(4) Should any provision of this contract be wholly or partially invalid, the validity of the remaining provisions is not affected.`,

  "Privacy Policy": `**Privacy Policy**

Last updated: 10 March 2025

**1. Introduction**
The protection of your personal data is important to us. This Privacy Policy informs you about the nature, scope, and purposes of personal data processing within our online offering, including our website, mobile applications, and social media presences (collectively "Online Offering").

**2. Controller**
The controller responsible for processing personal data pursuant to Art. 4 No. 7 GDPR is:

Ben Louis Winzer
Käthe-Paulus-Str. 172
50829 Cologne, Germany
Email: benwinzer.biz@gmail.com

**3. Data Processed, Purposes, and Legal Bases**
We process in particular: master data (e.g. name, address), contact data (e.g. email, phone), content data (e.g. messages, uploaded documents), contract data, payment and billing data, usage data (e.g. pages visited, access times), and meta/communication data (e.g. IP address, device information).

We process your data to: provide our Online Offering and fulfil contractual obligations; handle enquiries and communicate with users; improve and optimise our website and services; ensure security measures and protect against misuse; and fulfil legal obligations.

Legal bases: consent (Art. 6(1)(a) GDPR); contract performance or pre-contractual measures (Art. 6(1)(b) GDPR); fulfilment of a legal obligation (Art. 6(1)(c) GDPR); and legitimate interests (Art. 6(1)(f) GDPR), in particular for optimisation and security of our Online Offering. Additionally, the German Federal Data Protection Act (BDSG) applies.

**4. Security Measures**
We implement appropriate technical and organisational measures pursuant to Art. 32 GDPR, including: SSL/TLS encryption; access restrictions and authentication procedures; regular security audits and system updates; privacy by design and default.

**5. Disclosure of Personal Data**
We only disclose personal data to third parties where necessary or legally required, in particular to: IT service providers (e.g. hosting, maintenance); payment service providers; and authorities where legally obligated.

**6. International Data Transfers**
If personal data is transferred to third countries outside the EU/EEA, this is done exclusively in compliance with GDPR requirements, using EU standard contractual clauses, data subject consent, or EU Commission adequacy decisions.

**7. Cookies and Tracking Technologies**
Our website uses cookies to improve user experience. Categories include: necessary cookies (for website functionality); analytics cookies (for website and service improvement); marketing cookies (for personalised advertising). You may withdraw consent for non-essential cookies at any time via your browser settings.

**8. Contact and Enquiry Management**
When you contact us, we process your personal data to handle the enquiry. Data processed includes: master data, contact data, and content data. Legal bases: contract performance (Art. 6(1)(b) GDPR) and legitimate interests (Art. 6(1)(f) GDPR). Data is deleted once no longer required for its purpose.

**9. Your Rights**
As a data subject, you have the following rights under the GDPR: right of access (Art. 15); right to rectification (Art. 16); right to erasure / "right to be forgotten" (Art. 17); right to restriction of processing (Art. 18); right to data portability (Art. 20); right to object (Art. 21); and right to withdraw consent (Art. 7(3)).

**10. Third-Party Services and Web Hosting**
Our website is hosted by Vercel, Inc., San Francisco, USA. Vercel processes technical data to provide the website. Data transfer is based on EU standard contractual clauses. For appointment booking we use Calendly LLC, Atlanta, USA; contact and appointment data is processed on the basis of Art. 6(1)(b) GDPR.

**11. Changes to This Privacy Policy**
We reserve the right to amend this Privacy Policy to reflect new legal requirements. Changes will be published on our website.`,

  "Imprint": `**Imprint**

Information pursuant to § 5 TMG (German Telemedia Act).

**Service Provider**
Ben Louis Winzer
Käthe-Paulus-Str. 172
50829 Cologne, Germany

**Contact**
Email: benwinzer.biz@gmail.com

**Professional Activity**
Ben Louis Winzer operates as a freelance web designer and developer. All services are provided on a contractual basis to business clients.

**Disclaimer**
The content of this website has been compiled with the utmost care. However, Ben Louis Winzer cannot guarantee the accuracy, completeness, or timeliness of the information provided. Liability for the content of external links is excluded — the operators of linked pages are solely responsible for their content.

**Copyright**
All content, designs, and copy on this website are the intellectual property of Ben Louis Winzer unless otherwise stated. Reproduction without prior written consent is not permitted.`,
};

type LegalKey = keyof typeof legalContent;

export default function LegalModals() {
  const [open, setOpen] = useState<LegalKey | null>(null);

  return (
    <>
      {/* Trigger links */}
      <nav className="flex items-center gap-4 shrink-0">
        {(Object.keys(legalContent) as LegalKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setOpen(key)}
            className="text-xs text-muted-text hover:text-foreground transition-colors duration-200"
          >
            {key}
          </button>
        ))}
      </nav>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[70vh] rounded-2xl flex flex-col overflow-hidden"
            style={{
              background: "#fff",
              border: "1px solid var(--border)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b shrink-0"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-sm font-semibold text-foreground">{open}</span>
              <button
                onClick={() => setOpen(null)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted-text hover:text-foreground hover:bg-gray-100 transition-all duration-150"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-7 py-6">
              {legalContent[open].split("\n\n").map((block, i) => {
                if (block.startsWith("**") && block.endsWith("**") && !block.slice(2).includes("**")) {
                  return (
                    <h3 key={i} className="text-base font-bold text-foreground mt-6 mb-2 first:mt-0">
                      {block.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (block.startsWith("**")) {
                  return (
                    <p key={i} className="text-sm text-muted-text leading-relaxed mb-4">
                      {block.split("**").map((part, j) =>
                        j % 2 === 1
                          ? <strong key={j} className="text-foreground font-semibold">{part}</strong>
                          : part
                      )}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-sm text-muted-text leading-relaxed mb-4">
                    {block}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
