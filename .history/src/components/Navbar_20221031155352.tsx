import React, { useState, useRef } from "react";
import { FaBars, FaTimes, FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="">
      {/* Mobile menu */}
      <ul
        className={
          !isNavOpen
            ? "hidden"
            : "fixed w-full h-screen text-gray-300  bg-[#0a192f] flex flex-col justify-center items-center z-[10000]"
        }
      >
        <a href="#home">
          <li onClick={handleClick} className="py-6 text-4xl">
            Home
          </li>
        </a>
        <a href="#about">
          <li onClick={handleClick} className="py-6 text-4xl">
            About
          </li>
        </a>
        <a href="#skills">
          <li onClick={handleClick} className="py-6 text-4xl">
            Skills
          </li>
        </a>
        <a href="#contact">
          <li onClick={handleClick} className="py-6 text-4xl">
            Contact
          </li>
        </a>
        <li className="py-6 text-4xl">All Project</li>
        <li className="py-6 text-4xl">Resume</li>
      </ul>

      <div className="z-[10000] fixed w-full h-[80px] flex justify-between shadow-lg shadow-pink-500/50   items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <Link to="/">
            <p className="logo_name text-pink-600">Thai Duy</p>
          </Link>
        </div>

        {/* Button Project */}
        <div className="hidden md:block">
          <Link to="/all-project">
            <button className="btn-project btn-8 ">
              <span>All Project</span>
            </button>
          </Link>
        </div>

        {/* menu */}

        <ul className="hidden md:flex">
          <a href="#home">
            <li className="hover:bg-pink-600 hover:border-pink-600 p-4 duration-300">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="hover:bg-pink-600 hover:border-pink-600 p-4 duration-300">
              About
            </li>
          </a>

          <a href="#skills">
            <li className="hover:bg-pink-600 hover:border-pink-600 p-4 duration-300">
              Skills
            </li>
          </a>
          <a href="#projects">
            <li className="hover:bg-pink-600 hover:border-pink-600 p-4 duration-300">
              Projects
            </li>
          </a>
          <a href="#contact">
            <li className="hover:bg-pink-600 hover:border-pink-600 p-4 duration-300">
              Contact
            </li>
          </a>
          <a href="">
            <li className="hover:bg-pink-600 hover:border-pink-600 p-4 duration-300">
              Resume
            </li>
          </a>
        </ul>

        {/* Hamburger */}
        <div
          onClick={handleClick}
          className=" md:hidden  z-[1000] cursor-pointer text-gray-50"
        >
          {!isNavOpen ? <FaBars /> : <FaTimes />}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/thaiduy1704"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.facebook.com/thaiduy1704/"
              >
                Facebook <FaFacebook size={30} />
              </a>
            </li>
            <li className="w-[180px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-200 bg-green-800">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                0908269622 <BsTelephoneFill size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-500">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-500">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.aedin.com/in/duy-nguyen-a72a0a253/"
              >
                Linkedin <AiFillLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
