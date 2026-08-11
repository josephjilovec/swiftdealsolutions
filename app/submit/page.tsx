import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Private Inquiry",
  description: "Submit an asset or apply for access to Swift Deal Solutions private opportunity flow.",
  alternates: { canonical: "/submit" }
};

export default function SubmitPage() {
  return (
    <>
      <section className="submit-office-hero">
        <div className="submit-office-photo" aria-hidden="true" />
        <div className="submit-office-shade" aria-hidden="true" />
        <div className="shell-wide submit-office-copy">
          <p className="hero-eyebrow"><span /> Confidential first contact</p>
          <h1>Bring the essential facts. <em>Keep the noise out.</em></h1>
          <p>Share enough information to evaluate fit. Inquiry details are used for private review and are not published as a public listing.</p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="shell-wide inquiry-layout">
          <aside>
            <p className="kicker">Private inquiry</p>
            <h2>Start with clarity.</h2>
            <p>Asset owners, authorized representatives, and qualified buyers can use the structured form.</p>
            <div className="privacy-note"><strong>Discretion from first contact</strong><p>Submitting the form does not create an agency, brokerage, fiduciary, purchase, or advisory relationship.</p></div>
          </aside>
          <Suspense fallback={<div className="form-loading">Loading private inquiry…</div>}><InquiryForm /></Suspense>
        </div>
      </section>

      <style>{`
        .submit-office-hero{position:relative;min-height:700px;display:flex;align-items:end;overflow:hidden;background:#030a12;color:#fff;border-bottom:1px solid rgba(212,175,55,.28)}
        .submit-office-photo{position:absolute;inset:0;background-image:url('https://images.pexels.com/photos/8572162/pexels-photo-8572162.jpeg?auto=compress&cs=tinysrgb&w=2200');background-size:cover;background-position:center 44%;filter:saturate(.58) brightness(.62) contrast(1.08)}
        .submit-office-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,10,18,.96) 0%,rgba(3,10,18,.82) 40%,rgba(3,10,18,.38) 72%,rgba(3,10,18,.3) 100%),linear-gradient(0deg,rgba(3,10,18,.65),transparent 55%)}
        .submit-office-copy{position:relative;z-index:2;padding:105px 0 78px}
        .submit-office-copy h1{max-width:980px;margin:0;font-family:var(--serif);font-size:clamp(60px,7vw,108px);line-height:.92;letter-spacing:-.055em;font-weight:400}
        .submit-office-copy h1 em{display:block;color:var(--gold-bright);font-weight:400}
        .submit-office-copy>p:not(.hero-eyebrow){max-width:700px;margin:30px 0 0;color:rgba(255,255,255,.72);font-size:18px;line-height:1.75}
        @media(max-width:800px){.submit-office-hero{min-height:620px}.submit-office-photo{background-position:62% center}.submit-office-shade{background:linear-gradient(90deg,rgba(3,10,18,.94),rgba(3,10,18,.68))}.submit-office-copy{padding:78px 0 62px}}
      `}</style>
    </>
  );
}
