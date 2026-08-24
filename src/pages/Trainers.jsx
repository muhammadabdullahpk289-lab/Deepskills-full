import { Link } from 'react-router-dom'
import Hero from '../sections/Trainers/Hero'
import WhyChoose from '../sections/Trainers/Whychoose'
import sir1 from '../sections/Trainers/Instructureprofile'
import Instructorprofile from '../sections/Trainers/Instructureprofile'
import Profile2 from '../sections/Trainers/Profie2'
import Profile3 from '../sections/Trainers/Profile3'
import Profile4 from '../sections/Trainers/Profile4'
import Button from '../sections/Trainers/Button'


function Trainers() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Instructorprofile />
      <Profile2 />
      <Profile3/>
      <Profile4 />
      <Button />
    </>
  )
}

export default Trainers