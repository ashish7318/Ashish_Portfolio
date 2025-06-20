import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaReact
} from "react-icons/fa";
import { SiMongodb, SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      id="home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-8 md:mt-0 min-h-screen flex flex-col justify-center"
    >
      <div className="flex flex-col-reverse md:flex-row items-center mb-16 w-full">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">
            Hello, I'm <span className="text-green-600">Ashish Jha</span>
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            I’m a passionate Java Developer who loves building efficient, scalable web applications.
            My focus is on creating responsive and user-friendly interfaces using technologies like
            Java, React, and Spring Boot.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mt-6">
            <div>
              <h1 className="font-bold mb-2">Available on</h1>
              <ul className="flex space-x-5">
                <li>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl cursor-pointer hover:text-green-600" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl cursor-pointer hover:text-green-600" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-2xl cursor-pointer hover:text-green-600" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl cursor-pointer hover:text-green-600" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold mb-2">Currently working on</h1>
              <div className="flex space-x-5">
                <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <SiSpringboot className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <FaJava className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="/OIP.webp"
            alt=""
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
