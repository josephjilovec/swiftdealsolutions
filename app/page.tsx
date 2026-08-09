import Link from "next/link";

const privacyBenefits = [
  ["◉", "Reduced public exposure", "Map avoidable public-facing surfaces before acting."],
  ["◇", "Cleaner coordination", "Separate entity, address, title, and professional workstreams."],
  ["▦", "Documented ownership flow", "Keep the transaction record and privacy workflow organized."],
  ["◎", "Multi-jurisdiction planning", "Surface location-specific dependencies before professional execution."],
  ["⌁", "Discreet execution", "Limit unnecessary circulation of sensitive details during coordination."]
] as const;

const privacyProcess = [
  ["01", "Map", "Exposure & record assessment"],
  ["02", "Design", "Structure & correspondence plan"],
  ["03", "Route", "Authorized professional handoffs"],
  ["04", "Verify", "Completion evidence & renewals"]
] as const;

const packages = [
  {
    name: "Essential",
    sub: "Foundation privacy",
    items: ["Public-exposure map", "Correspondence review", "Professional handoff plan"],
    href: "/submit?mode=privacy&service=essential"
  },
  {
    name: "Strategic",
    sub: "Full coordination",
    featured: true,
    items: ["Multi-surface exposure review", "Entity & correspondence coordination", "Property-record review where relevant", "Completion tracking"],
    href: "/submit?mode=privacy&service=strategic"
  },
  {
    name: "Bespoke",
    sub: "Complex situation",
    items: ["Tailored scope", "Multiple jurisdictions", "Professional routing map", "Ongoing coordination plan"],
    href: "/submit?mode=privacy&service=bespoke"
  }
] as const;

const whoFor = [
  "Private investors & family offices",
  "Real-estate buyers & landlords",
  "Business owners & operators",
  "Privacy-conscious principals",
  "International dealmakers"
];

export default function HomePage() {
  return (
    <>
      <section className="swift-concept-hero" id="solutions">
        <div className="swift-concept-hero-media" aria-hidden="true" />
        <div className="swift-concept-hero-shade" aria-hidden="true" />
        <div className="swift-concept-shell swift-concept-hero-inner">
          <p className="concept-kicker">Move smarter. Close cleaner. Stay controlled.</p>
          <h1>Strategic Transactions.<br /><em>Maximum Advantage.</em></h1>
          <p className="concept-lede">Private transaction infrastructure for distinctive assets, qualified counterparties, controlled exposure, and disciplined execution.</p>
          <div className="concept-actions">
            <Link className="concept-btn concept-btn-gold" href="/submit">Start a deal <span>→</span></Link>
            <Link className="concept-btn concept-btn-outline" href="/privacy"><span className="eye-icon">◉</span><span>Explore privacy package<small>Alias &amp; Alibi</small></span></Link>
          </div>
        </div>
      </section>

      <main className="swift-concept-main">
        <section className="alias-feature" id="privacy-package">
          <div className="alias-left">
            <span className="alias-now">Now available</span>
            <div className="alias-seal" aria-hidden="true"><span>A</span><i>&amp;</i><span>A</span></div>
            <div className="alias-copy">
              <h2>Alias &amp; Alibi</h2>
              <p className="alias-sub">A Swift Deal Solutions package</p>
              <strong>Private identity. Clean transactions. Total control.</strong>
              <p>Privacy and exposure-reduction coordination for investors, dealmakers, property owners, and principals who want the public-facing side of a transaction organized with the same discipline as the deal itself.</p>
              <div className="alias-actions">
                <Link className="concept-btn concept-btn-gold" href="/privacy">Explore Alias &amp; Alibi <span>→</span></Link>
                <Link className="alias-text-link" href="/submit?mode=privacy">Request scope &amp; pricing →</Link>
              </div>
            </div>
          </div>

          <div className="alias-services" aria-label="Alias and Alibi services">
            <span>◫ <b>Entity &amp; identity architecture</b></span>
            <span>✉ <b>Private correspondence</b></span>
            <span>▱ <b>Ownership structure coordination</b></span>
            <span>⌂ <b>The Nameless Landlord</b><small>Real-estate privacy review</small></span>
            <span>◎ <b>Ongoing management map</b></span>
          </div>

          <div className="alias-noir" aria-hidden="true"><div className="alias-noir-image" /><div className="alias-noir-gradient" /><div className="alias-noir-mark"><span>A</span><i>&amp;</i><span>A</span></div></div>
        </section>

        <section className="benefit-band" id="about">
          <div className="benefit-intro"><h2>Why <em>add privacy</em> to your deal?</h2><p>High-value transactions can create unnecessary exposure across records, correspondence, entities, and counterparties. Alias &amp; Alibi is about control and coordination—not concealment from lawful obligations.</p></div>
          <div className="benefit-grid">{privacyBenefits.map(([icon,title,copy]) => <article key={title}><span>{icon}</span><strong>{title}</strong><small>{copy}</small></article>)}</div>
        </section>

        <section className="lower-grid">
          <div className="process-block">
            <div className="mini-heading"><span>The</span><h2>Alias &amp; Alibi <em>Process</em></h2></div>
            <div className="process-rail">
              {privacyProcess.map(([number,title,copy], index) => <article key={number}><i>{number}</i><strong>{title}</strong><span>{copy}</span>{index < privacyProcess.length - 1 ? <b aria-hidden="true">›</b> : null}</article>)}
            </div>
            <div className="payment-note"><span>How payment works</span><p>Request a private review first. We define the proposed scope, boundaries, timing, and price in writing. After approval, you receive a secure payment link or invoice before work begins.</p></div>
          </div>

          <div className="package-block">
            <div className="mini-heading"><span>Flexible scope</span><h2>Package <em>Options</em></h2></div>
            <div className="package-grid">
              {packages.map((pkg) => <article key={pkg.name} className={pkg.featured ? "featured" : ""}>{pkg.featured ? <span className="popular">Most popular</span> : null}<h3>{pkg.name}</h3><small>{pkg.sub}</small><ul>{pkg.items.map((item) => <li key={item}>✓ {item}</li>)}</ul><Link href={pkg.href}>{pkg.featured ? "Apply now" : pkg.name === "Bespoke" ? "Schedule review" : "Get started"} <span>→</span></Link></article>)}
            </div>
          </div>

          <aside className="who-card"><h2>Who it’s for</h2><ul>{whoFor.map((item) => <li key={item}>✓ <span>{item}</span></li>)}</ul><div className="who-statement"><span>“</span><p>Privacy should make a transaction easier to control—not harder to explain.</p><small>Swift Deal Solutions</small></div></aside>
        </section>

        <section className="concept-footer-cta">
          <div className="concept-mini-brand"><span className="wing-mark">◆</span><div><strong>Swift</strong><small>Deal Solutions</small></div></div>
          <p>Structure. Execute. Protect.</p>
          <div><strong>Ready to move with more control?</strong><small>Explore Alias &amp; Alibi or start your transaction today.</small></div>
          <Link className="concept-btn concept-btn-outline" href="/privacy">◉ Explore privacy →</Link>
          <Link className="concept-btn concept-btn-gold" href="/submit">Start a deal →</Link>
        </section>
      </main>

      <style>{`
        :root { --concept-bg:#020b14; --concept-panel:#06111d; --concept-panel2:#081726; --concept-gold:#d6aa45; --concept-gold2:#f2cf72; --concept-line:rgba(214,170,69,.46); --concept-muted:rgba(255,255,255,.62); }
        body { background:var(--concept-bg); }
        .swift-concept-shell,.swift-concept-main { width:min(1480px,calc(100% - 44px)); margin-inline:auto; }
        .swift-concept-hero { min-height:610px; position:relative; overflow:hidden; display:flex; align-items:flex-end; background:#020b14; color:#fff; border-bottom:1px solid var(--concept-line); }
        .swift-concept-hero-media { position:absolute; inset:0 0 0 36%; background-image:url('https://privatejet.com/wp-content/uploads/2024/10/Luxury-Ground-Transportation.jpg'); background-size:cover; background-position:center; filter:saturate(.82) contrast(1.08); }
        .swift-concept-hero-shade { position:absolute; inset:0; background:linear-gradient(90deg,#020b14 0%,rgba(2,11,20,.98) 30%,rgba(2,11,20,.78) 47%,rgba(2,11,20,.12) 78%,rgba(2,11,20,.28) 100%),linear-gradient(0deg,rgba(2,11,20,.64),transparent 50%); }
        .swift-concept-hero-inner { position:relative; z-index:2; padding:180px 0 70px; }
        .concept-kicker { margin:0 0 18px; color:var(--concept-gold2); font-size:10px; font-weight:800; letter-spacing:.23em; text-transform:uppercase; }
        .swift-concept-hero h1 { margin:0; max-width:800px; font-family:Georgia,'Times New Roman',serif; font-size:clamp(58px,6.6vw,104px); line-height:.92; letter-spacing:-.055em; font-weight:400; }
        .swift-concept-hero h1 em { display:block; color:var(--concept-gold2); font-weight:400; }
        .concept-lede { max-width:650px; margin:25px 0 28px; color:rgba(255,255,255,.74); font-size:17px; line-height:1.7; }
        .concept-actions { display:flex; gap:15px; flex-wrap:wrap; }
        .concept-btn { min-height:52px; display:inline-flex; align-items:center; justify-content:center; gap:20px; padding:0 24px; border:1px solid var(--concept-line); font-size:10px; font-weight:850; letter-spacing:.08em; text-transform:uppercase; transition:.2s ease; }
        .concept-btn:hover { transform:translateY(-2px); }
        .concept-btn-gold { background:linear-gradient(180deg,#f3d57f,#d7a638); color:#06111d; border-color:#efc65d; box-shadow:0 0 30px rgba(214,170,69,.12); }
        .concept-btn-outline { color:#fff; background:rgba(2,11,20,.62); }
        .concept-btn small { display:block; margin-top:2px; font-size:8px; font-weight:500; letter-spacing:.06em; text-transform:none; color:rgba(255,255,255,.6); }
        .eye-icon { font-size:18px; color:var(--concept-gold2); }
        .swift-concept-main { padding:8px 0 22px; color:#fff; }
        .alias-feature { min-height:330px; display:grid; grid-template-columns:minmax(0,1.2fr) minmax(260px,.6fr) minmax(310px,.72fr); position:relative; overflow:hidden; border:1px solid var(--concept-line); border-radius:13px; background:linear-gradient(110deg,#04101b,#061523 64%,#07111a); }
        .alias-left { display:grid; grid-template-columns:150px 1fr; gap:28px; padding:28px; align-items:center; position:relative; }
        .alias-now { position:absolute; top:18px; left:28px; color:var(--concept-gold2); font-size:9px; font-weight:850; letter-spacing:.2em; text-transform:uppercase; }
        .alias-seal { width:138px; height:138px; margin-top:25px; border-radius:50%; display:flex; align-items:center; justify-content:center; gap:0; position:relative; background:radial-gradient(circle,#0b2131 0 48%,#06111d 49% 62%,#d8ae53 63% 67%,#081523 68% 74%,#d8ae53 75% 80%,#07111c 81%); color:var(--concept-gold2); box-shadow:0 8px 32px rgba(0,0,0,.45),inset 0 0 18px rgba(255,220,132,.2); }
        .alias-seal::before { content:''; position:absolute; inset:18px; border:1px solid rgba(242,207,114,.65); border-radius:50%; }
        .alias-seal span { font-family:Georgia,serif; font-size:52px; line-height:1; }
        .alias-seal span:last-child { margin-left:-26px; margin-top:28px; }
        .alias-seal i { position:absolute; font-family:Georgia,serif; font-size:17px; font-style:italic; color:rgba(255,255,255,.65); }
        .alias-copy { padding-top:22px; }
        .alias-copy h2 { margin:0; color:var(--concept-gold2); font-family:Georgia,serif; font-size:clamp(38px,4vw,62px); font-weight:400; letter-spacing:-.03em; }
        .alias-sub { margin:3px 0 18px !important; color:rgba(255,255,255,.72) !important; font-size:9px !important; letter-spacing:.26em; text-transform:uppercase; }
        .alias-copy strong { display:block; color:var(--concept-gold2); font-size:10px; letter-spacing:.11em; text-transform:uppercase; }
        .alias-copy p { max-width:620px; margin:12px 0 0; color:rgba(255,255,255,.67); font-size:13px; line-height:1.65; }
        .alias-actions { margin-top:20px; display:flex; flex-wrap:wrap; gap:24px; align-items:center; }
        .alias-actions .concept-btn { min-height:44px; }
        .alias-text-link { color:rgba(255,255,255,.82); font-size:10px; }
        .alias-services { align-self:stretch; display:flex; flex-direction:column; justify-content:center; gap:16px; padding:28px 18px; border-left:1px solid rgba(214,170,69,.28); border-right:1px solid rgba(214,170,69,.28); }
        .alias-services span { display:grid; grid-template-columns:28px 1fr; align-items:center; color:var(--concept-gold2); font-size:16px; }
        .alias-services b { color:rgba(255,255,255,.8); font-size:10px; font-weight:500; line-height:1.4; }
        .alias-services small { grid-column:2; color:rgba(255,255,255,.5); font-size:8px; }
        .alias-noir { position:relative; min-height:330px; overflow:hidden; }
        .alias-noir-image { position:absolute; inset:0; background-image:url('https://cdn.shopify.com/s/files/1/0844/6889/1926/files/blog-36-10.jpg?v=1766750493'); background-size:cover; background-position:center 20%; filter:saturate(.45) brightness(.62) contrast(1.12); }
        .alias-noir-gradient { position:absolute; inset:0; background:linear-gradient(90deg,#061523 0%,transparent 48%,rgba(2,11,20,.35)); }
        .alias-noir-mark { position:absolute; right:22px; bottom:18px; width:54px; height:54px; border:2px solid var(--concept-gold); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--concept-gold2); background:rgba(2,11,20,.82); box-shadow:0 0 0 5px rgba(214,170,69,.08); }
        .alias-noir-mark span { font-family:Georgia,serif; font-size:20px; }.alias-noir-mark span:last-child{margin-left:-8px;margin-top:12px}.alias-noir-mark i{position:absolute;font-size:8px;color:#fff;font-style:italic}
        .benefit-band { margin-top:10px; display:grid; grid-template-columns:minmax(330px,.8fr) minmax(0,1.6fr); border:1px solid rgba(214,170,69,.28); border-radius:12px; overflow:hidden; background:#04101b; }
        .benefit-intro { padding:22px 24px; border-right:1px solid rgba(214,170,69,.2); }
        .benefit-intro h2 { margin:0 0 8px; font-family:Georgia,serif; font-size:28px; font-weight:400; }.benefit-intro h2 em{color:var(--concept-gold2);font-weight:400}.benefit-intro p{margin:0;color:rgba(255,255,255,.62);font-size:11px;line-height:1.6}
        .benefit-grid { display:grid; grid-template-columns:repeat(5,1fr); }
        .benefit-grid article { min-height:118px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:12px; border-right:1px solid rgba(214,170,69,.18); }.benefit-grid article:last-child{border-right:0}.benefit-grid article>span{color:var(--concept-gold2);font-size:28px}.benefit-grid strong{margin-top:8px;font-size:10px}.benefit-grid small{margin-top:5px;color:rgba(255,255,255,.48);font-size:8px;line-height:1.35}
        .lower-grid { margin-top:10px; display:grid; grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr) 230px; gap:10px; }
        .process-block,.package-block,.who-card { border:1px solid rgba(214,170,69,.24); border-radius:12px; background:#04101b; padding:18px; }
        .mini-heading span { display:block; color:rgba(255,255,255,.45); font-size:8px; letter-spacing:.16em; text-transform:uppercase; }.mini-heading h2{margin:4px 0 16px;font-family:Georgia,serif;font-size:25px;font-weight:400}.mini-heading h2 em{color:var(--concept-gold2);font-weight:400}
        .process-rail { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
        .process-rail article { min-height:130px; position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; border:1px solid rgba(214,170,69,.24); border-radius:8px; padding:18px 10px 12px; background:#061321; }.process-rail i{position:absolute;top:-12px;left:12px;width:27px;height:27px;display:grid;place-items:center;border-radius:50%;background:var(--concept-gold2);color:#06111d;font-size:9px;font-style:normal;font-weight:850}.process-rail strong{font-size:10px;text-transform:uppercase}.process-rail span{margin-top:7px;color:rgba(255,255,255,.58);font-size:8px;line-height:1.4}.process-rail b{position:absolute;right:-11px;color:var(--concept-gold2);font-size:26px;font-weight:300;z-index:3}
        .payment-note { margin-top:16px; display:grid; grid-template-columns:130px 1fr; gap:14px; padding:14px 0 0; border-top:1px solid rgba(214,170,69,.2); }.payment-note span{color:var(--concept-gold2);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.payment-note p{margin:0;color:rgba(255,255,255,.58);font-size:9px;line-height:1.55}
        .package-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; align-items:stretch; }
        .package-grid article { min-height:240px; position:relative; display:flex; flex-direction:column; padding:18px; border:1px solid rgba(214,170,69,.3); border-radius:8px; background:#061321; }.package-grid article.featured{border-color:var(--concept-gold2);box-shadow:0 0 22px rgba(214,170,69,.18),inset 0 0 24px rgba(214,170,69,.04)}.popular{position:absolute;top:-10px;left:50%;transform:translateX(-50%);padding:3px 16px;border-radius:20px;background:#08111a;border:1px solid var(--concept-gold);color:var(--concept-gold2);font-size:7px;text-transform:uppercase;white-space:nowrap}.package-grid h3{margin:5px 0 2px;text-align:center;color:#fff;font-size:15px;text-transform:uppercase}.package-grid article.featured h3{color:var(--concept-gold2)}.package-grid article>small{text-align:center;color:rgba(255,255,255,.5);font-size:8px}.package-grid ul{margin:16px 0;padding:0;list-style:none;color:rgba(255,255,255,.74);font-size:8px;line-height:1.75}.package-grid a{margin-top:auto;min-height:34px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(214,170,69,.45);font-size:8px;text-transform:uppercase;letter-spacing:.06em}.package-grid .featured a{background:linear-gradient(180deg,#f3d57f,#d7a638);color:#06111d;font-weight:850}
        .who-card h2{margin:0;font-family:Georgia,serif;font-size:24px;font-weight:400}.who-card ul{margin:15px 0 0;padding:0;list-style:none}.who-card li{display:flex;gap:8px;padding:5px 0;color:var(--concept-gold2);font-size:10px}.who-card li span{color:rgba(255,255,255,.72);line-height:1.35}.who-statement{margin-top:18px;padding-top:15px;border-top:1px solid rgba(214,170,69,.2)}.who-statement>span{color:var(--concept-gold2);font-family:Georgia,serif;font-size:32px;line-height:.5}.who-statement p{margin:5px 0;color:rgba(255,255,255,.7);font-family:Georgia,serif;font-size:14px;font-style:italic;line-height:1.45}.who-statement small{color:rgba(255,255,255,.42);font-size:8px}
        .concept-footer-cta { min-height:78px; margin-top:10px; display:grid; grid-template-columns:220px 160px 1fr auto auto; gap:18px; align-items:center; padding:14px 18px; border-top:1px solid var(--concept-line); background:#020b14; }.concept-mini-brand{display:flex;align-items:center;gap:10px}.wing-mark{color:var(--concept-gold2);font-size:30px}.concept-mini-brand strong,.concept-mini-brand small{display:block;text-transform:uppercase}.concept-mini-brand strong{font-family:Georgia,serif;font-size:24px;font-weight:400;letter-spacing:.08em}.concept-mini-brand small{font-size:7px;letter-spacing:.3em}.concept-footer-cta>p{margin:0;color:var(--concept-gold2);font-size:9px}.concept-footer-cta>div:nth-child(3) strong,.concept-footer-cta>div:nth-child(3) small{display:block}.concept-footer-cta>div:nth-child(3) strong{font-family:Georgia,serif;font-weight:400}.concept-footer-cta>div:nth-child(3) small{margin-top:2px;color:rgba(255,255,255,.5);font-size:8px}.concept-footer-cta .concept-btn{min-height:42px;padding:0 18px}
        @media(max-width:1100px){.alias-feature{grid-template-columns:1fr 320px}.alias-services{grid-column:1;grid-row:2;border-left:0;border-right:0;border-top:1px solid rgba(214,170,69,.25);display:grid;grid-template-columns:repeat(3,1fr)}.alias-noir{grid-column:2;grid-row:1/3}.benefit-band{grid-template-columns:1fr}.benefit-intro{border-right:0;border-bottom:1px solid rgba(214,170,69,.2)}.lower-grid{grid-template-columns:1fr}.who-card{display:grid;grid-template-columns:220px 1fr 300px;gap:20px;align-items:start}.concept-footer-cta{grid-template-columns:1fr auto auto}.concept-footer-cta>p,.concept-footer-cta>div:nth-child(3){display:none}}
        @media(max-width:780px){.swift-concept-shell,.swift-concept-main{width:min(100% - 24px,1480px)}.swift-concept-hero{min-height:680px}.swift-concept-hero-media{inset:0;background-position:65% center}.swift-concept-hero-shade{background:linear-gradient(0deg,#020b14 0%,rgba(2,11,20,.92) 46%,rgba(2,11,20,.2) 100%)}.swift-concept-hero-inner{padding:300px 0 48px}.swift-concept-hero h1{font-size:clamp(48px,14vw,78px)}.concept-lede{font-size:14px}.alias-feature{grid-template-columns:1fr}.alias-left{grid-template-columns:100px 1fr;padding:22px}.alias-seal{width:94px;height:94px}.alias-seal span{font-size:34px}.alias-services{grid-column:1;grid-row:auto;grid-template-columns:1fr 1fr;padding:20px}.alias-noir{grid-column:1;grid-row:auto;min-height:300px}.benefit-grid{grid-template-columns:1fr 1fr}.benefit-grid article:nth-child(2n){border-right:0}.process-rail{grid-template-columns:1fr 1fr}.package-grid{grid-template-columns:1fr}.who-card{display:block}.concept-footer-cta{grid-template-columns:1fr}.concept-footer-cta .concept-btn{width:100%}.concept-mini-brand{justify-content:center}.payment-note{grid-template-columns:1fr}}
        @media(max-width:500px){.alias-left{grid-template-columns:1fr}.alias-seal{margin-top:32px}.alias-services{grid-template-columns:1fr}.benefit-grid{grid-template-columns:1fr}.benefit-grid article{border-right:0;border-bottom:1px solid rgba(214,170,69,.18)}.process-rail{grid-template-columns:1fr}.process-rail b{display:none}.concept-actions{display:grid}.concept-btn{width:100%}.alias-actions{align-items:stretch}.alias-actions .concept-btn{width:100%}}
      `}</style>
    </>
  );
}
