import './FAQ.css'

function FAQ() {
  return (
    <section className="faq-section">

      <div className="faq-heading">
        <h2>Why Choose Deepskills?</h2>
        <span>Designed for Your Future</span>
      </div>

      <div className="faq-cards">

        {/* Card 1 */}
        <div className="faq-card">
          <div className="faq-icon">✓</div>

          <div className="faq-content">
            <h3>Practical Learning Approach</h3>
            <p>
              Hands-on projects and real-world examples help you learn by
              doing and gain actual experience.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="faq-card">
          <div className="faq-icon">✓</div>

          <div className="faq-content">
            <h3>Career-Oriented Skills</h3>
            <p>
              Our courses focus on skills that employers and clients actually
              demand in the global market.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="faq-card">
          <div className="faq-icon">✓</div>

          <div className="faq-content">
            <h3>Beginner-Friendly Structure</h3>
            <p>
              No prior technical background required; we start from the
              absolute basics and build up.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="faq-card">
          <div className="faq-icon">✓</div>

          <div className="faq-content">
            <h3>Confidence Through Competence</h3>
            <p>
              We help learners build real professional confidence by
              mastering core technical concepts.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default FAQ;
