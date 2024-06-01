import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

import firm1 from "../assets/education/firm1.jpg"
import firm2 from "../assets/education/firm2.jpg"
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Travelago",
    image: project1,
    description:
      "A fully functional vacatio home renting website with features like Add Place,Add Booking and user authentication.",
    technologies: ["HTML", "CSS", "React.js", "Node.js","Express.js","MongoDB"],
  },
  {
    title: "Weatherify",
    image: project2,
    description:
      "An effective medium for weather monitoring and management. Our system provides users with real-time weather updates and detailed forecasts, allowing them to plan their activities accordingly.",
    technologies: ["HTML", "CSS", "React.js", "django","ARIMA"],
  }
];

export const CONTACT = {
  address: "L-3, Aditya Nagar, Veraval, Gujarat",
  phoneNo: "+91 79844 18143 ",
  email: "mantrinakul4@gmail.com",
};

export const EDUCATION = [
  {
    image:firm1,
    year: "2019-2020",
    field: "XII-Science",
    firm: "The Aditya Birla Public School, Veraval",
   grade : "Percentage attained : 95%",
    
  },
  {
    image:firm2,
    year: "2021-present",
    field: "BTech-Computer Science and Engineering",
    firm: "Indian Institute of Information Technology, Surat",
    grade:"CGPA : 9.07",
  },
  
];