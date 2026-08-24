import LaravelWhyChoose from '../sections/Laravel/LaravelWhyChoose'
import LaravelCareer from "../sections/Laravel/LaravelCareer"
import LaravelCertify from "../sections/Laravel/LaravelCertify"
import LaravelDownload from "../sections/Laravel/LaravelDownload"
import LaravelGuides from "../sections/Laravel/LaravelGuides"
import LaravelHero from "../sections/Laravel/LaravelHero"
import LaravelList1 from "../sections/Laravel/LaravelList1"
import LaravelRoadmap from "../sections/Laravel/LaravelRoadmap"
import LaravelVideo from "../sections/Laravel/LaravelVideo"
import Laravelfeatures from '../sections/Laravel/Laravelfeatures'
import LaravelLearn from "../sections/Laravel/Laravellearn"
import LaravelOutcomes from "../sections/Laravel/Laraveloutcomes"
import LaravelTextImage from "../sections/Laravel/Laraveltextimage"

function FullStackLaravel() {
  return (
   <>
    <LaravelHero />
    <Laravelfeatures /> 
    <LaravelLearn/>   
    <LaravelTextImage/>
    <LaravelOutcomes />
    <LaravelVideo />
    <LaravelWhyChoose />
    <LaravelList1 />
    <LaravelCertify />
    <LaravelCareer />
    <LaravelDownload />
    <LaravelRoadmap />
    <LaravelGuides />
   </>
  )
}

export default FullStackLaravel