import React from 'react'
import Html from '../assets/Html.png'
import Css from "../assets/Css.png";
import Javascript from "../assets/Javascript.png";
import Github from "../assets/Github.png";
import Bootstrap from "../assets/Bootstrap.png";
import Java from "../assets/Java.png";
import Reactjs from "../assets/React.png";
import Tailwindcss from "../assets/Tailwindcss.png";

function Experience() {
    const experience = [
      {
        id: 1,
        src: Html,
        title: "HTML",
        style: "shadow-red-700",
      },
      {
        id: 2,
        src: Css,
        title: "CSS",
        style: "shadow-blue-600",
      },
      {
        id: 3,
        src: Javascript,
        title: "Javascript",
        style: "shadow-yellow-700",
      },
      {
        id: 4,
        src: Reactjs,
        title: "React js",
        style: "shadow-blue-800",
      },
      {
        id: 5,
        src: Java,
        title: "Java",
        style: "shadow-red-700",
      },
      {
        id: 6,
        src: Tailwindcss,
        title: "Tailwind Css",
        style: "shadow-cyan-700",
      },
      {
        id: 7,
        src: Bootstrap,
        title: "Bootstrap",
        style: "shadow-purple-700",
      },
      {
        id: 8,
        src: Github,
        title: "Github",
        style: "shadow-gray-500",
      },
    ];
  return (
    <div
      name="Experience"
      className="py-16 lg:px-20 bg-gradient-to-t from-black to-gray-800 w-screen h-max text-white"
    >
      <div className="sm:px-6 md:px-8 lg:px-16 flex flex-col w-full h-full justify-center ">
        <div className="px-4">
          <h2 className="text-4xl font-bold border-b-4 border-t-0 border-l-0 border-r-0 inline border-gray-600">
            Experience
          </h2>
          <p className="text-xl py-4">
            Here are some technologies I have done my projects with
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 px-8 py-8 sm:px-4 gap-8">
          {experience.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`flex flex-col justify-center items-center shadow-md ${style} rounded-lg`}
              >
                <div className="w-24">
                  <img
                    className="hover:scale-105 duration-500 "
                    src={src}
                    alt={src}
                  />
                </div>
                <div className="py-4">
                  <p className="font-semibold text-xl">{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience