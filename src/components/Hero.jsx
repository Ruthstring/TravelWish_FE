import React from 'react'
import backgroundImage from "../assets/hero_background2.png"
import Navbar from './NavBar';


const HeroStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center top", // Keep the top part visible
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover", // Cover the container but keep aspect ratio
  height: "100vh", // Full viewport height
  maskImage: "linear-gradient(#E8F1F1 80%, transparent)",
  
};


const Hero = () => {
  return (
    <div className="relative" style={HeroStyle}>
      <div>
        <Navbar />
      </div>
      <div className="absolute bottom-20 left-2/6 ml-8 mb-8 p-8 text-left space-y-0 tracking-tighter">
        <h1 className="text-hero font-extrabold text-gray-900 text-8xl md:text-8xl lg:text-9xl mb-0 animate-slide-in">
          Dream big
        </h1>
        <p className="text-4xl text-gray-900 md:text-4xl lg:text-5xl mt-0 animate-slide-in">
          Visualize your next destination <br />and make it happen
        </p>
      </div>
    </div>
  );

 
};

export default Hero;