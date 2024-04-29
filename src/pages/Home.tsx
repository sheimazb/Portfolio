import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";
import { FaAngular, FaJs, FaReact,FaCss3 ,FaLaravel, FaNodeJs  } from "react-icons/fa6";
import { SiArduino, SiLaragon } from "react-icons/si";
import { DiRasberryPi } from "react-icons/di";
function Home() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col items-center  justify-center">
        <img
          className="h-30 w-30 rounded-full shadow-xl"
          src="https://media.licdn.com/dms/image/D4D03AQEoJPmbuLVnXw/profile-displayphoto-shrink_200_200/0/1695927666603?e=1720051200&v=beta&t=XMFtaiiNdnTMyN7ZiE63GyOeNfM6FXU4fdpUh6i84uA"
          alt="Profile"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Zbedi Chaima.
          </h1>
          <div className="flex flex-row justify-center gap-2 mt-3">
            <div className="animate-bounce ">
              <FaReact />
            </div>
            <div className="animate-bounce">
              <FaAngular />
            </div>
            <div className="animate-bounce">
              <DiRasberryPi />
            </div>
            <div className="animate-bounce">
              <FaJs />
            </div>
            <div className="animate-bounce">
              <FaCss3 />
            </div>
            <div className="animate-bounce">
              <SiArduino />
            </div>
            <div className="animate-bounce">
              <FaLaravel />
            </div>
            <div className="animate-bounce">
              <FaNodeJs />
            </div>
            <div className="animate-bounce">
              <SiLaragon  />
            </div>
          </div>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don't know why but I'm running out of copy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
