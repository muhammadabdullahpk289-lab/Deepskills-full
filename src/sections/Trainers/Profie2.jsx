import "../../sections/Trainers/Profile2.css";
import sir2 from "../../assets/Trainers-images/sir1.png";

export default function Profile2() {
  return (
    <section className="profile2-wrapper">
      <div className="profile2-content">

        {/* ================= TEXT ================= */}

        <div className="profile2-text-col">

          <h2 className="profile2-heading">
            SENIOR REACT DEVELOPER
          </h2>

          <p className="profile2-desc">
            With 10+ years of experience in frontend engineering,
            John specializes in creating interactive and high-performance
            user interfaces using React and modern JavaScript.
          </p>


          <h2 className="profile2-heading">
            EXPERIENCE
          </h2>

          <p className="profile2-desc profile2-desc-muted">
            With 10+ years of experience in frontend engineering,
            John specializes in creating interactive and high-performance
            user interfaces using React and modern JavaScript.
          </p>

        </div>


        {/* ================= IMAGE ================= */}

        <div className="profile2-image-col">

          <div className="profile2-card">

            <img
              src={sir2}
              alt="John Doe"
              className="profile2-img"
            />

          </div>


          <div className="profile2-name-block">

            <h3 className="profile2-name">
              JOHN DOE
            </h3>

            <p className="profile2-role">
              (SENIOR REACT DEVELOPER)
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}