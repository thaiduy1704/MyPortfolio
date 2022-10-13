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
        <div className='w-full grid grid-col'>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
