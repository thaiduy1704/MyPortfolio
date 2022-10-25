import { Home, Navbar, About, Skills, Contact, Project } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllProject from "./page/AllProject";

function App() {
  return (<div className="snap-y snap-mandatory h-screen overflow-scroll">
   
    {/* <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/projects" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>


  </Routes>
 </Router> */}

 <Navbar/>
 <Home/>
 <About/>
 <Skills/>
 <Project/>
 <Contact/>
  </div>
    
    


    
  );
}

export default App;
