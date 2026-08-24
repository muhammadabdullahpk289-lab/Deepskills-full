import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CustomCursor from './components/CustomCursor'

import Home from './pages/Home'
import About from './pages/About'
import Trainers from './pages/Trainers'
import FounderMessage from './pages/FounderMessage'

import Courses from './pages/Courses'
import GraphicDesigning from './pages/GraphicDesigning'
import FullStackLaravel from './pages/FullStackLaravel'
import FullStackReact from './pages/FullStackReact'
import AllCourses from './pages/AllCourses'

import Media from './pages/Media'
import Blogs from './pages/Blogs'

import Certificate from './pages/Certificate'
import VerifyCertificate from './pages/VerifyCertificate'

import Contact from './pages/Contact'
import Login from './pages/Login'
import InquireNow from './pages/InquireNow'

function App() {
  return (
    <>
      <CustomCursor />

      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/trainers" element={<Trainers />} />
          <Route path="/about/founder-message" element={<FounderMessage />} />

          <Route path="/courses" element={<Courses />} />
          <Route
            path="/courses/graphic-designing"
            element={<GraphicDesigning />}
          />
          <Route
            path="/courses/full-stack-laravel"
            element={<FullStackLaravel />}
          />
          <Route
            path="/courses/full-stack-react"
            element={<FullStackReact />}
          />
          <Route path="/courses/all-courses" element={<AllCourses />} />

          <Route path="/media" element={<Media />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/certificate" element={<Certificate />} />
          <Route
            path="/certificate/verify"
            element={<VerifyCertificate />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inquire-now" element={<InquireNow />} />

        </Route>
      </Routes>
    </>
  )
}

export default App