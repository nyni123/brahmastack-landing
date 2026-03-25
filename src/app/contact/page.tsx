import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Brahma Stack in Jaipur, India — email contact@brahmastack.com or call +91 81076 87699. Get a free project consultation for web, mobile, SaaS, or ecommerce development.",
  keywords: [
    "contact web developer India",
    "hire developer Jaipur",
    "IT company contact India",
    "free web development consultation India",
    "web development quote India",
    "contact Brahma Stack",
    "get web development estimate India",
    "software project consultation India",
    "hire software developer Jaipur",
  ],
  openGraph: {
    title: "Contact Brahma Stack | Free Project Consultation",
    description:
      "Get in touch for a free consultation on your web, mobile, SaaS, or ecommerce project.",
    url: "https://brahmastack.com/contact",
  },
};

/**
 * Dedicated contact route (same form block as home).
 * @author Cursor
 */
export default function ContactPage() {
  return (
    <div className="page-contact-wrapper">
      <ContactSection />
    </div>
  );
}
