import React, { useState } from 'react'
import newspic from '../assets/newsappproject.png'
import textutil from "../assets/textutilsproject.png";
import inotebook from "../assets/inotebook.png";
import bookstore from "../assets/bookstore.png";

function Portfolio() {
  const allprojects = [
    {
      id: 1,
        src: textutil,
        href:"https://your-textutils.netlify.app",
        href2:"https://github.com/Navipinto/MytextUtils-react"
      },
      {
        id: 2,
        src: newspic,
        href: "https://your-textutils.netlify.app",
        href2: "https://github.com/Navipinto/MytextUtils-react"
      },
    {
      id: 3,
      src: inotebook,
      href: "https://inotebook-note-saver-for-you.netlify.app",
      href2: "https://github.com/Navipinto/inotebook-React"
    },
    {
      id: 4,
      src: bookstore,
      href: "https://mybookstore-foryou.netlify.app",
      href2: "https://github.com/Navipinto/Bookstore-Reactproject"
    },
    ];
    
  const Springprojects = [
    {
      id: 1,
      src: textutil,
      href: "https://your-textutils.netlify.app",
      href2: "https://github.com/Navipinto/MytextUtils-react"
    }
  ];

  const Mernprojects = [
    {
      id: 1,
      src: inotebook,
      href: "https://inotebook-note-saver-for-you.netlify.app",
      href2: "https://github.com/Navipinto/inotebook-React"
    },
    {
      id: 2,
      src: bookstore,
      href: "https://mybookstore-foryou.netlify.app",
      href2: "https://github.com/Navipinto/Bookstore-Reactproject"
    },
  ];

  const Reactprojects = [
    {
      id: 1,
      src: textutil,
      href: "https://your-textutils.netlify.app",
      href2: "https://github.com/Navipinto/MytextUtils-react"
    },
    {
      id: 2,
      src: newspic,
      href: "https://your-textutils.netlify.app",
      href2: "https://github.com/Navipinto/newsapp-react"
    },
    {
      id: 3,
      src: inotebook,
      href: "https://inotebook-note-saver-for-you.netlify.app",
      href2: "https://github.com/Navipinto/inotebook-React"
    },
    {
      id: 4,
      src: bookstore,
      href: "https://mybookstore-foryou.netlify.app",
      href2: "https://github.com/Navipinto/Bookstore-Reactproject"
    },
  ];
  const [projects, setprojects] = useState(allprojects)
  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full h-max sm:h-screen text-white py-20 lg:px-20 sm:px-6 md:px-8"
    >
      <div className="flex flex-col justify-center">
        <div className="sm:p-0 md:px-1 lg:p-0 px-4">
          <h2 className="text-4xl font-bold border-b-4 border-t-0 border-s-0 border-e-0 inline border-gray-500 border">
            Projects
          </h2>
          <p className="pt-4 text-2xl">Check out some of my works</p>
          <div className='flex flex-row space-x-3 items-center justify-between py-4'>
            <button className='bg-gray-800 bg-opacity-20 px-5 py-2 font-semibold rounded-md' onClick={()=>setprojects(allprojects)}>All Projects</button>
            <button className='bg-gray-800 bg-opacity-20 px-5 py-2 font-semibold rounded-md' onClick={()=>setprojects(Springprojects)}>Spring Projects</button>
            <button className='bg-gray-800 bg-opacity-20 px-5 py-2 font-semibold rounded-md' onClick={()=>setprojects(Mernprojects)}>Mern Projects</button>
            <button className='bg-gray-800 bg-opacity-20 px-5 py-2 font-semibold rounded-md' onClick={()=>setprojects(Reactprojects)}>React Projects</button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3   sm:px-0 gap-8 py-5 px-6">
          {projects.map(({ id, src ,href,href2
          }) => {
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
                  <a className="py-2 px-4 rounded-md hover:bg-gradient-to-r from-cyan-600 to-blue-500" href={href}>
                    Demo
                  </a>
                  <a className="py-2 px-4 rounded-md hover:bg-gradient-to-r from-cyan-600 to-blue-500" href={href2}>
                    Code
                  </a>
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