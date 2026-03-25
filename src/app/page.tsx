import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

/* @author Cursor */
const FEATURED_PROJECTS = [
  { cat: "CRM Software",            name: "My Client Wave",  icon: "📊", cls: "wt2", img: "/myclientwav/myclientwav.png", url: "https://myclientwave.com/" },
  { cat: "Online Store",            name: "Pick n Melt",     icon: "🛍️", cls: "wt3", img: "/picknmelt/picknmelt.png",    url: "https://www.picknmelt.com/" },
  { cat: "Payment Infrastructure",  name: "eWallet Cashier", icon: "💳", cls: "wt2", img: "/ewallet/ewallet.png",         url: "https://ewalletcashier.com/" },
  { cat: "Marketing Platform",      name: "Creator Pilot",   icon: "🎯", cls: "wt4", img: "/creatorsPilot/CreatorPilot.png", url: "https://www.creatorspilot.com/" },
  { cat: "Education Website",       name: "GCPS Foundation", icon: "🎓", cls: "wt5", img: "/gcps/gcps.png",               url: "https://gcps-foundation.org/" },
  { cat: "IT Association",          name: "ATP Connect",     icon: "🤝", cls: "wt6", img: "/atp/ATP.png",                 url: "https://atpconnect.org/" },
] as const;

export const metadata: Metadata = {
  title: {
    absolute: "Brahma Stack | Web Development, Mobile Apps & SaaS | Jaipur, India",
  },
  description:
    "Brahma Stack builds custom websites, mobile apps, SaaS platforms, and ecommerce stores for businesses worldwide. IT agency in Jaipur, India with 8+ years experience and 50+ delivered projects.",
  keywords: [
    "web development company Jaipur India",
    "custom software development India",
    "mobile app development company India",
    "SaaS development Jaipur",
    "ecommerce website development India",
    "IT agency Jaipur",
    "hire web developer India",
    "WordPress developer Jaipur",
    "Laravel developer India",
    "React developer India",
    "software company Jaipur Rajasthan",
    "e-signature platform India",
    "DocuSign alternative India",
  ],
  openGraph: {
    title: "Brahma Stack | Web Development, Mobile Apps & SaaS | Jaipur, India",
    description:
      "Custom websites, mobile apps, SaaS, and ecommerce from Jaipur India. 8+ years · 50+ projects · clients in USA, UK, Canada.",
    url: "https://brahmastack.com",
  },
};

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="hero-glow" />
        <div className="hero-pills-row">
          <div className="hero-pill">
            <span className="pill-dot" />
            IT Agency from Jaipur, India · 8+ Years
          </div>
          <a href="#inhouse" className="hero-pill hero-pill--usp">
            <span className="pill-dot pill-dot--orange" />
            ⚡ We build our own tools — e-signature platform included
          </a>
        </div>
        <h1 className="hero-h1">
          We Build <span className="o">Websites,</span>
          <br />
          Apps <span className="dim">&</span> Software
          <br />
          <span className="o">For Your Business</span>
        </h1>
        <p className="hero-sub">
          We turn your idea into a working digital product—whether you need a
          website, a mobile app, or a SaaS platform, all in one place.
        </p>
        <div className="hero-ctas">
          <Link href="/contact" className="cta-main">
            Start Your Project →
          </Link>
          <a href="#what" className="cta-sec">
            See What We Do
          </a>
        </div>
        <div className="trust-row">
          <div className="trust-item">
            <span className="trust-num">50+</span>
            <span className="trust-lbl">Projects Done</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">10+</span>
            <span className="trust-lbl">Countries</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">8+</span>
            <span className="trust-lbl">Years</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">100%</span>
            <span className="trust-lbl">Satisfaction</span>
          </div>
        </div>
      </section>

      <section id="what">
        <div className="sec-center reveal">
          <span className="sec-label">What We Do</span>
          <h2 className="sec-title">What We Build For You</h2>
          <p className="sec-desc">
            From a simple business website to a full SaaS product—we tailor
            everything to what you need.
          </p>
        </div>
        <div className="services-grid">
          <Link href="/contact" className="svc svc-link reveal">
            <div className="svc-icon">🌐</div>
            <div className="svc-title">Website Development</div>
            <p className="svc-body">
              Business sites, landing pages, portfolios, and company
              websites—fast, mobile-friendly, and SEO-ready so visitors know who
              you are at a glance.
            </p>
            <div className="svc-tags">
              <span className="tag">WordPress</span>
              <span className="tag">Laravel</span>
              <span className="tag">Angular</span>
            </div>
          </Link>
          <Link href="/contact" className="svc svc-link reveal">
            <div className="svc-icon">📱</div>
            <div className="svc-title">Mobile App</div>
            <p className="svc-body">
              Native and cross-platform apps for Android and iOS—a smooth,
              professional experience that keeps users coming back.
            </p>
            <div className="svc-tags">
              <span className="tag">React Native</span>
              <span className="tag">Flutter</span>
              <span className="tag">PWA</span>
            </div>
          </Link>
          <Link href="/contact" className="svc svc-link reveal">
            <div className="svc-icon">🛒</div>
            <div className="svc-title">Online Store (Ecommerce)</div>
            <p className="svc-body">
              Sell products online with a complete store: payment gateway,
              inventory, orders, and delivery management in one place.
            </p>
            <div className="svc-tags">
              <span className="tag">WooCommerce</span>
              <span className="tag">Shopify</span>
              <span className="tag">Custom</span>
            </div>
          </Link>
          <Link href="/contact" className="svc svc-link reveal">
            <div className="svc-icon">☁️</div>
            <div className="svc-title">SaaS Platform</div>
            <p className="svc-body">
              Build your own subscription software with billing, multi-user
              access, dashboards, and scaling built in.
            </p>
            <div className="svc-tags">
              <span className="tag">Cloud</span>
              <span className="tag">Multi-tenant</span>
              <span className="tag">Scalable</span>
            </div>
          </Link>
          <Link href="/contact" className="svc svc-link reveal">
            <div className="svc-icon">🔗</div>
            <div className="svc-title">API & System Integration</div>
            <p className="svc-body">
              Connect payment gateways, CRM, ERP, and other third-party services
              to your systems seamlessly.
            </p>
            <div className="svc-tags">
              <span className="tag">REST API</span>
              <span className="tag">Webhooks</span>
              <span className="tag">GraphQL</span>
            </div>
          </Link>
          <Link href="/contact" className="svc svc-link reveal">
            <div className="svc-icon">🤖</div>
            <div className="svc-title">AI Features & Automation</div>
            <p className="svc-body">
              Chatbots, smart recommendations, and automated reports—use AI to
              save time and cut costs in your business.
            </p>
            <div className="svc-tags">
              <span className="tag">OpenAI</span>
              <span className="tag">Automation</span>
              <span className="tag">Python</span>
            </div>
          </Link>
        </div>
      </section>

      <section id="how">
        <div className="sec-center reveal">
          <span className="sec-label">Our Process</span>
          <h2 className="sec-title">How We Work</h2>
          <p className="sec-desc">
            A simple four-step process: you tell us what you need, we deliver.
          </p>
        </div>
        <div className="steps">
          <div className="step reveal">
            <div className="step-circle">
              💬
              <span className="step-num-badge">1</span>
            </div>
            <div className="step-t">Discovery Call</div>
            <p className="step-d">
              Share your idea on a free call. We listen, ask the right questions,
              and recommend the best approach.
            </p>
          </div>
          <div className="step reveal">
            <div className="step-circle">
              📐
              <span className="step-num-badge">2</span>
            </div>
            <div className="step-t">Design Approval</div>
            <p className="step-d">
              We show the design first—then we build. Development starts only after
              you approve.
            </p>
          </div>
          <div className="step reveal">
            <div className="step-circle">
              ⚙️
              <span className="step-num-badge">3</span>
            </div>
            <div className="step-t">Development</div>
            <p className="step-d">
              Weekly updates so you always know where the project stands.
            </p>
          </div>
          <div className="step reveal">
            <div className="step-circle">
              🚀
              <span className="step-num-badge">4</span>
            </div>
            <div className="step-t">Launch & Support</div>
            <p className="step-d">
              We launch your project and stay available afterward—you are never
              on your own.
            </p>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="sec-center reveal">
          <span className="sec-label">Why Brahma<b style={{color:"var(--orange)"}}>Stack</b></span>
          <h2 className="sec-title">Why Choose Us?</h2>
          <p className="sec-desc">
            We do not just write code—we understand your business and deliver
            solutions that fit.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card reveal">
            <div className="why-icon">⏱️</div>
            <div>
              <div className="why-t">On-Time Delivery</div>
              <p className="why-d">
                We meet the timelines we commit to. Missed deadlines are not part
                of how we work.
              </p>
            </div>
          </div>
          <div className="why-card reveal">
            <div className="why-icon">💬</div>
            <div>
              <div className="why-t">Clear Communication</div>
              <p className="why-d">
                Regular updates at every stage—no confusion, no surprises.
              </p>
            </div>
          </div>
          <div className="why-card reveal">
            <div className="why-icon">💰</div>
            <div>
              <div className="why-t">Budget-Friendly</div>
              <p className="why-d">
                Quality work at a fair price. Professional results even on a
                modest budget.
              </p>
            </div>
          </div>
          <div className="why-card reveal">
            <div className="why-icon">🎨</div>
            <div>
              <div className="why-t">Strong Design</div>
              <p className="why-d">
                First impressions matter. Our designs are modern, clean, and built
                to convert.
              </p>
            </div>
          </div>
          <div className="why-card reveal">
            <div className="why-icon">🔧</div>
            <div>
              <div className="why-t">Post-Launch Support</div>
              <p className="why-d">
                We stay available after launch. Need a fix or a change—we are here.
              </p>
            </div>
          </div>
          <div className="why-card reveal">
            <div className="why-icon">🌍</div>
            <div>
              <div className="why-t">10+ Countries Experience</div>
              <p className="why-d">
                We have delivered for clients from India to the USA, UK, Canada,
                and beyond—global quality at fair pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="sec-center reveal">
          <span className="sec-label">Our Work</span>
          <h2 className="sec-title">Featured Projects</h2>
          <p className="sec-desc">
            Real projects we have built for clients across industries.
          </p>
        </div>
        <div className="work-grid">
          {FEATURED_PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-card-link reveal"
            >
              <div className="work-thumb work-thumb--img">
                <Image
                  src={p.img}
                  alt={`${p.name} screenshot`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 580px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className="work-info">
                <div className="work-cat">{p.cat}</div>
                <div className="work-name">{p.name}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── IN-HOUSE PRODUCT SHOWCASE ── */}
      <section id="inhouse" className="inhouse-section">
        <div className="inhouse-inner">
          <div className="inhouse-content">
            <span className="sec-label">Built In-House</span>
            <h2 className="inhouse-h2">
              We build our own <span className="o">production tools</span> too
            </h2>
            <p className="inhouse-desc">
              Our team developed a custom e-signature and document workflow
              platform — similar to DocuSign — from the ground up. It powers
              real client contracts inside{" "}
              <a
                href="https://myclientwave.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inhouse-mcw-link"
              >
                My Client Wave
              </a>{" "}
              and is available for integration into any project we build for you.
            </p>
            <ul className="inhouse-features">
              <li>✦ Send, sign, and manage documents digitally</li>
              <li>✦ Real-time status tracking &amp; audit trail</li>
              <li>✦ Multi-party signing with role-based access</li>
              <li>✦ White-label ready for your brand</li>
            </ul>
            <Link href="/contact" className="inhouse-cta">
              Integrate this into your project →
            </Link>
          </div>
          <div className="inhouse-visual">
            <div className="inhouse-video-wrap">
              <video
                className="inhouse-video"
                autoPlay
                muted
                loop
                playsInline
                aria-label="E-signature tool demo"
              >
                <source src="/signing-tool-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="inhouse-badge">
              <span>⚡</span> Live in production · Used by real clients
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
