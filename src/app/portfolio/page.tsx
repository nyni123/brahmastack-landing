import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real projects built by Brahma Stack — CRM platforms, ecommerce stores, SaaS products, education websites, and marketing tools for clients in India, USA, UK, and Canada.",
  keywords: [
    "web development portfolio India",
    "software projects India",
    "CRM development India",
    "ecommerce website portfolio",
    "SaaS product development India",
    "custom software projects Jaipur",
    "mobile app portfolio India",
    "WordPress projects India",
    "Laravel projects India",
    "IT company portfolio Jaipur",
  ],
  openGraph: {
    title: "Portfolio | Real Products Built by Brahma Stack",
    description:
      "CRM platforms, ecommerce stores, SaaS products, and more — built for businesses in the US, UK, Canada, and India.",
    url: "https://brahmastack.com/portfolio",
  },
};

const FEATURED = {
  cat: "CRM Software",
  name: "My Client Wave",
  url: "https://myclientwave.com/",
  tagline: "All-in-one CRM platform for marketing agencies",
  desc: "A full-featured cloud CRM built for modern businesses—lead management, appointment scheduling, deal pipeline tracking, role-based user access, advanced analytics, and customisable dashboards. Trusted by agencies and businesses worldwide.",
  highlights: [
    { icon: "📋", label: "Lead & deal management" },
    { icon: "📅", label: "Appointment scheduling" },
    { icon: "📊", label: "Analytics & reporting" },
    { icon: "👥", label: "Multi-user roles & access" },
    { icon: "☁️", label: "Fully cloud-based" },
    { icon: "🔗", label: "Seamless integrations" },
  ],
  tech: ["Laravel", "React", "MySQL", "REST API", "Cloud"],
  cls: "wt2",
  icon: "📊",
} as const;

type OtherProject = {
  cat: string;
  name: string;
  desc: string;
  tech: readonly string[];
  icon: string;
  cls: string;
  img?: string;
  url?: string;
};

const OTHER_PROJECTS: OtherProject[] = [
  {
    cat: "E-commerce store",
    name: "Pick n Melt",
    desc: "A UK-based wax melts and candle store with a huge product range, subscriptions, gift sets, and fast delivery—rated 4.9 stars on Trustpilot.",
    tech: ["Shopify", "E-commerce", "Payments"],
    icon: "🛍️", cls: "wt3",
    img: "/picknmelt/picknmelt.png",
    url: "https://www.picknmelt.com/",
  },
  {
    cat: "Payment infrastructure",
    name: "eWallet Cashier",
    desc: "Enterprise automated payment cashier for high-risk industries—fresh wallet addresses on demand, fraud detection, real-time Telegram alerts, and a full admin portal.",
    tech: ["Node.js", "API", "Automation", "White Label"],
    icon: "💳", cls: "wt2",
    img: "/ewallet/ewallet.png",
    url: "https://ewalletcashier.com/",
  },
  {
    cat: "Marketing platform",
    name: "Creator Pilot",
    desc: "An influencer campaign management tool that helps brands discover creators, manage campaigns, and track ROI end-to-end.",
    tech: ["Laravel", "Angular", "API"],
    icon: "🎯", cls: "wt4",
    img: "/creatorsPilot/CreatorPilot.png",
    url: "https://www.creatorspilot.com/",
  },
  {
    cat: "Education website",
    name: "GCPS Foundation",
    desc: "A clean and accessible school website with admissions, events, news, and staff management built on WordPress.",
    tech: ["WordPress", "SEO", "PHP"],
    icon: "🎓", cls: "wt5",
    img: "/gcps/gcps.png",
    url: "https://gcps-foundation.org/",
  },
  {
    cat: "IT association",
    name: "ATP Connect",
    desc: "A member portal and directory for an IT professionals association with event management and resource sharing.",
    tech: ["WordPress", "Custom Plugin", "PHP"],
    icon: "🤝", cls: "wt6",
    img: "/atp/ATP.png",
    url: "https://atpconnect.org/",
  },
];

/**
 * Portfolio page — featured project hero + project grid with details.
 * @author Cursor
 */
export default function PortfolioPage() {
  return (
    <>
      {/* ── COMPACT HEADER ── */}
      <section className="pf-header">
        <div className="pf-header-glow" />
        <div className="pf-header-inner">
          <span className="sec-label">Our Work</span>
          <h1 className="pf-h1">
            Real products built for <span className="o">real businesses</span>
          </h1>
          <p className="pf-sub">
            From CRM platforms to healthcare portals and ecommerce stores—each
            project is tailored to the client&apos;s goals, not a template.
          </p>
        </div>
      </section>

      {/* ── FEATURED PROJECT ── */}
      <section className="pf-featured">
        <div className="pf-featured-inner">
          <div className="pf-feat-badge">Featured project</div>

          <div className="pf-feat-card">
            {/* Left: visual */}
            <div className="pf-feat-visual pf-feat-visual--screenshot">
              <Image
                src="/myclientwav/myclientwav.png"
                alt="My Client Wave — CRM dashboard screenshot"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
              <div className="pf-feat-overlay">
                <a
                  href={FEATURED.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-feat-visit"
                >
                  Visit live site →
                </a>
              </div>
            </div>

            {/* Right: content */}
            <div className="pf-feat-content">
              <span className="pf-feat-cat">{FEATURED.cat}</span>
              <h2 className="pf-feat-name">{FEATURED.name}</h2>
              <p className="pf-feat-tagline">{FEATURED.tagline}</p>
              <p className="pf-feat-desc">{FEATURED.desc}</p>

              <div className="pf-feat-highlights">
                {FEATURED.highlights.map((h) => (
                  <div key={h.label} className="pf-feat-hl">
                    <span className="pf-feat-hl-icon">{h.icon}</span>
                    <span className="pf-feat-hl-label">{h.label}</span>
                  </div>
                ))}
              </div>

              <div className="pf-feat-tech">
                {FEATURED.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="pf-feat-actions">
                <a
                  href={FEATURED.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-main"
                >
                  View live project →
                </a>
                <Link href="/contact" className="cta-sec">Build something similar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER PROJECTS ── */}
      <section className="pf-grid-section">
        <div className="pf-grid-inner">
          <div className="sec-center" style={{ marginBottom: "40px" }}>
            <span className="sec-label">More projects</span>
            <h2 className="sec-title">More work we are proud of</h2>
          </div>

          <div className="pf-grid">
            {OTHER_PROJECTS.map((p) => {
              /* Wrap in <a> when project has a live URL, otherwise plain <div> */
              const hasUrl = "url" in p;
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                hasUrl ? (
                  <a
                    href={(p as { url: string }).url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-card"
                    aria-label={`Visit ${p.name} live site`}
                  >
                    {children}
                  </a>
                ) : (
                  <div className="pf-card">{children}</div>
                );

              return (
                <CardWrapper key={p.name}>
                  {"img" in p ? (
                    <div className="pf-card-thumb pf-card-thumb--img">
                      <Image
                        src={p.img as string}
                        alt={`${p.name} screenshot`}
                        fill
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        sizes="(max-width: 580px) 100vw, (max-width: 900px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className={`pf-card-thumb ${p.cls}`}>
                      <span className="pf-card-icon">{p.icon}</span>
                    </div>
                  )}
                  <div className="pf-card-body">
                    <span className="pf-card-cat">{p.cat}</span>
                    <h3 className="pf-card-name">{p.name}</h3>
                    <p className="pf-card-desc">{p.desc}</p>
                    <div className="pf-card-tech">
                      {p.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    {hasUrl && (
                      <span className="pf-card-link">Visit live site →</span>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pf-cta">
        <div className="pf-cta-glow" />
        <div className="pf-cta-inner">
          <h2 className="pf-cta-h2">Have a project in mind?</h2>
          <p className="pf-cta-p">
            Tell us what you are building. We offer a free consultation and
            reply within 24 hours.
          </p>
          <div className="pf-cta-btns">
            <Link href="/contact" className="cta-main">Start your project →</Link>
            <Link href="/services" className="cta-sec">View our services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
