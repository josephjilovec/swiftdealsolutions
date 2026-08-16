import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./privacy-visual.css";
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
          /* Swift Deal Solutions — August 7 navy + gold palette lock */
          :root {
            --navy-1000: #030a12;
            --navy-950: #06101d;
            --navy-900: #0a1727;
            --navy-850: #0d1d30;
            --navy-800: #10243a;
            --gold: #d4af37;
            --gold-bright: #e6ca6d;
            --gold-dark: #92701e;
            --ivory: #f7f4ec;
            --paper: #eee9de;
          }

          .swift-lux-header {
            background: rgba(6, 16, 29, .96) !important;
            border-bottom-color: rgba(212, 175, 55, .24) !important;
          }
          .swift-home-hero {
            background: var(--navy-1000) !important;
            border-bottom-color: rgba(212, 175, 55, .40) !important;
          }
          .swift-home-hero-shade {
            background:
              linear-gradient(90deg, rgba(3,10,18,.98) 0%, rgba(6,16,29,.91) 38%, rgba(10,23,39,.52) 68%, rgba(6,16,29,.34) 100%),
              linear-gradient(0deg, rgba(3,10,18,.70), transparent 55%) !important;
          }
          .swift-asset-card {
            background: var(--navy-900) !important;
            border-color: rgba(212, 175, 55, .32) !important;
          }
          .alias-home {
            background: var(--navy-950) !important;
            border-color: rgba(212, 175, 55, .36) !important;
          }
          .alias-home-shade {
            background: linear-gradient(90deg, var(--navy-950) 0%, var(--navy-950) 40%, rgba(6,16,29,.82) 58%, rgba(6,16,29,.18) 100%) !important;
          }

          .privacy-hero {
            background-image:
              linear-gradient(90deg, rgba(3,10,18,.98) 0%, rgba(6,16,29,.93) 30%, rgba(10,23,39,.80) 50%, rgba(16,36,58,.48) 72%, rgba(3,10,18,.66) 100%),
              linear-gradient(rgba(16,36,58,.18), rgba(6,16,29,.20)),
              url(https://eu-images.contentstack.com/v3/assets/blt6d90778a997de1cd/blt1d2ae7d32d43a29e/65e24973136b90040a17d761/Meeting_Andriy_Popov_Alamy.jpg) !important;
          }
          .privacy-hero::before {
            background:
              repeating-linear-gradient(90deg, transparent 0 calc(18% - 1px), rgba(230,202,109,.08) 18%),
              linear-gradient(110deg, rgba(10,23,39,.22), transparent 35%, rgba(16,36,58,.24) 72%, transparent) !important;
          }
          .privacy-hero::after {
            background: radial-gradient(circle at 68% 42%, rgba(212,175,55,.12), transparent 25%) !important;
          }
          .privacy-hero .alias-mark {
            background: linear-gradient(145deg, rgba(10,23,39,.92), rgba(6,16,29,.94)) !important;
          }
          .privacy-hero .privacy-file {
            background: linear-gradient(145deg, rgba(3,10,18,.82), rgba(10,23,39,.72)) !important;
          }

          @media (max-width: 800px) {
            .alias-home-shade {
              background: linear-gradient(0deg, var(--navy-950) 0%, rgba(6,16,29,.90) 55%, rgba(6,16,29,.24) 100%) !important;
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
