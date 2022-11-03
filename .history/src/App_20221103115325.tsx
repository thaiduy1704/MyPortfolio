import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProject from "./page/AllProject";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-project" element={<AllProject />} />
      </Routes>
    </Router>
  );
}

export default App;
