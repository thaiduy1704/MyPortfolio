import Logo1 from "../assets/logo1.png";

const About = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f] mx-auto ">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-4xl text-gray-300 font-bold border-b-4 border-pink-600 inline">
            About
          </p>
        </div>
        <div className=" w-full grid grid-cols-2  px-2 ">
          <div className="background_image">
            <img className="img-fluid" src={Logo1} alt="" />
          </div>
          <div className="content_about">
            <p className="text-4xl text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              facilis laudantium maxime, est unde nihil totam asperiores nam
              possimus laborum natus incidunt sapiente? Voluptatum modi nam
              expedita sunt, veritatis fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
