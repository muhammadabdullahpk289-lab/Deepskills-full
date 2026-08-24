import React from "react";
import "./LaravelDownload.css";

export default function LaravelDownload() {
  return (
    <div className="laraveldownload-wrapper">

      <svg
        className="laraveldownload-squares"
        viewBox="0 0 1366 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="#12383d"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        >
          <rect x="10" y="20" width="70" height="70" />
          <rect x="230" y="10" width="110" height="110" />
          <rect x="90" y="140" width="60" height="60" />
          <rect x="270" y="150" width="50" height="50" />
          <rect x="0" y="230" width="90" height="90" />
          <rect x="640" y="0" width="90" height="90" />
          <rect x="900" y="10" width="60" height="60" />
          <rect x="1000" y="120" width="130" height="130" />
          <rect x="1120" y="150" width="60" height="60" />
          <rect x="1230" y="20" width="80" height="80" />
          <rect x="1280" y="180" width="70" height="70" />
        </g>
      </svg>

      <div className="laraveldownload-content">

        <h2 className="laraveldownload-heading">
          Download the Complete
          <br />
          <span className="laraveldownload-highlight">
            Course Outline
          </span>
        </h2>

        <p className="laraveldownload-subtext">
          Want a detailed weekly breakdown and project roadmap?
        </p>

        <button className="laraveldownload-btn">
          DOWNLOAD COURSE PDF
        </button>

      </div>

    </div>
  );
}