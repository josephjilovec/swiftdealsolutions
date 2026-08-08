"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const assetOptions = ["Real estate", "Automotive", "Marine"];
const values = ["$100K–$500K", "$500K–$2M", "$2M–$10M", "$10M+"];
const timelines = ["Under 30 days", "30–60 days", "60–90 days", "Flexible"];
const priorities = ["Speed", "Discretion", "Price certainty", "Counterparty fit"];

export function MandateConsole() {
  const [asset, setAsset] = useState(assetOptions[0]);
  const [value, setValue] = useState(values[1]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [priority, setPriority] = useState(priorities[1]);

  const query = useMemo(() => {
    const params = new URLSearchParams({ mode: "seller", asset, value, timeline, priority });
    return `/submit?${params.toString()}`;
  }, [asset, value, timeline, priority]);

  return (
    <div className="mandate-console">
      <div className="mandate-controls">
        <p className="mini-kicker">Private mandate builder</p>
        <h3>Shape the initial brief before you send it.</h3>
        <p>This is not a valuation or binding offer. It simply organizes the first conversation.</p>
        <label>Asset class<select value={asset} onChange={(e) => setAsset(e.target.value)}>{assetOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>Estimated value<select value={value} onChange={(e) => setValue(e.target.value)}>{values.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>Preferred timeline<select value={timeline} onChange={(e) => setTimeline(e.target.value)}>{timelines.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>Primary priority<select value={priority} onChange={(e) => setPriority(e.target.value)}>{priorities.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <div className="mandate-summary" aria-live="polite">
        <div className="summary-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="summary-card">
          <span>Draft mandate</span>
          <strong>{asset}</strong>
          <dl>
            <div><dt>Value band</dt><dd>{value}</dd></div>
            <div><dt>Timeline</dt><dd>{timeline}</dd></div>
            <div><dt>Priority</dt><dd>{priority}</dd></div>
          </dl>
          <p>Next step: submit ownership/authority details and enough asset context to determine fit.</p>
          <Link className="button button-gold" href={query}>Continue to private inquiry <span>↗</span></Link>
        </div>
      </div>
    </div>
  );
}
