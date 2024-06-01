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
    <div className="border-b border-neutral-900 p-20 lg:mb-35">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
          >
            Nakul Mantri
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
