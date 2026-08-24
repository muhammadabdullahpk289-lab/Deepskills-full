import React from "react";
import "./Laravelfeatures.css";

const features = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
    title: "Anyone",
    subtitle: "Students (IT / Non-IT)",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "23 Weeks",
    subtitle: "Intensive Training (5 Days/Week)",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l16 6-7 2-2 7-7-15z" />
      </svg>
    ),
    title: "Project-Based",
    subtitle: "Learning Approach",
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Admin Panel",
    subtitle: "& Real Business Projects",
  },
  {
    number: "05",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
    title: "Portfolio Development",
    subtitle: "Professional Showcase Support",
  },
  {
    number: "06",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" stroke="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
    title: "Job Freelancing",
    subtitle: "Job & Client Hunting & Proposal Writing.",
  },
  {
    number: "07",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="12" r="2.5" />
        <path d="M6 8.5V15.5M8.5 12H15.5" />
      </svg>
    ),
    title: "Git & Live",
    subtitle: "Git & Live Deployment Training",
  },
  {
    number: "08",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="12" rx="2" />
        <path d="M8 20h8M12 17v3" />
        <path d="M8 10l-2 2 2 2M16 10l2 2-2 2" />
      </svg>
    ),
    title: "Onsite / Online",
    subtitle: "Onsite & Online Learning Modes",
  },
];

export default function LaravelFeatures() {
  return (
    <div className="laravelfeatures-wrapper">
      <h2 className="laravelfeatures-heading">Our Course Features</h2>

      <div className="laravelfeatures-grid">
        {features.map((f, i) => (
          <div className="laravelfeatures-card" key={i}>
            <div className="laravelfeatures-icon-wrap">
              <div className="laravelfeatures-icon">{f.icon}</div>
              <span className="laravelfeatures-number">{f.number}</span>
            </div>
            <div className="laravelfeatures-title">{f.title}</div>
            <div className="laravelfeatures-subtitle">{f.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}