import "./ReactCertify.css";

import certificate from "../../assets/React-images/certificate.89540f2699a9e479.svg";

function ReactCertify() {
  return (
    <section className="reactcertify-section">

      <div className="reactcertify-container">

        <h2>
          Certify your Learning
        </h2>

        <p>
          Complete the course with assignments, and request your course
          <br />
          completion certificate
        </p>

        <div className="reactcertify-certificate-wrapper">

          <img
            src={certificate}
            alt="Course Completion Certificate"
            className="reactcertify-certificate-image"
          />

        </div>

      </div>

    </section>
  );
}

export default ReactCertify;