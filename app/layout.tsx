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
