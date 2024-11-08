import React, { useState, useRef } from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import video from "../assets/video.mp4";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); // Manage mute state
  const [showPlayButton, setShowPlayButton] = useState(false); // Button visibility state
  const [isExpanded, setIsExpanded] = useState(false); // Track expanded state for animation
  const videoRef = useRef(null); // Reference to control video

  // Handle hover to show "Watch Brand Video" button
  const handleMouseEnter = () => {
    if (videoRef.current && isMuted) {
      videoRef.current.play();
      setShowPlayButton(true);
    }
  };

  // Handle mouse leave to hide button and pause video if muted
  const handleMouseLeave = () => {
    if (isMuted) {
      setShowPlayButton(false);
      videoRef.current.pause();
    }
  };

  // Unmute video, expand container, and hide the play button
  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute video
      videoRef.current.play(); // Keep video playing
      setIsMuted(false); // Update mute state
      setShowPlayButton(false); // Hide "Watch Brand Video" button
      setIsExpanded(true); // Trigger expanded layout
    }
  };

  // Toggle mute state when mute/unmute button is clicked
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (videoRef.current.muted) {
        setIsExpanded(false); // Reset layout if muted again
      }
    }
  };

  return (
    <section className="p-4 text-center flex flex-col">
      <h1
        className="uppercase font-neue font-semibold text-[30rem]"
        style={{ lineHeight: "21rem" }}
      >
        Woodbird
      </h1>
      <div className="flex justify-between font-roobert mt-8">
        <button className="bg-[#eae6e1] rounded-full px-4 py-2">
          Find Stores
        </button>
        <button className="bg-black rounded-full px-4 py-2 text-white">
          New Arrivals
        </button>
      </div>

      <div className="flex w-full gap-2 items-center font-roobert justify-between mt-[14rem]">
        <img
          src={img1}
          className="h-[28rem] w-auto transition-transform duration-700 ease-in-out"
          alt=""
        />

        <div
          className={`absolute transition-transform duration-700 ease-in-out ${
            isExpanded
              ? "top-[62rem] left-[50%] transform -translate-x-1/2 scale-[1.955]"
              : "top-[44rem] left-[50%] transform -translate-x-1/2 scale-100"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src={video}
            className="h-full w-auto -mt-[29rem]"
            muted={isMuted}
          />

          {/* Display "Watch Brand Video" button on hover, if still muted */}
          {showPlayButton && (
            <button
              onClick={handleMuteToggle}
              className="absolute flex items-center left-[17rem] -top-[16rem] bg-white rounded-full px-4 py-2 z-10 transition-transform duration-700 ease-in-out"
            >
              <FaPlay className="mr-2" size={10} />
              Watch Brand Video
            </button>
          )}

          {/* Display text or "CLOSE VIDEO" button based on mute state */}
          {isMuted ? (
            <p className="mt-2">
              From Our Hearts <br />
              to the Club
            </p>
          ) : (
            <button
              onClick={toggleMute}
              className="mt-4 bg-black text-white rounded-full px-4 py-2 flex items-center justify-center mx-auto"
            >
              <span>CLOSE VIDEO</span>
            </button>
          )}
        </div>

        <img
          src={img2}
          className="h-[28rem] w-auto transition-transform duration-700 ease-in-out"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
