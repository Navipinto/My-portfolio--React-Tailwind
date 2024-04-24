import React from 'react'
import { FaLinkedin , FaGithub} from "react-icons/fa";
import { MdMail } from "react-icons/md";
// import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
    const Links = [
      {
        id: 1,
        social: (
          <>
            Linked In &nbsp;&nbsp;
            <FaLinkedin size={30} />
          </>
        ),
        href: "https://www.linkedin.com/in/navipinto200113",
        style: "rounded-t-md",
      },
      {
        id: 2,
        social: (
          <>
            Github &emsp;&nbsp;&nbsp;
            <FaGithub size={30} />
          </>
        ),
        href: "https://www.github.com/Navipinto",
      },
      {
        id: 3,
        social: (
          <>
            Mail &emsp;&emsp;&nbsp;&nbsp;&nbsp;
            <MdMail size={30} />
          </>
        ),
        href: "mailto:www.navishaun13@gmail.com",
        style: "rounded-b-md",
      },
      // {
      //   id: 4,
      //   social: (
      //     <>
      //       Resume &emsp;
      //       <BsFillPersonLinesFill size={30} />
      //     </>
      //   ),
      //   href: "/NaveenShaunPintoRESUMEupdated.pdf",
      //   download: true,
      //   style: "rounded-b-md",
      // },
    ];
  return (
    <div className='hidden lg:flex flex-col left-0 top-[38%] fixed'>
        <div className='flex flex-col'>
            <ul className='hidden lg:block'>
                {Links.map(({id,social,href,style,download})=>{
                  return (
                    <li
                      key={id}
                      className={
                        "text-white text-xl font-semibold bg-gray-500 flex flex-row items-center" +
                        " " +
                        style
                      }
                    >
                      <a
                        className="flex flex-row hover:ml-[0px] duration-300 w-ffull m-0 p-2 md:ml-[-100px]"
                        href={href}
                        download={download}
                        target="_blank"
                        rel='noreferrer'
                      >
                        {social}
                      </a>
                    </li>
                  );
                    
                })}
            </ul>
        </div>
    </div>
  )
}

export default SocialLinks