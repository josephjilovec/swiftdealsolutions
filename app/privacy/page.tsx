import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alias & Alibi Privacy Package",
  description: "A Swift Deal Solutions privacy-coordination package for lawful exposure mapping, entity and correspondence workflows, real-estate record review, and professional routing.",
  alternates: { canonical: "/privacy" }
};

const serviceLines = [
  {
    code: "A1",
    title: "Private identity architecture",
    copy: "Map unnecessary public exposure while preserving required legal, tax, banking, title, and regulatory disclosures.",
    items: ["Exposure mapping", "Public-contact separation", "Professional handoff map"]
  },
  {
    code: "A2",
    title: "Entity privacy coordination",
    copy: "Coordinate registered-agent, business-address, formation, and maintenance workflows across appropriate jurisdictions and professional partners.",
    items: ["Entity intake", "Partner routing", "Renewal controls"]
  },
  {
    code: "A3",
    title: "Secure correspondence",
    copy: "Design business-mail and forwarding workflows that separate public-facing correspondence from personal residence details where lawful.",
    items: ["Mail-routing design", "Address exposure review", "Escalation rules"]
  },
  {
    code: "A4",
    title: "The Nameless Landlord",
    copy: "A real-estate privacy line focused on public-record exposure mapping, title-chain review, and counsel-led trust or entity options.",
    items: ["County-record mapping", "Title-partner coordination", "Counsel-ready structure evaluation"]
  }
];

const process = [
  ["01", "Map", "Identify what is publicly exposed, where it appears, and which obligations cannot be altered."],
  ["02", "Design", "Build a professional-review-ready privacy plan with jurisdiction, title, mail, and entity dependencies separated."],
  ["03", "Route", "Send legal, registered-agent, title, trust, filing, and other regulated tasks to appropriately authorized professionals."],
  ["04", "Verify", "Record completion evidence, renewal dates, exceptions, and changes that require professional review."]
] as const;

const guardrails = [
  "No concealment from tax authorities, courts, regulators, lenders, title insurers, sanctions controls, or other legally entitled parties.",
  "No fraudulent-transfer, creditor-evasion, backdating, nominee deception, or false-record workflows.",
  "Jurisdiction-specific legal instruments are reviewed or produced by appropriately licensed counsel where required.",
  "The coordination record tracks provenance, approvals, professional handoffs, renewal dates, and exceptions for auditability."
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero privacy-hero">
        <div className="shell-wide privacy-hero-grid">
          <div>
            <p className="hero-eyebrow"><span /> Swift Deal Solutions / Privacy coordination</p>
            <h1>Alias & Alibi.<em>Privacy around the deal.</em></h1>
            <p className="privacy-hero-copy">A named Swift Deal Solutions package for clients who want the transaction, ownership, correspondence, and public-exposure questions organized as carefully as the asset itself.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/submit">Request private review <span>↗</span></Link>
              <Link className="text-link text-link-light" href="/#expertise">Back to Swift expertise <span>↗</span></Link>
            </div>
          </div>
          <aside className="privacy-file" aria-label="Alias and Alibi package scope">
            <span>OPTIONAL PACKAGE / A&A</span>
            <strong>Exposure reduction</strong>
            <p>Identity · entities · correspondence · property records · professional routing</p>
            <small>Available alongside a Swift transaction or as a scoped privacy-coordination engagement.</small>
          </aside>
        </div>
      </section>

      <section className="section shell-wide">
        <div className="privacy-intro">
          <div><p className="kicker">A private-client system</p><h2>Not secrecy theater. A disciplined reduction of unnecessary public exposure.</h2></div>
          <p>Alias & Alibi now operates as a service package inside Swift Deal Solutions. The package maps exposure surfaces, organizes the workflow, and coordinates qualified professionals where legal, tax, title, fiduciary, filing, or other regulated work is required.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell-wide">
          <div className="privacy-section-head"><p className="kicker">01 / Service lines</p><h2>One architecture. Four exposure surfaces.</h2></div>
          <div className="privacy-service-grid">
            {serviceLines.map((service) => (
              <article key={service.code}>
                <span>{service.code}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell-wide">
          <div className="privacy-section-head privacy-section-head-dark"><p className="kicker">02 / Operating model</p><h2>A concierge workflow with transaction discipline.</h2></div>
          <div className="privacy-process-grid">
            {process.map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell-wide">
        <div className="privacy-property-grid">
          <div>
            <p className="kicker">03 / The Nameless Landlord</p>
            <h2>Real-estate privacy starts with the record trail.</h2>
          </div>
          <div>
            <p>Before changing ownership structures or addresses, the package maps county visibility, title dependencies, correspondence surfaces, and professional-review gates. The goal is to make the exposure picture understandable before consequential paperwork begins.</p>
            <Link className="text-link" href="/submit">Request property privacy review <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell-wide privacy-guardrails">
          <div><p className="kicker">04 / Non-negotiable</p><h2>Privacy is not concealment from lawful obligations.</h2></div>
          <ol>{guardrails.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </div>
      </section>

      <section className="link-band shell-wide">
        <div><span>Alias & Alibi / Swift Deal Solutions</span><h2>Add privacy coordination to a transaction—or scope it as a standalone review.</h2></div>
        <Link className="button button-dark" href="/submit">Begin private inquiry <span>↗</span></Link>
      </section>

      <style>{`
        .privacy-hero { min-height: 760px; display: flex; align-items: end; padding-bottom: 88px; background: radial-gradient(circle at 82% 34%, rgba(212,175,55,.18), transparent 26%), linear-gradient(120deg, #030a12 0%, #071423 58%, #0d1d30 100%); }
        .privacy-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(300px,.38fr); gap: clamp(48px,8vw,120px); align-items: end; }
        .privacy-hero-copy { max-width: 760px; margin: 32px 0 38px; color: rgba(255,255,255,.7); font-size: 19px; line-height: 1.75; }
        .privacy-file { border: 1px solid rgba(212,175,55,.45); background: rgba(3,10,18,.58); padding: 30px; color: white; backdrop-filter: blur(16px); }
        .privacy-file > span { display:block; color: var(--gold-bright); font-size:9px; letter-spacing:.18em; text-transform:uppercase; }
        .privacy-file strong { display:block; margin-top:42px; font-family:var(--serif); font-size:34px; font-weight:400; }
        .privacy-file p { margin:14px 0 32px; color:rgba(255,255,255,.68); font-size:13px; line-height:1.7; }
        .privacy-file small { display:block; padding-top:18px; border-top:1px solid rgba(255,255,255,.12); color:rgba(255,255,255,.48); line-height:1.6; }
        .privacy-intro { display:grid; grid-template-columns:minmax(0,1.1fr) minmax(320px,.65fr); gap:clamp(50px,9vw,140px); align-items:end; }
        .privacy-intro h2,.privacy-section-head h2,.privacy-property-grid h2,.privacy-guardrails h2 { margin:14px 0 0; font-family:var(--serif); font-size:clamp(42px,5vw,76px); line-height:1; letter-spacing:-.045em; font-weight:400; }
        .privacy-intro > p,.privacy-property-grid > div:last-child > p { margin:0; color:var(--muted); line-height:1.85; }
        .privacy-section-head { max-width:930px; margin-bottom:60px; }
        .privacy-service-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); border:1px solid var(--line); background:white; }
        .privacy-service-grid article { min-height:410px; padding:38px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); }
        .privacy-service-grid article:nth-child(2n){ border-right:0; }
        .privacy-service-grid article:nth-last-child(-n+2){ border-bottom:0; }
        .privacy-service-grid article > span,.privacy-process-grid article > span { color:var(--gold-dark); font-family:var(--serif); }
        .privacy-service-grid h3,.privacy-process-grid h3 { margin:55px 0 16px; font-family:var(--serif); font-size:34px; font-weight:400; }
        .privacy-service-grid p { color:var(--muted); font-size:14px; line-height:1.8; }
        .privacy-service-grid ul { margin:28px 0 0; padding:22px 0 0; border-top:1px solid var(--line); list-style:none; }
        .privacy-service-grid li { padding:7px 0; font-size:11px; letter-spacing:.08em; text-transform:uppercase; }
        .privacy-section-head-dark .kicker { color:var(--gold-bright); }
        .privacy-process-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); border-top:1px solid var(--dark-line); border-bottom:1px solid var(--dark-line); }
        .privacy-process-grid article { min-height:300px; padding:30px 28px; border-right:1px solid var(--dark-line); }
        .privacy-process-grid article:last-child { border-right:0; }
        .privacy-process-grid article > span { color:var(--gold-bright); }
        .privacy-process-grid h3 { margin-top:70px; color:white; }
        .privacy-process-grid p { color:rgba(255,255,255,.58); font-size:13px; line-height:1.8; }
        .privacy-property-grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(320px,.7fr); gap:clamp(50px,9vw,140px); align-items:end; }
        .privacy-property-grid .text-link { margin-top:30px; }
        .privacy-guardrails { display:grid; grid-template-columns:minmax(0,.85fr) minmax(360px,1fr); gap:clamp(50px,8vw,120px); }
        .privacy-guardrails ol { list-style:none; margin:0; padding:0; border-top:1px solid var(--line); }
        .privacy-guardrails li { display:grid; grid-template-columns:50px 1fr; gap:18px; padding:23px 0; border-bottom:1px solid var(--line); }
        .privacy-guardrails li span { color:var(--gold-dark); font-family:var(--serif); }
        .privacy-guardrails li p { margin:0; color:var(--muted); font-size:13px; line-height:1.75; }
        @media(max-width:900px){
          .privacy-hero-grid,.privacy-intro,.privacy-property-grid,.privacy-guardrails { grid-template-columns:1fr; }
          .privacy-process-grid { grid-template-columns:repeat(2,1fr); }
          .privacy-process-grid article:nth-child(2){ border-right:0; }
          .privacy-process-grid article:nth-child(-n+2){ border-bottom:1px solid var(--dark-line); }
        }
        @media(max-width:640px){
          .privacy-hero { min-height:800px; padding-bottom:54px; }
          .privacy-service-grid,.privacy-process-grid { grid-template-columns:1fr; }
          .privacy-service-grid article,.privacy-service-grid article:nth-child(2n),.privacy-process-grid article { border-right:0; border-bottom:1px solid var(--line); }
          .privacy-process-grid article { border-bottom-color:var(--dark-line); }
          .privacy-service-grid article:last-child,.privacy-process-grid article:last-child { border-bottom:0; }
        }
      `}</style>
    </>
  );
}
