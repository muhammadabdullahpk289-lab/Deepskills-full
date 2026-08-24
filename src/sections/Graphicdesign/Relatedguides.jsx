import React from "react";
import "./Relatedguides.css";

const guides = [
  {
    title: "How to Build a Portfolio That Gets Attention",
    meta: "Education · 1 min read",
  },
  {
    title: "How to Prepare for Your First Freelance Client",
    meta: "Career · 2 min read",
  },
  {
    title: "Why Project Based Learning Works Better",
    meta: "Education · 2 min read",
  },
];

export default function RelatedGuides() {
  return (
    <div className="rg-wrapper">
      <div className="rg-label">FROM THE BLOG</div>
      <h2 className="rg-heading">Related Guides</h2>

      <div className="rg-grid">
        {guides.map((g, i) => (
          <div className="rg-card" key={i}>
            <h3 className="rg-title">{g.title}</h3>
            <div className="rg-meta">{g.meta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}