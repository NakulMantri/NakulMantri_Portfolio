// components/Loading.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
  const dotsRef = useRef([]);

  useEffect(() => {
    gsap.to(dotsRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <span className="sr-only">Loading...</span>
      <div
        ref={(el) => (dotsRef.current[0] = el)}
        className="h-8 w-8 bg-black rounded-full"
      ></div>
      <div
        ref={(el) => (dotsRef.current[1] = el)}
        className="h-8 w-8 bg-black rounded-full"
      ></div>
      <div
        ref={(el) => (dotsRef.current[2] = el)}
        className="h-8 w-8 bg-black rounded-full"
      ></div>
    </div>
  );
};

export default Loading;
