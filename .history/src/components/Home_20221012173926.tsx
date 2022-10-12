import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Avatar from "../assets/homeAva.png";

const Home = () => {
  return (
    <div className=" bg-[#0a192f] w-full h-screen flex justify-center mr-10  container">
      {/* Container */}
      <div className=" ">
        <div className="max-w-[1000px] ml-[5rem]  flex flex-col justify-center h-full">
          <p className="text-pink-600">Hi, My name is </p>
          <h1 className="text-4xl sm:text-7xl font-bold  text-[#ccd6f6]">
            Nguyen Tran Thai Duy
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Front End Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit
            hic blanditiis at voluptate temporibus mollitia doloribus sunt
            fugiat voluptatem, numquam, dicta dignissimos molestias aut quas.
            Obcaecati voluptas culpa dolorum.
          </p>
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
      <div className="">
        <img
          className="object-cover scale-[50%] rounded-full hover:scale-[60%] duration-300 float-left hover:shadow-2xl hover:shadow-white "
          src={Avatar}
          alt="Photo Thai Duy"
        />
      </div>
    </div>
  );
};

export default Home;
