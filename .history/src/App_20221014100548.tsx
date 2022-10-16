import { Home, Navbar, About, Skills, Work } from "./components";

function App() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth">
      <div className="snap-center"></div>
      <Navbar />
      <div className="snap-center"></div>

      <Home />
      <About />
      <Skills />
      <Work />
    </main>
  );
}

export default App;
