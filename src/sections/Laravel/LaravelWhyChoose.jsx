import React from "react";
import "./LaravelWhyChoose.css";

import list1logo from "../../assets/Laravel-images/100012.svg";

const rows = [
  {
    feature: "Affordable",
    deepskills: true,
    youtube: true,
    other: false,
  },
  {
    feature: "Live doubt solving",
    deepskills: true,
    youtube: false,
    other: false,
  },
  {
    feature: "1:1 mentorship",
    deepskills: true,
    youtube: false,
    other: false,
  },
  {
    feature: "Dedicated Projects",
    deepskills: true,
    youtube: false,
    other: false,
  },
  {
    feature: "Certification",
    deepskills: true,
    youtube: false,
    other: true,
  },
  {
    feature: "Lifetime access",
    deepskills: true,
    youtube: true,
    other: false,
  },
  {
    feature: "Placement assistance",
    deepskills: true,
    youtube: false,
    other: false,
  },
];


function StatusIcon({ ok }) {
  return ok ? (
    <span className="laravelwhychoose-icon laravelwhychoose-icon-yes">

      <svg viewBox="0 0 24 24" width="14" height="14">
        <path
          fill="#ffffff"
          d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z"
        />
      </svg>

    </span>
  ) : (
    <span className="laravelwhychoose-icon laravelwhychoose-icon-no">

      <svg viewBox="0 0 24 24" width="14" height="14">
        <path
          fill="#ffffff"
          d="M18.3 5.71L12 12.01l-6.29-6.3-1.42 1.42 6.3 6.29 6.29-6.3 1.42 1.42-6.3 6.29 6.3 6.29-1.42 1.42-6.29-6.3-6.29 6.3-1.42-1.42 6.3-6.29-6.3-6.29z"
        />
      </svg>

    </span>
  );
}


export default function LaravelWhyChoose() {
  return (
    <div className="laravelwhychoose-wrapper">

      <h2 className="laravelwhychoose-heading">
        Why choose us?
      </h2>


      <div className="laravelwhychoose-table">

        {/* HEADER */}

        <div className="laravelwhychoose-row laravelwhychoose-row-header">

          <div className="laravelwhychoose-cell laravelwhychoose-cell-feature">
            Features
          </div>


          <div className="laravelwhychoose-cell laravelwhychoose-cell-brand">

            <span className="laravelwhychoose-logo-text">
              <img
                src={list1logo}
                alt="DeepSkills"
                className="laravelwhychoose-logo"
              />
            </span>

          </div>


          <div className="laravelwhychoose-cell laravelwhychoose-cell-brand">

            <span className="laravelwhychoose-yt-badge">

              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  fill="#ffffff"
                  d="M8 5v14l11-7z"
                />
              </svg>

            </span>

          </div>


          <div className="laravelwhychoose-cell laravelwhychoose-cell-brand">
            Other Platforms
          </div>

        </div>


        {/* ROWS */}

        {rows.map((row, i) => (

          <div
            className="laravelwhychoose-row"
            key={i}
          >

            <div className="laravelwhychoose-cell laravelwhychoose-cell-feature">
              {row.feature}
            </div>


            <div className="laravelwhychoose-cell">
              <StatusIcon ok={row.deepskills} />
            </div>


            <div className="laravelwhychoose-cell">
              <StatusIcon ok={row.youtube} />
            </div>


            <div className="laravelwhychoose-cell">
              <StatusIcon ok={row.other} />
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}