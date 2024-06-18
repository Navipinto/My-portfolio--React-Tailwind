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
    <div className="w-full h-20 fixed flex justify-between items-center bg-black text-white">
      <div className="md:px-5 px-3 ">
        <h1 className="hidden md:block font-signature text-4xl m-2">
          Naveen Shaun Pinto
        </h1>
        <h1 className=" md:hidden font-signature text-4xl m-2">Naveen</h1>
      </div>
      <div>
        <ul className="hidden mx-4 items-center space-x-7 md:flex">
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
        className="mr-4 md:hidden z-30 text-gray-700 cursor-pointer"
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
