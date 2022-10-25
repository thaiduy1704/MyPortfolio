import React from "react";
import {dataSkills} from '../data/dataSkill'



const Skills = () => {
  return (
    <div className="w-full md:h-screen bg-[#0a192f] text-gray-300 ">
      {/* container */}
      <div className="max-w-[1000px] flex flex-col mx-auto">
        <div className="title  mt-[15rem] ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-1 w-[60%] mx-auto">
         {dataSkills.map((item)=>{
          return( <div key={item.id} className="cursor-pointer scale-[80%]  grayscale hover:grayscale-0 hover:scale-[100%] duration-300">
            <img className="w-20 mx-auto" src={item.image} alt="" />
            <p className="text-center">{item.name}</p>
          </div>)
         })}
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
