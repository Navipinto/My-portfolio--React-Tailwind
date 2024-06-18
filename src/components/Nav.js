import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link } from "react-scroll";

function Nav() {
  const [toggle, settoggle] = useState(false);
  const Links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Education",
    },
    {
      id: 5,
      link: "Experience",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];
  return (
    <div className="w-full h-20 fixed flex justify-between items-center bg-black text-white md:px-5 px-6">
      <div>
        <h1 className="hidden lg:block font-signature text-4xl">
          Naveen Shaun Pinto
        </h1>
        <h1 className=" lg:hidden font-signature text-4xl mx-2">Naveen</h1>
      </div>
      <div>
        <ul className="hidden items-center space-x-5 md:flex">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="text-xl hover:scale-105 text-gray-500 hover:text-orange-400 duration-600"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className=" md:hidden z-30 text-gray-700 cursor-pointer"
        onClick={() => {
          settoggle(!toggle);
        }}
      >
        {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {toggle && (
        <ul className="flex flex-col items-center justify-center h-screen w-full absolute top-0 left-0 bg-gray-800">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="text-xl hover:scale-105 text-gray-500 hover:text-orange-400 duration-400 my-6"
            >
              <Link to={link} smooth duration={500} onClick={()=>{settoggle(!toggle)}}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Nav;
