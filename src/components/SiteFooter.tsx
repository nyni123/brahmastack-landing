import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

/**
 * Site footer with sitemap-style links (mirrors brahmastack.com structure).
 */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot-brand">
        <Link href="/" className="foot-logo">
          <BrandLogo width={26} height={26} alt="Brahma Stack" />
          <span>
            Brahma<b>Stack</b>
          </span>
        </Link>
        <p className="foot-tagline">
          Reliable IT solutions from Jaipur—web, mobile, SaaS, and integrations for
          businesses worldwide.
        </p>
      </div>

      <div className="foot-col">
        <div className="foot-col-title">Explore</div>
        <Link href="/about">About Us</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="foot-col">
        <div className="foot-col-title">Services</div>
        <Link href="/services">All services</Link>
        <Link href="/services#web">Web development</Link>
        <Link href="/services#saas">SaaS development</Link>
        <Link href="/services#mobile">Mobile apps</Link>
      </div>

      <div className="foot-col">
        <div className="foot-col-title">Contact</div>
        <span className="foot-static">Jaipur, Rajasthan, India</span>
        <a href="mailto:contact@brahmastack.com">contact@brahmastack.com</a>
        <a href="tel:+918107687699">+91 81076 87699</a>
      </div>

      <div className="foot-bottom">
        <div className="foot-copy">© 2025 BrahmaStack Technologies · Jaipur, India</div>
      </div>
    </footer>
  );
}
