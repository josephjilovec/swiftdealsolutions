import type { Metadata } from "next";
import Link from "next/link";
import { AssetUniverse } from "@/components/AssetUniverse";
import { RepresentativeProfiles } from "@/components/RepresentativeProfiles";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Explore Swift Deal Solutions asset categories and illustrative private-placement profiles.",
  alternates: { canonical: "/opportunities" }
};

export default function OpportunitiesPage() {
  return (
    <>
      <section className="page-hero page-hero-opportunities">
        <div className="shell-wide">
          <p className="hero-eyebrow"><span /> Private opportunity system</p>
          <h1>Different assets require <em>different evidence.</em></h1>
          <p>Explore the three mandate categories, the information that matters in each, and representative examples of how a private placement could be presented.</p>
        </div>
      </section>
      <section className="opportunity-visual-strip shell-wide" aria-label="Representative private asset markets">
        <article className="opportunity-photo aviation"><span><small>Aviation</small><strong>Mobile capital.</strong></span></article>
        <article className="opportunity-photo maritime"><span><small>Maritime</small><strong>Trophy assets.</strong></span></article>
        <article className="opportunity-photo estate"><span><small>Real estate</small><strong>Private ownership.</strong></span></article>
      </section>
      <section className="section section-paper"><div className="shell-wide"><SectionHeading kicker="Asset focus" title="Choose the market. Change the brief." copy="The data points, diligence path, and relevant counterparties change with the asset class." /><AssetUniverse /></div></section>
      <section className="section section-dark"><div className="shell-wide"><SectionHeading kicker="Illustrative profiles" title="Presentation without inflated claims." copy="These are examples of the intended presentation layer, not a transaction-history page." inverted /><RepresentativeProfiles /></div></section>
      <section className="link-band shell-wide"><div><span>Have a real opportunity?</span><h2>Start with the asset, authority to transact, and timing.</h2></div><Link className="button button-dark" href="/submit?mode=seller">Open private inquiry <span>↗</span></Link></section>
      <style>{`
        .opportunity-visual-strip{display:grid;grid-template-columns:1.05fr .95fr 1fr;gap:16px;margin-top:34px;margin-bottom:28px}.opportunity-photo{min-height:330px;position:relative;overflow:hidden;border:1px solid rgba(212,175,55,.35);background:#07111c center/cover no-repeat;isolation:isolate}.opportunity-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(3,10,18,.96),rgba(3,10,18,.04) 72%);z-index:1}.opportunity-photo span{position:absolute;z-index:2;left:24px;bottom:23px}.opportunity-photo small,.opportunity-photo strong{display:block}.opportunity-photo small{color:#f2cf72;font-size:9px;font-weight:800;letter-spacing:.17em;text-transform:uppercase}.opportunity-photo strong{margin-top:6px;color:#fff;font-family:var(--serif);font-size:30px;font-weight:400}.aviation{background-image:url('https://www.elitejets.com/wp-content/uploads/2020/06/L500-Runway-1920px-1024x579.jpg')}.maritime{background-image:url('https://cdn-image.y.co/upload/f_auto%2Cq_70%2Cc_fill%2Car_3%3A2%2Cw_1600/v1723799992/yacht/kensho/2024%2008%20Thierry%20Ameller%20Ibiza/yacht-kensho-running-01_xlpuyp.jpg')}.estate{background-image:url('https://www.acresh.com/pictures/blog/large/exploring-the-most-lavish-waterfront-properties_2.webp')}@media(max-width:800px){.opportunity-visual-strip{grid-template-columns:1fr}.opportunity-photo{min-height:270px}}
      `}</style>
    </>
  );
}
