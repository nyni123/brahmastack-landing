import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const SITE_URL = "https://brahmastack.com";

/**
 * Viewport config — dark theme-color for mobile browser chrome.
 * Next.js auto-adds width=device-width, initial-scale=1 by default.
 */
export const viewport: Viewport = {
  themeColor: "#0c0c0c",
};

/**
 * Root metadata — shared across all pages unless overridden.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brahma Stack | Web Development, Apps & SaaS | Jaipur, India",
    template: "%s | Brahma Stack",
  },
  description:
    "Brahma Stack is a Jaipur-based IT company specialising in custom websites, mobile apps, SaaS platforms, ecommerce, API integration, and AI automation. 8+ years · 50+ projects · clients in USA, UK, Canada & India.",
  keywords: [
    "web development company Jaipur",
    "software development company India",
    "IT company Jaipur",
    "custom web development India",
    "mobile app development India",
    "SaaS development company India",
    "ecommerce development India",
    "WordPress development India",
    "Laravel development India",
    "React developer India",
    "API integration services India",
    "AI automation India",
    "hire developers India",
    "software agency Jaipur",
    "Brahma Stack",
    "BrahmaStack Technologies",
    "web development Rajasthan",
    "full stack developer India",
    "e-signature platform India",
  ],
  authors: [{ name: "Brahma Stack Technologies", url: SITE_URL }],
  creator: "Brahma Stack Technologies",
  publisher: "Brahma Stack Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Brahma Stack",
    title: "Brahma Stack | Web Development, Apps & SaaS | Jaipur, India",
    description:
      "Custom websites, mobile apps, SaaS platforms, ecommerce, and AI automation from Jaipur, India. 8+ years · 50+ projects · worldwide clients.",
    images: [
      {
        url: "/main-logo.png",
        width: 512,
        height: 512,
        alt: "Brahma Stack Technologies",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Brahma Stack | Web Development, Apps & SaaS | Jaipur, India",
    description:
      "Custom websites, mobile apps, SaaS platforms, ecommerce, and AI automation from Jaipur, India.",
    images: ["/main-logo.png"],
  },
};

/**
 * JSON-LD structured data — helps Google understand the business.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Brahma Stack Technologies",
  alternateName: "BrahmaStack",
  url: SITE_URL,
  logo: `${SITE_URL}/main-logo.png`,
  image: `${SITE_URL}/main-logo.png`,
  description:
    "IT company in Jaipur, India specialising in web development, mobile apps, SaaS, ecommerce, API integration, and AI automation.",
  telephone: "+918107687699",
  email: "contact@brahmastack.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.9124",
    longitude: "75.7873",
  },
  areaServed: ["India", "United States", "United Kingdom", "Canada", "Worldwide"],
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "Ecommerce Development",
    "API Integration",
    "AI Automation",
    "WordPress Development",
    "Laravel Development",
  ],
  foundingDate: "2016",
  numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
  sameAs: [
    "https://www.linkedin.com/company/brahmastack-technologies/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>

      {/*
       * Google Ads Global Site Tag (gtag.js) — AW-17982326689
       * Placed at root layout level so it loads on every route exactly once.
       * next/script deduplicates across navigations automatically.
       * @author Cursor
       */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17982326689"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17982326689');
          `,
        }}
      />
    </html>
  );
}
