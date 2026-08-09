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

      <section className="section section-dark privacy-package-home" id="privacy-package">
        <div className="shell-wide privacy-package-home-grid">
          <div>
            <div className="alias-home-lockup" aria-label="Alias and Alibi, a Swift Deal Solutions privacy package">
              <span className="alias-home-mark" aria-hidden="true"><b>A</b><i>&amp;</i><b>A</b></span>
              <span className="alias-home-name"><strong>Alias &amp; Alibi</strong><small>A Swift Deal Solutions privacy package</small></span>
            </div>
            <p className="hero-eyebrow"><span /> Optional privacy coordination</p>
            <h2>Sometimes the deal is only half the privacy question.</h2>
          </div>
          <div className="privacy-package-home-copy">
            <p>Alias &amp; Alibi organizes the privacy side of a high-value transaction: public-exposure mapping, entity and correspondence workflows, real-estate record review, and professional routing when licensed legal, tax, title, fiduciary, or filing work is required.</p>
            <div className="privacy-benefit-strip" aria-label="Privacy package benefits">
              <span>Map exposure</span><span>Separate public contact</span><span>Coordinate professionals</span><span>Track completion</span>
            </div>
            <div className="privacy-package-actions">
              <Link className="button button-gold" href="/privacy">See what the package includes <span>↗</span></Link>
              <Link className="text-link text-link-light" href="/submit?mode=privacy">Request Alias &amp; Alibi <span>↗</span></Link>
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
        .privacy-package-home::before { content:""; position:absolute; inset:0; pointer-events:none; background:radial-gradient(circle at 14% 50%, rgba(38,88,68,.28), transparent 30%), radial-gradient(circle at 70% 40%, rgba(212,175,55,.11), transparent 26%), linear-gradient(115deg, transparent 52%, rgba(255,255,255,.025)); }
        .privacy-package-home-grid { position:relative; display:grid; grid-template-columns:minmax(0,1fr) minmax(360px,.72fr); gap:clamp(50px,8vw,120px); align-items:end; }
        .alias-home-lockup { display:flex; align-items:center; gap:18px; margin-bottom:42px; }
        .alias-home-mark { width:72px; height:72px; display:grid; grid-template-columns:1fr auto 1fr; place-items:center; border:1px solid rgba(212,175,55,.68); background:linear-gradient(145deg,#10251d,#17392d); color:var(--gold-bright); box-shadow:inset 0 0 0 6px rgba(212,175,55,.05); }
        .alias-home-mark b { font-family:var(--serif); font-size:24px; font-weight:400; }
        .alias-home-mark i { font-family:var(--serif); font-size:12px; font-style:italic; color:rgba(255,255,255,.62); }
        .alias-home-name strong,.alias-home-name small { display:block; }
        .alias-home-name strong { font-family:var(--serif); font-size:25px; font-weight:400; letter-spacing:-.02em; }
        .alias-home-name small { margin-top:6px; color:rgba(255,255,255,.48); font-size:8px; font-weight:750; text-transform:uppercase; letter-spacing:.2em; }
        .privacy-package-home h2 { margin:0; max-width:850px; font-family:var(--serif); font-size:clamp(48px,5.7vw,88px); line-height:.97; letter-spacing:-.05em; font-weight:400; }
        .privacy-package-home-copy { padding:34px 0 8px; border-top:1px solid var(--dark-line); }
        .privacy-package-home-copy > p { margin:0; color:rgba(255,255,255,.67); font-size:15px; line-height:1.85; }
        .privacy-benefit-strip { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1px; margin-top:28px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.12); }
        .privacy-benefit-strip span { padding:14px 15px; background:rgba(3,10,18,.66); color:rgba(255,255,255,.68); font-size:9px; font-weight:750; letter-spacing:.11em; text-transform:uppercase; }
        .privacy-package-actions { display:flex; flex-wrap:wrap; gap:24px; align-items:center; margin-top:34px; }
        @media(max-width:900px){ .privacy-package-home-grid{grid-template-columns:1fr;} }
        @media(max-width:520px){ .alias-home-mark{width:60px;height:60px;} .privacy-benefit-strip{grid-template-columns:1fr;} }
      `}</style>
    </>
  );
}
