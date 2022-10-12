import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Avatar from "../assets/homeAva.png";

const Home = () => {
  return (
    <div className=" bg-[#0a192f] w-full h-screen flex justify-center md:flex-col mr-10  container">
      {/* Container */}
      <div className=" ">
        <div className="max-w-[1000px] ml-[5rem]  flex flex-col justify-center h-full">
          <p className="text-pink-600">Hi, My name is </p>
          <h1 className="text-4xl sm:text-7xl font-bold  text-[#ccd6f6]">
            Nguyen Tran Thai Duy
          </h1>
          <h2 className=" sm:text-5xl font-bold text-[#8892b0] ">
            Front End Developer.
          </h2>

          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <img
        className="object-cover scale-[50%] rounded-full hover:scale-[60%] duration-300 float-left hover:shadow-2xl hover:shadow-white "
        src={Avatar}
        alt="Photo Thai Duy"
      />
    </div>
  );
};

export default Home;
