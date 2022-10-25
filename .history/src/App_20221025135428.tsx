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
      <Navbar />
    
        <Home />
     

        <About />
    
        <Skills />
     
        <Project/>
      
        <Contact/>
 </Router>
    
    


    
  );
}

export default App;
