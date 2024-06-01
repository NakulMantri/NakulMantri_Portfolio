import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa"; // Import HTML5 and CSS3 icons
import {
  SiMongodb,
  SiCplusplus,
  SiC,
  SiMarkdown,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiScala,
  SiExpress,
  SiLatex,
} from "react-icons/si";
import { DiPython } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologyLinks = {
  React: "https://reactjs.org",
  NodeJs: "https://nodejs.org",
  MongoDB: "https://www.mongodb.com",
  Cplusplus: "https://isocpp.org",
  C: "https://en.wikipedia.org/wiki/C_(programming_language)",
  Python: "https://www.python.org",
  Git: "https://github.com",
  Markdown: "https://www.markdownguide.org",
  TailwindCSS: "https://tailwindcss.com",
  JavaScript: "https://www.javascript.com",
  MySQL: "https://www.mysql.com",
  Scala: "https://www.scala-lang.org",
  Express: "https://expressjs.com",
  LaTeX: "https://www.latex-project.org",
  HTML5: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5", // Add HTML5 link
  CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3", // Add CSS3 link
};

const Technologies = () => {
  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };

  // Define animation durations for each icon
  const animationDurations = {
    Cplusplus: 2.5,
    C: 3,
    Python: 4,
    HTML5: 2.5,
    CSS3: 9,
    React: 3.5,
    NodeJs: 2.5,
    MongoDB: 2,
    Git: 3,
    Markdown: 5.5,
    TailwindCSS: 2,
    JavaScript: 3,
    MySQL: 6.5,
    Scala: 2,
    Express: 7,
    LaTeX: 2.5,
  };

  return (
    <div className="border-b border-neutral-800 p-14 pb-24" id="technologies">
      <motion.h2
      
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      
       className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      
      
      className="flex flex-wrap justify-center gap-4">
        {/* C++ */}
        <motion.div
          variants={iconVariants(animationDurations.Cplusplus)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.Cplusplus)}
        >
          <SiCplusplus className="text-7xl text-blue-600" />
        </motion.div>

        {/* C */}
        <motion.div
          variants={iconVariants(animationDurations.C)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.C)}
        >
          <SiC className="text-7xl text-blue-700" />
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(animationDurations.Python)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.Python)}
        >
          <DiPython className="text-7xl text-yellow-500" />
        </motion.div>

        {/* HTML5 */}
        <motion.div
          variants={iconVariants(animationDurations.HTML5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.HTML5)}
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        {/* CSS3 */}
        <motion.div
          variants={iconVariants(animationDurations.CSS3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.CSS3)}
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(animationDurations.React)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.React)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(animationDurations.NodeJs)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.NodeJs)}
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(animationDurations.MongoDB)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.MongoDB)}
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>

        {/* Git */}
        <motion.div
          variants={iconVariants(animationDurations.Git)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.Git)}
        >
          <AiFillGithub className="text-7xl text-gray" />
        </motion.div>

        {/* Markdown */}
        <motion.div
          variants={iconVariants(animationDurations.Markdown)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.Markdown)}
        >
          <SiMarkdown className="text-7xl text-gray-500" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(animationDurations.TailwindCSS)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.TailwindCSS)}
        >
          <SiTailwindcss className="text-7xl text-cyan-600" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(animationDurations.JavaScript)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.JavaScript)}
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(animationDurations.MySQL)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.MySQL)}
        >
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>

        {/* Scala */}
        <motion.div
          variants={iconVariants(animationDurations.Scala)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.Scala)}
        >
          <SiScala className="text-7xl text-red-700" />
        </motion.div>

        {/* Express.js */}
        <motion.div
          variants={iconVariants(animationDurations.Express)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.Express)}
        >
          <SiExpress className="text-7xl text-gray-500" />
        </motion.div>

        {/* LaTeX */}
        <motion.div
          variants={iconVariants(animationDurations.LaTeX)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-purple-600 cursor-pointer"
          onClick={() => handleIconClick(technologyLinks.LaTeX)}
        >
          <SiLatex className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
