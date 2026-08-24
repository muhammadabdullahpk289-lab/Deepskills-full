import React from "react";
import "./Contacthero.css";
import bgimg from '../../assets/Contacts-images/10001.png'

export default function ContactHero({ backgroundImage = bgimg }) {
  return (
    <div
      className="contacthero-wrapper"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="contacthero-overlay"></div>

      <div className="contacthero-grid">
        <div className="contacthero-card">
          <h2 className="contacthero-heading">
            Let's Build Your
            <br />
            Future Together
          </h2>

          <div className="contacthero-block">
            <div className="contacthero-label">
              HAVE <span className="contacthero-icon">?</span>
            </div>
            <p className="contacthero-text">
              about our courses, admissions, or learning paths
            </p>
          </div>

          <div className="contacthero-block">
            <div className="contacthero-label">
              WE'RE HERE <span className="contacthero-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg></span>
            </div>
            <p className="contacthero-text">
              to help you take the next step with confidence.
            </p>
          </div>

          <p className="contacthero-desc">
            Whether you're exploring your first tech skill or planning to
            specialize in areas like{" "}
            <strong>Data Science, Generative AI,</strong> or{" "}
            <strong>Web Development</strong>, the Deepskills team is just a
            message away.
          </p>
        </div>

        <div className="contacthero-info">
          <div className="contacthero-info-block">
            <div className="contacthero-info-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 6l10 7 10-7" />
              </svg>
            </div>
            <p className="contacthero-info-sub">
              For general inquiries, course details, or admissions support
            </p>
            <h3 className="contacthero-info-title">info@deepskills.pk</h3>

            <h3 className="contacthero-info-title contacthero-info-title-lg">
              WE AIM
            </h3>
            <p className="contacthero-info-sub">to respond to all queries</p>

            <h3 className="contacthero-info-title contacthero-info-title-lg">
              AS QUICKLY AS
            </h3>
            <p className="contacthero-info-sub">during working hours.</p>
          </div>

          <div className="contacthero-divider"></div>

          <div className="contacthero-info-block">
            <div className="contacthero-info-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M12 22s7-7.4 7-13a7 7 0 10-14 0c0 5.6 7 13 7 13z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <h3 className="contacthero-info-title">Deepskills Institute</h3>
            <p className="contacthero-info-address">
              58 A2, Tipu Road
              <br />
              Gulberg III, Lahore
              <br />
              Pakistan
            </p>
            <p className="contacthero-info-sub">
              Feel free to visit us for guidance, counseling, or to learn more
              about our programs in person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}