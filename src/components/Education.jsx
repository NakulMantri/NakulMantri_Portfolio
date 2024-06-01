import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8">
            {/* Medium Screens: Display in the same row */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="lg:hidden border border-purple-700 rounded-lg p-4 mb-4 mx-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <img src={education.image} alt={education.firm} className="w-3/4 h-auto" />
                  <span className='text-m font-semibold text-purple-400'>{education.firm}</span>
                </div>
                <div>
                  <p className='text-m text-purple-700 font-bold italic mt-2'>{education.field}</p>
                  <p className='mt-1'>{education.year}</p>
                  <p className="font-bold">{education.grade}</p>
                </div>
              </div>
            </motion.div>

            {/* Large Screens: Display as before */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="hidden lg:flex lg:justify-center border border-purple-700 rounded-lg p-4 mx-12"
            >
              <div className='w-full lg:w-1/4 px-4 md:px-8 lg:px-0'>
                <img src={education.image} alt={education.firm} className="w-full h-auto" />
              </div>
              <div className='w-full lg:w-3/4 mt-4 lg:mt-0 lg:ml-4 flex flex-col'>
                <span className='text-xl font-semibold text-purple-400 lg:w-1/2 lg:pr-4'>{education.firm}</span>
                <div className="lg:w-2/3 flex flex-col">
                  <p className='text-l text-purple-700 font-bold italic mt-2 lg:mt-0'>{education.field}</p>
                  <h5 className='mt-2 lg:mt-1'>{education.year}</h5>
                  <p className='mt-2 lg:mt-1'>{education.grade}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education;
