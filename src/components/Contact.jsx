import React from 'react'
import { CONTACT } from '../constants'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 p-14 pb-24' id="contact">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'
      >
        Get in Touch
      </motion.h2>
      <div className='text-center tracking-lighter'>
        <div className="flex items-center justify-center my-4">
          <FiMapPin className="mr-2" />
          <motion.p
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: -100, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {CONTACT.address}
          </motion.p>
        </div>
        <div className="flex items-center justify-center my-4">
          <FiPhone className="mr-2" />
          <motion.p
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: 100, y: 10 }}
            transition={{ duration: 1 }}
          >
            {CONTACT.phoneNo}
          </motion.p>
        </div>
        <div className="flex items-center justify-center my-4">
          <FiMail className="mr-2" />
          <motion.a 
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: -100, y: -10 }}
            transition={{ duration: 0.5 }}
            href="mailto:mantrinakul4@gmail.com"
          >
            {CONTACT.email}
          </motion.a>
        </div>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl px-20'>
        <a href="https://www.linkedin.com/in/nakul-mantri-2323b6244/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-blue-500 transition-colors duration-200" />
        </a>
        <a href="https://github.com/NakulMantri"  target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-gray-500 transition-colors duration-200" />
        </a>
        
      </div>
      <p className='text-center text-sm font-bold text-gray-500'>Made by Nakul Mantri</p>
    </div>
  )
}

export default Contact;
