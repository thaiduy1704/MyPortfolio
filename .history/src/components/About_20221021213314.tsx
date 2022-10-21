import aboutMe from "../assets/aboutMe.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f] mx-auto ">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-4xl text-gray-300 font-bold border-b-4 border-pink-600 inline">
            About
          </p>
        </div>
        <div className=' w-full grid gird-cols-1 md:grid-cols-2  px-2 mt-5 gap-5'>
          {/* <div className="left-bg ml-[2rem] flex flex-[1] items-center justify-center relative h-[100%] ">
            <div className="blockImage absolute bottom-[50px] left-[50px] bg-pink-400 "></div>
            <div className="background_image w-[60%] h-[70vh] rounded-[30px] relative overflow-hidden">
              <img
                className="h-[100%] w-[100%] object-cover"
                src={aboutMe}
                alt="Thai Duy"
              />
            </div>
          </div> */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ x: 100, scale: 1 }}
            transition={{ delay: 2 }}
            className="a-left ml-[-7rem]"
          >
            <div className="a-card bg bg-pink-600 w-full" ></div>
            <div className="a-card">
              <img src={aboutMe} alt="" className="a-img object-cover" />
            </div>
          </motion.div>
          <div className="content_about mt-[100px]">
            <p className="text-3xl text-gray-300  border-l-2 border-pink-400 font-sans">
              I'm studying IT at university with a background in computer
              science. But I have over one year of experience working on
              responsive, modern design and utilizing excellent logic in web
              development. Ready to apply my passion for coding to a talented
              engineering team to develop quality solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
