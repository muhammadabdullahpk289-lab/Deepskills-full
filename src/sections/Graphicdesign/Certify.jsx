import './Certify.css'
import certificate from '../../assets/Graphicdesign-images/certificate.89540f2699a9e479.svg'

function Certify() {
  return (
    <section className="certify-section">

      <div className="certify-container">

        <h2>Certify your Learning</h2>

        <p>
          Complete the course with assignments, and request your course
          <br />
          completion certificate
        </p>

        <div className="certificate-wrapper">
          <img
            src={certificate}
            alt="Course Completion Certificate"
            className="certificate-image"
          />
        </div>

      </div>

    </section>
  )
}

export default Certify