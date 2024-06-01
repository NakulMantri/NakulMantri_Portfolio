import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div  className="border-b border-neutral-900 p-14 pb-24" id="projects" >
      <motion.h2 
      
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      
      className="my-20 text-center text-4xl">Projects</motion.h2>

      <div className="grid gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            
            key={index}
            className={`flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto`}
          
          >
            <motion.div
            
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            
             className="md:w-1/2 w-full p-4">
              <img
               
                src={project.image}
                alt={project.title}
               
                className="object-cover w-full h-full rounded"
              />
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            
            
            
            
            className="md:w-1/2 w-full p-4">
              <h6
                className="mb-2 font-semibold"
              >
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap mt-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600 hover:bg-gray-700 hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
