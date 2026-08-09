"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const nav = [
  { href: "/#expertise", label: "Expertise" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/privacy", label: "Privacy" },
  { href: "/process", label: "Process" },
  { href: "/submit", label: "Private inquiry" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <BrandMark />
      <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${item.label === "Private inquiry" ? "nav-cta" : ""} ${pathname === item.href ? "is-current" : ""}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className="menu-button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
    </header>
  );
}
