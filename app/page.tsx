import Link from "next/link";
import { DealArchitectureSuite } from "@/components/DealArchitectureSuite";

const process = [
  ["01", "Review the opportunity", "Start with the asset, authority to transact, pricing expectations, timing, and the information a serious counterparty will actually need."],
  ["02", "Structure the brief", "Clarify the role Swift is playing, the intended transaction path, required disclosures, and the professional parties that may be needed."],
  ["03", "Match selectively", "Present the opportunity to relevant qualified counterparties instead of turning every mandate into a broad public campaign."],
  ["04", "Coordinate the close", "Keep diligence, inspections, title, escrow, surveys, financing, assignment terms, and professional handoffs organized through the agreed milestones."]
] as const;

const assetCards = [
  {
    eyebrow: "Residential + commercial",
    title: "Real estate",
    copy: "Private residences, luxury homes, multifamily, and select commercial properties. The transaction brief changes with the asset, but the goal stays the same: clear terms, capable counterparties, and disciplined execution.",
    href: "/opportunities",
    image: "https://images.unsplash.com/photo-1783936535299-6ff0f8bbd1d0?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  },
  {
    eyebrow: "Collector + limited production",
    title: "Automotive",
    copy: "Rare, exotic, collector-grade, and specialty vehicles presented around specification, documentation, condition, value, and a realistic path to transfer.",
    href: "/opportunities",
    image: "https://images.unsplash.com/photo-1768352725353-d498db8a1722?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  },
  {
    eyebrow: "Yachts + specialty craft",
    title: "Marine",
    copy: "Significant powerboats, motor yachts, and specialty craft where vessel records, survey coordination, escrow, and buyer qualification matter as much as presentation.",
    href: "/opportunities",
    image: "https://images.unsplash.com/photo-1776934121312-e256a6339bc1?auto=format&fit=crop&fm=jpg&q=82&w=1800"
  }
] as const;

export default function HomePage() {
  return (
    <>
      <section className="swift-home-hero">
        <div className="swift-home-hero-media" aria-hidden="true" />
        <div className="swift-home-hero-shade" aria-hidden="true" />
        <div className="shell-wide swift-home-hero-copy">
          <p className="hero-eyebrow"><span /> High-velocity transaction architecture</p>
          <h1>Move the asset.<br /><em>Keep control of the process.</em></h1>
          <p>Swift Deal Solutions coordinates discreet, high-value transactions across residential and commercial real estate, collector automobiles, and marine assets. Clear briefs. Qualified counterparties. Visible milestones from intake through close.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/submit">Start a deal <span>↗</span></Link>
            <Link className="button button-ghost" href="#deal-intelligence">View deal architecture <span>↓</span></Link>
          </div>
        </div>
      </section>

      <section className="section shell-wide swift-intro">
        <div>
          <p className="kicker">What Swift does</p>
          <h2>A private transaction operating layer built around the asset—not a generic marketplace.</h2>
        </div>
        <p>Some opportunities need broad exposure. Others do not. Swift is designed for owners, buyers, and authorized representatives who want a more controlled route: organize the facts, frame the economics, verify the parties, reach the right people, and coordinate the close without turning the process into a public spectacle.</p>
      </section>

      <DealArchitectureSuite />

      <section className="swift-assets shell-wide" aria-label="Swift Deal Solutions asset categories">
        {assetCards.map((asset) => (
          <Link href={asset.href} className="swift-asset-card" key={asset.title}>
            <div className="swift-asset-image" style={{ backgroundImage: `url('${asset.image}')` }} aria-hidden="true" />
            <div className="swift-asset-shade" aria-hidden="true" />
            <div className="swift-asset-copy">
              <small>{asset.eyebrow}</small>
              <h2>{asset.title}</h2>
              <p>{asset.copy}</p>
              <span>Explore assets ↗</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="section section-paper swift-process-home">
        <div className="shell-wide">
          <div className="swift-process-head">
            <div><p className="kicker">How it works</p><h2>A transaction process people can actually follow.</h2></div>
            <p>The operating process is designed to keep decisions, disclosures, diligence, verification, and professional handoffs visible as an opportunity moves toward a structured close.</p>
          </div>
          <div className="swift-process-grid">
            {process.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="swift-process-link"><Link className="text-link" href="/process">See the full process <span>↗</span></Link></div>
        </div>
      </section>

      <section className="alias-home shell-wide">
        <div className="alias-home-image" aria-hidden="true" />
        <div className="alias-home-shade" aria-hidden="true" />
        <div className="alias-home-copy">
          <p className="kicker">Alias &amp; Alibi</p>
          <h2>Privacy coordination when the transaction creates unnecessary exposure.</h2>
          <p>Alias &amp; Alibi is the privacy layer inside Swift Deal Solutions. It helps clients map public-facing records, correspondence, entity administration, and property-related exposure, then route regulated work to the appropriate professionals. It is available alongside a Swift transaction or as a scoped standalone engagement.</p>
          <Link className="button button-gold" href="/privacy">Explore Alias &amp; Alibi <span>↗</span></Link>
        </div>
      </section>

      <section className="swift-final-cta shell-wide">
        <div><p className="kicker">Private first contact</p><h2>Have an asset, mandate, or acquisition target?</h2></div>
        <div><p>Bring the essential facts. We will start by determining fit, authority, timing, and the next practical step.</p><Link className="button button-dark" href="/submit">Open private inquiry <span>↗</span></Link></div>
      </section>

      <style>{`
        .swift-home-hero{position:relative;min-height:760px;display:flex;align-items:end;overflow:hidden;background:#020b14;color:#fff;border-bottom:1px solid rgba(214,170,69,.4)}
        .swift-home-hero-media{position:absolute;inset:0;background-image:url('https://privatejet.com/wp-content/uploads/2024/10/Luxury-Ground-Transportation.jpg');background-size:cover;background-position:center;filter:saturate(.8) contrast(1.08)}
        .swift-home-hero-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,11,20,.98) 0%,rgba(2,11,20,.89) 38%,rgba(2,11,20,.46) 68%,rgba(2,11,20,.3) 100%),linear-gradient(0deg,rgba(2,11,20,.66),transparent 55%)}
        .swift-home-hero-copy{position:relative;z-index:2;padding:120px 0 92px}
        .swift-home-hero h1{max-width:980px;margin:0;font-family:var(--serif);font-size:clamp(62px,7vw,112px);line-height:.91;letter-spacing:-.055em;font-weight:400}
        .swift-home-hero h1 em{display:block;color:var(--gold-bright);font-weight:400}
        .swift-home-hero-copy>p:not(.hero-eyebrow){max-width:760px;margin:30px 0 36px;color:rgba(255,255,255,.74);font-size:18px;line-height:1.75}
        .swift-intro{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(320px,.65fr);gap:clamp(48px,8vw,120px);align-items:end}
        .swift-intro h2,.swift-process-head h2,.swift-final-cta h2{margin:14px 0 0;font-family:var(--serif);font-size:clamp(44px,5vw,76px);line-height:1;letter-spacing:-.045em;font-weight:400}
        .swift-intro>p,.swift-process-head>p,.swift-final-cta p{margin:0;color:var(--muted);font-size:16px;line-height:1.8}
        .swift-assets{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;padding-top:clamp(86px,9vw,145px);padding-bottom:clamp(86px,9vw,150px)}
        .swift-asset-card{position:relative;min-height:560px;overflow:hidden;border:1px solid rgba(212,175,55,.32);background:#07111c;color:#fff;isolation:isolate}
        .swift-asset-image,.swift-asset-shade{position:absolute;inset:0}
        .swift-asset-image{background-size:cover;background-position:center;transition:transform .55s ease;z-index:-2}
        .swift-asset-shade{z-index:-1;background:linear-gradient(0deg,rgba(3,10,18,.98) 0%,rgba(3,10,18,.68) 43%,rgba(3,10,18,.08) 82%)}
        .swift-asset-card:hover .swift-asset-image{transform:scale(1.035)}
        .swift-asset-copy{position:absolute;left:28px;right:28px;bottom:28px}
        .swift-asset-copy small{color:var(--gold-bright);font-size:9px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}
        .swift-asset-copy h2{margin:7px 0 12px;font-family:var(--serif);font-size:46px;font-weight:400}
        .swift-asset-copy p{margin:0;color:rgba(255,255,255,.68);font-size:13px;line-height:1.7}
        .swift-asset-copy span{display:block;margin-top:20px;color:var(--gold-bright);font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
        .swift-process-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,.55fr);gap:clamp(42px,7vw,100px);align-items:end;margin-bottom:58px}
        .swift-process-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .swift-process-grid article{min-height:300px;padding:30px;border-right:1px solid var(--line)}
        .swift-process-grid article:first-child{padding-left:0}.swift-process-grid article:last-child{border-right:0}
        .swift-process-grid span{color:var(--gold-dark);font-family:var(--serif)}
        .swift-process-grid h3{margin:62px 0 14px;font-family:var(--serif);font-size:28px;font-weight:400}
        .swift-process-grid p{margin:0;color:var(--muted);font-size:13px;line-height:1.75}
        .swift-process-link{margin-top:34px}
        .alias-home{position:relative;min-height:620px;margin-top:clamp(82px,8vw,130px);margin-bottom:clamp(82px,8vw,130px);overflow:hidden;border:1px solid rgba(212,175,55,.36);background:#06111d;color:#fff;display:flex;align-items:center;isolation:isolate}
        .alias-home-image{position:absolute;inset:0 0 0 46%;z-index:-3;background-image:url('https://media.easy-peasy.ai/e47f4f76-4282-464f-98fe-bbb76bda5222/5aa34bd5-6e7e-4c07-9468-d64b0b21709b.png');background-size:cover;background-position:center 20%;filter:saturate(.45) brightness(.62) contrast(1.12)}
        .alias-home-shade{position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,#06111d 0%,#06111d 40%,rgba(6,17,29,.82) 58%,rgba(6,17,29,.18) 100%)}
        .alias-home-copy{max-width:680px;padding:72px}
        .alias-home-copy .kicker{color:var(--gold-bright)}
        .alias-home-copy h2{margin:14px 0 22px;font-family:var(--serif);font-size:clamp(46px,5vw,76px);line-height:1;letter-spacing:-.045em;font-weight:400}
        .alias-home-copy p{margin:0 0 30px;color:rgba(255,255,255,.68);font-size:15px;line-height:1.8}
        .swift-final-cta{display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,.55fr);gap:clamp(42px,8vw,120px);align-items:end;padding:0 0 clamp(90px,9vw,150px)}
        .swift-final-cta .button{margin-top:26px}
        @media(max-width:1000px){.swift-assets{grid-template-columns:1fr}.swift-asset-card{min-height:440px}.swift-process-grid{grid-template-columns:1fr 1fr}.swift-process-grid article:nth-child(2){border-right:0}.swift-process-grid article:nth-child(-n+2){border-bottom:1px solid var(--line)}}
        @media(max-width:800px){.swift-home-hero{min-height:680px}.swift-home-hero-copy{padding:90px 0 72px}.swift-intro,.swift-process-head,.swift-final-cta{grid-template-columns:1fr}.swift-process-grid{grid-template-columns:1fr}.swift-process-grid article{border-right:0;border-bottom:1px solid var(--line);padding:28px 0;min-height:0}.swift-process-grid article:last-child{border-bottom:0}.swift-process-grid h3{margin-top:30px}.alias-home{min-height:660px;align-items:end}.alias-home-image{inset:0}.alias-home-shade{background:linear-gradient(0deg,#06111d 0%,rgba(6,17,29,.9) 55%,rgba(6,17,29,.24) 100%)}.alias-home-copy{padding:36px 28px}.swift-final-cta{padding-bottom:90px}}
      `}</style>
    </>
  );
}
