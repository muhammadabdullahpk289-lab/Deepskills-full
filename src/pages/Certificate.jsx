import { Link } from 'react-router-dom'

function Certificate() {
  return (
    <section className="section page">
      <div className="section-title"><span className="eyebrow">Certificate</span><h2>Certificates</h2><p>Use the certificate system to verify a student's certificate.</p></div>
      <div className="card">
        <h3>Verify a Certificate</h3>
        <p>Enter the certificate ID on the verification page.</p>
        <Link className="primary-btn" to="/certificate/verify">Verify Certificate</Link>
      </div>
    </section>
  )
}

export default Certificate