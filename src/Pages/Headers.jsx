import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import "../Pages/headers.css";
function Headers() {
  const sidebar =
    " border border-emerald-600 border-transparent border-dashed rounded-md hover:border-1 mb-3 mx-10 transition ease-in duration-300 font-serif tracking-wider px-16 hover:translate-x-4 py-3 text-xl";
  const navItems =
    "p-1 md:p-2 border-2 border-transparent hover:border-emerald-500 hover:border-dashed hover:rounded-lg ease-out duration-500 font-serif hover:text-emerald-50";

  const [openSideBar, setOpenSideBar] = useState(false);
  const handleMenu = (e) => {
    setOpenSideBar(true);
  };

  return (
    <>
      <nav className="flex justify-between mb-1 items-center py-2 md:py-4 px-8 md:px-16 border-b-100 border-b border-slate-800 ">
        <div className="relative">
          {/* <div
            className="animate-div  absolute inset-0
             bg-gradient-to-tr from-green-900 via-emerald-950 to-slate-950 rounded-tl-full rounded-br-full "
          ></div> */}
          <div
            className="animate-div absolute inset-0 backdrop-blur-lg 
            bg-gradient-to-tr from-green-600 via-emerald-800   
      to-gray-950 rounded-tl-full rounded-br-full "
          ></div>
          <div
            className="logo-font bg-gradient-to-tl from-fuchsia-950 via-orange-500
      to-fuchsia-900 rounded-lg relative text-5xl font-bold p-2 "
          >
            M.K
          </div>
          {/* <div
            className="logo-font bg-gradient-to-tl from-fuchsia-950 via-orange-500
      to-fuchsia-900 rounded-lg relative text-5xl font-bold p-2 "
          >
            M.K
          </div> */}
        </div>

        {/* <h5 className="text-2xl md:text-4xl font-semibold md:font-bold font-serif  bg-clip-text text-transparent bg-pink-500 to-orange-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 ease duration-100 ">
          M.K
        </h5> */}
        <ul className="hidden md:flex items-center gap-8 text-lg md:text-xl ">
          <li className={`${navItems}`}>Home</li>
          <li className={`${navItems}`}>About</li>
          <li className={`${navItems}`}>My Projects</li>
          <li className={`${navItems}`}>Contact</li>
        </ul>
        {/* <div onClick={handleMenu} className={`md:hidden`}>
          <FaBars />
        </div> */}
      </nav>
      {/* <div
        className={` ${
          openSideBar
            ? "  translate-x-0 w-full "
            : " -translate-x-full w-0 opacity-0"
        } border-r border-r-1  md:hidden fixed inset-y-0 h-full bg-gray-950/60 transition-transform duration-300 ease-in-out  `}
      >
        <ul className={`mt-4 bg-transparent text-lg`}>
          <div
            onClick={() => {
              console.log("ok");
              setOpenSideBar(false);
            }}
            className={` ${
              openSideBar && " -translate-x-full w-0 "
            } bg-transparent border border-1 relative`}
          >
            <FaX size={20} className="absolute left-[43.2rem] -top-1" />
          </div>
          <br />
          <br />
          <li className={`${sidebar}`}>Home</li>
          <li className={` ${sidebar}`}>About</li>
          <li className={` ${sidebar}`}>My Projects</li>
          <li className={` ${sidebar}`}>Contact</li>
        </ul>
      </div> */}
    </>
  );
}

export default Headers;
