"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { assetClasses } from "@/lib/content";

export function AssetUniverse() {
  const [activeId, setActiveId] = useState(assetClasses[0].id);
  const active = assetClasses.find((asset) => asset.id === activeId) ?? assetClasses[0];

  return (
    <div className="asset-universe" style={{ "--asset-accent": active.accent, "--asset-soft": active.soft } as CSSProperties}>
      <div className="asset-selector" role="tablist" aria-label="Asset categories">
        {assetClasses.map((asset) => (
          <button
            key={asset.id}
            type="button"
            role="tab"
            aria-selected={asset.id === active.id}
            className={asset.id === active.id ? "is-active" : ""}
            onClick={() => setActiveId(asset.id)}
          >
            <span>{asset.number}</span>
            <div><strong>{asset.shortTitle}</strong><small>{asset.label}</small></div>
          </button>
        ))}
      </div>

      <div className="asset-stage">
        <div className="asset-stage-image">
          <Image src={active.image} alt={active.imageAlt} fill priority={active.id === "real-estate"} sizes="(max-width: 900px) 100vw, 60vw" />
          <div className="asset-stage-overlay" />
          <div className="asset-stage-index">{active.number}</div>
        </div>
        <div className="asset-stage-copy">
          <p>{active.label}</p>
          <h3>{active.title}</h3>
          <p className="body-copy">{active.description}</p>
          <ul>
            {active.signals.map((signal) => <li key={signal}><i /> {signal}</li>)}
          </ul>
          <Link className="text-link" href={`/submit?mode=${active.id === "real-estate" ? "seller" : "buyer"}&asset=${active.id}`}>Open private brief <span>↗</span></Link>
        </div>
      </div>
    </div>
  );
}
