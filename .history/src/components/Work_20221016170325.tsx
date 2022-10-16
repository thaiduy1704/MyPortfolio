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
          <p className="text-4xl font-bold border-b-4 inline border-pink-400">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Containter Project */}
        <div>
          {project.map((item) => {
            return (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.image})` }}
                className='shadow-lg'
              >
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
