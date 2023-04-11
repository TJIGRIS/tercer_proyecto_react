import React from "react";
import {
  GrFacebookOption,
  GrLinkedinOption,
  GrInstagram,
  GrPinterest,
  GrTwitter,
} from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import { Animation } from "../assets/animation";

export const Home = () => {
  return (
    <div className=" image">
      <div className="bg-transparent/70 ">
        <div className="relative container mx-auto h-screen grid grid-cols-2 place-content-center text-white tracking-widest overflow-hidden">
          {/* Left */}
          <motion.div
            variants={Animation("right")}
            initial="initial"
            animate={"show"}
            className="flex flex-col gap-12"
          >
            <div>
              <h1 className="w-min text-9xl ">TJ IGRIS</h1>
              <p className="font-extralight tracking-[.6rem] text-xl">
                Graphic Designer
              </p>
            </div>

            <div className="flex gap-6">
              <button className="bg-transparent border-2 px-8 py-1 rounded-2xl">
                Resume
              </button>
              <button className="bg-transparent border-2 px-8 py-1 rounded-2xl">
                Resume
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <div className=""></div>
          <motion.div
            variants={Animation("right")}
            initial="initial"
            animate={"show"}
            className="absolute bottom-10 flex gap-4 text-2xl"
          >
            <a href="#">
              <GrFacebookOption />
            </a>
            <a href="#">
              <GrLinkedinOption />
            </a>
            <a href="#">
              <GrInstagram />
            </a>
            <a href="#">
              <GrPinterest />
            </a>
            <a href="#">
              <GrTwitter />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
