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
          <div className='left-bg mr-2 flex flex-1 items-center justify-center relative h-[100%] '>

          <div className='blockImage absolute t-[50%] l-[50%] bg-pink-400 '></div>
          <div className="background_image">
            <img className='img-fluid float-right mr-7 w-[500px] rounded-lg ' src={aboutMe} alt="Thai Duy" />
          </div>
          </div>
          {/* <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img
                src={aboutMe}
                alt=""
                className="a-img"
              />
            </div>
          </div> */}
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
