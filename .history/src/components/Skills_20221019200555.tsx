import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import TypeScript from '../assets/typescript.png'

const Skills = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* container */}
      <div className="max-w-[1000px] flex flex-col mx-auto">
        <div className="title">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-1 w-[60%] mx-auto">
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p className="text-center">HTML</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={CSS} alt="" />
            <p className="text-center">CSS</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={JavaScript} alt="" />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={ReactImg} alt="" />
            <p className="text-center">React</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={Node} alt="" />
            <p className="text-center">Node</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={TypeScript} alt="" />
            <p className="text-center">TypeScript</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={GitHub} alt="" />
            <p className="text-center">GitHub</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={Tailwind} alt="" />
            <p className="text-center">Tailwind</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={Mongo} alt="" />
            <p className="text-center">Mongo</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p className="text-center">HTML</p>
          </div>
          <div className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p className="text-center">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
