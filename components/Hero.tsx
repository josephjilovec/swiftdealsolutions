import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="home-title">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy-block">
        <p className="hero-eyebrow"><span /> Private transactions · Select assets</p>
        <h1 id="home-title">Discreet high-ticket <em>asset sourcing & placement.</em></h1>
        <p className="hero-lede">
          Private contract solutions for distinctive real estate, rare motorcars, and luxury marine assets—structured around clarity, qualified counterparties, and controlled exposure.
        </p>
        <div className="hero-actions">
          <Link className="button button-gold" href="/submit?mode=seller">Submit an asset <span>↗</span></Link>
          <Link className="button button-ghost" href="/submit?mode=buyer">Access private inventory</Link>
        </div>
      </div>
      <aside className="hero-console" aria-label="Focused mandates">
        <div className="console-head"><span>Mandate focus</span><i>Live framework</i></div>
        <div className="console-row"><span>01</span><div><strong>Real estate</strong><small>Estates · Multifamily · Commercial</small></div></div>
        <div className="console-row"><span>02</span><div><strong>Automotive</strong><small>Rare · Collector · Performance</small></div></div>
        <div className="console-row"><span>03</span><div><strong>Marine</strong><small>Yachts · Powerboats · Specialty craft</small></div></div>
        <div className="console-foot"><span>Structure</span><strong>Principal · option · assignment</strong></div>
      </aside>
      <div className="hero-rail" aria-hidden="true"><span>Private market system</span><i /></div>
    </section>
  );
}
