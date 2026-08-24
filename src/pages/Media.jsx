import FeaturedProjects from "../sections/Media/Featuredprojects"
import MediaAwards from "../sections/Media/Mediaawards"
import MediaHero from "../sections/Media/Mediahero"
import MediaLearnVideos from "../sections/Media/Medialearnvideos"
import MediaStayUpdated from "../sections/Media/Mediastayupdated"
import MediaWhyChoose from "../sections/Media/Mediawhychoose"
import Button from '../sections/Media/Button'


function Media() {
  return (
      <>
       <MediaHero />  
       <FeaturedProjects />    
       <MediaWhyChoose />
       <MediaStayUpdated />
       <MediaAwards />
       <MediaLearnVideos />
       <Button />
      </>
  )
}

export default Media