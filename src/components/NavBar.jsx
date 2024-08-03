import React from 'react';

const Navbar = () => {
    return (
      <nav className="relative top-0  w-full bg-transparent flex  justify-between items-center p-12">
        <div className="text-white text-2xl font-bold">My Logo</div>
        <a href="#footer" className="text-white text-lg ">About</a>
      </nav>
    );
  };

export default Navbar;