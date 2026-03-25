"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Primary site navigation with active state and controlled mobile menu.
 * Menu auto-closes on route change and on link click.
 */
export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  /** Close the menu whenever the active route changes (e.g. after navigation). */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav>
      <Link href="/" className="logo">
        <BrandLogo width={32} height={32} alt="Brahma Stack logo" priority />
        <span className="logo-name">
          Brahma<b>Stack</b>
        </span>
      </Link>

      <div className="nav-right">
        <div className="nav-links-desktop">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "nav-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Controlled <details>: React owns the open state so it resets on navigation */}
        <details
          className="nav-mobile-menu"
          open={menuOpen}
        >
          <summary
            className="nav-mobile-summary"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={(e) => {
              e.preventDefault(); // prevent browser's native toggle; React controls state
              setMenuOpen((prev) => !prev);
            }}
          >
            {menuOpen ? "✕ Close" : "☰ Menu"}
          </summary>
          <div className="nav-mobile-panel">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href ? "nav-mobile-link nav-active" : "nav-mobile-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>

        <Link href="/contact" className="nav-btn">
          Get Quote →
        </Link>
      </div>
    </nav>
  );
}
