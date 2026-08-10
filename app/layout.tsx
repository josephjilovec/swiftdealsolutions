import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Swift Deal Solutions | Private Asset Placement",
    template: "%s | Swift Deal Solutions"
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Swift Deal Solutions | Private Asset Placement",
    description: site.description,
    siteName: site.name,
    images: [{
      url: "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?auto=format&fit=crop&fm=jpg&q=82&w=1600",
      width: 1600,
      height: 900,
      alt: "Luxury estate exterior"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Deal Solutions | Private Asset Placement",
    description: site.description
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description
  };

  return (
    <html lang="en">
      <body>
        <style>{`
          @media (min-width: 901px) {
            .site-header {
              display: grid;
              grid-template-columns: minmax(0, 1fr) auto;
              column-gap: clamp(34px, 5vw, 84px);
            }
            .site-header .site-nav {
              grid-column: 1;
              grid-row: 1;
              justify-self: start;
            }
            .site-header .brand {
              grid-column: 2;
              grid-row: 1;
              justify-self: end;
            }
          }

          @media (min-width: 1101px) {
            .swift-concept-main .lower-grid {
              align-items: start !important;
            }
            .swift-concept-main .process-block,
            .swift-concept-main .package-block,
            .swift-concept-main .who-card {
              align-self: start !important;
              height: auto !important;
              min-height: 0 !important;
            }
            .swift-concept-main .process-rail {
              height: auto !important;
              min-height: 0 !important;
              align-items: start !important;
              grid-auto-rows: auto !important;
            }
            .swift-concept-main .process-rail article {
              height: auto !important;
              min-height: 180px !important;
              align-self: start !important;
            }
            .swift-concept-main .package-grid {
              align-items: start !important;
            }
            .swift-concept-main .package-grid article {
              height: auto !important;
              align-self: start !important;
            }
          }
        `}</style>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}