import { Home, Navbar, About, Skills, Contact, Project } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllProject from "./page/AllProject";

function App() {
  return (
    <Router>
      <Routes>
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      {/* <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/projects" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>


  </Routes>
 </Router> */}
    

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
    </div>
    <Router>
      <Routes>
    <Route path="/all-project" element={<AllProject/>}></Route>
    </Routes>
     </Router>

  );
}

export default App;
