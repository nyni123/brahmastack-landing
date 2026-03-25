import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, ecommerce stores, mobile apps, SaaS platforms, API integration, and AI automation services by Brahma Stack — IT company in Jaipur, India.",
  keywords: [
    "web development services India",
    "ecommerce development India",
    "mobile app development services India",
    "SaaS development company Jaipur",
    "API integration services India",
    "AI automation development India",
    "WordPress development services",
    "Laravel development India",
    "Shopify development India",
    "custom software development services India",
    "hire developer India",
    "React Native app development India",
    "Flutter app development India",
  ],
  openGraph: {
    title: "Services | Web, Mobile, SaaS & AI Development — Brahma Stack",
    description:
      "Full-stack web, mobile, ecommerce, SaaS, API, and AI development services from Jaipur, India.",
    url: "https://brahmastack.com/services",
  },
};

const SERVICES = [
  {
    id: "web",
    icon: "🌐",
    title: "Web Development",
    body: "Business websites, landing pages, and web apps—fast, SEO-ready, and built to convert.",
    tags: ["WordPress", "Laravel", "Angular", "Next.js"],
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile Apps",
    body: "Android and iOS apps built for smooth UX, performance, and daily engagement.",
    tags: ["React Native", "Flutter", "PWA"],
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "Ecommerce",
    body: "Complete online stores with payments, inventory, orders, and delivery—ready to scale.",
    tags: ["WooCommerce", "Shopify", "Custom"],
  },
  {
    id: "saas",
    icon: "☁️",
    title: "SaaS Platforms",
    body: "Subscription software with billing, multi-tenant architecture, and cloud scaling.",
    tags: ["Cloud", "Multi-tenant", "Stripe"],
  },
  {
    id: "api",
    icon: "🔗",
    title: "API & Integrations",
    body: "Connect your CRM, ERP, payments, and third-party tools—no more manual work.",
    tags: ["REST API", "GraphQL", "Webhooks"],
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI & Automation",
    body: "Chatbots, smart reports, and ML workflows that save time and reduce effort.",
    tags: ["OpenAI", "Python", "Automation"],
  },
] as const;

/**
 * Services page — compact header, immediate 3×2 card grid, process + CTA.
 * @author Cursor
 */
export default function ServicesPage() {
  return (
    <>
      {/* ── COMPACT HEADER ── */}
      <section className="sp2-header">
        <div className="sp2-header-glow" />
        <div className="sp2-header-inner">
          <span className="sec-label">Our Services</span>
          <h1 className="sp2-h1">Everything you need to build <span className="o">your digital product</span></h1>
          <p className="sp2-sub">
            One team for web, mobile, ecommerce, SaaS, integrations, and AI—so you never have to juggle vendors.
          </p>
        </div>
      </section>

      {/* ── SERVICE GRID ── */}
      <section className="sp2-grid-section">
        <div className="sp2-grid">
          {SERVICES.map((s) => (
            <Link key={s.id} href="/contact" id={s.id} className="sp2-card">
              <div className="sp2-card-head">
                <div className="sp2-icon">{s.icon}</div>
                <span className="sp2-arrow">→</span>
              </div>
              <h2 className="sp2-title">{s.title}</h2>
              <p className="sp2-body">{s.body}</p>
              <div className="sp2-tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── THIN PROCESS BAR ── */}
      <section className="sp2-process">
        <div className="sp2-process-inner">
          <span className="sec-label" style={{ display: "block", textAlign: "center", marginBottom: "32px" }}>How we work</span>
          <div className="sp2-steps">
            {[
              { n: "1", icon: "💬", t: "Discovery call",   d: "Free call—share your idea, we recommend the best approach." },
              { n: "2", icon: "📐", t: "Design first",      d: "You approve the design before a single line is written." },
              { n: "3", icon: "⚙️", t: "Weekly updates",    d: "Track progress every week—no surprises, full transparency." },
              { n: "4", icon: "🚀", t: "Launch & support",  d: "We go live and stay available for fixes and changes." },
            ].map((p) => (
              <div key={p.n} className="sp2-step">
                <div className="sp2-step-num">{p.n}</div>
                <div className="sp2-step-icon">{p.icon}</div>
                <div className="sp2-step-t">{p.t}</div>
                <p className="sp2-step-d">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp2-cta">
        <div className="sp2-cta-glow" />
        <div className="sp2-cta-inner">
          <h2 className="sp2-cta-h2">Ready to build something great?</h2>
          <p className="sp2-cta-p">Book a free call—we reply within 24 hours.</p>
          <div className="sp2-cta-btns">
            <Link href="/contact" className="cta-main">Start your project →</Link>
            <Link href="/portfolio" className="cta-sec">See our work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
