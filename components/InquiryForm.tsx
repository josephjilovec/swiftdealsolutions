"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

type Mode = "seller" | "buyer" | "privacy";

type FormStatus = { kind: "idle" | "loading" | "success" | "error"; message: string };

export function InquiryForm() {
  const searchParams = useSearchParams();
  const requestedMode = searchParams.get("mode");
  const initialMode: Mode = requestedMode === "buyer" ? "buyer" : requestedMode === "privacy" ? "privacy" : "seller";
  const [mode, setMode] = useState<Mode>(initialMode);
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });

  const context = useMemo(() => ({
    asset: searchParams.get("asset") || "",
    value: searchParams.get("value") || "",
    timeline: searchParams.get("timeline") || "",
    priority: searchParams.get("priority") || "",
    service: searchParams.get("service") || ""
  }), [searchParams]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setStatus({ kind: "loading", message: "Sending your private inquiry…" });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, mode })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send inquiry.");
      form.reset();
      setStatus({ kind: "success", message: mode === "privacy" ? "Your Alias & Alibi request was received for private review." : "Your inquiry was received for private review." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to send inquiry." });
    }
  }

  const title = mode === "seller" ? "Asset evaluation brief" : mode === "buyer" ? "Private inventory access" : "Alias & Alibi privacy review";
  const kicker = mode === "seller" ? "Asset owner / authorized representative" : mode === "buyer" ? "Principal buyer / acquisition team" : "Swift Deal Solutions / privacy package";

  return (
    <div className="inquiry-shell">
      <div className="inquiry-tabs" role="tablist" aria-label="Inquiry type">
        <button type="button" role="tab" aria-selected={mode === "seller"} className={mode === "seller" ? "is-active" : ""} onClick={() => setMode("seller")}><span>01</span> Submit an asset</button>
        <button type="button" role="tab" aria-selected={mode === "buyer"} className={mode === "buyer" ? "is-active" : ""} onClick={() => setMode("buyer")}><span>02</span> Buyer network</button>
        <button type="button" role="tab" aria-selected={mode === "privacy"} className={mode === "privacy" ? "is-active" : ""} onClick={() => setMode("privacy")}><span>03</span> Privacy package</button>
      </div>

      <form className="inquiry-form" onSubmit={submit}>
        <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="brief_asset" value={context.asset} />
        <input type="hidden" name="brief_value" value={context.value} />
        <input type="hidden" name="brief_timeline" value={context.timeline} />
        <input type="hidden" name="brief_priority" value={context.priority} />
        <input type="hidden" name="requested_service" value={mode === "privacy" ? (context.service || "Alias & Alibi") : ""} />

        <div className="form-title">
          <p className="mini-kicker">{kicker}</p>
          <h2>{title}</h2>
        </div>

        <div className="form-grid">
          <label>Full name *<input name="name" required autoComplete="name" placeholder="Your full name" /></label>
          <label>Email address *<input name="email" type="email" required autoComplete="email" placeholder="name@company.com" /></label>
          <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+1 (000) 000-0000" /></label>
          <label>{mode === "seller" ? "Relationship to asset" : mode === "buyer" ? "Company / family office" : "Company / entity"}<input name="organization" placeholder={mode === "seller" ? "Owner, representative, advisor" : "Optional"} /></label>
        </div>

        {mode === "seller" ? (
          <>
            <div className="form-grid">
              <label>Asset class *<select name="asset_class" required defaultValue=""><option value="" disabled>Select asset class</option><option>Luxury residential real estate</option><option>Commercial / multifamily real estate</option><option>Rare / exotic automobile</option><option>Luxury marine / yacht</option></select></label>
              <label>Asset location *<input name="asset_location" required placeholder="City, state or country" /></label>
              <label>Estimated value *<select name="estimated_value" required defaultValue=""><option value="" disabled>Select range</option><option>$100K–$250K</option><option>$250K–$1M</option><option>$1M–$5M</option><option>$5M–$15M</option><option>$15M+</option></select></label>
              <label>Preferred timeline *<select name="timeline" required defaultValue=""><option value="" disabled>Select timeline</option><option>Under 30 days</option><option>30–60 days</option><option>60–90 days</option><option>Flexible / exploratory</option></select></label>
            </div>
            <label>Asset overview *<textarea name="details" required rows={6} placeholder="Describe the asset, pricing expectations, condition, current marketing status, authority to transact, and any timing considerations." /></label>
          </>
        ) : mode === "buyer" ? (
          <>
            <div className="form-grid">
              <label>Primary asset class *<select name="target_asset_class" required defaultValue=""><option value="" disabled>Select asset class</option><option>Luxury residential real estate</option><option>Commercial / multifamily real estate</option><option>Rare / exotic automobiles</option><option>Luxury marine / yachts</option><option>Multiple asset classes</option></select></label>
              <label>Liquidity range *<select name="liquidity_range" required defaultValue=""><option value="" disabled>Select range</option><option>$100K–$500K</option><option>$500K–$2M</option><option>$2M–$10M</option><option>$10M–$25M</option><option>$25M+</option></select></label>
              <label>Target geography<input name="target_geography" placeholder="Markets or regions" /></label>
              <label>Purchase timeline *<select name="purchase_timeline" required defaultValue=""><option value="" disabled>Select timeline</option><option>Actively acquiring now</option><option>Within 90 days</option><option>Within 6 months</option><option>Monitoring opportunities</option></select></label>
            </div>
            <label>Acquisition criteria *<textarea name="criteria" required rows={6} placeholder="Describe preferred assets, price range, condition, geography, proof-of-funds process, and decision timeline." /></label>
          </>
        ) : (
          <>
            <div className="form-grid">
              <label>Engagement type *<select name="privacy_engagement" required defaultValue=""><option value="" disabled>Select engagement</option><option>Add privacy coordination to a Swift transaction</option><option>Standalone privacy review</option><option>The Nameless Landlord / property privacy review</option></select></label>
              <label>Primary need *<select name="privacy_need" required defaultValue={context.service === "property" ? "Real-estate records / property privacy" : ""}><option value="" disabled>Select primary need</option><option>Public-exposure mapping</option><option>Entity privacy coordination</option><option>Secure correspondence / address review</option><option>Real-estate records / property privacy</option><option>Multiple areas / not sure yet</option></select></label>
              <label>Primary jurisdiction / location *<input name="privacy_location" required placeholder="State, country, or property location" /></label>
              <label>Preferred timing *<select name="privacy_timeline" required defaultValue=""><option value="" disabled>Select timing</option><option>As soon as practical</option><option>Within 30 days</option><option>Within 60–90 days</option><option>Exploratory / planning stage</option></select></label>
            </div>
            <label>What would you like reviewed? *<textarea name="privacy_details" required rows={6} placeholder="Describe the exposure or privacy concern at a high level. Do not send passwords, account credentials, Social Security numbers, or confidential legal documents through this first-contact form." /></label>
            <div className="privacy-note"><strong>How pricing works</strong><p>We review the requested scope first. You receive the proposed scope, boundaries, timing, and price before payment. If you approve, a secure payment link or invoice is issued before the engagement begins.</p></div>
          </>
        )}

        <label className="consent"><input type="checkbox" name="consent" value="accepted" required /><span>I agree to be contacted about this inquiry and understand that submitting this form does not create an agency, brokerage, fiduciary, purchase, legal, tax, or advisory relationship.</span></label>
        <button className="button button-dark form-submit" type="submit" disabled={status.kind === "loading"}>{status.kind === "loading" ? "Sending…" : mode === "seller" ? "Request private evaluation" : mode === "buyer" ? "Apply for inventory access" : "Request privacy scope & pricing"}<span>↗</span></button>
        <p className={`form-status ${status.kind}`} aria-live="polite">{status.message}</p>
      </form>
    </div>
  );
}
