import { useState, useEffect } from "react";
import "./Testimonial.css";

import img1 from "../../assets/Home-images/10003.svg";
import img2 from "../../assets/Home-images/10004.svg";
import img3 from "../../assets/Home-images/10005.svg";
import img4 from "../../assets/Home-images/10006.svg";
import img5 from "../../assets/Home-images/10002.png";
import img6 from "../../assets/Home-images/10003.svg";
import img7 from "../../assets/Home-images/10004.svg";

import imgprev from "../../assets/Home-images/left-btn.2b60ead56ebcb873.svg";
import imgnext from "../../assets/Home-images/right-btn.1e44d3ed80e9ee4b.svg";

import v1 from "../../assets/Home-images/videos/v1.mp4";
import v2 from "../../assets/Home-images/videos/v2.mp4";
import v3 from "../../assets/Home-images/videos/v3.mp4";
import v4 from "../../assets/Home-images/videos/v4.mp4";
import v5 from "../../assets/Home-images/videos/v5.mp4";
import v6 from "../../assets/Home-images/videos/v6.mp4";
import v7 from "../../assets/Home-images/videos/v7.mp4";


const testimonials = [
  {
    image: img1,
    name: "Ali Khan",
    course: "Graphic Design Mastery",
    video: v1,
  },
  {
    image: img2,
    name: "Ayesha Rahman",
    course: "Full Stack (Laravel)",
    video: v2,
  },
  {
    image: img3,
    name: "Usman Ahmed",
    course: "Web Development",
    video: v3,
  },
  {
    image: img4,
    name: "Sara Malik",
    course: "UI/UX Design",
    video: v4,
  },
  {
    image: img5,
    name: "Hamza Ali",
    course: "Digital Marketing",
    video: v5,
  },
  {
    image: img6,
    name: "Hira Shah",
    course: "Frontend Development",
    video: v6,
  },
  {
    image: img7,
    name: "Ahmed Raza",
    course: "Graphic Design",
    video: v7,
  },
];


function Testimonial() {

  const [slide, setSlide] = useState(0);

  const [activeVideo, setActiveVideo] = useState(null);


  /* =====================================
     NEXT SLIDE
  ===================================== */

  const nextSlide = () => {

    setSlide((prev) => {

      if (prev === testimonials.length - 1) {
        return 0;
      }

      return prev + 1;

    });

  };


  /* =====================================
     PREVIOUS SLIDE
  ===================================== */

  const prevSlide = () => {

    setSlide((prev) => {

      if (prev === 0) {
        return testimonials.length - 1;
      }

      return prev - 1;

    });

  };


  /* =====================================
     AUTO SLIDER
  ===================================== */

  useEffect(() => {

    const interval = setInterval(() => {

      setSlide((prev) => {

        if (prev === testimonials.length - 1) {
          return 0;
        }

        return prev + 1;

      });

    }, 3000);


    return () => clearInterval(interval);

  }, []);


  /* =====================================
     OPEN VIDEO
  ===================================== */

  const openVideo = (video) => {

    if (!video) {
      return;
    }

    setActiveVideo(video);

  };


  /* =====================================
     CLOSE VIDEO
  ===================================== */

  const closeVideo = () => {

    setActiveVideo(null);

  };


  return (

    <section className="testimonials">

      <h2>Testimonials</h2>


      <div className="testimonial-wrapper">

        <div className="testimonial-slider">


          {/* =================================
              PREVIOUS BUTTON
          ================================= */}

          <button
            className="testimonial-arrow prev"
            onClick={prevSlide}
            aria-label="Previous"
          >

            <img
              src={imgprev}
              alt="Previous"
            />

          </button>


          {/* =================================
              SLIDER WINDOW
          ================================= */}

          <div className="testimonial-window">

            <div
              className="testimonial-track"
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
            >


              {/* =================================
                  CREATE SLIDES
              ================================= */}

              {testimonials.map((_, index) => {

                const first =
                  testimonials[index];

                const second =
                  testimonials[
                    (index + 1) %
                    testimonials.length
                  ];


                return (

                  <div
                    className="testimonial-slide"
                    key={index}
                  >


                    {/* =================================
                        FIRST CARD
                    ================================= */}

                    <div className="testimonial-card">

                      <img
                        src={first.image}
                        alt={first.name}
                      />


                      <button
                        className="play-btn"
                        onClick={() =>
                          openVideo(first.video)
                        }
                        aria-label={`Play ${first.name} testimonial`}
                      >
                        ▶
                      </button>


                      <div className="testimonial-info">

                        <h3>
                          {first.name}
                        </h3>

                        <p>
                          {first.course}
                        </p>

                      </div>

                    </div>


                    {/* =================================
                        SECOND CARD
                    ================================= */}

                    <div className="testimonial-card second-card">

                      <img
                        src={second.image}
                        alt={second.name}
                      />


                      <button
                        className="play-btn"
                        onClick={() =>
                          openVideo(second.video)
                        }
                        aria-label={`Play ${second.name} testimonial`}
                      >
                        ▶
                      </button>


                      <div className="testimonial-info">

                        <h3>
                          {second.name}
                        </h3>

                        <p>
                          {second.course}
                        </p>

                      </div>

                    </div>


                  </div>

                );

              })}


            </div>

          </div>


          {/* =================================
              NEXT BUTTON
          ================================= */}

          <button
            className="testimonial-arrow next"
            onClick={nextSlide}
            aria-label="Next"
          >

            <img
              src={imgnext}
              alt="Next"
            />

          </button>


        </div>


        {/* =================================
            DOTS
        ================================= */}

        <div className="dots">

          {testimonials.map((_, index) => (

            <span
              key={index}
              className={
                slide === index
                  ? "active"
                  : ""
              }
              onClick={() => setSlide(index)}
            />

          ))}

        </div>


      </div>


      {/* =====================================
          LOCAL VIDEO MODAL
      ===================================== */}

      {activeVideo && (

        <div
          className="video-overlay"
          onClick={closeVideo}
        >

          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >


            {/* CLOSE BUTTON */}

            <button
              className="video-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              ×
            </button>


            {/* LOCAL MP4 VIDEO */}

            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
            />

          </div>

        </div>

      )}


    </section>

  );

}


export default Testimonial;