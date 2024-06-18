import React from 'react'
import Mypic from '../assets/mypic1.png'
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-black px-4" 
    >
      <div className=" max-w-screen-lg flex flex-col-reverse h-screen w-full items-center justify-center text-white md:flex-row">
        <div className="flex flex-col justify-center">
          <p className="text-orange-400">Hey I'm Naveen &#128075;</p>
          <h2 className="text-4xl sm:text-7xl font-bold w-fit">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 max-w-lg pt-3">
            I'm a Java Fullstack Developer with proficient knowledge in Java and
            React js, I offer a robust portfolio showcasing my Frontend and
            Backend skills.
          </p>
          <div className="group text-white cursor-pointer w-fit my-4 flex flex-row gap-4">
            <button className="flex flex-row justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-md">
              Portfolio
              <span className="ms-2 group-hover:rotate-90 duration-300">
                <FaArrowRight />
              </span>
            </button>
            <button className="flex flex-row justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-2 rounded-md">
              <a
                href="/NaveenShaunPintonewResume.pdf"
                download={true}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div>
            <img
              className="ms-auto me-0 md:w-full z-50"
              src={Mypic}
              alt="my profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home