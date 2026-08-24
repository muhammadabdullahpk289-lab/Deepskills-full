import "./Profile3.css";
import sir1 from "../../assets/Trainers-images/sir1.png";

export default function Profile3() {
  return (
    <section className="profile-wrapper">

      <div className="profile-content">

        {/* ================= IMAGE ================= */}

        <div className="profile-image-col">

          <div className="profile-card">
            <img
              src={sir1}
              alt="Qazzafi Ahmad"
              className="profile-img"
            />
          </div>

          <div className="profile-name-block">
            <h3 className="profile-name">
              MIKE JOHNSON
            </h3>

            <p className="profile-role">
              (CREATIVE UI/UX DIRECTOR)
            </p>
          </div>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="profile-text-col">

          <h2 className="profile-heading">
            CREATIVE UI/UX DIRECTOR
          </h2>

          <p className="profile-desc">
            Mike believes in design that solves problems. He brings 8 years of agency experience teaching Adobe Creative Suite and modern design principles.
          </p>


          <h2 className="profile-heading">
            EXPERIENCE
          </h2>

          <p className="profile-desc profile-desc-muted">
            Mike believes in design that solves problems. He brings 8 years of agency experience teaching Adobe Creative Suite and modern design principles.
          </p>


          <div className="profile-dot"></div>

        </div>

      </div>

    </section>
  );
}