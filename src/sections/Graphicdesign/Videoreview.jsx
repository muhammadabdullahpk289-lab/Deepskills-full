import React, { useRef, useState } from "react";
import "./Videoreview.css";

const defaultVideos = new Array(8).fill(null);

export default function VideoReviews({ videos = defaultVideos }) {
  const loopVideos = [...videos, ...videos];

  return (
    <div className="vr-wrapper">
      <div className="vr-header">
        <h2 className="vr-heading">
          Video Reviews from
          <br />
          <span className="vr-highlight">Our Students !</span>
        </h2>
      </div>
     


      <div className="vr-track-outer">
        <div className="vr-track">
          {loopVideos.map((video, i) => (
            <VideoCard
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

function VideoCard({ video, index }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="vr-card" onClick={toggleVideo}>
      {video ? (
        <video
          ref={videoRef}
          src={video}
          className="vr-video"
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      ) : (
        <div className="vr-card-placeholder"></div>
      )}

      {/* Play / Pause Button */}
      <button
        className={`vr-play-btn ${isPlaying ? "playing" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleVideo();
        }}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="20" height="20">
            <rect x="6" y="5" width="4" height="14" fill="#000" />
            <rect x="14" y="5" width="4" height="14" fill="#000" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M8 5v14l11-7z" fill="#000" />
          </svg>
        )}
        <button className="vr-play-btn">
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M8 5v14l11-7z" fill="#ffffff" />
  </svg>
</button>
      </button>
    </div>
  );
}