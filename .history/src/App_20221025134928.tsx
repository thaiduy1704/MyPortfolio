import { Home, Navbar, About, Skills, Contact, Project } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProject from "./page/AllProject";

function App() {
  return (
 <>
      <Navbar />
    
        <Home />
     

        <About />
    
        <Skills />
     
        <Project/>
      
        <Contact/>
 </>
    
    


    
  );
}

export default App;
