import React from "react";
import "./Reactlearn.css";

const cards = [
  {
    variant: "orange",
    title: "Frontend Development",
    items: [
      "HTML5, CSS3 & modern JavaScript",
      "Responsive layouts using Flexbox, Grid, Bootstrap/Tailwind",
      "React fundamentals, hooks, routing & performance optimization",
    ],
  },
  {
    variant: "blue",
    title: "Backend Development",
    items: [
      "Node.js & Express.js",
      "RESTful APIs",
      "Authentication with JWT",
      "Secure backend architecture",
    ],
  },
  {
    variant: "rose",
    title: "Database & Tools",
    items: [
      "MongoDB & MongoDB Atlas",
      "Git & GitHub",
      "Deployment on Netlify, Vercel & Render",
    ],
  },
];

export default function Reactlearn() {
  return (
    <div className="reactlearn-wrapper">
      <h2 className="reactlearn-heading">What You'll Learn</h2>

      <div className="reactlearn-grid">
        {cards.map((card, i) => (
          <div className={`reactlearn-card reactlearn-card-${card.variant}`} key={i}>
            <h3 className="reactlearn-title">{card.title}</h3>
            <div className="reactlearn-underline"></div>
            <ul className="reactlearn-list">
              {card.items.map((item, j) => (
                <li key={j}>
                  <span className="reactlearn-dot"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}