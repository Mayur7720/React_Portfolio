import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import "../Pages/headers.css";
function Headers() {
  const sidebar =
    " bg-transparent underline underline-offset-4 border border-emerald-600 border-transparent border-dashed rounded-md hover:border-1 mb-3 mx-10 transition ease-in duration-300 font-serif tracking-wider px-16 hover:translate-x-8 py-3 text-xl";
  const navItems =
    "p-1 md:p-2 border-2 border-transparent hover:border-emerald-500 hover:border-dashed hover:rounded-lg ease-out duration-500 font-serif hover:text-emerald-50";

  const [openSideBar, setOpenSideBar] = useState(false);
  const handleMenu = (e) => {
    document.body.style.overflowY = "hidden";
    setOpenSideBar(true);
  };

  return (
    <section className="overflow-y-hidden">
      <nav className="flex justify-between mb-1 items-center py-2 md:py-4 px-8 md:px-16 border-b-100 border-b border-slate-800 ">
        <div className="relative">
          <div
            className="logo-font bg-gradient-to-tl from-fuchsia-950 via-orange-500
      to-fuchsia-900 rounded-lg relative text-5xl font-bold p-2"
          >
            M.K
          </div>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-lg md:text-xl ">
          <li className={`${navItems}`}>Home</li>
          <li className={`${navItems}`}>About</li>
          <li className={`${navItems}`}>My Projects</li>
          <li className={`${navItems}`}>Contact</li>
        </ul>
        <div onClick={handleMenu} className={`md:hidden`}>
          <FaBars />
        </div>
      </nav>

      <div
        className={`${
          openSideBar ? "" : "translate-x-[-100%]"
         } md:hidden fixed inset-0 bg-gray-950/80 z-10 ease duration-300 backdrop-blur-md`}
      >
        <div
          onClick={() => {
            document.body.style.overflow = "auto";
            setOpenSideBar(false);
          }}
          className={`absolute bg-transparent w-full`}
        >
          <FaX size={20} className="absolute right-4 top-4" />
        </div>
        <ul className={`mt-4 bg-transparent text-lg`}>
          <br />
          <br />
          <li className={`${sidebar}`}>Home</li>
          <li className={` ${sidebar}`}>About</li>
          <li className={` ${sidebar}`}>My Projects</li>
          <li className={` ${sidebar}`}>Contact</li>
        </ul>
      </div>
    </section>
  );
}

export default Headers;
