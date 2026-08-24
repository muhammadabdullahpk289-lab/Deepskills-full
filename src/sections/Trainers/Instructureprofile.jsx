import "../../sections/Trainers/Instructureprofile.css";
import sir1 from "../../assets/Trainers-images/sir1.png";

export default function Instructorprofile() {
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
              QAZZAFI AHMAD
            </h3>

            <p className="profile-role">
              (WEB DEVELOPER)
            </p>
          </div>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="profile-text-col">

          <h2 className="profile-heading">
            WEB DEVELOPER
          </h2>

          <p className="profile-desc">
            At DeepSkills, our instructors are industry professionals
            with real-world experience. They are not just teachers —
            they are mentors who guide students with practical knowledge,
            modern tools, and hands-on training.
          </p>


          <h2 className="profile-heading">
            EXPERIENCE
          </h2>

          <p className="profile-desc profile-desc-muted">
            At DeepSkills, our instructors are industry professionals
            with real-world experience. They are not just teachers —
            they are mentors who guide students with practical knowledge,
            modern tools, and hands-on training.
          </p>


          <div className="profile-dot"></div>

        </div>

      </div>

    </section>
  );
}