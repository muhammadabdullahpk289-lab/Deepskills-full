import React from "react";
import { Link } from "react-router-dom";
import "./Explorecourse.css";

import img1 from "../../assets/View-all-courses/10003.svg";
import img2 from "../../assets/View-all-courses/10005.svg";
import img3 from "../../assets/View-all-courses/10004.svg";
import img4 from "../../assets/View-all-courses/10006.svg";
import img5 from "../../assets/View-all-courses/1776404337292-sqa-card.svg";
import img6 from "../../assets/View-all-courses/1776404349306-seo-card.svg";


const courses = [
  {
    image: img1,

    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z" />
      </svg>
    ),

    title: "WordPress Mastery",

    desc: "Create professional websites without coding. Best for freelancers and digital marketers.",

    path: "/courses/full-stack-react",
  },


  {
    image: img2,

    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.5 7.5" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),

    title: "Graphic Design Mastery",

    desc: "Learn Adobe Photoshop, Illustrator, and Pantone Pro. Build a stunning portfolio.",

    path: "/courses/graphic-designing",
  },


  {
    image: img3,

    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),

    title: "Full Stack React JS",

    desc: "Become a Frontend Engineer: Learn React, Redux, Node.js, and Modern UI/UX.",

    path: "/courses/full-stack-react",
  },


  {
    image: img4,

    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),

    title: "Full Stack (Laravel)",

    desc: "Master backend development with Laravel. Build robust and scalable web applications.",

    path: "/courses/full-stack-laravel",
  },


  {
    image: img5,

    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1" fill="#ffffff" />
        <circle cx="14" cy="8" r="1" fill="#ffffff" />
        <circle cx="16" cy="13" r="1" fill="#ffffff" />
        <path d="M12 21a2 2 0 002-2c0-1-1-2-1-2a2 2 0 012-2h1a4 4 0 004-4 9 9 0 10-8 10z" />
      </svg>
    ),

    title: "UI/UX Design",

    desc: "Master user research, wireframing, prototyping, and visual design using Figma.",

    path: "/courses/graphic-design",
  },


  {
    image: img6,

    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),

    title: "SEO & Digital Marketing",

    desc: "Learn search engine optimization, content strategy, and online growth tactics.",

    path: "/courses/full-stack-laravel",
  },
];


export default function ExploreCourse() {

  return (

    <div className="explorecourse-wrapper">

      {/* =====================================
          HEADING
      ===================================== */}

      <h2 className="explorecourse-heading">
        Explore Our Courses
      </h2>


      {/* =====================================
          SUBTEXT
      ===================================== */}

      <p className="explorecourse-subtext">
        Master the most in-demand digital skills.
        Whether you're starting from scratch or
        leveling up your career, we have the right
        learning path for you.
      </p>


      {/* =====================================
          COURSES GRID
      ===================================== */}

      <div className="explorecourse-grid">

        {courses.map((course, i) => (

          <div
            className="explorecourse-card"
            key={i}
          >

            {/* =================================
                IMAGE
            ================================= */}

            <div className="explorecourse-image">

              {course.image ? (

                <img
                  src={course.image}
                  alt={course.title}
                />

              ) : (

                <div className="explorecourse-image-placeholder"></div>

              )}

            </div>


            {/* =================================
                ICON
            ================================= */}

            <div className="explorecourse-icon">
              {course.icon}
            </div>


            {/* =================================
                TITLE
            ================================= */}

            <h3 className="explorecourse-title">
              {course.title}
            </h3>


            {/* =================================
                DESCRIPTION
            ================================= */}

            <p className="explorecourse-desc">
              {course.desc}
            </p>


            {/* =================================
                VIEW COURSE BUTTON
            ================================= */}

            <Link
              to={course.path}
              className="explorecourse-btn"
            >
              View Course Details
            </Link>


          </div>

        ))}

      </div>

    </div>

  );

}