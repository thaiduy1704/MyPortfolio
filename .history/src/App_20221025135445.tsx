import { Home, Navbar, About, Skills, Contact, Project } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllProject from "./page/AllProject";

function App() {
  return (
 <Router>
  <Routes>

      <Navbar />
    
        <Home />
     

        <About />
    
        <Skills />
     
        <Project/>
      
        <Contact/>
  </Routes>
 </Router>
    
    


    
  );
}

export default App;
