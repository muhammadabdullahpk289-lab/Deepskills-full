import CourseFeatures from "../sections/Graphicdesign/Coursefeatures"
import HeroSection from "../sections/Graphicdesign/HeroSection"
import LearningOutcomes from "../sections/Graphicdesign/Learning"
import ProjectsYouWillBuild from "../sections/Graphicdesign/Project"
import VideoReviews from "../sections/Graphicdesign/Videoreview"
import WhatYoullLearn from "../sections/Graphicdesign/Whatyou"
import List1 from "../sections/Graphicdesign/List1"
import List2 from "../sections/Graphicdesign/List2"
import Certify from "../sections/Graphicdesign/Certify"
import CareerPath from "../sections/Graphicdesign/CareerPath"
import DownloadSection from "../sections/Graphicdesign/Downloadsection"
import Roadmap from "../sections/Graphicdesign/Roadmap"
import RelatedGuides from "../sections/Graphicdesign/Relatedguides"

function GraphicDesigning() {
  return (
    <>
    <HeroSection />
    <CourseFeatures />
    <WhatYoullLearn />
    <ProjectsYouWillBuild/>
    <LearningOutcomes/>
    <VideoReviews />
    <List1 />
    <List2 />
    <Certify />
    <CareerPath />
    <DownloadSection/>
    <Roadmap />
    <RelatedGuides/>
    </>
  )
}

export default GraphicDesigning