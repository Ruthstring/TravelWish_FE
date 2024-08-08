import React from 'react';
import logoImg from "../assets/logo_travel.png"

const Navbar = () => {

    return (
      <nav className="relative top-0  w-full bg-transparent flex  justify-between p-5 ml-5">
        <div className="w-36"><img src={logoImg}></img></div>
        <div className="pr-16 pt-5">
        <a href="#footer" className="text-black font-bold text-2xl ">About</a>
        </div>
      </nav>
    );
  };

export default Navbar;