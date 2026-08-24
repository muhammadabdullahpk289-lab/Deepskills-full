import React from "react";
import "../../sections/Trainers/Whychoose.css";

const features = [
  {
    label: "Easy to understand",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C9.5 2 8 3.8 8 5.6c-1.6.2-2.8 1.6-2.8 3.2 0 .5.1.9.3 1.3-1 .5-1.7 1.6-1.7 2.8 0 1.4.9 2.6 2.2 3-.1.3-.1.6-.1 1 0 1.9 1.5 3.4 3.4 3.6.2 1.3 1.3 2.3 2.7 2.3s2.5-1 2.7-2.3c1.9-.2 3.4-1.7 3.4-3.6 0-.3 0-.6-.1-1 1.3-.4 2.2-1.6 2.2-3 0-1.2-.7-2.3-1.7-2.8.2-.4.3-.8.3-1.3 0-1.6-1.2-3-2.8-3.2C16 3.8 14.5 2 12 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M12 2v18M9 6.5c-1 .8-1.6 2-1.6 3.3M9 12c-1 .6-1.6 1.7-1.6 2.9M15 6.5c1 .8 1.6 2 1.6 3.3M15 12c1 .6 1.6 1.7 1.6 2.9"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Practical and hands-on",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 12.5V6a1.5 1.5 0 0 1 3 0v5.2M12 11.2V4.8a1.5 1.5 0 0 1 3 0v6.6M15 11.4V7a1.5 1.5 0 0 1 3 0v7.5c0 3.6-2.4 6.5-6.2 6.5-2.3 0-3.6-.7-4.7-2.1l-3-4c-.5-.7-.3-1.7.5-2.1.7-.4 1.5-.2 2 .3l1.4 1.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Step-by-step",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="4.5" r="1.8" fill="currentColor" />
        <path
          d="M11 8l-2.5 2.5L10 14l-1.5 6M11 8l3 1.5.5 4.5 3 2M11 8l-1.5 3.5 3 1.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Stress-free for beginners",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4c0 9-6 14-14 14-.7 0-1.3-.5-1.3-1.3C4.7 8.7 9.7 3.3 18.7 3.3 19.4 3.3 20 3.9 20 4Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 19.5c1.5-3 3.5-5 6.5-6.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="why-wrapper">
      <h2 className="why-title">Why Choose DeepSkill Instructors</h2>

      <div className="why-grid">
        {features.map((item, i) => (
          <div key={i} className="why-card">
            <div className="why-card-icon">{item.icon}</div>
            <div className="why-card-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}