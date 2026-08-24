import "../../sections/Trainers/Profile4.css";
import sir2 from "../../assets/Trainers-images/sir1.png";

export default function Profile4() {
  return (
    <section className="profile2-wrapper">
      <div className="profile2-content">

        {/* ================= TEXT ================= */}

        <div className="profile2-text-col">

          <h2 className="profile2-heading">
            LEAD BACKEND ENGINEER
          </h2>

          <p className="profile2-desc">
            Jane is an expert in robust server-side architecture. She has built scalable APIs for leading tech startups using Laravel and Node.js.
          </p>


          <h2 className="profile2-heading">
            EXPERIENCE
          </h2>

          <p className="profile2-desc profile2-desc-muted">
            Jane is an expert in robust server-side architecture. She has built scalable APIs for leading tech startups using Laravel and Node.js.
            </p>

        </div>


        {/* ================= IMAGE ================= */}

        <div className="profile2-image-col">

          <div className="profile2-card">

            <img
              src={sir2}
              alt="JANE SMITH"
              className="profile2-img"
            />

          </div>


          <div className="profile2-name-block">

            <h3 className="profile2-name">
              JANE SMITH
            </h3>

            <p className="profile2-role">
              (LEAD BACKEND ENGINEER)
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}