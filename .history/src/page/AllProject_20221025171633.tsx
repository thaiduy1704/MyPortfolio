import { FaGithub } from "react-icons/fa";
import { data } from "../data/data";

const AllProject = () => {
  const project = data;
  return (
    <div>
      <div className="bgProject   bg-cover bg-center bg-no-repeat h-[35rem] w-full">
        <div className="container mx-auto my-auto">
          <div className="absolute top-0 left-0 mt-3 ml-3">
            <button>back</button>
          </div>
          <div className="text-center pt-[10rem] ">
            <h1 className="logo_name_project">Source Code</h1>
            <a href="https://github.com/thaiduy1704">
              <button className="bg-gray-400 rounded-xl shadow-gray-500 shadow-2xl hover:shadow-lg border-2 hover:shadow-gray-800 hover:bg-gray-400 hover:border-gray-600 p-2 duration-300">
                <span className="flex justify-between items-center text-white text-2xl">
                  <FaGithub size={50} />
                  My Github
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="htmlProject mx-[5rem]">
        <h1 className="text-4xl font-bold text-center p-6">HTML-CSS-JS</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item) => {
            if (item.type == 1) {
              return (
                <div
                  key={item.id}
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                >
                  {/* Hover effect for images */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                      {item.name}
                    </span>
                    <div className="pt-8 text-center ">
                      {/* eslint-disable-next-line */}
                      <a href={item.github} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                        >
                          Code
                        </button>
                      </a>
                      {/* eslint-disable-next-line */}
                      <a href={item.live} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                        >
                          Live
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProject;
