import Logo from "../assets/logo.png";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
          About
        </p>
      </div>
      <div className="flex flex-row justify-center mx-[100px] container">
        <div>
          <p></p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            tempore, veniam quam omnis dolore minima ut, facere asperiores non
            id repudiandae totam debitis ipsum? Tempore dolore expedita
            perspiciatis sequi quaerat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
