import React, { useRef, useState } from "react";
import "./ReactVideo.css";

const defaultVideos = new Array(8).fill(null);

export default function ReactVideo({ videos = defaultVideos }) {
  const loopVideos = [...videos, ...videos];

  return (
    <div className="reactvideo-wrapper">

      {/* HEADER */}
      <div className="reactvideo-header">
        <h2 className="reactvideo-heading">
          Video Reviews from
          <br />

          <span className="reactvideo-highlight">
            Our React Students!
          </span>
        </h2>
      </div>

      {/* VIDEO TRACK */}
      <div className="reactvideo-track-outer">
        <div className="reactvideo-track">

          {loopVideos.map((video, i) => (
            <ReactVideoCard
              key={i}
              video={video}
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

function ReactVideoCard({ video }) {

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
      className="reactvideo-card"
      onClick={toggleVideo}
    >

      {/* VIDEO */}

      {video ? (

        <video
          ref={videoRef}
          src={video}
          className="reactvideo-video"
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

      ) : (

        <div className="reactvideo-card-placeholder"></div>

      )}


      {/* PLAY / PAUSE BUTTON */}

      <button
        className={`reactvideo-play-btn ${
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

          <svg viewBox="0 0 24 24">
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

          <svg viewBox="0 0 24 24">
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