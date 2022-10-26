import { Home, Navbar, About, Skills, Contact, Project } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllProject from "./page/AllProject";

function App() {
  return (
    <div className="">
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
      {/* <AllProject/> */}
    </div>
  );
}

export default App;
