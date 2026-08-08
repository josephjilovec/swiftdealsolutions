"use client";

import Image from "next/image";
import { useState } from "react";
import { representativeProfiles } from "@/lib/content";

export function RepresentativeProfiles() {
  const [activeId, setActiveId] = useState<(typeof representativeProfiles)[number]["id"]>(representativeProfiles[0].id);
  const active = representativeProfiles.find((profile) => profile.id === activeId) ?? representativeProfiles[0];

  return (
    <div className="profiles-shell">
      <div className="profile-list" role="tablist" aria-label="Representative profiles">
        {representativeProfiles.map((profile, index) => (
          <button
            key={profile.id}
            type="button"
            role="tab"
            aria-selected={profile.id === active.id}
            className={profile.id === active.id ? "is-active" : ""}
            onClick={() => setActiveId(profile.id)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><small>{profile.category} · {profile.location}</small><strong>{profile.title}</strong></div>
            <b>{profile.value}</b>
          </button>
        ))}
      </div>

      <article className="profile-display">
        <div className="profile-image">
          <Image src={active.image} alt={active.title} fill sizes="(max-width: 900px) 100vw, 55vw" />
          <div className="profile-badge">Illustrative profile</div>
        </div>
        <div className="profile-content">
          <div className="profile-meta"><span>{active.category}</span><span>{active.location}</span><strong>{active.value}</strong></div>
          <h3>{active.title}</h3>
          <p>{active.summary}</p>
          <ul>{active.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          <small>{active.timeline}</small>
        </div>
      </article>
    </div>
  );
}
