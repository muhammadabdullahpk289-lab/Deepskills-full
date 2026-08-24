import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Home,
  Info,
  BookOpen,
  PlayCircle,
  PenLine,
  Phone,
  UserRound,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  X
} from 'lucide-react'

import './Navbar.css'
import logo from '../assets/Home-images/10001.svg'

const aboutItems = [
  { label: 'About DeepSkills', path: '/about' },
  { label: 'Our Trainers', path: '/about/trainers' },
  { label: 'Founder Message', path: '/about/founder-message' }
]

const courseItems = [
  { label: 'Graphic Designing', path: '/courses/graphic-designing' },
  { label: 'Full Stack (Laravel)', path: '/courses/full-stack-laravel' },
  { label: 'Full Stack (React)', path: '/courses/full-stack-react' },
  { label: 'View All Courses', path: '/courses/all-courses' }
]

const certificateItems = [
  { label: 'Verify Certificate', path: '/certificate/verify' }
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)

  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const closeOnOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('mousedown', closeOnOutside)

    return () => {
      document.removeEventListener('mousedown', closeOnOutside)
    }
  }, [])

  const toggleMenu = (menu) => {
    setOpenMenu((current) => (
      current === menu ? null : menu
    ))
  }

  const closeAll = () => {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  const navClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="navbar">

      <div className="navbar-inner">

        {/* LOGO */}
        <Link
          to="/"
          className="brand"
          onClick={closeAll}
        >
          <img src={logo} alt="Deep Skills" />
        </Link>


        {/* DESKTOP + MOBILE NAV */}
        <nav
          className={`desktop-nav ${mobileOpen ? 'mobile-open' : ''}`}
        >

          {/* MOBILE TOP */}
          <div className="mobile-menu-top">

            <Link
              to="/"
              className="mobile-logo"
              onClick={closeAll}
            >
              <img src={logo} alt="Deep Skills" />
            </Link>

            <button
              className="mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={42} strokeWidth={3} />
            </button>

          </div>


          {/* MOBILE ACTION BUTTONS */}
          <div className="mobile-actions">

            <Link
              to="/inquire-now"
              className="mobile-inquire"
              onClick={closeAll}
            >
              <BriefcaseBusiness size={27} />
              <span>Inquire Now</span>
            </Link>

            <Link
              to="/login"
              className="mobile-login"
              onClick={closeAll}
            >
              <UserRound size={27} />
              <span>Login</span>
            </Link>

          </div>


          {/* MOBILE HEADING */}
          <div className="mobile-heading">
            <Home size={32} />
            <span>Navigate Deep Skills</span>
          </div>


          {/* HOME */}
          <NavLink
            to="/"
            className={navClass}
            onClick={closeAll}
          >
            <span className="mobile-nav-icon">
              <Home />
            </span>

            <span>Home</span>

            <ChevronRight className="mobile-arrow" />
          </NavLink>


          {/* ABOUT */}
          <div
            className={`nav-dropdown ${
              openMenu === 'about' ? 'is-open' : ''
            }`}
          >

            <button
              className="nav-link dropdown-trigger"
              onClick={() => toggleMenu('about')}
            >

              <span className="mobile-nav-icon">
                <Info />
              </span>

              <span>About</span>

              <ChevronDown className="mobile-arrow" />

            </button>


            <div className="dropdown-panel">

              {aboutItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </div>


          {/* COURSES */}
          <div
            className={`nav-dropdown ${
              openMenu === 'courses' ? 'is-open' : ''
            }`}
          >

            <button
              className="nav-link dropdown-trigger"
              onClick={() => toggleMenu('courses')}
            >

              <span className="mobile-nav-icon">
                <BookOpen />
              </span>

              <span>Courses</span>

              <ChevronDown className="mobile-arrow" />

            </button>


            <div className="dropdown-panel">

              {courseItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </div>


          {/* MEDIA */}
          <NavLink
            to="/media"
            className={navClass}
            onClick={closeAll}
          >

            <span className="mobile-nav-icon">
              <PlayCircle />
            </span>

            <span>Media</span>

            <ChevronRight className="mobile-arrow" />

          </NavLink>


          {/* BLOGS */}
          <NavLink
            to="/blogs"
            className={navClass}
            onClick={closeAll}
          >

            <span className="mobile-nav-icon">
              <PenLine />
            </span>

            <span>Blogs</span>

            <ChevronRight className="mobile-arrow" />

          </NavLink>


          {/* CERTIFICATE */}
          <div
            className={`nav-dropdown ${
              openMenu === 'certificate' ? 'is-open' : ''
            }`}
          >

            <button
              className="nav-link dropdown-trigger"
              onClick={() => toggleMenu('certificate')}
            >

              <span className="mobile-nav-icon">
                <BookOpen />
              </span>

              <span>Certificate</span>

              <ChevronDown className="mobile-arrow" />

            </button>


            <div className="dropdown-panel">

              {certificateItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </div>


          {/* CONTACT */}
          <NavLink
            to="/contact"
            className={navClass}
            onClick={closeAll}
          >

            <span className="mobile-nav-icon">
              <Phone />
            </span>

            <span>Contact Us</span>

            <ChevronRight className="mobile-arrow" />

          </NavLink>

        </nav>


        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">

          <Link
            className="login-link"
            to="/login"
            onClick={closeAll}
          >
            Login
          </Link>

          <Link
            className="inquires-btn"
            to="/inquire-now"
            onClick={closeAll}
          >
            Inquire Now
          </Link>

        </div>


        {/* HAMBURGER */}
        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  )
}

export default Navbar