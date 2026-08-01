import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSun, FaMoon } from "react-icons/fa";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import "./App.css";
import "./project.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Social from "./pages/Social";

function App() {
  const [isTop, setIsTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleNavClick = (targetId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`navbar ${isTop ? "transparent-bg" : ""}`}>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="navbar-link" onClick={() => handleNavClick("mission-target")} style={{ cursor: "pointer" }}>
                About
              </Nav.Link>
              <Nav.Link className="navbar-link" onClick={() => handleNavClick("projects-target")} style={{ cursor: "pointer" }}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/resume" className="navbar-link" style={{ cursor: "pointer" }}>
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/social" className="navbar-link" style={{ cursor: "pointer" }}>
                Social
              </Nav.Link>
              <Nav.Link className="navbar-link" onClick={toggleTheme} style={{ cursor: "pointer" }}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/social" element={<Social />} />
        {/* Render Home on /social for now to mirror previous behavior or can just leave it to default 404 behavior */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
