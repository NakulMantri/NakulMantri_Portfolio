import React from "react";
import { HERO_CONTENT } from "../constants/index.js";
import profilePic from "../assets/nakulMantri.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-900 p-20 lg:mb-35">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
          >
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">N</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">a</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">k</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">u</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">l</span>{" "}
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">M</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">a</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">n</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">t</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">r</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors duration-300">i</span>
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            href="https://drive.google.com/file/d/1_U1ba7PrvyJbECXrO7J8AigAXkb6Y17z/view?usp=sharing" // Replace with the actual path to your resume
            target="_blank"
            className="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
          >
            View Resume
          </motion.a>
        </div>
        <div className="flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="rounded-2xl w-3/4 sm:w-1/2 md:w-full max-w-xs md:max-w-[400px] max-h-[500px]"
            src={profilePic}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
