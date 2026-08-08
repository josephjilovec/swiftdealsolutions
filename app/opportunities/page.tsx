import type { Metadata } from "next";
import Link from "next/link";
import { AssetUniverse } from "@/components/AssetUniverse";
import { RepresentativeProfiles } from "@/components/RepresentativeProfiles";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Explore Swift Deal Solutions asset categories and illustrative private-placement profiles.",
  alternates: { canonical: "/opportunities" }
};

export default function OpportunitiesPage() {
  return (
    <>
      <section className="page-hero page-hero-opportunities">
        <div className="shell-wide">
          <p className="hero-eyebrow"><span /> Private opportunity system</p>
          <h1>Different assets require <em>different evidence.</em></h1>
          <p>Explore the three mandate categories, the information that matters in each, and representative examples of how a private placement could be presented.</p>
        </div>
      </section>
      <section className="section section-paper"><div className="shell-wide"><SectionHeading kicker="Asset focus" title="Choose the market. Change the brief." copy="The data points, diligence path, and relevant counterparties change with the asset class." /><AssetUniverse /></div></section>
      <section className="section section-dark"><div className="shell-wide"><SectionHeading kicker="Illustrative profiles" title="Presentation without inflated claims." copy="These are examples of the intended presentation layer, not a transaction-history page." inverted /><RepresentativeProfiles /></div></section>
      <section className="link-band shell-wide"><div><span>Have a real opportunity?</span><h2>Start with the asset, authority to transact, and timing.</h2></div><Link className="button button-dark" href="/submit?mode=seller">Open private inquiry <span>↗</span></Link></section>
    </>
  );
}
