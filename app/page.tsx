import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { AssetUniverse } from "@/components/AssetUniverse";
import { MandateConsole } from "@/components/MandateConsole";
import { RepresentativeProfiles } from "@/components/RepresentativeProfiles";
import { ProcessRail } from "@/components/ProcessRail";
import { principles } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section shell-wide" id="expertise">
        <SectionHeading
          kicker="The private-market advantage"
          title="Designed for assets that deserve a more considered approach."
          copy="A high-value transaction should not feel like a generic lead funnel. The operating system is built around controlled exposure, documented roles, and qualified counterparties."
        />
        <div className="principle-grid">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 90}>
              <article>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell-wide">
          <SectionHeading
            kicker="Asset universe"
            title="One private network. Three distinct markets."
            copy="Select an asset class to see how the mandate changes. The interface adapts around the information that matters for that category."
          />
          <AssetUniverse />
        </div>
      </section>

      <section className="section shell-wide">
        <SectionHeading
          kicker="Mandate builder"
          title="Turn an opportunity into a structured first conversation."
          copy="A lightweight interactive brief helps owners and representatives identify the core parameters before entering the full inquiry workflow."
        />
        <MandateConsole />
      </section>

      <section className="section section-dark">
        <div className="shell-wide">
          <SectionHeading
            kicker="Representative profiles"
            title="What a private placement can look like."
            copy="These profiles are illustrative presentation examples—not claims of completed Swift Deal Solutions transactions."
            inverted
          />
          <RepresentativeProfiles />
        </div>
      </section>

      <section className="section shell-wide">
        <SectionHeading
          kicker="Operating sequence"
          title="A disciplined route from private brief to closing."
          copy="The workflow is designed to make roles, evidence, diligence, and the next decision visible at every stage."
        />
        <ProcessRail />
      </section>

      <section className="closing-band">
        <div className="closing-grid" aria-hidden="true" />
        <div className="shell-wide closing-inner">
          <p>Private capital. Distinctive assets.</p>
          <h2>Move with clarity.<br /><em>Move with discretion.</em></h2>
          <div className="closing-actions">
            <Link className="button button-gold" href="/submit?mode=seller">Submit an asset <span>↗</span></Link>
            <Link className="text-link text-link-light" href="/opportunities">Explore the transaction system <span>↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
