import React, { useState } from "react";
import Logo from "../public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4  text-orange-700 gap-10 bg-orange-300/15 backdrop-blur-xl z-50">
        <div>
          <Image src={Logo} alt="Logo" width={50} height={40} />
        </div>

        {/* menu */}
        <ul className="hidden md:flex justify-around sm:text-lg md:text-xl lg:text-2xl font-semibold grow ">
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#certificates">Certificates</a>
          </li>
          <li className="hover:text-red-600 hover:text-3xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <a onClick={handleClick} href="#about">
              About
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a onClick={handleClick} href="#skills">
              Skills
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a onClick={handleClick} href="#projects">
              Projects
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a onClick={handleClick} href="#certificates">
              Certificates
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a onClick={handleClick} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
