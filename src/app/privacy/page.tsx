import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Brahma Stack Technologies.",
};

/**
 * @author Cursor
 */
export default function PrivacyPage() {
  return (
    <article className="page-inner">
      <header className="page-header">
        <span className="sec-label">Legal</span>
        <h1 className="sec-title">Privacy policy</h1>
        <p className="lead">
          This page is a placeholder. Replace with your full privacy policy before
          production use.
        </p>
      </header>
      <section className="page-block">
        <p>
          Brahma Stack Technologies respects your privacy. For questions, contact{" "}
          <a href="mailto:contact@brahmastack.com">contact@brahmastack.com</a>.
        </p>
      </section>
    </article>
  );
}
