import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import "./App.css"
import { useState } from "react"


function App() {

  const [page, setPage] = useState("/")

  function changePage(to) {
    setPage(to)
  }

  return (
    <>
    {/* Navigation Header */}
    <nav>
      <div className="nav-inner">
        <a className="nav-logo" href="/">
          <div className="dot"></div>
          jbtechtv.com
        </a>
        <ul className="nav-links">
          <li><button onClick={() => changePage("/")} id="nav-about" className={page === "/" ? "active" : "nav-link"}>About</button></li>
          <li><button onClick={() => changePage("/projects")} id="nav-projects" className={page === "/projects" ? "active" : "nav-link"}>Projects</button></li>
          <li><button onClick={() => changePage("/skills")} id="nav-skills" className={page === "/skills" ? "active" : "nav-link"}>Skills & Certs</button></li>
        </ul>
      </div>
    </nav>

      {/* Main Content/Pages */}
      <main>
        {page === "/" && <About goToProjects={() => changePage("/projects")} />}
        {page === "/projects" && <Projects />}
        {page === "/skills" && <Skills />}
      </main>

    {/* Footer */}
    <footer>
      <span>© <span id="footer-year"></span> Jeremiah Bogard — jbtechtv.com</span>
      <span>Network Engineer</span>
    </footer>
    </>
  )
}

export default App
