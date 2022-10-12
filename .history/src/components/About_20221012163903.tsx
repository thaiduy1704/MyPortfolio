import Logo1 from "../assets/logo1.png";

const About = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f]  ">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-4xl text-gray-300 font-bold border-b-4 border-pink-600 inline">
            About
          </p>
        </div>
        <div>
          <div className="background_image">
            <img src={Logo1} alt="" />
          </div>
          <div className="content_about">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
