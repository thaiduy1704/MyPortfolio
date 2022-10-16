import { Home, Navbar, About, Skills, Work } from "./components";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
