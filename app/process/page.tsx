import type { Metadata } from "next";
import Link from "next/link";
import { ProcessRail } from "@/components/ProcessRail";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description: "How Swift Deal Solutions structures private sourcing, diligence, and transaction coordination.",
  alternates: { canonical: "/process" }
};

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero page-hero-process"><div className="shell-wide"><p className="hero-eyebrow"><span /> Transaction architecture</p><h1>A controlled path from <em>brief to closing.</em></h1><p>The process is designed around explicit roles, qualified counterparties, written terms, and the appropriate licensed professionals where the transaction requires them.</p></div></section>
      <section className="swift-interior-visuals process-interior shell-wide" aria-label="Private transaction coordination visuals">
        <article className="swift-interior-card process-office"><span><small>Mandate control</small><strong>Private coordination before execution.</strong></span></article>
        <article className="swift-interior-card process-close"><span><small>Counterparty discipline</small><strong>Evidence, authority, terms, then closing.</strong></span></article>
      </section>
      <section className="section shell-wide"><SectionHeading kicker="Interactive process" title="Four stages. One visible operating sequence." copy="Select a stage to see what the transaction is trying to accomplish before it moves forward." /><ProcessRail /></section>
      <section className="section section-paper"><div className="shell-wide"><div className="process-detail-grid">{processSteps.map((step) => <article key={step.number}><span>{step.number}</span><h2>{step.title}</h2><p>{step.copy}</p></article>)}</div></div></section>
      <section className="link-band shell-wide"><div><span>Ready to open a mandate?</span><h2>Bring the asset facts. We’ll start with fit and structure.</h2></div><Link className="button button-dark" href="/submit">Begin inquiry <span>↗</span></Link></section>
      <style>{`
        .swift-interior-visuals{display:grid;gap:18px;margin-top:34px;margin-bottom:10px}.process-interior{grid-template-columns:1.15fr .85fr}.swift-interior-card{min-height:360px;position:relative;overflow:hidden;border:1px solid rgba(212,175,55,.34);background:#07111c center/cover no-repeat;isolation:isolate}.swift-interior-card:before{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(3,10,18,.96),rgba(3,10,18,.08) 70%),linear-gradient(90deg,rgba(3,10,18,.34),transparent);z-index:1}.swift-interior-card span{position:absolute;z-index:2;left:30px;right:30px;bottom:27px;display:grid;gap:7px}.swift-interior-card small{color:#f2cf72;font-size:9px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}.swift-interior-card strong{max-width:520px;color:#fff;font-family:var(--serif);font-size:clamp(26px,3vw,42px);font-weight:400;line-height:1.03}.process-office{background-image:url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85')}.process-close{background-image:url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1800&q=85')}@media(max-width:800px){.process-interior{grid-template-columns:1fr}.swift-interior-card{min-height:280px}}
      `}</style>
    </>
  );
}
