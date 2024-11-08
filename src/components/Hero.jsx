import React, { useState, useRef } from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import video from "../assets/video.mp4";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); 
  const [showPlayButton, setShowPlayButton] = useState(false); 
  const [isExpanded, setIsExpanded] = useState(false); 
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current && isMuted) {
      videoRef.current.play();
      setShowPlayButton(true);
    }
  };

  const handleMouseLeave = () => {
    if (isMuted) {
      setShowPlayButton(false);
      videoRef.current.pause();
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; 
      videoRef.current.play(); 
      setIsMuted(false); 
      setShowPlayButton(false); 
      setIsExpanded(true); 
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (videoRef.current.muted) {
        setIsExpanded(false); 
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
          className="h-[28rem] w-auto ease-in-out transition-[margin-top] duration-700" // Smooth animation only on margin-top
          style={{ marginTop: isExpanded ? "16rem" : "0" }}
          alt=""
        />

        <div
          className={`absolute transition-transform duration-700 ease-in-out ${
            isExpanded
              ? "top-[62rem] left-[50%] transform -translate-x-1/2 scale-[1.9555]"
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

         
          {showPlayButton && (
            <button
              onClick={handleMuteToggle}
              className="absolute flex items-center left-[17rem] -top-[16rem] bg-white rounded-full px-4 py-2 z-10 transition-transform duration-700 ease-in-out"
            >
              <FaPlay className="mr-2" size={10} />
              Watch Brand Video
            </button>
          )}

        
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
          className="h-[28rem] w-auto ease-in-out transition-[margin-top] duration-700" // Smooth animation only on margin-top
          style={{ marginTop: isExpanded ? "16rem" : "0" }}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
