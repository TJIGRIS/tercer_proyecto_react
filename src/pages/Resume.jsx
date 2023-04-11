import React from "react";
import { SoftwareComponent } from "../components/resumeComponent/SoftwareComponent";
import { GiBookPile } from "react-icons/gi";
import { BsFillCameraFill, BsPinAngleFill } from "react-icons/bs";
import { FaHelicopter } from "react-icons/fa";

import { motion } from "framer-motion";
import { Animation } from "../assets/animation";

export const Resume = () => {
  return (
    <div className="image2">
      <div className="bg-transparent/70">
        <div className="pt-20 container mx-auto h-screen text-white flex gap-6 overflow-hidden">
          {/* Left */}
          <motion.div
            variants={Animation("bottom")}
            initial="initial"
            animate={"show"}
            className="flex flex-col flex-1 gap-8"
          >
            <div>
              <h1 className="relative text-4xl font-bold barra mb-8">ABOUT</h1>
              <SoftwareComponent />
            </div>

            <div>
              <h1 className="relative text-4xl font-bold barra mb-8">
                LANGUAGES
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-4 items-center mr-2">
                  <p>Photoshop</p>
                  <input className="w-full" type="range" name="" id="" />
                </li>
                <li className="flex gap-4 items-center mr-2">
                  <p>Photoshop</p>
                  <input className="w-full" type="range" name="" id="" />
                </li>
                <li className="flex gap-4 items-center mr-2">
                  <p>Photoshop</p>
                  <input className="w-full" type="range" name="" id="" />
                </li>
              </ul>
            </div>

            <div>
              <h1 className="relative text-4xl font-bold barra mb-8">
                PERSONAL SKILLS
              </h1>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </motion.div>

          {/* Center */}
          <motion.div
            variants={Animation("bottom")}
            initial="initial"
            animate={"show"}
            className="flex flex-1 flex-col gap-8"
          >
            <div>
              <h1 className="relative text-4xl font-bold barra mb-8">
                WHAT CON I DO?
              </h1>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div>
              <h1 className="relative text-4xl font-bold barra mb-8">
                EDUCATION
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </motion.div>

          {/* Rignt */}
          <motion.div
            variants={Animation("bottom")}
            initial="initial"
            animate={"show"}
            className="flex  flex-col flex-1 gap-8"
          >
            <div>
              <h1 className="relative text-4xl font-bold barra mb-8">
                WHAT CON I DO?
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                quod fuga quos molestias laudantium incidunt omnis soluta
                molestiae laborum sit id voluptatum voluptates nesciunt, magni
                iure non! Natus, id error.
              </p>
            </div>

            <div>
              <h1 className="relative text-4xl font-bold barra mb-8">
                DESIGN SKILLS
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                quod fuga quos molestias laudantium incidunt omnis soluta
                molestiae laborum sit id voluptatum voluptates nesciunt, magni
                iure non! Natus, id error.
              </p>
            </div>

            <div>
              <h1 className="relative text-4xl font-bold barra mb-8 ">
                HOBBIS & INTERESTS
              </h1>
              <ul className="grid grid-cols-2 gap-8 place-items-center">
                <li className="flex flex-col items-center ">
                  <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center text-3xl">
                    <BsFillCameraFill />
                  </div>
                  <p>Photography</p>
                </li>
                <li className="flex flex-col items-center ">
                  <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center text-3xl">
                    <BsFillCameraFill />
                  </div>
                  <p>Photography</p>
                </li>
                <li className="flex flex-col items-center">
                  <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center text-3xl">
                    <BsFillCameraFill />
                  </div>
                  <p>Photography</p>
                </li>
                <li className="flex flex-col items-center">
                  <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center text-3xl">
                    <BsFillCameraFill />
                  </div>
                  <p>Photography</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
