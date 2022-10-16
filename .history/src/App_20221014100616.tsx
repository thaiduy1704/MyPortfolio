import { Home, Navbar, About, Skills, Work } from "./components";

function App() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth">
      <Navbar />
      <div className="snap-center">
        <Home />
      </div>
      <div className="snap-center">
        <About />
      </div>

      <div className="snap-center"></div>

      <div className="snap-center"></div>

      <Skills />
      <div className="snap-center"></div>

      <Work />
    </main>
  );
}

export default App;
