"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#deal-intelligence", label: "Deal Room" },
  { href: "/opportunities", label: "Assets" },
  { href: "/process", label: "How It Works" },
  { href: "/privacy", label: "Alias & Alibi" },
  { href: "/submit", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header swift-lux-header">
      <BrandMark />
      <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "is-current" : ""}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="swift-header-cta" href="/submit">Start a deal <span>→</span></Link>
      <button
        type="button"
        className="menu-button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>

      <style>{`
        .swift-lux-header {
          position: sticky !important;
          top: 0 !important;
          inset: auto 0 auto 0 !important;
          z-index: 999 !important;
          background: rgba(2, 11, 20, .96);
          border-bottom: 1px solid rgba(212,175,55,.24);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 12px 34px rgba(0,0,0,.16);
        }
        .swift-header-cta {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 0 22px;
          border: 1px solid rgba(212,175,55,.75);
          color: var(--gold-bright);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .15em;
          text-transform: uppercase;
          transition: background .2s ease, color .2s ease, transform .2s ease;
        }
        .swift-header-cta:hover { background: var(--gold); color: var(--navy-950); transform: translateY(-1px); }
        @media (min-width: 901px) {
          .swift-lux-header {
            display: grid !important;
            grid-template-columns: minmax(210px,.75fr) minmax(570px,1.95fr) minmax(160px,.6fr) !important;
            gap: clamp(14px,2vw,34px) !important;
            align-items: center !important;
          }
          .swift-lux-header .brand { grid-column: 1 !important; grid-row: 1 !important; justify-self: start !important; }
          .swift-lux-header .site-nav { grid-column: 2 !important; grid-row: 1 !important; justify-self: center !important; margin: 0 !important; gap: clamp(13px,1.55vw,25px) !important; }
          .swift-lux-header .site-nav a { font-size: 8px; white-space: nowrap; }
          .swift-lux-header .swift-header-cta { grid-column: 3 !important; grid-row: 1 !important; justify-self: end !important; }
        }
        @media (max-width: 900px) {
          .swift-header-cta { display: none; }
        }
      `}</style>
    </header>
  );
}
