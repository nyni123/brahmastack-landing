"use client";

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
 * Primary site navigation with active state and mobile menu.
 * @author Cursor
 */
export function SiteNav() {
  const pathname = usePathname();

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

        <details className="nav-mobile-menu">
          <summary className="nav-mobile-summary" aria-label="Open menu">
            Menu
          </summary>
          <div className="nav-mobile-panel">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href ? "nav-mobile-link nav-active" : "nav-mobile-link"
                }
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
