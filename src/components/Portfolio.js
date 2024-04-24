import React from 'react'
import newspic from '../assets/newsappproject.png'
import textutil from "../assets/textutilsproject.png";
import weatherpic from "../assets/weatherreportproject.png";
import stopwatch from "../assets/stopwatchproject.png";

function Portfolio() {
    const projects = [
      {
        id: 1,
        src: textutil,
      },
      {
        id: 2,
        src: newspic,
      },
      {
        id: 3,
        src: weatherpic,
      },
      {
        id: 4,
        src: stopwatch,
      },
    ];
  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full h-max text-white py-6 lg:py-6 lg:px-20"
    >
      <div className="flex flex-col justify-center sm:p-6 md:p-8 lg:px-20 w-full h-max ">
        <div className="p-6 sm:p-0 md:p-1 lg:p-0">
          <h2 className="text-4xl font-bold border-b-4 border-t-0 border-s-0 border-e-0 inline border-gray-500 border">
            Projects
          </h2>
          <p className="pt-4 text-2xl">Check out some of my works</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 px-6  sm:px-0 gap-8 py-5">
          {projects.map(({ id, src }) => {
            return (
              <div
                key={id}
                className="flex flex-col justify-center shadow-md shadow-gray-500 rounded-xl"
              >
                <div className="shadow-md shadow-gray-600 rounded-xl">
                  <img
                    className="rounded-xl hover:scale-105 duration-300"
                    src={src}
                    alt="text utils"
                  />
                </div>
                <div className="flex flex-row py-4 justify-around items-start">
                  <button className="py-2 px-4 rounded-md hover:bg-gradient-to-r from-cyan-600 to-blue-500">
                    Demo
                  </button>
                  <button className="py-2 px-4 rounded-md hover:bg-gradient-to-r from-cyan-600 to-blue-500">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;