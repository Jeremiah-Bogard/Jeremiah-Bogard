import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import "./App.css"


function App() {

  return (
    <BrowserRouter>
    {/* Navigation Header */}
    <nav>
      <div className="nav-inner">
        <NavLink className="nav-logo" to="/">
          <div className="dot"></div>
          jbtechtv.com
        </NavLink>
        <ul className="nav-links">
          <li><NavLink to="/" id="nav-about" className={({isActive}) => isActive ? "active" : "nav-link"}>About</NavLink></li>
          <li><NavLink to="/projects" id="nav-projects">Projects</NavLink></li>
          <li><NavLink to="/skills" id="nav-skills">Skills & Certs</NavLink></li>
        </ul>
      </div>
    </nav>

      {/* Main Content/Pages */}
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>

    {/* Footer */}
    <footer>
      <span>© <span id="footer-year"></span> Jeremiah Bogard — jbtechtv.com</span>
      <span>Network Engineer</span>
    </footer>
    </BrowserRouter>
  )
}

export default App
