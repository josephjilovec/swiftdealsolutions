"use client";

import { useState } from "react";
import { processSteps } from "@/lib/content";

export function ProcessRail() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <div className="process-rail">
      <div className="process-tabs" role="tablist" aria-label="Transaction process">
        {processSteps.map((item, index) => (
          <button
            key={item.number}
            role="tab"
            type="button"
            aria-selected={index === active}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>{item.number}</span><strong>{item.title}</strong>
          </button>
        ))}
      </div>
      <div className="process-stage">
        <div className="process-number">{step.number}</div>
        <div>
          <p className="mini-kicker">Current stage</p>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
          <div className="process-signal"><span>Role clarity</span><span>Documented terms</span><span>Qualified professionals</span></div>
        </div>
      </div>
    </div>
  );
}
