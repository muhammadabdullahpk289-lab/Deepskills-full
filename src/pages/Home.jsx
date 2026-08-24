import { Link } from 'react-router-dom'
import Hero from '../sections/Home/Hero'
import Deep from '../sections/Home/Deep'
import Courses from '../sections/Home/Courses'
import FAQ from '../sections/Home/FAQ'
import Testimonial from '../sections/Home/Testimonial'
import Skills from '../sections/Home/Skills'
import Process from '../sections/Home/Process'
import Button from '../sections/Home/Button'

function Home() {
  return (
    <>
      <Hero/>
      <Deep />
      <Courses />
      <FAQ />
      <Testimonial />
      <Skills />
      <Process />
      <Button />
    </>
  )
}

export default Home