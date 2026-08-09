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

const benefits = [
  ["01", "Know what is exposed", "Create one organized picture of public-facing addresses, ownership records, entity filings, correspondence surfaces, and other relevant exposure points."],
  ["02", "Reduce avoidable spillover", "Separate business-facing contact and administration from personal information where lawful and operationally appropriate."],
  ["03", "Coordinate the right professionals", "Turn a fragmented privacy problem into a scoped handoff for attorneys, registered agents, title professionals, tax advisers, and other qualified providers when needed."],
  ["04", "Keep an evidence trail", "Track what was reviewed, what changed, what remains public by law or necessity, and what requires future renewal or professional review."]
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
            <div className="alias-lockup">
              <span className="alias-mark" aria-hidden="true"><b>A</b><i>&amp;</i><b>A</b></span>
              <span className="alias-wordmark"><strong>Alias &amp; Alibi</strong><small>A Swift Deal Solutions privacy package</small></span>
            </div>
            <p className="hero-eyebrow"><span /> Privacy around the deal</p>
            <h1>Private structure.<em>Clear boundaries.</em></h1>
            <p className="privacy-hero-copy">Alias &amp; Alibi is the privacy-coordination package inside Swift Deal Solutions for clients who want ownership, correspondence, public-record exposure, and professional handoffs organized with the same discipline as the transaction itself.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/submit?mode=privacy">Request Alias &amp; Alibi <span>↗</span></Link>
              <a className="text-link text-link-light" href="#how-it-works">See how it works <span>↓</span></a>
            </div>
          </div>
          <aside className="privacy-file" aria-label="Alias and Alibi package scope">
            <span>PRIVATE PACKAGE / A&amp;A</span>
            <strong>Exposure reduction</strong>
            <p>Identity · entities · correspondence · property records · professional routing</p>
            <small>Available alongside a Swift transaction or as a scoped standalone privacy-coordination engagement.</small>
          </aside>
        </div>
      </section>

      <section className="section shell-wide">
        <div className="privacy-intro">
          <div><p className="kicker">What it is</p><h2>A private-client coordination layer—not a promise of invisibility.</h2></div>
          <p>The package maps unnecessary exposure, organizes the work, and coordinates qualified professionals where legal, tax, title, fiduciary, filing, or other regulated work is required. The goal is clarity and disciplined reduction of avoidable public spillover while preserving lawful disclosure obligations.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell-wide">
          <div className="privacy-section-head"><p className="kicker">01 / Benefits</p><h2>What the client gets from the package.</h2></div>
          <div className="privacy-benefits-grid">
            {benefits.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section shell-wide">
        <div className="privacy-section-head"><p className="kicker">02 / Service lines</p><h2>One architecture. Four exposure surfaces.</h2></div>
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
      </section>

      <section className="section section-dark" id="how-it-works">
        <div className="shell-wide">
          <div className="privacy-section-head privacy-section-head-dark"><p className="kicker">03 / Operating model</p><h2>A concierge workflow with transaction discipline.</h2></div>
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
            <p className="kicker">04 / The Nameless Landlord</p>
            <h2>Real-estate privacy starts with the record trail.</h2>
          </div>
          <div>
            <p>Before changing ownership structures or addresses, the package maps county visibility, title dependencies, correspondence surfaces, and professional-review gates. The goal is to make the exposure picture understandable before consequential paperwork begins.</p>
            <Link className="text-link" href="/submit?mode=privacy&service=property">Request property privacy review <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell-wide engagement-grid">
          <div>
            <p className="kicker">05 / Sign up & payment</p>
            <h2>Scope first. Price second. Payment before execution.</h2>
            <p className="engagement-lede">Alias &amp; Alibi is scope-based because a single address review and a multi-jurisdiction entity/property review are not the same engagement.</p>
          </div>
          <ol className="engagement-steps">
            <li><span>01</span><div><strong>Request the package</strong><p>Use the dedicated privacy inquiry and tell us whether this is attached to a Swift transaction or a standalone review.</p></div></li>
            <li><span>02</span><div><strong>Receive a written scope</strong><p>The requested work, boundaries, professional dependencies, timing, and price are defined before you commit.</p></div></li>
            <li><span>03</span><div><strong>Approve and pay</strong><p>After you approve the scope, you receive a secure payment link or invoice for the agreed package. No confidential legal documents are required just to request pricing.</p></div></li>
            <li><span>04</span><div><strong>Begin coordination</strong><p>The package starts with exposure mapping and then moves through design, professional routing, and verification as applicable.</p></div></li>
          </ol>
        </div>
        <div className="shell-wide engagement-cta"><div><span>Pricing</span><strong>Quoted by scope</strong><p>No invented flat fee. You see the scope and price before payment.</p></div><Link className="button button-dark" href="/submit?mode=privacy">Request scope &amp; pricing <span>↗</span></Link></div>
      </section>

      <section className="section shell-wide">
        <div className="privacy-guardrails">
          <div><p className="kicker">06 / Non-negotiable</p><h2>Privacy is not concealment from lawful obligations.</h2></div>
          <ol>{guardrails.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </div>
      </section>

      <section className="link-band shell-wide">
        <div><span>Alias &amp; Alibi / Swift Deal Solutions</span><h2>Add privacy coordination to a transaction—or scope it as a standalone review.</h2></div>
        <Link className="button button-dark" href="/submit?mode=privacy">Begin privacy inquiry <span>↗</span></Link>
      </section>

      <style>{`
        .privacy-hero { min-height: 790px; display: flex; align-items: end; padding-bottom: 88px; background: radial-gradient(circle at 80% 30%, rgba(38,88,68,.32), transparent 29%), radial-gradient(circle at 70% 55%, rgba(212,175,55,.12), transparent 24%), linear-gradient(120deg, #030a12 0%, #071423 55%, #10251d 100%); }
        .privacy-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(300px,.38fr); gap: clamp(48px,8vw,120px); align-items: end; }
        .alias-lockup { display:flex; align-items:center; gap:20px; margin-bottom:42px; }
        .alias-mark { width:86px; height:86px; display:grid; grid-template-columns:1fr auto 1fr; place-items:center; border:1px solid rgba(212,175,55,.72); background:linear-gradient(145deg,#0d2019,#1a4032); color:var(--gold-bright); box-shadow:inset 0 0 0 7px rgba(212,175,55,.05),0 20px 60px rgba(0,0,0,.22); }
        .alias-mark b { font-family:var(--serif); font-size:29px; font-weight:400; }
        .alias-mark i { font-family:var(--serif); font-size:13px; font-style:italic; color:rgba(255,255,255,.62); }
        .alias-wordmark strong,.alias-wordmark small { display:block; }
        .alias-wordmark strong { color:white; font-family:var(--serif); font-size:32px; font-weight:400; letter-spacing:-.025em; }
        .alias-wordmark small { margin-top:8px; color:rgba(255,255,255,.48); font-size:8px; font-weight:750; text-transform:uppercase; letter-spacing:.22em; }
        .privacy-hero-copy { max-width: 760px; margin: 32px 0 38px; color: rgba(255,255,255,.7); font-size: 19px; line-height: 1.75; }
        .privacy-file { border: 1px solid rgba(212,175,55,.45); background: rgba(3,10,18,.58); padding: 30px; color: white; backdrop-filter: blur(16px); }
        .privacy-file > span { display:block; color: var(--gold-bright); font-size:9px; letter-spacing:.18em; text-transform:uppercase; }
        .privacy-file strong { display:block; margin-top:42px; font-family:var(--serif); font-size:34px; font-weight:400; }
        .privacy-file p { margin:14px 0 32px; color:rgba(255,255,255,.68); font-size:13px; line-height:1.7; }
        .privacy-file small { display:block; padding-top:18px; border-top:1px solid rgba(255,255,255,.12); color:rgba(255,255,255,.48); line-height:1.6; }
        .privacy-intro { display:grid; grid-template-columns:minmax(0,1.1fr) minmax(320px,.65fr); gap:clamp(50px,9vw,140px); align-items:end; }
        .privacy-intro h2,.privacy-section-head h2,.privacy-property-grid h2,.privacy-guardrails h2,.engagement-grid h2 { margin:14px 0 0; font-family:var(--serif); font-size:clamp(42px,5vw,76px); line-height:1; letter-spacing:-.045em; font-weight:400; }
        .privacy-intro > p,.privacy-property-grid > div:last-child > p,.engagement-lede { margin:0; color:var(--muted); line-height:1.85; }
        .privacy-section-head { max-width:930px; margin-bottom:60px; }
        .privacy-benefits-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .privacy-benefits-grid article { min-height:330px; padding:34px 30px; border-right:1px solid var(--line); }
        .privacy-benefits-grid article:last-child { border-right:0; }
        .privacy-benefits-grid span,.privacy-service-grid article > span,.privacy-process-grid article > span { color:var(--gold-dark); font-family:var(--serif); }
        .privacy-benefits-grid h3,.privacy-service-grid h3,.privacy-process-grid h3 { margin:55px 0 16px; font-family:var(--serif); font-size:30px; font-weight:400; }
        .privacy-benefits-grid p,.privacy-service-grid p { color:var(--muted); font-size:14px; line-height:1.8; }
        .privacy-service-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); border:1px solid var(--line); background:white; }
        .privacy-service-grid article { min-height:410px; padding:38px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); }
        .privacy-service-grid article:nth-child(2n){ border-right:0; }
        .privacy-service-grid article:nth-last-child(-n+2){ border-bottom:0; }
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
        .engagement-grid { display:grid; grid-template-columns:minmax(0,.8fr) minmax(420px,1fr); gap:clamp(50px,8vw,120px); align-items:start; }
        .engagement-lede { margin-top:26px; max-width:650px; }
        .engagement-steps { list-style:none; margin:0; padding:0; border-top:1px solid var(--line); }
        .engagement-steps li { display:grid; grid-template-columns:52px 1fr; gap:18px; padding:24px 0; border-bottom:1px solid var(--line); }
        .engagement-steps li > span { color:var(--gold-dark); font-family:var(--serif); }
        .engagement-steps strong { font-family:var(--serif); font-size:23px; font-weight:400; }
        .engagement-steps p { margin:7px 0 0; color:var(--muted); font-size:13px; line-height:1.7; }
        .engagement-cta { display:flex; align-items:center; justify-content:space-between; gap:30px; margin-top:58px; padding:30px; border:1px solid var(--line); background:white; }
        .engagement-cta span,.engagement-cta strong,.engagement-cta p { display:block; }
        .engagement-cta span { color:var(--gold-dark); font-size:9px; font-weight:750; letter-spacing:.15em; text-transform:uppercase; }
        .engagement-cta strong { margin-top:5px; font-family:var(--serif); font-size:30px; font-weight:400; }
        .engagement-cta p { margin:5px 0 0; color:var(--muted); font-size:12px; }
        .privacy-guardrails { display:grid; grid-template-columns:minmax(0,.85fr) minmax(360px,1fr); gap:clamp(50px,8vw,120px); }
        .privacy-guardrails ol { list-style:none; margin:0; padding:0; border-top:1px solid var(--line); }
        .privacy-guardrails li { display:grid; grid-template-columns:50px 1fr; gap:18px; padding:23px 0; border-bottom:1px solid var(--line); }
        .privacy-guardrails li span { color:var(--gold-dark); font-family:var(--serif); }
        .privacy-guardrails li p { margin:0; color:var(--muted); font-size:13px; line-height:1.75; }
        @media(max-width:1000px){ .privacy-benefits-grid{grid-template-columns:repeat(2,1fr);} .privacy-benefits-grid article:nth-child(2){border-right:0;} .privacy-benefits-grid article:nth-child(-n+2){border-bottom:1px solid var(--line);} }
        @media(max-width:900px){
          .privacy-hero-grid,.privacy-intro,.privacy-property-grid,.privacy-guardrails,.engagement-grid { grid-template-columns:1fr; }
          .privacy-process-grid { grid-template-columns:repeat(2,1fr); }
          .privacy-process-grid article:nth-child(2){ border-right:0; }
          .privacy-process-grid article:nth-child(-n+2){ border-bottom:1px solid var(--dark-line); }
          .engagement-cta { align-items:flex-start; flex-direction:column; }
        }
        @media(max-width:640px){
          .privacy-hero { min-height:850px; padding-bottom:54px; }
          .alias-mark{width:70px;height:70px;} .alias-wordmark strong{font-size:26px;}
          .privacy-service-grid,.privacy-process-grid,.privacy-benefits-grid { grid-template-columns:1fr; }
          .privacy-benefits-grid article,.privacy-benefits-grid article:nth-child(2),.privacy-service-grid article,.privacy-service-grid article:nth-child(2n),.privacy-process-grid article { border-right:0; border-bottom:1px solid var(--line); }
          .privacy-process-grid article { border-bottom-color:var(--dark-line); }
          .privacy-benefits-grid article:last-child,.privacy-service-grid article:last-child,.privacy-process-grid article:last-child { border-bottom:0; }
        }
      `}</style>
    </>
  );
}
