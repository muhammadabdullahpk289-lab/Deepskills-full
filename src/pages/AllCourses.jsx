import ExploreCourse from "../sections/View-all-courses/Explorecourse"


function AllCourses() {
  let courses = [
    ['Graphic Designing', '/courses/graphic-designing'],
    ['Full Stack (Laravel)', '/courses/full-stack-laravel'],
    ['Full Stack (React)', '/courses/full-stack-react'],
    ['WordPress Mastery', '/courses/all-courses']
  ]

  return (
  <>
   <ExploreCourse />    
  </>
  )
}

export default AllCourses