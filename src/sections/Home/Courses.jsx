import './Courses.css'
import img1 from '../../assets/Home-images/10003.svg'
import img2 from '../../assets/Home-images/10004.svg'
import img3 from '../../assets/Home-images/10005.svg'
import img4 from '../../assets/Home-images/10006.svg'
import img5 from '../../assets/Home-images/wordpress-logo-only.png'
import bgimg from '../../assets/Home-images/10007.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { Laptop } from 'lucide-react'




function Courses() {
  return (
    <section className="courses-section">

      <div className="courses-heading">
        <h2>Courses We Offer</h2>

        <span>Career-Ready Learning Programs</span>
      </div>


      <div 
      className="courses-container"
      style={{ backgroundImage: `url(${bgimg})` }}
      >

        {/* LEFT SIDE */}
        <div className="courses-column">

          <div className="course-card">
            <div className="course-icon"><img src={img5} alt="" /></div>

            <h3>WordPress Mastery</h3>

            <div className="course-image">
              <img src={img1} alt="WordPress Development" />
            </div>

            <p>
              Create professional websites without coding.
              Start freelancing and digital mastery.
            </p>

            <div className="course-line"></div>
          </div>


          <div className="course-card">
            <div className="course-icon">✎</div>

            <h3>Graphic Design Mastery</h3>

            <div className="course-image graphic">
              <img src={img3} alt="Graphic Design" />
            </div>

            <p>
              Learn Adobe Photoshop, Illustrator, and
              Premiere Pro. Build a stunning portfolio.
            </p>

            <div className="course-line"></div>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="courses-column">

          <div className="course-card">
            <div className="course-icon">&lt;/&gt;</div>

            <h3>Full Stack React JS</h3>

            <div className="course-image">
              <img src={img4} alt="Full Stack React JS" />
            </div>

            <p>
              Become a Frontend Engineer. Learn React,
              Redux, Node.js, and modern UI/UX.
            </p>

            <div className="course-line"></div>
          </div>


          <div className="course-card">
            <div className="course-icon"> <Laptop size={30} strokeWidth={2.5} /></div>

            <h3>Full Stack (Laravel)</h3>

            <div className="course-image graphic">
              <img src={img2} alt="Laravel Course" />
            </div>

            <p>
              Master backend development with Laravel.
              Build robust and scalable web applications.
            </p>

            <div className="course-line"></div>
          </div>

        </div>

      </div>


         <button className="inquires">
            → &nbsp; Explore All Courses
          </button>

    </section>
  )
}

export default Courses