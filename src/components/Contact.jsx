import React from 'react'
import { CONTACT } from '../constants'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import {motion} from "framer-motion";
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      
      
      
      className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
      <div className='text-center tracking-lighter'>
        <div className="flex items-center justify-center my-4">
          <FiMapPin 
          // whileInView={{opacity:1,x:0}}
          // initial={{opacity:0,x:-100}}
          // transition={{duration:0.5}}
          
          
          className="mr-2" />
          <motion.p
          whileInView={{opacity:1,x:0,y:0}}
          initial={{opacity:0,x:-100,y:-10}}
          transition={{duration:0.5}}
          
          
          >
          
          
          
          {CONTACT.address}</motion.p>
        </div>
        <div className="flex items-center justify-center my-4">
          <FiPhone className="mr-2" />
          <motion.p
          
          whileInView={{opacity:1,x:0,y:0}}
          initial={{opacity:0,x:100,y:10}}
          transition={{duration:1}}
          
          >{CONTACT.phoneNo}</motion.p>
        </div>
        <div className="flex items-center justify-center my-4">
          <FiMail className="mr-2" />
          <motion.a 
          
          whileInView={{opacity:1,x:0,y:0}}
          initial={{opacity:0,x:-100,y:-10}}
          transition={{duration:0.5}}
          
          href="mailto:mantrinakul4@gmail.com">{CONTACT.email}</motion.a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
