import Logo from "../assets/logo.png";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
          About
        </p>
      </div>
      <div className='max-w-['>
        <div className="text-4xl font-bold">
          <p>Hi. I'm Sai Kumar, nice to meet you. Please take a look around.</p>
        </div>
        <div>
          <p>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
