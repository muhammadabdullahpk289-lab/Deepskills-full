import "./Hero.css";
import heroImage from "../../assets/Home-images/10002.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="hero-content">

        <h1>
          Build Skills That Secure
          <br />
          Your Future
        </h1>

        {/* SUBTITLE */}
        <p className="hero-subtitle">
          Industry-relevant digital skills designed to turn learners into professionals.
        </p>

        <div className="hero-line"></div>

        {/* DESCRIPTION */}
        <p className="hero-description">
          At Deepskills, we equip young adults with practical, job-ready skills
          in design and web development, the skills that power today's digital
          economy. Design, develop and succeed!
        </p>

        <div className="hero-buttons">

          <button className="explore-btn">
            → &nbsp; Explore Courses
          </button>

          <button className="inquire-btn">
            → &nbsp; Inquire Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;