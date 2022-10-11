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
           <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sai Kumar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
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
