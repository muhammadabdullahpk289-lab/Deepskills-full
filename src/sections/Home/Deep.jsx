import './Deep.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faWrench,
  faChalkboardUser,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons'

function Deep() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="offer-side">

          <h2>What We Offer</h2>

          <div className="offer-list">

            <div className="offer-card">
                 <div className="offer-icon">
                   <FontAwesomeIcon icon={faGraduationCap} />
                 </div>

                 <span>Career-Focused Learning</span>
            </div>


            <div className="offer-card">
              <div className="offer-icon">
                  <FontAwesomeIcon icon={faWrench} />
               </div>

           <span>Practical, Hands-On Training</span>
            </div>


          <div className="offer-card">
                <div className="offer-icon">
               <FontAwesomeIcon icon={faChalkboardUser} />
              </div>

            <span>Beginner to Professional Tracks</span>
              </div>


              <div className="offer-card">
                <div className="offer-icon">
                   <FontAwesomeIcon icon={faBriefcase} />
                   </div>

                    <span>Skills That Lead to Real Opportunities</span>
                    </div>
                     </div>

             </div>


        {/* RIGHT SIDE */}
        <div className="about-side">

          <h2>About Deepskills</h2>

          <h4>Where Skills Become Careers</h4>

          <div className="about-box">

            <p className="about-bold">
              The future belongs to those who can create, build, and adapt.
            </p>

            <p>
              <span className="red-text">Deepskills</span> is a modern learning
              institute focused on hands-on digital education. We help students
              and young adults gain the technical and creative skills needed to
              succeed in today's fast-changing job market, whether as
              professionals, freelancers, or entrepreneurs. We believe that
              skills, not just degrees, shape strong careers.
            </p>

            <p className="about-italic">
              Learn Skills, earn at an early age, and grasp your future
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Deep