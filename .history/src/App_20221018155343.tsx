import { Home, Navbar, About, Skills, Work, Contact } from "./components";

function App() {
  return (
    <div className=" snap-y snap-mandatory">
      <Navbar />
      <div className="snap-center">
        <Home />
      </div>
      <div className="snap-center">
        <About />
      </div>

      <div className="snap-center">
        <Skills />
      </div>
      <div className="snap-center">
        <Work/>
      </div>
      <div className="snap-center">
        <Contact/>
      </div>

    
    </div>
  );
}

export default App;
