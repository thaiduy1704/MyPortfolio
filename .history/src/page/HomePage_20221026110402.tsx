import React from "react";
import { Home, Navbar, About, Skills, Contact, Project } from "../components";
const HomePage = () => {
  return(
     <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
      <Navbar />

      <div className="snap-center ">
        <Home />
      </div>
      <div className="snap-center">
        <About />
      </div>
      <div className="snap-center">
        <Skills />
      </div>
      <div className="snap-center">
        <Project />
      </div>
      <div className="snap-center">
        <Contact />
      </div>
  )

export default HomePage;
