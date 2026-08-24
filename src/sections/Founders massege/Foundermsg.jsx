import React from "react";
import "./Foundermsg.css";

import founderImg from "../../assets/FondersMessage-images/sir1.png";

export default function FounderMessage() {
  return (
    <section className="fm-wrapper">

      {/* Heading */}
      <div className="fm-header">
        <h1>FOUNDER MESSAGE</h1>
        <div className="divider-line"></div>
        <p>From Deepskills</p>
      </div>

      {/* Single Card */}
      <div className="fm-card">

        {/* Founder */}
        <div className="fm-founder">

          <div className="fm-photo">
            <img
              src={founderImg}
              alt="Founder of Deepskills"
            />
          </div>

          <h3>FOUNDER NAME</h3>
          <span>Founder of Deepskills</span>

        </div>

        {/* Message */}
        <div className="fm-message">

          <h2>Deepskills was founded with a clear vision</h2>

          <p className="fm-quote">
            "To equip learners with skills that remain relevant in a
            rapidly evolving digital world."
          </p>

          <p>
           Today, technology is not just supporting businesses, it is shaping decisions, automating creativity, and upending entire industries. Fields such as Data Science and Generative AI are at the center of this transformation. They influence how products are built, how organizations grow, and how problems are solved at scale. At Deepskills, tech-disciplines are not treated as trends but as foundational skills for the future workforce.
          </p>

          <p>
            Our approach to education is deeply practical. Every program is designed to move beyond theory and focus on real-world applications, hands-on projects, and industry-aligned outcomes. Students learn how to think analytically, work with modern tools, and apply technology in meaningful challenges. By the end of their learning journey, they are equipped not only with technical knowledge but also with the confidence to apply it professionally.
          </p>

          <p>
           Deepskills is committed to continuously improving, updating curricula, introducing emerging technologies, and aligning learning paths with market demand. Whether a student is preparing for employment, freelancing, or further specialization, our goal is to provide clarity, capability, and long-term growth.
          </p>

          <div className="fm-closing">
            "Education should open doors. At Deepskills, we work every day
            to ensure it does."
          </div>

        </div>

      </div>

    </section>
  );
}