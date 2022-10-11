import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Download CV</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!isNavOpen ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !isNavOpen
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Contact</li>
        <li className="py-6 text-4xl">Download Cv</li>
      </ul>

      {/* Social Icons */}
      <div className="flex flex-col top-[35%] left-0 ">
        <ul>
          <li>
            <a href="/">
              Github <Gi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
