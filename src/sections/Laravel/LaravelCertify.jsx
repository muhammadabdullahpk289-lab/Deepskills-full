import "./LaravelCertify.css";

import certificate from "../../assets/Laravel-images/certificate.89540f2699a9e479.svg";

function LaravelCertify() {
  return (
    <section className="laravelcertify-section">

      <div className="laravelcertify-container">

        <h2>
          Certify your Learning
        </h2>


        <p>
          Complete the course with assignments, and request your course
          <br />
          completion certificate
        </p>


        <div className="laravelcertify-certificate-wrapper">

          <img
            src={certificate}
            alt="Course Completion Certificate"
            className="laravelcertify-certificate-image"
          />

        </div>

      </div>

    </section>
  );
}

export default LaravelCertify;