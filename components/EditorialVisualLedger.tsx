import Link from "next/link";

const visualCards = [
  {
    eyebrow: "Transactions",
    title: "Private aviation",
    copy: "High-value mandates where timing, authority, diligence, and counterparty fit matter as much as the asset itself.",
    href: "/process",
    image: "https://www.elitejets.com/wp-content/uploads/2020/06/L500-Runway-1920px-1024x579.jpg",
    position: "center"
  },
  {
    eyebrow: "Assets",
    title: "Maritime & trophy assets",
    copy: "Distinctive assets presented with controlled circulation, clear evidence, and a disciplined private-placement brief.",
    href: "/opportunities",
    image: "https://cdn-image.y.co/upload/f_auto%2Cq_70%2Cc_fill%2Car_3%3A2%2Cw_800/v1723799992/yacht/kensho/2024%2008%20Thierry%20Ameller%20Ibiza/yacht-kensho-running-01_xlpuyp.jpg",
    position: "center"
  },
  {
    eyebrow: "Privacy",
    title: "Real-estate discretion",
    copy: "Property, title, correspondence, and exposure surfaces mapped before consequential paperwork begins.",
    href: "/privacy",
    image: "https://www.acresh.com/pictures/blog/large/exploring-the-most-lavish-waterfront-properties_2.webp",
    position: "center"
  }
] as const;

export function EditorialVisualLedger() {
  return (
    <section className="editorial-visual-ledger" aria-label="Swift Deal Solutions private market capabilities">
      {visualCards.map((card) => (
        <Link href={card.href} className="editorial-visual-card" key={card.title}>
          <span
            className="editorial-visual-image"
            aria-hidden="true"
            style={{ backgroundImage: `url('${card.image}')`, backgroundPosition: card.position }}
          />
          <span className="editorial-visual-shade" aria-hidden="true" />
          <span className="editorial-visual-copy">
            <small>{card.eyebrow}</small>
            <strong>{card.title}</strong>
            <span>{card.copy}</span>
            <b>Explore →</b>
          </span>
        </Link>
      ))}
      <style>{`
        .editorial-visual-ledger{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:14px}
        .editorial-visual-card{min-height:300px;position:relative;overflow:hidden;border:1px solid rgba(214,170,69,.4);border-radius:15px;background:#06111d;isolation:isolate}
        .editorial-visual-image,.editorial-visual-shade{position:absolute;inset:0}
        .editorial-visual-image{background-size:cover;filter:saturate(.64) brightness(.72) contrast(1.08);transition:transform .7s cubic-bezier(.2,.7,.2,1),filter .35s ease}
        .editorial-visual-shade{background:linear-gradient(0deg,rgba(2,11,20,.98) 0%,rgba(2,11,20,.72) 34%,rgba(2,11,20,.08) 75%),linear-gradient(90deg,rgba(2,11,20,.25),transparent 55%);z-index:1}
        .editorial-visual-copy{position:absolute;z-index:2;inset:auto 0 0;padding:25px 27px;display:grid}
        .editorial-visual-copy small{color:#f2cf72;font-size:9px;font-weight:850;letter-spacing:.2em;text-transform:uppercase}
        .editorial-visual-copy strong{margin-top:7px;color:#fff;font-family:Georgia,'Times New Roman',serif;font-size:29px;font-weight:400;letter-spacing:-.025em}
        .editorial-visual-copy span{max-width:430px;margin-top:8px;color:rgba(255,255,255,.63);font-size:11px;line-height:1.55}
        .editorial-visual-copy b{margin-top:16px;color:#f2cf72;font-size:9px;letter-spacing:.12em;text-transform:uppercase}
        .editorial-visual-card:hover .editorial-visual-image{transform:scale(1.045);filter:saturate(.78) brightness(.82) contrast(1.08)}
        @media(max-width:900px){.editorial-visual-ledger{grid-template-columns:1fr}.editorial-visual-card{min-height:260px}}
      `}</style>
    </section>
  );
}
