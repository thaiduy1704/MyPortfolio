import aboutMe from "../assets/aboutMe.jpg";

const About = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f] mx-auto ">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-4xl text-gray-300 font-bold border-b-4 border-pink-600 inline">
            About
          </p>
        </div>
        <div className=" w-full grid grid-cols-2  px-2 mt-5 gap-5 ">
          <div className="background_image">
            <img className="img-fluid float-right mr-7 w-[300px]  " src={aboutMe} alt="Thai Duy" />
          </div>
          <div className="content_about">
            <p className="text-3xl text-gray-300  border-l-2 border-pink-400">
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
