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
      <section className="page-hero page-hero-submit"><div className="shell-wide"><p className="hero-eyebrow"><span /> Confidential first contact</p><h1>Bring the essential facts. <em>Keep the noise out.</em></h1><p>Share enough information to evaluate fit. Inquiry details are used for private review and are not published as a public listing.</p></div></section>
      <section className="section section-paper"><div className="shell-wide inquiry-layout"><aside><p className="kicker">Private inquiry</p><h2>Start with clarity.</h2><p>Asset owners, authorized representatives, and qualified buyers can use the structured form. The server route keeps mail credentials out of browser JavaScript.</p><div className="privacy-note"><strong>Discretion from first contact</strong><p>Submitting the form does not create an agency, brokerage, fiduciary, purchase, or advisory relationship.</p></div></aside><Suspense fallback={<div className="form-loading">Loading private inquiry…</div>}><InquiryForm /></Suspense></div></section>
    </>
  );
}
