import { Routes, Route } from "react-router";
import Navbar from "./compoents/Navbar";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";

function App() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
