import React from "react";
import "./List1.css";
import list1logo from '../../assets/Graphicdesign-images/10001.svg'

const rows = [
  { feature: "Affordable", deepskills: true, youtube: true, other: false },
  { feature: "Live doubt solving", deepskills: true, youtube: false, other: false },
  { feature: "1:1 mentorship", deepskills: true, youtube: false, other: false },
  { feature: "Dedicated Projects", deepskills: true, youtube: false, other: false },
  { feature: "Certification", deepskills: true, youtube: false, other: true },
  { feature: "Lifetime access", deepskills: true, youtube: true, other: false },
  { feature: "Placement assistance", deepskills: true, youtube: false, other: false },
];

function StatusIcon({ ok }) {
  return ok ? (
    <span className="list1-icon list1-icon-yes">
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path
          fill="#ffffff"
          d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z"
        />
      </svg>
    </span>
  ) : (
    <span className="list1-icon list1-icon-no">
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path
          fill="#ffffff"
          d="M18.3 5.71L12 12.01l-6.29-6.3-1.42 1.42 6.3 6.29-6.3 6.29 1.42 1.42 6.29-6.3 6.29 6.3 1.42-1.42-6.3-6.29 6.3-6.29z"
        />
      </svg>
    </span>
  );
}

export default function list1() {
  return (
    <div className="list1-wrapper">
      <h2 className="list1-heading">Why choose us?</h2>

      <div className="list1-table">
        <div className="list1-row list1-row-header">
          <div className="list1-cell list1-cell-feature">Features</div>
          <div className="list1-cell list1-cell-brand">
            <span className="list1-logo-text">
              <img src={list1logo} alt="" className="logo1"/>
            </span>
          </div>
          <div className="list1-cell list1-cell-brand">
            <span className="list1-yt-badge">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="#ffffff" d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
          <div className="list1-cell list1-cell-brand">Other Platforms</div>
        </div>

        {rows.map((row, i) => (
          <div className="list1-row" key={i}>
            <div className="list1-cell list1-cell-feature">{row.feature}</div>
            <div className="list1-cell">
              <StatusIcon ok={row.deepskills} />
            </div>
            <div className="list1-cell">
              <StatusIcon ok={row.youtube} />
            </div>
            <div className="list1-cell">
              <StatusIcon ok={row.other} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}