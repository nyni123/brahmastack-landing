import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

/**
 * Shared chrome: announcement bar, nav, main content, footer.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="announce-bar">
        <span className="announce-dot" />
        {/* Full text shown on desktop */}
        <span className="announce-text announce-text--desktop">
          We build our own production tools —{" "}
          <strong className="announce-highlight">in-house e-signature platform</strong>{" "}
          <span className="announce-badge">like DocuSign</span>{" "}
          available for your project.
        </span>
        {/* Condensed text shown on mobile */}
        <span className="announce-text announce-text--mobile">
          <strong className="announce-highlight">In-house e-signature</strong>{" "}
          <span className="announce-badge">like DocuSign</span>
        </span>
        <Link href="/#inhouse" className="announce-link">
          See it live →
        </Link>
      </div>
      <SiteNav />
      <main className="site-main">{children}</main>
      <SiteFooter />
      <a
        href="https://wa.me/917014196475?text=Hi%20BrahmaStack%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.774L0 32l8.437-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.771-1.854l-.485-.288-5.01 1.194 1.234-4.878-.317-.501A13.24 13.24 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.352-1.16-2.717-1.292-.364-.133-.63-.199-.895.199-.265.398-1.028 1.292-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.226-2.953-.323-.775-.65-.67-.895-.683l-.763-.013c-.265 0-.696.1-1.061.497-.364.398-1.392 1.36-1.392 3.317 0 1.957 1.425 3.848 1.624 4.113.199.265 2.804 4.28 6.793 5.998.95.41 1.691.655 2.269.838.953.303 1.82.26 2.506.158.764-.114 2.352-.961 2.684-1.889.332-.928.332-1.723.232-1.889-.099-.166-.364-.265-.762-.464z"/>
        </svg>
        <span className="wa-label">Chat with us</span>
      </a>
    </>
  );
}
