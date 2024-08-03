import React from 'react'
import backgroundImage from "../assets/hero_background2.png"


const HeroStyle={
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  
  height:"1000px",
   maskImage: "linear-gradient(#E8F1F1 80%, transparent)",
   borderRadius:"3%",
};

const Hero = () => {

  return (
     
    <>
    
    <section 
      className="">
      <div style={HeroStyle} className=" flex items-center justify-center h-full">
      
       <h1 className="text-4xl font-extrabold  text-gray-900 md:text-5xl lg:text-6xl">Dream big</h1>
       <section className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"> some text here at the end of the page here</section>
       </div>
    </section>
    
    </>


    
  );
};

export default Hero;