import React from 'react'
import aboutpic from '../assets/DSC02661.jpg'
import { Link } from "react-scroll";

function About() {
  return (
    <div
      name="About"
      className="flex flex-row justify-center items-center w-full h-screen bg-gray-800 text-white py-8 lg:px-16"
    >
      <div className=" space-x-5 flex flex-col justify-center items-center lg:flex-row">
        <div className=" w-2/3 sm:w-[300px] md:w-[400px] lg:w-[800px]">
          <img className="rounded-lg" src={aboutpic} alt="aboutpic" />
        </div>
        <div className="flex flex-col justify-center  md:ps-4 md:mx-0 md:items-center lg:items-start items-center  px-3">
          <h2 className="font-Badoni text-2xl font-bold">Naveen Shaun Pinto</h2>
          <p className="text-orange-500 font-Badoni text-[17px] mt-2">
            Full Stack Developer
          </p>
          <p className="w-fit mt-2 text-center md:w-4/5">
            A Java Full Stack developer with strong foundation of software
            development. My expertise lies in Java programming and React js for
            both backend and frontend development, allowing me to contribute
            effectively to full-stack projects. I have good knowledge in MySQL
            database aswell. My passion for learning and staying updated with
            the latest industry trends drives me to continuously enhance my
            skills and deliver high-quality solutions. As a dedicated and
            ambitious Java full-stack developer, I am eager to leverage my
            knowledge and contribute positively to dynamic teams and projects.
          </p>
          <div className="py-2 px-4 bg-orange-400 my-5 w-fit text-white font-semibold rounded-sm">
            <button>
              <Link to="Contact" smooth duration={700}>
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About