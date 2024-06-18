import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Contact() {
  const Links = [
      {
        id: 1,
        social: (
          <>
            <FaLinkedin size={30} />
          </>
        ),
        href: "https://www.linkedin.com/in/navipinto200113",
      },
      {
        id: 2,
        social: (
          <>
            <FaGithub size={30} />
          </>
        ),
        href: "https://www.github.com/Navipinto",
      },
      {
        id: 3,
        social: (
          <>
            <MdMail size={30} />
          </>
        ),
        href: "mailto:www.navishaun13@gmail.com",
      }
    ]
  return (
    <div
      name="Contact"
      className="bg-gradient-to-t from-black to-gray-800 h-max w-full px-5 text-white py-20 lg:px-24"
    >
      <div className="w-full h-full mx-auto sm:px-6 md:px-8 lg:px-16">
        <div className="mb-4">
          <h2 className="text-4xl font-bold border-b-4 inline border-gray-700">
            Contact
          </h2>
          <p className="py-4 text-xl">Fill this form to get in touch with me</p>
        </div>
        <div className="flex flex-col justify-around items-center gap-8 bg-transparent w-full h-fit">
          <div className="w-full h-full">
            <form
              action="https://getform.io/f/pamqywga"
              method="POST"
              className="flex flex-col gap-5 w-full h-full bg-transparent justify-center items-center"
            >
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="w-3/4 p-3 lg:w-2/3 rounded-md border-2 bg-transparent focus:outline-none"
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className=" w-3/4 p-3 lg:w-2/3 rounded-md border-2 bg-transparent focus:outline-none"
              />
              <textarea
                name="query"
                id="textarea"
                cols="30"
                rows="7"
                className="w-3/4 p-3 lg:w-2/3 rounded-md border-2 bg-transparent focus:outline-none"
              ></textarea>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 font-bold px-4 py-2 rounded-md">
                Let's talk
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center pt-5 lg:hidden">
          <ul className="lg:hidden flex flex-row justify-center items-center gap-4">
            {Links.map(({ id, social, href }) => {
              return (
                <li
                  key={id}
                  className={
                    "text-white text-xl font-semibold bg-gray-500 flex flex-row items-center rounded-full"
                  }
                >
                  <a
                  className='p-3'
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact