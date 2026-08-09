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

      <section className="section section-dark privacy-package-home">
        <div className="shell-wide privacy-package-home-grid">
          <div>
            <p className="hero-eyebrow"><span /> Optional privacy coordination</p>
            <p className="privacy-package-name">ALIAS &amp; ALIBI / A SWIFT DEAL SOLUTIONS PACKAGE</p>
            <h2>Sometimes the deal is only half the privacy question.</h2>
          </div>
          <div className="privacy-package-home-copy">
            <p>Alias &amp; Alibi is now the privacy-coordination package inside Swift Deal Solutions: exposure mapping, entity and correspondence workflows, real-estate record review, and professional routing for clients who want the ownership and public-facing side of a transaction organized with the same discipline as the asset itself.</p>
            <div className="privacy-package-actions">
              <Link className="button button-gold" href="/privacy">Explore the privacy package <span>↗</span></Link>
              <Link className="text-link text-link-light" href="/submit">Add it to an inquiry <span>↗</span></Link>
            </div>
          </div>
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

      <style>{`
        .privacy-package-home { position:relative; overflow:hidden; }
        .privacy-package-home::before { content:""; position:absolute; inset:0; pointer-events:none; background:radial-gradient(circle at 14% 50%, rgba(212,175,55,.13), transparent 28%), linear-gradient(115deg, transparent 52%, rgba(255,255,255,.025)); }
        .privacy-package-home-grid { position:relative; display:grid; grid-template-columns:minmax(0,1fr) minmax(360px,.72fr); gap:clamp(50px,8vw,120px); align-items:end; }
        .privacy-package-name { margin:42px 0 20px; color:var(--gold-bright); font-size:9px; font-weight:750; letter-spacing:.19em; }
        .privacy-package-home h2 { margin:0; max-width:850px; font-family:var(--serif); font-size:clamp(48px,5.7vw,88px); line-height:.97; letter-spacing:-.05em; font-weight:400; }
        .privacy-package-home-copy { padding:34px 0 8px; border-top:1px solid var(--dark-line); }
        .privacy-package-home-copy > p { margin:0; color:rgba(255,255,255,.63); font-size:15px; line-height:1.85; }
        .privacy-package-actions { display:flex; flex-wrap:wrap; gap:24px; align-items:center; margin-top:34px; }
        @media(max-width:900px){ .privacy-package-home-grid{grid-template-columns:1fr;} }
      `}</style>
    </>
  );
}
