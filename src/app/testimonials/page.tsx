import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real client reviews for Brahma Stack — web development, WordPress, Laravel, and full-stack delivery rated 5 stars by businesses in the USA, UK, Canada, and India.",
  keywords: [
    "Brahma Stack reviews",
    "web development company reviews India",
    "software development testimonials India",
    "client feedback IT company Jaipur",
    "WordPress developer reviews",
    "Laravel developer testimonials",
    "best web development company India",
    "trusted IT company India",
    "5 star web developer India",
  ],
  openGraph: {
    title: "Client Testimonials | Brahma Stack Reviews",
    description:
      "5-star reviews from founders and businesses in the US, UK, Canada, and India who trusted Brahma Stack.",
    url: "https://brahmastack.com/testimonials",
  },
};

const REVIEWS = [
  {
    quote:
      "Our client was very satisfied with the web development services. They had a specific goal in mind for their website and BrahmaStack delivered on that goal with ease.",
    by: "Project Partner",
    role: "Web Development Engagement",
    location: "United States",
    initials: "PP",
    color: "#f5a623",
    stars: 5,
  },
  {
    quote:
      "Gaurav is a highly skilled developer. He understood quickly and precisely what was needed and produced amazing results as part of this project.",
    by: "Client from Dallas",
    role: "CEO, IT Business",
    location: "Dallas, USA",
    initials: "CD",
    color: "#4f9ef8",
    stars: 5,
  },
  {
    quote:
      "Vinita is an excellent full-stack developer. She worked on my WordPress site for six months and delivered consistently high-quality results—detail-oriented and a pleasure to work with.",
    by: "Courtney Henry",
    role: "Business Owner",
    location: "United Kingdom",
    initials: "CH",
    color: "#7c5cbf",
    stars: 5,
  },
  {
    quote:
      "Gaurav has strong WordPress skills and technical expertise. When fully engaged, he brings great value through problem-solving and development abilities.",
    by: "Client from Oshawa",
    role: "CEO, IT Business",
    location: "Oshawa, Canada",
    initials: "CO",
    color: "#2ec27e",
    stars: 5,
  },
  {
    quote:
      "Nakul is a top-notch full-stack developer—quality work with creativity and precision. Professional, reliable, and efficient; highly recommended.",
    by: "Client from London",
    role: "Business Owner",
    location: "London, UK",
    initials: "CL",
    color: "#e05c5c",
    stars: 5,
  },
] as const;

/**
 * Renders a row of filled star icons for a given count.
 */
function Stars({ count }: { count: number }) {
  return (
    <div className="tm-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

/**
 * Testimonials page — redesigned with dark hero, masonry card grid,
 * star ratings, avatar initials, and a closing CTA band.
 */
export default function TestimonialsPage() {
  return (
    <>
      {/* ── HERO HEADER ── */}
      <section className="tm-hero">
        <div className="tm-hero-glow" />
        <div className="tm-hero-inner">
          <span className="sec-label">Client Reviews</span>
          <h1 className="tm-h1">
            Words from the people <span className="o">we have worked with</span>
          </h1>
          <p className="tm-sub">
            Real feedback from founders and teams across the US, UK, Canada, and
            India who trusted us to build their digital products.
          </p>
          <div className="tm-meta-row">
            <div className="tm-badge">⭐ 5.0 average rating</div>
            <div className="tm-badge">🌍 Clients in 4 countries</div>
            <div className="tm-badge">✅ 50+ projects delivered</div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS GRID ── */}
      <section className="tm-grid-section">
        <div className="tm-grid">
          {REVIEWS.map((r) => (
            <article key={r.by} className="tm-card">
              <div className="tm-card-top">
                <div
                  className="tm-avatar"
                  style={{ background: r.color }}
                  aria-hidden="true"
                >
                  {r.initials}
                </div>
                <div className="tm-author">
                  <strong className="tm-name">{r.by}</strong>
                  <span className="tm-role">{r.role}</span>
                  <span className="tm-location">📍 {r.location}</span>
                </div>
              </div>
              <Stars count={r.stars} />
              <blockquote className="tm-quote">
                <span className="tm-ql">&ldquo;</span>
                {r.quote}
                <span className="tm-qr">&rdquo;</span>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="tm-cta">
        <div className="tm-cta-inner">
          <h2 className="tm-cta-h">Ready to be our next success story?</h2>
          <p className="tm-cta-p">
            Let&apos;s talk about your project and see how we can help.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
