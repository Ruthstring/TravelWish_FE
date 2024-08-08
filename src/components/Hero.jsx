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
  // borderRadius: "3%",
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
};


const Hero = () => {

  return (
    <div className="" style={HeroStyle}>
      <div>
      <Navbar /> 
      </div>
      <div className=" absolute bottom-20 left-2/6 ml-8 mb-8 p-8 text-left space-y-0 tracking-tighter ">
        <h1 className="text-hero font-extrabold text-gray-900 text-7xl md:text-8xl lg:text-9xl mb-0 animate-slide-in">
          Dream big
        </h1>
        <p className="text-4xl text-gray-900 md:text-4xl lg:text-5xl mt-0 animate-slide-in">
          Visualize your next destination <br></br>and make it happen
        </p>
      </div>
    </div>
  );
  // return (
     
  //   <>
    
  //   <section 
  //     className="">
  //     <div style={HeroStyle} className=" flex items-center justify-center h-full">
  //     <Navbar />
  //      <h1 className="text-4xl font-extrabold  text-gray-900 md:text-5xl lg:text-6xl">Dream big</h1>
  //      <section className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"> some text here at the end of the page here</section>
  //      </div>
  //   </section>
    
  //   </>


    
  // );
};

export default Hero;