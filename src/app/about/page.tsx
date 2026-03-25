import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Brahma Stack is a Jaipur-based IT company with 8+ years of experience delivering websites, mobile apps, SaaS platforms, and integrations for businesses in India, USA, UK, and Canada.",
  keywords: [
    "about Brahma Stack",
    "IT company Jaipur India",
    "software development team India",
    "web development agency Jaipur",
    "experienced developers India",
    "full stack development team Jaipur",
    "IT firm Rajasthan",
    "technology partner India",
    "software outsourcing India",
    "Indian IT agency",
  ],
  openGraph: {
    title: "About Brahma Stack | IT Company Jaipur, India",
    description:
      "8+ years, 50+ projects, clients in 10+ countries. Meet the team behind BrahmaStack Technologies.",
    url: "https://brahmastack.com/about",
  },
};

const WHY = [
  { icon: "👨‍💻", title: "Experienced team", desc: "Full-stack developers, UI/UX designers, and QA engineers who have shipped 50+ products." },
  { icon: "🎨", title: "Design-first approach", desc: "Every project starts with design approval. You see it before we build it." },
  { icon: "🌍", title: "Global reach", desc: "Clients from India, USA, UK, Canada, and 10+ other countries trust us with their products." },
  { icon: "💬", title: "Clear communication", desc: "Regular updates at every stage. No jargon, no surprises, full transparency." },
  { icon: "⏱️", title: "On-time delivery", desc: "We commit to deadlines and we keep them. Missed dates are not how we operate." },
  { icon: "🔧", title: "Post-launch support", desc: "Our relationship doesn't end at launch. We stay available for fixes, changes, and growth." },
] as const;

const STATS = [
  { num: "50+", label: "Projects delivered" },
  { num: "8+",  label: "Years of experience" },
  { num: "10+", label: "Countries served" },
  { num: "100%", label: "Client satisfaction" },
] as const;

/**
 * About page — mission, stats, why-us grid, CTA.
 * @author Cursor
 */
export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-glow" />
        <div className="ab-hero-inner">
          <span className="sec-label">About Us</span>
          <h1 className="ab-h1">
            We are your long-term <span className="o">technology partner</span>
          </h1>
          <p className="ab-sub">
            Brahma<b style={{color:"var(--orange)"}}>Stack</b> is a Jaipur-based IT agency that turns business ideas
            into reliable digital products—websites, mobile apps, SaaS platforms,
            and everything in between. We have been doing this for 8+ years across
            10+ countries.
          </p>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="ab-stats-strip">
        {STATS.map((s, i) => (
          <Fragment key={s.num}>
            <div className="ab-stat">
              <span className="ab-stat-n">{s.num}</span>
              <span className="ab-stat-l">{s.label}</span>
            </div>
            {i < STATS.length - 1 && <div className="ab-stat-sep" />}
          </Fragment>
        ))}
      </section>

      {/* ── MISSION ── */}
      <section className="ab-mission">
        <div className="ab-mission-inner">
          <div className="ab-mission-label">
            <span className="sec-label">Our mission</span>
          </div>
          <blockquote className="ab-mission-quote">
            We go beyond delivering services—we build long-term partnerships
            rooted in trust, quality, and innovation. Our goal is to make
            technology work for your business, not the other way around.
          </blockquote>
        </div>
      </section>

      {/* ── WHY GRID ── */}
      <section className="ab-why">
        <div className="ab-why-inner">
          <div className="sec-center" style={{ marginBottom: "48px" }}>
            <span className="sec-label">Why choose us</span>
            <h2 className="sec-title">What sets Brahma<b style={{color:"var(--orange)"}}>Stack</b> apart</h2>
          </div>
          <div className="ab-why-grid">
            {WHY.map((w) => (
              <div key={w.title} className="ab-why-card">
                <div className="ab-why-icon">{w.icon}</div>
                <div>
                  <div className="ab-why-t">{w.title}</div>
                  <p className="ab-why-d">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ab-cta">
        <div className="ab-cta-glow" />
        <div className="ab-cta-inner">
          <h2 className="ab-cta-h2">Ready to work together?</h2>
          <p className="ab-cta-p">
            Tell us about your project—we offer a free consultation and reply within 24 hours.
          </p>
          <div className="ab-cta-btns">
            <Link href="/contact" className="cta-main">Start a project →</Link>
            <Link href="/portfolio" className="cta-sec">See our work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
