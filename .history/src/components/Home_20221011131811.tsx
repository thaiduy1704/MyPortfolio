import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className=" bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold  text-[#ccd6f6]">
          Thai Duy
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#">I'm a Front End Developer.</h2>
      </div>
    </div>
  );
};

export default Home;
