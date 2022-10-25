import { FaGithub } from "react-icons/fa";

const AllProject = () => {
  return (
    <div>
      <div className="bgProject   bg-cover bg-center bg-no-repeat h-[30rem] w-full">
        <div className="container mx-auto my-auto">
          <div className="absolute top-0 left-0 mt-3 ml-3">
            <button>back</button>
          </div>
          <div className="text-center pt-[10rem] ">
            <h1 className="logo_name_project">Source Code</h1>
            <button className="hover:bg-pink-600 hover:border-pink-600 p-2 duration-300">
              <span className="flex justify-between items-center mr-[2rem] text-2xl">
                <FaGithub size={50} />
                My Github
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default AllProject;
