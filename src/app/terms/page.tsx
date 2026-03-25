import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Brahma Stack Technologies.",
};

/**
 * @author Cursor
 */
export default function TermsPage() {
  return (
    <article className="page-inner">
      <header className="page-header">
        <span className="sec-label">Legal</span>
        <h1 className="sec-title">Terms & conditions</h1>
        <p className="lead">
          This page is a placeholder. Replace with your full terms before
          production use.
        </p>
      </header>
      <section className="page-block">
        <p>
          By using this website and our services, you agree to the terms that will
          be published here. For questions, contact{" "}
          <a href="mailto:contact@brahmastack.com">contact@brahmastack.com</a>.
        </p>
      </section>
    </article>
  );
}
