import { Home, Navbar, About, Skills, Work } from "./components";

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
