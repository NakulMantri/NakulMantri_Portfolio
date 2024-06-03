// hooks/useGsapAnimations.js
import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useGsapAnimations = (refs) => {
  useEffect(() => {
    const [heroRef, aboutRef, technologiesRef, educationRef, projectsRef, contactRef] = refs;

    gsap.from(heroRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
    });

    gsap.from(aboutRef.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(technologiesRef.current, {
      opacity: 0,
      x: 100,
      scrollTrigger: {
        trigger: technologiesRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(educationRef.current, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: educationRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(projectsRef.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(contactRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, [refs]);
};
