import React from 'react';
import { FaJava, FaReact, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiSpringboot, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <FaReact />, name: "React" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <FaPython />, name: "Python" },
  ];

  return (
    <div
      id="skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-12 md:mt-24 min-h-screen"
    >
      <h2 className="text-4xl font-bold text-center text-green-600 mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 border rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="text-4xl md:text-5xl text-green-700 mb-3">
              {skill.icon}
            </div>
            <p className="text-base md:text-lg text-gray-800 dark:text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;