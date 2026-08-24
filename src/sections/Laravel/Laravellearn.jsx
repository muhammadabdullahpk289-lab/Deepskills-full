import React from "react";
import "./Laravellearn.css";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="2">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Frontend Development",
    items: [
      "HTML5 (semantic structure & professional layouts)",
      "CSS3, Flex box & Responsive Design",
      "Bootstrap 5 for modern UI",
      "JavaScript fundamentals & DOM manipulation",
      "Form validation & interactive features",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09A1.65 1.65 0 0015 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019 9c.36.28.63.68.78 1.16.09.28.22.55.22.84z" />
      </svg>
    ),
    title: "Backend Development (Core PHP)",
    items: [
      "PHP programming fundamentals",
      "Handling forms (GET & POST)",
      "Sessions & Cookies management",
      "File handling & validation",
      "Authentication system (Login/Register)",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="2">
        <path d="M9 17H7a5 5 0 010-10h2M15 7h2a5 5 0 010 10h-2M8 12h8" />
      </svg>
    ),
    title: "Database & Integration",
    items: [
      "MySQL database concepts",
      "Tables, relationships & SQL queries",
      "Database connectivity with PHP",
      "CRUD operations",
      "User management systems",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="2">
        <path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z" />
        <path d="M12 12l9-4.5M12 12v9M12 12L3 7.5" />
      </svg>
    ),
    title: "Laravel Framework",
    items: [
      "MVC architecture",
      "Routes & Controllers",
      "Blade templates",
      "Migrations & Eloquent ORM",
      "Authentication & Middleware",
      "File uploads, pagination & filters",
    ],
  },
];

export default function LaravelLearn() {
  return (
    <div className="laravellearn-wrapper">
      <span className="laravellearn-floating laravellearn-float-php">PHP</span>
      <span className="laravellearn-floating laravellearn-float-laravel">Laravel</span>

      <h2 className="laravellearn-heading">What You'll Learn</h2>

      <div className="laravellearn-grid">
        {cards.map((card, i) => (
          <div className="laravellearn-card" key={i}>
            <div className="laravellearn-icon">{card.icon}</div>
            <h3 className="laravellearn-title">{card.title}</h3>
            <ul className="laravellearn-list">
              {card.items.map((item, j) => (
                <li key={j}>
                  <span className="laravellearn-dot"></span>
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
