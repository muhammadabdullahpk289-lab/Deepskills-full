import React from "react";
import "./Reactfeatures.css";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3fae2a" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
    title: "Anyone",
    subtitle: "Can Learn (IT / Non IT)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#3fae2a">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
    title: "4.8+",
    subtitle: "Course Rating",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3fae2a" strokeWidth="2">
        <circle cx="8" cy="9" r="3" />
        <circle cx="16" cy="9" r="3" />
        <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M10 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
    title: "100+",
    subtitle: "Learners",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3fae2a" strokeWidth="2">
        <path d="M4 4l16 6-7 2-2 7-7-15z" />
      </svg>
    ),
    title: "5+",
    subtitle: "Real World Projects",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3fae2a" strokeWidth="2">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <circle cx="17" cy="15" r="1.5" fill="#3fae2a" />
      </svg>
    ),
    title: "Payment Plan",
    subtitle: "One time / Installments",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3fae2a" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "2 Months",
    subtitle: "Content Duration",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3fae2a" strokeWidth="2">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
    title: "Job-Ready",
    subtitle: "Industry Aligned",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3fae2a" strokeWidth="2">
        <rect x="2" y="4" width="12" height="9" rx="1" />
        <path d="M5 20h6" />
        <path d="M8 13v7" />
        <rect x="16" y="9" width="6" height="10" rx="1" />
      </svg>
    ),
    title: "Onsite / Online",
    subtitle: "Lecture Mode",
  },
];

export default function Reactfeatures() {
  return (
    <div className="reactfeatures-wrapper">
      <h2 className="reactfeatures-heading">Our Course Features</h2>

      <div className="reactfeatures-box">
        <div className="reactfeatures-grid">
          {features.map((f, i) => (
            <div className="reactfeatures-item" key={i}>
              <div className="reactfeatures-icon">{f.icon}</div>
              <div className="reactfeatures-text">
                <div className="reactfeatures-title">{f.title}</div>
                <div className="reactfeatures-subtitle">{f.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}