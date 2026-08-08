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
      <section className="section shell-wide"><SectionHeading kicker="Interactive process" title="Four stages. One visible operating sequence." copy="Select a stage to see what the transaction is trying to accomplish before it moves forward." /><ProcessRail /></section>
      <section className="section section-paper"><div className="shell-wide"><div className="process-detail-grid">{processSteps.map((step) => <article key={step.number}><span>{step.number}</span><h2>{step.title}</h2><p>{step.copy}</p></article>)}</div></div></section>
      <section className="link-band shell-wide"><div><span>Ready to open a mandate?</span><h2>Bring the asset facts. We’ll start with fit and structure.</h2></div><Link className="button button-dark" href="/submit">Begin inquiry <span>↗</span></Link></section>
    </>
  );
}
