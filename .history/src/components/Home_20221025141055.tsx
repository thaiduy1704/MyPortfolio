import React from "react";
import {motion} from 'framer-motion'
import { HiArrowNarrowRight } from "react-icons/hi";
import Avatar from "../assets/homeAva.png";
import Navbar from "./Navbar";
  
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="   w-full h-screen flex flex-col lg:flex-row justify-center items-center mr-10 bg-[#0a192f] gap-8">
      {/* Container */}
      <motion.div

layout
initial={{ opacity: 0.5,x:-500  }}
  animate={{ opacity: 1, x:-100 }}
  transition={{
    
    opacity: { ease: "linear" },
    layout: { duration: 0.5 }
  }}

      
      className="content_home  flex justify-center items-center ">
        <div className=" mt-[5rem] ml-[10rem] max-w-[500px] md:max-w-[1000px] md:ml-[5rem] flex flex-col justify-center h-full">
          <p className="text-pink-600 text-2xl">Hi, My name is </p>
          <h1 className="text-4xl md:text-7xl font-bold  text-[#ccd6f6]">
            Nguyen Tran Thai Duy
          </h1>
          <h2 className="text-4xl md:text-7xl font-bold text-[#8892b0]">
            I'm a Front End Developer.
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
      </motion.div>
      <div className="avatar">
        <motion.img 

layout
initial={{ opacity: 0.5,scale:0,x:500  }}
animate={{ opacity: 1, scale:1, x:0 }}
transition={{
   
    opacity: { ease: "linear" },
    layout: { duration: 0.5 }
  }}

  src={Avatar}
  className="md:h-[400px] md:w-[300px] object-cover rounded-full duration-300 w-[200px] h-[200px] hover:shadow-2xl hover:scale-[125%] hover:shadow-white "
  alt="Thai Duy"
  />

      </div>
      
    </div>
  </>
  );
};

export default Home;
