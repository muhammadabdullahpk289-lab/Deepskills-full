import React, { useEffect } from "react";
import "../../sections/Trainers/Hero.css";
import sir1 from "../../assets/Trainers-images/sir1.png";
import sir2 from "../../assets/Trainers-images/sir2.svg";
import heroBg from "../../assets/Trainers-images/bg1.png";

const photos = [sir1, sir1, sir1, sir1, sir1, sir2, sir2, sir2, sir2];

export default function Hero() {
  // Navbar ki asal (real) height measure karke CSS variable mein daal dete hain,
  // taake hardcoded px guess na karna pare — har screen size pe khud sahi ho jayega.
  useEffect(() => {
    const setHeaderHeight = () => {
      const header = document.querySelector(".navbar");
      if (header) {
        const height = header.getBoundingClientRect().height;
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`
        );
      }
    };

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);
    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  return (
    <div className="heros-wrappers"
    style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  >
      <div className="heros-contents">
        <h1 className="heros-titles">MEET OUR INSTRUCTOR</h1>
        <p className="heros-descs">
          At DeepSkills, our instructors are industry professionals with
          real-world experience. They are not just teachers — they are
          mentors who guide students with practical knowledge, modern tools,
          and hands-on training.
        </p>
      </div>

      <div className="heros-grids">
        {photos.map((src, i) => (
          <div key={i} className="heros-cards">
            {src ? (
              <img
                src={src}
                alt={`Instructor ${i + 1}`}
                className="heros-cards-imgs"
              />
            ) : (
              <div className="heros-placeholders">
                <span className="heros-placeholders-texts">Photo {i + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="heros-ctas">
        <p className="heros-ctas-texts">
          At DeepSkills, our instructors are industry professionals with
          real-world experience. They are not just teachers, industry
          professionals with real-world experience.
        </p>
      </div>
    </div>
  );
}