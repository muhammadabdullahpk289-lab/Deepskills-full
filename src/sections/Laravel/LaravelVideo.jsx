import React, { useRef, useState } from "react";
import "./LaravelVideo.css";

const defaultVideos = new Array(8).fill(null);

export default function LaravelVideo({ videos = defaultVideos }) {
  const loopVideos = [...videos, ...videos];

  return (
    <div className="laravelvideo-wrapper">

      {/* HEADER */}
      <div className="laravelvideo-header">
        <h2 className="laravelvideo-heading">
          Video Reviews from
          <br />
          <span className="laravelvideo-highlight">
            Our Students !
          </span>
        </h2>
      </div>


      {/* VIDEO TRACK */}
      <div className="laravelvideo-track-outer">

        <div className="laravelvideo-track">

          {loopVideos.map((video, i) => (
            <LaravelVideoCard
              key={i}
              video={video}
              index={(i % videos.length) + 1}
            />
          ))}

        </div>

      </div>

    </div>
  );
}


/* =========================================
              VIDEO CARD
========================================= */

function LaravelVideoCard({ video }) {

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);


  /* =========================================
              PLAY / PAUSE
  ========================================= */

  const toggleVideo = () => {

    if (!videoRef.current) return;


    if (videoRef.current.paused) {

      videoRef.current.play();

      setIsPlaying(true);

    } else {

      videoRef.current.pause();

      setIsPlaying(false);

    }

  };


  return (

    <div
      className="laravelvideo-card"
      onClick={toggleVideo}
    >

      {/* VIDEO */}

      {video ? (

        <video
          ref={videoRef}
          src={video}
          className="laravelvideo-video"
          playsInline
          preload="metadata"

          onPlay={() => setIsPlaying(true)}

          onPause={() => setIsPlaying(false)}
        />

      ) : (

        <div className="laravelvideo-card-placeholder"></div>

      )}


      {/* PLAY / PAUSE BUTTON */}

      <button
        className={`laravelvideo-play-btn ${
          isPlaying ? "playing" : ""
        }`}

        onClick={(e) => {
          e.stopPropagation();
          toggleVideo();
        }}

        aria-label={
          isPlaying
            ? "Pause video"
            : "Play video"
        }
      >

        {isPlaying ? (

          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >

            <rect
              x="6"
              y="5"
              width="4"
              height="14"
              fill="#ffffff"
            />

            <rect
              x="14"
              y="5"
              width="4"
              height="14"
              fill="#ffffff"
            />

          </svg>

        ) : (

          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >

            <path
              d="M8 5v14l11-7z"
              fill="#ffffff"
            />

          </svg>

        )}

      </button>

    </div>

  );
}