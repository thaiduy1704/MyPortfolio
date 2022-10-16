import { Home, Navbar, About, Skills, Work } from "./components";

function App() {
  return (
    <div className="scroll-smooth scrollbar.overflow-x-hidden scrollbar-thumb-\[\#F7AB0A\]\/80 scrollbar-track-gray-400\/20 scrollbar-width">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
