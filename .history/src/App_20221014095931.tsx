import { Home, Navbar, About, Skills, Work } from "./components";

function App() {
  return (
    <div className="scroll-smooth scrollbar.overflow-x-hidden scrollbar-thumb-\[\#F7AB0A\]\/80">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
