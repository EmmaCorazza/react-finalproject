import React from "react";
import "./Inspo.css";
import InspoVideo from "/inspo.mp4";

const Inspo = () => {
  return (
    <div className="container">
      <div className="video-container">
        <video
          className="video"
          controlsList="nodownload"
          autoPlay
          loop
          controls
          playsInline
        >
          <source src={InspoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Inspo;
