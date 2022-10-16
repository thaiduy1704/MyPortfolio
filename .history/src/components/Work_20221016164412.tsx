import React from "react";
import { data } from "../data/data";
const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="">
        <div className="title">
          <p className="text-4xl ">Projects</p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
