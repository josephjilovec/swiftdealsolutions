"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

type Mode = "seller" | "buyer";

type FormStatus = { kind: "idle" | "loading" | "success" | "error"; message: string };

export function InquiryForm() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "buyer" ? "buyer" : "seller";
  const [mode, setMode] = useState<Mode>(initialMode);
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });

  const context = useMemo(() => ({
    asset: searchParams.get("asset") || "",
    value: searchParams.get("value") || "",
    timeline: searchParams.get("timeline") || "",
    priority: searchParams.get("priority") || ""
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
      setStatus({ kind: "success", message: "Your inquiry was received for private review." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to send inquiry." });
    }
  }

  return (
    <div className="inquiry-shell">
      <div className="inquiry-tabs" role="tablist" aria-label="Inquiry type">
        <button type="button" role="tab" aria-selected={mode === "seller"} className={mode === "seller" ? "is-active" : ""} onClick={() => setMode("seller")}><span>01</span> Submit an asset</button>
        <button type="button" role="tab" aria-selected={mode === "buyer"} className={mode === "buyer" ? "is-active" : ""} onClick={() => setMode("buyer")}><span>02</span> Buyer network</button>
      </div>

      <form className="inquiry-form" onSubmit={submit}>
        <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="brief_asset" value={context.asset} />
        <input type="hidden" name="brief_value" value={context.value} />
        <input type="hidden" name="brief_timeline" value={context.timeline} />
        <input type="hidden" name="brief_priority" value={context.priority} />

        <div className="form-title">
          <p className="mini-kicker">{mode === "seller" ? "Asset owner / authorized representative" : "Principal buyer / acquisition team"}</p>
          <h2>{mode === "seller" ? "Asset evaluation brief" : "Private inventory access"}</h2>
        </div>

        <div className="form-grid">
          <label>Full name *<input name="name" required autoComplete="name" placeholder="Your full name" /></label>
          <label>Email address *<input name="email" type="email" required autoComplete="email" placeholder="name@company.com" /></label>
          <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+1 (000) 000-0000" /></label>
          <label>{mode === "seller" ? "Relationship to asset" : "Company / family office"}<input name="organization" placeholder={mode === "seller" ? "Owner, representative, advisor" : "Optional"} /></label>
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
        ) : (
          <>
            <div className="form-grid">
              <label>Primary asset class *<select name="target_asset_class" required defaultValue=""><option value="" disabled>Select asset class</option><option>Luxury residential real estate</option><option>Commercial / multifamily real estate</option><option>Rare / exotic automobiles</option><option>Luxury marine / yachts</option><option>Multiple asset classes</option></select></label>
              <label>Liquidity range *<select name="liquidity_range" required defaultValue=""><option value="" disabled>Select range</option><option>$100K–$500K</option><option>$500K–$2M</option><option>$2M–$10M</option><option>$10M–$25M</option><option>$25M+</option></select></label>
              <label>Target geography<input name="target_geography" placeholder="Markets or regions" /></label>
              <label>Purchase timeline *<select name="purchase_timeline" required defaultValue=""><option value="" disabled>Select timeline</option><option>Actively acquiring now</option><option>Within 90 days</option><option>Within 6 months</option><option>Monitoring opportunities</option></select></label>
            </div>
            <label>Acquisition criteria *<textarea name="criteria" required rows={6} placeholder="Describe preferred assets, price range, condition, geography, proof-of-funds process, and decision timeline." /></label>
          </>
        )}

        <label className="consent"><input type="checkbox" name="consent" value="accepted" required /><span>I agree to be contacted about this inquiry and understand that submitting this form does not create an agency, brokerage, fiduciary, purchase, or advisory relationship.</span></label>
        <button className="button button-dark form-submit" type="submit" disabled={status.kind === "loading"}>{status.kind === "loading" ? "Sending…" : mode === "seller" ? "Request private evaluation" : "Apply for inventory access"}<span>↗</span></button>
        <p className={`form-status ${status.kind}`} aria-live="polite">{status.message}</p>
      </form>
    </div>
  );
}
