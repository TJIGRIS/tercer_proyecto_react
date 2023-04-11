import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-transparent/70 absolute top-0 right-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-16 text-white font-semibold tracking-widest ">
        <ul className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
        </ul>

        <div className="">
          <a href="#">(+57) 3172287840</a>
        </div>
      </div>
    </div>
  );
};
