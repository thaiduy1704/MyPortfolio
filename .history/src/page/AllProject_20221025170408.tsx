import { FaGithub } from "react-icons/fa";

const AllProject = () => {
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
      <div className="content"></div>
    </div>
  );
};

export default AllProject;
