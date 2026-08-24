import React from "react";
import "./Reactcurriculum.css";

export default function Reactcurriculum() {
  return (
    <div className="reactcurriculum-wrapper">
      <h2 className="reactcurriculum-heading">Course Curriculum</h2>

      <div className="reactcurriculum-bar">
        <div className="reactcurriculum-item">
          <div className="reactcurriculum-icon reactcurriculum-icon-green">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
          </div>
          <div>
            <div className="reactcurriculum-title reactcurriculum-title-green">Duration</div>
            <div className="reactcurriculum-subtitle">24 Weeks</div>
          </div>
        </div>

        <div className="reactcurriculum-divider"></div>

        <div className="reactcurriculum-item">
          <div className="reactcurriculum-icon reactcurriculum-icon-blue">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2">
              <circle cx="8" cy="8" r="3" />
              <path d="M2 19c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5" />
              <rect x="13" y="8" width="9" height="7" rx="1" />
              <path d="M16 18h3" />
            </svg>
          </div>
          <div>
            <div className="reactcurriculum-title reactcurriculum-title-blue">Mode</div>
            <div className="reactcurriculum-subtitle">Practical, project-based learning</div>
          </div>
        </div>

        <div className="reactcurriculum-divider"></div>

        <div className="reactcurriculum-item">
          <div className="reactcurriculum-icon reactcurriculum-icon-red">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="2">
              <ellipse cx="12" cy="6" rx="7" ry="3" />
              <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
              <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
            </svg>
          </div>
          <div>
            <div className="reactcurriculum-title reactcurriculum-title-red">Tools</div>
            <div className="reactcurriculum-subtitle">VS Code, Git, GitHub, Cloud Deployment</div>
          </div>
        </div>
      </div>

      <div className="reactcurriculum-cta">
        <button className="reactcurriculum-btn">Enroll Now</button>
      </div>
    </div>
  );
}