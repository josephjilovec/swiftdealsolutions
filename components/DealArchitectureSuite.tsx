"use client";

import { useMemo, useState } from "react";

const pipelineStages = [
  {
    label: "Intake",
    status: "Mandate opened",
    title: "Opportunity + authority",
    copy: "Capture the asset, the decision-maker, authority to transact, target economics, timing, and the documents required to determine fit.",
    metrics: [["Active briefs", "12"], ["Median intake", "18 min"], ["Control", "Owner-led"]]
  },
  {
    label: "Underwriting",
    status: "Diligence in motion",
    title: "Valuation + transaction brief",
    copy: "Normalize the economics, organize comparable evidence, identify diligence gaps, and turn the opportunity into a concise counterparty-ready brief.",
    metrics: [["Value reviewed", "$14.8M"], ["Data rooms", "09"], ["Exceptions", "03"]]
  },
  {
    label: "Qualified match",
    status: "Counterparties screened",
    title: "Selective buyer / seller matching",
    copy: "Release only the information appropriate for the stage, verify counterparties, record interest, and keep broad public exposure out of the process when discretion matters.",
    metrics: [["Qualified", "08"], ["NDA complete", "06"], ["Fit score", "92%"]]
  },
  {
    label: "LOI / PSA",
    status: "Terms being resolved",
    title: "Terms + document coordination",
    copy: "Track material terms, signatures, professional handoffs, diligence deadlines, and the points that must be resolved before money or title moves.",
    metrics: [["In documents", "04"], ["Open items", "07"], ["Signed", "02"]]
  },
  {
    label: "Escrow / close",
    status: "Closing controls active",
    title: "Escrow + transfer milestones",
    copy: "Coordinate title, escrow, surveys, financing, inspections, assignment terms, funds, and final transfer through a visible closing checklist.",
    metrics: [["Closing", "02"], ["Escrow funded", "01"], ["Milestones", "11/13"]]
  }
] as const;

const verificationSteps = [
  {
    title: "Identity + entity",
    eyebrow: "Step 01",
    copy: "Establish who is entering the transaction and whether they are acting personally, through an entity, or for another authorized party.",
    items: ["Government-issued identity record", "Entity formation / good-standing record", "Primary contact and secure communication channel"]
  },
  {
    title: "Authority + ownership",
    eyebrow: "Step 02",
    copy: "Confirm the person presenting the opportunity has the legal or contractual authority required to sell, assign, acquire, or negotiate it.",
    items: ["Ownership or contractual interest", "Signing authority / representative capacity", "Material restrictions or required consents"]
  },
  {
    title: "KYC / AML screen",
    eyebrow: "Step 03",
    copy: "Route identity and risk checks through the appropriate providers before sensitive records or transaction privileges are released.",
    items: ["Identity verification status", "Sanctions / watchlist screening status", "Risk exceptions routed for human review"]
  },
  {
    title: "Secure document room",
    eyebrow: "Step 04",
    copy: "Stage diligence materials instead of emailing sensitive records indiscriminately. Access can be tied to role, transaction stage, and completed prerequisites.",
    items: ["Role-based document access", "Upload and review checklist", "Disclosure / NDA gating"]
  },
  {
    title: "Transaction release",
    eyebrow: "Step 05",
    copy: "When prerequisites are complete, release the party into the next deal stage with a visible record of what was verified and what still needs professional review.",
    items: ["Verification summary", "Outstanding-condition register", "Approved next-step handoff"]
  }
] as const;

function money(value: number) {
  if (!Number.isFinite(value)) return "$0";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function estimateIrr(cashFlows: number[]) {
  const npv = (rate: number) => cashFlows.reduce((total, flow, index) => total + flow / Math.pow(1 + rate, index), 0);
  let low = -0.95;
  let high = 8;
  let lowValue = npv(low);
  let highValue = npv(high);

  if (!Number.isFinite(lowValue) || !Number.isFinite(highValue) || lowValue * highValue > 0) return null;

  for (let i = 0; i < 140; i += 1) {
    const mid = (low + high) / 2;
    const midValue = npv(mid);
    if (Math.abs(midValue) < 0.00001) return mid;
    if (lowValue * midValue <= 0) {
      high = mid;
      highValue = midValue;
    } else {
      low = mid;
      lowValue = midValue;
    }
  }

  return (low + high) / 2;
}

export function DealArchitectureSuite() {
  const [pipelineIndex, setPipelineIndex] = useState(1);
  const [verificationIndex, setVerificationIndex] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(1800000);
  const [acquisitionCosts, setAcquisitionCosts] = useState(90000);
  const [noi, setNoi] = useState(144000);
  const [annualCashFlow, setAnnualCashFlow] = useState(110000);
  const [exitValue, setExitValue] = useState(2250000);
  const [holdYears, setHoldYears] = useState(5);

  const valuation = useMemo(() => {
    const basis = Math.max(0, purchasePrice) + Math.max(0, acquisitionCosts);
    const years = Math.min(30, Math.max(1, Math.round(holdYears || 1)));
    const cashFlows = [-basis];
    for (let year = 1; year <= years; year += 1) {
      cashFlows.push(Math.max(0, annualCashFlow) + (year === years ? Math.max(0, exitValue) : 0));
    }
    const irr = basis > 0 ? estimateIrr(cashFlows) : null;
    const capRate = purchasePrice > 0 ? (noi / purchasePrice) * 100 : 0;
    const yieldOnCost = basis > 0 ? (noi / basis) * 100 : 0;
    const equityMultiple = basis > 0 ? ((Math.max(0, annualCashFlow) * years) + Math.max(0, exitValue)) / basis : 0;

    return { basis, years, irr, capRate, yieldOnCost, equityMultiple };
  }, [purchasePrice, acquisitionCosts, noi, annualCashFlow, exitValue, holdYears]);

  const activePipeline = pipelineStages[pipelineIndex];
  const activeVerification = verificationSteps[verificationIndex];

  return (
    <section className="deal-suite" id="deal-intelligence" aria-labelledby="deal-suite-title">
      <div className="shell-wide">
        <div className="deal-suite-head">
          <div>
            <p className="deal-suite-kicker"><span /> Deal architecture</p>
            <h2 id="deal-suite-title">A private transaction operating layer—not another listing page.</h2>
          </div>
          <div>
            <p>These interactive modules show how Swift can organize a high-value opportunity from first contact through valuation, verification, diligence, escrow, and close.</p>
            <span className="deal-suite-note"><i /> Interface preview · transaction data shown is illustrative</span>
          </div>
        </div>

        <article className="deal-module deal-pipeline">
          <div className="deal-module-label">
            <span>01</span>
            <div><small>Deal flow pipeline</small><strong>Acquisition command view</strong></div>
            <em>Live-workflow model</em>
          </div>

          <div className="pipeline-rail" role="tablist" aria-label="Deal flow stages">
            {pipelineStages.map((stage, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={pipelineIndex === index}
                className={pipelineIndex === index ? "is-active" : ""}
                onClick={() => setPipelineIndex(index)}
                key={stage.label}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage.label}</strong>
                <i />
              </button>
            ))}
          </div>

          <div className="pipeline-panel">
            <div className="pipeline-copy">
              <span className="status-chip"><i /> {activePipeline.status}</span>
              <h3>{activePipeline.title}</h3>
              <p>{activePipeline.copy}</p>
            </div>
            <div className="pipeline-metrics">
              {activePipeline.metrics.map(([label, value]) => (
                <div key={label}><small>{label}</small><strong>{value}</strong></div>
              ))}
            </div>
          </div>
        </article>

        <div className="deal-module-grid">
          <article className="deal-module valuation-module" id="valuation-calculator">
            <div className="deal-module-label compact">
              <span>02</span>
              <div><small>Valuation + yield</small><strong>Instant underwriting model</strong></div>
            </div>

            <div className="valuation-layout">
              <div className="valuation-inputs">
                <label>Acquisition price<input inputMode="numeric" type="number" min="0" step="10000" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} /></label>
                <label>Acquisition costs<input inputMode="numeric" type="number" min="0" step="5000" value={acquisitionCosts} onChange={(e) => setAcquisitionCosts(Number(e.target.value))} /></label>
                <label>Stabilized NOI<input inputMode="numeric" type="number" min="0" step="5000" value={noi} onChange={(e) => setNoi(Number(e.target.value))} /></label>
                <label>Annual cash flow<input inputMode="numeric" type="number" min="0" step="5000" value={annualCashFlow} onChange={(e) => setAnnualCashFlow(Number(e.target.value))} /></label>
                <label>Projected exit value<input inputMode="numeric" type="number" min="0" step="10000" value={exitValue} onChange={(e) => setExitValue(Number(e.target.value))} /></label>
                <label>Hold period<input inputMode="numeric" type="number" min="1" max="30" step="1" value={holdYears} onChange={(e) => setHoldYears(Number(e.target.value))} /><span>years</span></label>
              </div>

              <div className="valuation-results" aria-live="polite">
                <div className="valuation-primary">
                  <small>Projected IRR</small>
                  <strong>{valuation.irr === null ? "N/A" : `${(valuation.irr * 100).toFixed(1)}%`}</strong>
                  <span>Illustrative unlevered return</span>
                </div>
                <div className="valuation-stat-grid">
                  <div><small>Going-in cap</small><strong>{valuation.capRate.toFixed(2)}%</strong></div>
                  <div><small>Yield on cost</small><strong>{valuation.yieldOnCost.toFixed(2)}%</strong></div>
                  <div><small>Total basis</small><strong>{money(valuation.basis)}</strong></div>
                  <div><small>Equity multiple</small><strong>{valuation.equityMultiple.toFixed(2)}×</strong></div>
                </div>
                <p>This model is for preliminary scenario framing only. It excludes financing, taxes, exit costs, irregular cash flows, and asset-specific legal or accounting considerations.</p>
              </div>
            </div>
          </article>

          <article className="deal-module verification-module" id="verification-flow">
            <div className="deal-module-label compact">
              <span>03</span>
              <div><small>Seller / buyer verification</small><strong>KYC + document release flow</strong></div>
            </div>

            <div className="verification-progress" aria-label="Verification progress">
              {verificationSteps.map((step, index) => (
                <button type="button" className={verificationIndex === index ? "is-active" : verificationIndex > index ? "is-complete" : ""} onClick={() => setVerificationIndex(index)} key={step.title} aria-label={`Open ${step.title}`}>
                  <span>{verificationIndex > index ? "✓" : index + 1}</span>
                </button>
              ))}
            </div>

            <div className="verification-card">
              <p>{activeVerification.eyebrow}</p>
              <h3>{activeVerification.title}</h3>
              <div>{activeVerification.copy}</div>
              <ul>{activeVerification.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
            </div>

            <div className="verification-controls">
              <button type="button" onClick={() => setVerificationIndex((current) => Math.max(0, current - 1))} disabled={verificationIndex === 0}>← Back</button>
              <span>{String(verificationIndex + 1).padStart(2, "0")} / {String(verificationSteps.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => setVerificationIndex((current) => Math.min(verificationSteps.length - 1, current + 1))} disabled={verificationIndex === verificationSteps.length - 1}>Next →</button>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        .deal-suite{position:relative;padding:clamp(90px,9vw,150px) 0;background:#0f172a;color:#f8fafc;overflow:hidden}
        .deal-suite::before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 86% 14%,rgba(5,150,105,.16),transparent 28%),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:auto,72px 72px,72px 72px;mask-image:linear-gradient(180deg,#000,rgba(0,0,0,.78) 72%,transparent)}
        .deal-suite .shell-wide{position:relative;z-index:1}
        .deal-suite-head{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(300px,.58fr);gap:clamp(46px,8vw,120px);align-items:end;margin-bottom:50px}
        .deal-suite-kicker{display:flex;align-items:center;gap:12px;margin:0 0 17px;color:var(--gold-bright);font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase}
        .deal-suite-kicker span{width:38px;height:1px;background:var(--gold)}
        .deal-suite-head h2{max-width:950px;margin:0;font-family:var(--serif);font-size:clamp(46px,5.3vw,82px);line-height:.96;letter-spacing:-.05em;font-weight:400}
        .deal-suite-head>div:last-child>p{margin:0;color:rgba(248,250,252,.62);font-size:15px;line-height:1.8}
        .deal-suite-note{display:flex;align-items:center;gap:9px;margin-top:22px;color:rgba(248,250,252,.48);font-size:9px;font-weight:700;letter-spacing:.09em;text-transform:uppercase}
        .deal-suite-note i,.status-chip i{width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 0 5px rgba(16,185,129,.1),0 0 18px rgba(16,185,129,.55)}
        .deal-module{border:1px solid rgba(148,163,184,.18);background:rgba(2,8,23,.54);box-shadow:0 30px 80px rgba(2,6,23,.18);backdrop-filter:blur(14px)}
        .deal-module-label{min-height:86px;display:grid;grid-template-columns:56px 1fr auto;gap:18px;align-items:center;padding:0 24px;border-bottom:1px solid rgba(148,163,184,.16)}
        .deal-module-label>span{font-family:var(--serif);color:var(--gold-bright);font-size:15px}
        .deal-module-label small,.deal-module-label strong{display:block}.deal-module-label small{color:#34d399;font-size:8px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}.deal-module-label strong{margin-top:5px;font-family:var(--serif);font-size:20px;font-weight:400}.deal-module-label em{padding:7px 10px;border:1px solid rgba(52,211,153,.25);background:rgba(5,150,105,.08);color:#6ee7b7;font-size:8px;font-style:normal;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
        .pipeline-rail{display:grid;grid-template-columns:repeat(5,1fr);padding:0 24px;border-bottom:1px solid rgba(148,163,184,.16)}
        .pipeline-rail button{position:relative;min-width:0;padding:25px 10px 26px;border:0;background:transparent;color:rgba(248,250,252,.46);text-align:left;cursor:pointer}
        .pipeline-rail button span,.pipeline-rail button strong{display:block}.pipeline-rail button span{font-family:var(--serif);font-size:11px}.pipeline-rail button strong{margin-top:8px;color:inherit;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pipeline-rail button i{position:absolute;left:10px;right:10px;bottom:-1px;height:2px;background:transparent}.pipeline-rail button:hover,.pipeline-rail button.is-active{color:#f8fafc}.pipeline-rail button.is-active span{color:#6ee7b7}.pipeline-rail button.is-active i{background:#10b981;box-shadow:0 0 16px rgba(16,185,129,.4)}
        .pipeline-panel{display:grid;grid-template-columns:minmax(0,1fr) minmax(360px,.75fr);gap:50px;padding:44px}
        .status-chip{width:fit-content;display:flex;align-items:center;gap:10px;padding:8px 11px;border:1px solid rgba(52,211,153,.2);background:rgba(5,150,105,.08);color:#6ee7b7;font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.status-chip i{display:block;width:6px;height:6px}
        .pipeline-copy h3{margin:20px 0 14px;font-family:var(--serif);font-size:clamp(34px,3vw,50px);font-weight:400;letter-spacing:-.035em}.pipeline-copy p{max-width:720px;margin:0;color:rgba(248,250,252,.58);font-size:14px;line-height:1.8}
        .pipeline-metrics{display:grid;grid-template-columns:repeat(3,1fr);align-self:end;border-top:1px solid rgba(148,163,184,.16);border-bottom:1px solid rgba(148,163,184,.16)}.pipeline-metrics div{padding:23px 16px;border-right:1px solid rgba(148,163,184,.16)}.pipeline-metrics div:last-child{border-right:0}.pipeline-metrics small,.pipeline-metrics strong{display:block}.pipeline-metrics small{color:rgba(248,250,252,.42);font-size:8px;font-weight:800;letter-spacing:.11em;text-transform:uppercase}.pipeline-metrics strong{margin-top:8px;font-family:var(--serif);font-size:25px;font-weight:400;color:#fff}
        .deal-module-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:18px;margin-top:18px}.deal-module-label.compact{grid-template-columns:56px 1fr;min-height:82px}
        .valuation-layout{display:grid;grid-template-columns:minmax(280px,.8fr) minmax(300px,1fr);min-height:570px}.valuation-inputs{display:grid;grid-template-columns:1fr 1fr;align-content:start;border-right:1px solid rgba(148,163,184,.16)}.valuation-inputs label{position:relative;padding:22px;border-right:1px solid rgba(148,163,184,.14);border-bottom:1px solid rgba(148,163,184,.14);color:rgba(248,250,252,.48);font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.valuation-inputs label:nth-child(even){border-right:0}.valuation-inputs input{width:100%;margin-top:9px;padding:0;border:0;outline:0;background:transparent;color:#fff;font-family:var(--serif);font-size:24px;letter-spacing:-.02em}.valuation-inputs label>span{position:absolute;right:20px;bottom:24px;color:#6ee7b7;font-size:8px}.valuation-results{display:flex;flex-direction:column;padding:34px}.valuation-primary{padding-bottom:28px;border-bottom:1px solid rgba(148,163,184,.16)}.valuation-primary small,.valuation-primary strong,.valuation-primary span{display:block}.valuation-primary small{color:#6ee7b7;font-size:8px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.valuation-primary strong{margin:10px 0 4px;font-family:var(--serif);font-size:clamp(58px,6vw,88px);line-height:1;font-weight:400;letter-spacing:-.055em}.valuation-primary span{color:rgba(248,250,252,.42);font-size:9px;letter-spacing:.05em}.valuation-stat-grid{display:grid;grid-template-columns:1fr 1fr}.valuation-stat-grid div{padding:23px 8px 23px 0;border-bottom:1px solid rgba(148,163,184,.14)}.valuation-stat-grid div:nth-child(odd){border-right:1px solid rgba(148,163,184,.14)}.valuation-stat-grid div:nth-child(even){padding-left:20px}.valuation-stat-grid small,.valuation-stat-grid strong{display:block}.valuation-stat-grid small{color:rgba(248,250,252,.4);font-size:8px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.valuation-stat-grid strong{margin-top:7px;font-family:var(--serif);font-size:20px;font-weight:400}.valuation-results>p{margin:auto 0 0;color:rgba(248,250,252,.36);font-size:10px;line-height:1.6}
        .verification-module{display:flex;flex-direction:column}.verification-progress{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;padding:24px;border-bottom:1px solid rgba(148,163,184,.16)}.verification-progress button{position:relative;height:34px;border:0;background:transparent;cursor:pointer}.verification-progress button::before{content:"";position:absolute;left:-4px;right:-4px;top:50%;height:1px;background:rgba(148,163,184,.18)}.verification-progress button:first-child::before{left:50%}.verification-progress button:last-child::before{right:50%}.verification-progress span{position:relative;z-index:1;width:30px;height:30px;display:grid;place-items:center;margin:auto;border:1px solid rgba(148,163,184,.28);border-radius:50%;background:#0b1324;color:rgba(248,250,252,.46);font-size:9px}.verification-progress button.is-active span{border-color:#34d399;color:#d1fae5;box-shadow:0 0 0 5px rgba(16,185,129,.08)}.verification-progress button.is-complete span{border-color:#059669;background:#059669;color:#fff}
        .verification-card{padding:34px 34px 20px}.verification-card>p{margin:0;color:#6ee7b7;font-size:8px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.verification-card h3{margin:14px 0 12px;font-family:var(--serif);font-size:38px;line-height:1;font-weight:400;letter-spacing:-.035em}.verification-card>div{color:rgba(248,250,252,.55);font-size:13px;line-height:1.75}.verification-card ul{list-style:none;margin:26px 0 0;padding:0;border-top:1px solid rgba(148,163,184,.14)}.verification-card li{display:flex;gap:12px;padding:13px 0;border-bottom:1px solid rgba(148,163,184,.12);color:rgba(248,250,252,.72);font-size:11px}.verification-card li span{color:#34d399}.verification-controls{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding:20px 24px;border-top:1px solid rgba(148,163,184,.16)}.verification-controls button{border:0;background:transparent;color:#f8fafc;font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}.verification-controls button:disabled{opacity:.22;cursor:not-allowed}.verification-controls span{color:rgba(248,250,252,.35);font-family:var(--serif);font-size:11px}
        @media(max-width:1100px){.deal-module-grid{grid-template-columns:1fr}.pipeline-panel{grid-template-columns:1fr}.valuation-layout{grid-template-columns:1fr}.valuation-inputs{border-right:0;border-bottom:1px solid rgba(148,163,184,.16)}.verification-module{min-height:590px}}
        @media(max-width:800px){.deal-suite-head{grid-template-columns:1fr}.deal-module-label{grid-template-columns:42px 1fr}.deal-module-label em{display:none}.pipeline-rail{overflow-x:auto;grid-template-columns:repeat(5,minmax(130px,1fr));padding:0 14px}.pipeline-panel{padding:30px 24px}.pipeline-metrics{grid-template-columns:1fr}.pipeline-metrics div{border-right:0;border-bottom:1px solid rgba(148,163,184,.14)}.pipeline-metrics div:last-child{border-bottom:0}.valuation-inputs{grid-template-columns:1fr}.valuation-inputs label{border-right:0!important}.valuation-results{padding:28px 22px}.valuation-stat-grid{grid-template-columns:1fr}.valuation-stat-grid div{border-right:0!important;padding-left:0!important}.deal-module-label,.deal-module-label.compact{padding:0 18px}.verification-card{padding:30px 24px 18px}}
      `}</style>
    </section>
  );
}
