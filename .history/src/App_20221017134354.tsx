import { Home, Navbar, About, Skills, Work } from "./components";

function App() {
  return (
    <main className=" snap-y snap-mandatory scroll-smooth">
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

    
    </main>
  );
}

export default App;
