import React from "react";
import person from "../assets/person.png";
import { motion } from "framer-motion";
import { Animation } from "../assets/animation";

export const About = () => {
  return (
    <div className="bg-transparent/95">
      <div className="relative container mx-auto grid grid-cols-2 place-content-center text-white h-screen overflow-hidden">
        {/* Left */}
        <motion.div
          variants={Animation("top")}
          initial="initial"
          animate={"show"}
          className="relative flex flex-col gap-20 overflow-hidden"
        >
          <div className="">
            <h1 className="relative text-4xl font-bold barra">ABOUT</h1>
            <p className="text-xl font-extralight mt-3">
              johanalvarezz237@gmail.com
            </p>
          </div>

          <p className="text-xl font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque
            sapiente delectus commodi tenetur reprehenderit ipsam debitis
            sapiente delectus commodi tenetur reprehenderit ipsam debitis
            sapiente delectus commodi tenetur reprehenderit ipsam debitis
            dolorem consectetur, similique quo numquam quas, laborum beatae unde
            magni aperiam incidunt molestias.
          </p>
        </motion.div>

        <motion.div
          variants={Animation("bottom")}
          initial="initial"
          animate={"show"}
          className="absolute bottom-10"
        >
          <div className="text-center">
            <p>Popayan, Colombia</p>
            <p className="px-10">
              <span className="barra2"></span> 1029403, Real Pomona{" "}
              <span className="barra3"></span>
            </p>
          </div>
        </motion.div>
        {/* Right */}
        <div className=""></div>
        <motion.div
          variants={Animation("right")}
          initial="initial"
          animate={"show"}
          className="absolute right-0 bottom-0 mix-blend-multiply z-50 w-[50%]"
        >
          <img className="w-[100%]" src={person} alt="" />
        </motion.div>
      </div>
    </div>
  );
};
