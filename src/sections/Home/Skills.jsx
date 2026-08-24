import "./Skills.css";

function Skills() {
  return (
    <section className="skills">

      <div className="skills-left">
        <h2>
          Who Can
          <br />
          <span>JOIN</span>
        </h2>

        <p>Made for Ambitious Learners</p>

        <div className="question-mark">?</div>
      </div>


      <div className="skills-right">

        <div className="skill-item">
          <span>✓</span>
          <p>Students exploring digital careers</p>
        </div>

        <div className="skill-item">
          <span>✓</span>
          <p>Beginners entering tech and design fields</p>
        </div>

        <div className="skill-item">
          <span>✓</span>
          <p>Aspiring freelancers and developers</p>
        </div>

        <div className="skill-item">
          <span>✓</span>
          <p>Young adults seeking skill-based education</p>
        </div>

      </div>


      <div className="skills-bottom">
        <p>
          If you're serious about your future,
          <br />
          <strong>Deepskills</strong> is for you.
        </p>
      </div>

    </section>
  );
}

export default Skills;