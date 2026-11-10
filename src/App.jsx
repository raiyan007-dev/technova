
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Code2 } from "lucide-react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AIChat from "./components/AIChat";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="logo">
          <Code2 size={25} />
          Tech<span>Nova</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link to="/contact" className="nav-button">
          Get Started
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <AIChat />

      <footer>
        <h3>Tech<span>Nova</span></h3>
        <p>Building a smarter digital future.</p>
        <p>© 2026 TechNova. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
