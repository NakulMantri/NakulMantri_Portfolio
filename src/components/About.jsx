import aboutImg from "../assets/aboutnakul.jpg";
import { ABOUT_TEXT } from "../constants";
import{motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4 md:px-8 lg:px-16">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        
        
        
        className="flex justify-center md:justify-end lg:justify-center relative">
          <img 
            className="rounded-2xl w-3/4 sm:w-1/2 md:w-full max-w-xs md:max-w-[400px] md:h-auto lg:max-h-[500px] object-cover brightness-75 md:ml-23"
            src={aboutImg}
            alt="about"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        
        
        className="w-full flex justify-center md:justify-start md:ml-4">
          <div className="my-2 max-w-xl py-8">
            <p>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
