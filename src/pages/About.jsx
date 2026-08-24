import { Link } from 'react-router-dom'
import Hero from '../sections/About/Hero'
import WhyCreated from '../sections/About/WhyCreated'
import LearnSection from '../sections/About/LearnSection'
import HowWeTeach from '../sections/About/HowWeTeach'
import WhoFor from '../sections/About/WhoFor'
import WhatMakesUsDifferent from '../sections/About/WhatMakesUsDifferent'
import Vision from '../sections/About/Vision'
import Mission from '../sections/About/Mission'

function About() {
  return (
    <>
      <Hero/>
      <WhyCreated />
      <LearnSection />
      <HowWeTeach />
      <WhoFor />
      <WhatMakesUsDifferent />
      <Vision />
      <Mission />
    </>
  )
}

export default About