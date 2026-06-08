import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import "./App.css";
import "./project.css";
import { useState, useEffect } from "react";
import Github from "./components/Github";

function App() {
  const [isTop, setIsTop] = useState(true);
  const [currentPage, setCurrentPage] = useState<"home" | "resume">(() => {
    return window.location.pathname === "/resume" ? "resume" : "home";
  });
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
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    // const handleResize = () => {
    //   setIsMobile(window.innerWidth <= 768);
    // };

    // window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      // window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    // console.log("wap", theme)
  }, [theme]);

  // Sync React state changes to the browser's URL
  useEffect(() => {
    const path = currentPage === "resume" ? "/resume" : "/";
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }
  }, [currentPage]);

  // Handle browser back and forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname === "/resume" ? "resume" : "home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleNavClick = (targetId: string) => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      // A slight delay allows the DOM to render the home page before scrolling to the target anchor
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`navbar ${isTop ? "transparent-bg" : ""}`}>
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ }} navbarScroll>
              <Nav.Link className="navbar-link" href="#mission-target" onClick={() => handleNavClick("mission-target")}>
                About
              </Nav.Link>
              {/* <Nav.Link className="navbar-link" href="#skills-target">
                Skills
              </Nav.Link> */}
              <Nav.Link className="navbar-link" href="#projects-target" onClick={() => handleNavClick("projects-target")}>
                Projects
              </Nav.Link>
              <Nav.Link className="navbar-link" onClick={() => setCurrentPage("resume")} style={{ cursor: "pointer" }}>
                Resume
              </Nav.Link>
              <Nav.Link className="navbar-link" onClick={toggleTheme} style={{ cursor: "pointer" }}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </Nav.Link>
              {/* <Nav.Link className="navbar-link" href="#contact-target">
                Contact
              </Nav.Link> */}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-sm fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-rewind-btn-fill"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#mission-target"
              >
                Mission
              </a>
              <a className="nav-link" href="#skills-target">
                Skills
              </a>
              <a className="nav-link" href="#contact-target">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      {currentPage === "home" ? (
        <>
      {/* <!-- Hero section --> */}
      <section id="hero-section">
        <div className="hero-content">
          <div className="container hero">
            <img className="hero-img" src="/img/knight_adrian.jpg" />
            <h1>Adrian O. Knight</h1>
            <h6>More than an A.O.K. developer</h6>
          </div>
        </div>
      </section>

      <div
        className="page-content"
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        data-bs-offset="0"
      >
        {/* <!-- Mission/Meet-me section --> */}
        <div id="mission-target"></div>
        <section id="mission-section" className="text-center">
          <h4>About</h4>
          <div className="container row text-left">
            <div className="col-sm small-hide">
              <img src="/img/chicago-il-skyline-night.jpg" />
            </div>
            <div className="col-sm">
              <h3>Hey, I'm Adrian!</h3>
              <p>
                I'm a computer science master student currently doing Human Computer Interaction
                research with a biomechanical team to support rehabilitation of speech.
              </p>
              <p>
                I believe Web technology has matured a great deal, giving us the tools to create highly capable projects. I enjoy teaching web development and fostering collaboration on functional projects.
                I'm particularly interested in interactive websites and making sure they have high usability across screen sizes.
              </p>
              <p>
                I'm expecting to graduate from University of Illinois Chicago (UIC) with a masters
                in computer science in December 2025!
              </p>
              <p>
                Programming Languages: TypeScript, Java, Python, C#, JavaScript, C++, SQL, HTML, CSS
              </p>
              <p>Frameworks: React, Node.js, Express.js, Next.js, Unity, Agile, git</p>
            </div>
          </div>
          <div className="contact row justify-content-center gap-3">
            <a className="col-auto" href="https://www.linkedin.com/in/adrian-o-knight/">
              <FaLinkedin />
            </a>
            <a className="col-auto" href="https://github.com/Ajknight121">
              <FaGithub />
            </a>
            {/* <a className="col-auto" href="mailto:aoknight64@gmail.com">Hello developer! I heard emails are out of style but if you want to reach me you can email me!
              <FaEnvelope />
            </a> */}
          </div>
        </section>

        {/* <!-- Skills section --> */}
        {/* <div id="skills-target"></div>
        <section id="skills-section">
          <h4 className="text-center">Skills</h4>
          <div className="skills row">
            <div className="skill col-sm-12 col-md-6 col-lg-3">
              <img className="img-thumbnail" src="/img/react-logo.png" />
              <p>
                Reuseable UI components and context hooks for sharing data
                across components for making responsive web apps
              </p>
            </div>
            <div className="skill col-sm-12 col-md-6 col-lg-3">
              <img className="img-thumbnail" src="/img/css-logo.png" />
              <p>Adding beautiful style to websites</p>
            </div>
            <div className="skill col-sm-12 col-md-6 col-lg-3">
              <img className="img-thumbnail" src="/img/bootstrap-logo.png" />
              <p>Premade styling for fast mobile responsive web development</p>
            </div>
            <div className="skill col-sm-12 col-md-6 col-lg-3">
              <img className="img-thumbnail" src="/img/typescript-logo.png" />
              <p>
                TypeScript is like writing JavaScript, but with more safety
                guards in place.
              </p>
            </div>
            <div className="skill col-sm-12 col-md-6 col-lg-3">
              <p>
                Node.js, JavaScript/Typscript for the server side
              </p>
            </div>
          </div>
        </section> */}

        {/* <!-- Projects section --> */}
        <div id="projects-target"></div>
        <section id="projects-section">
          <h4 className="text-center">Project Short List</h4>
          <div className="projects">

            <div className="project">
              <img className="project-img" src="/img/acm-jukebox.png" />
              <div className="project-desc-section">
                <h4>WTSE Tongue Trackpad Interface</h4>
                <h6>UIC Masters Thesis</h6>
                <p>A </p>
                <div className="project-desc">
                  <p></p>

                  <p>Development across vanialla HTML and JS to React and TypeScript</p>
                </div>
              </div>
            </div>

            <div className="project">
              <video
                className="project-video project-img"
                src="/img/Data Lens demo.mov"
                controls
                preload="auto"
              />
              <div className="project-desc-section">
                <a href="https://idle-fire.aokspace.com" className="project-title" target="blank">
                  <h4>Data Lens</h4>
                </a>
                Human Computer Interaction class project
                <div>
                  <p>
                    Course project to help skeptical users
                  </p>

                  <p>
                    Coded in Reactjs and Typescript and uses React's useReducer to
                    follow the Redux design pattern. A factory design pattern is used for managing
                    the game's upgrades.
                  </p>
                </div>
              </div>
            </div>

            <div className="project">
              <img className="project-img" src="/img/Idle-Fire-Trailer-optimize.gif" />
              <div className="project-desc-section">
                <a href="https://idle-fire.aokspace.com" className="project-title" target="blank">
                  <h4>Idle Fire</h4>
                </a>
                Idle Fire is a incremental clicker game
                <div>
                  <p>
                    Idle Fire is a clicker game where the aim of the game is to click to create
                    embers and to use those embers to purchase upgrades that help make more embers
                    by either producing embers automatically or increasing the amount of embers you
                    make when you click. Watch out for firemen they want to spoil the fun and slow
                    the growth of your fire.
                  </p>

                  <p>
                    Coded in Reactjs and Typescript and uses React's useReducer to
                    follow the Redux design pattern. A factory design pattern is used for managing
                    the game's upgrades.
                  </p>
                </div>
              </div>
            </div>

            <div className="project">
              <img className="project-img" src="/img/SanctuaryOS-trailer-optimize.gif" />
              <div className="project-desc-section">
                <a
                  href="https://sanctuaryoslive.aokspace.com"
                  className="project-title"
                  target="blank"
                >
                  <h4>SanctuaryOS Recreation</h4>
                </a>
                Interactive recreation of SanctuaryOS music video
                <div className="project-desc">
                  <p></p>
                  <p>Developed in React.js and Typescript</p>
                </div>
              </div>
            </div>

            <div className="project">
              <img className="project-img" src="/img/sparkhacks-trailer.gif" />
              <div className="project-desc-section">
                <h4>Sparkhacks 2025</h4>
                UIC's student orgainized annual hackathon homepage
                <div className="project-desc">
                  <p></p>

                  <p>Collaborativly made with Astro and React</p>
                </div>
              </div>
            </div>

            <div className="project">
              <video
                className="project-video project-img"
                src="/img/XR_Classroom_Video_Documentation.mp4"
                controls
                preload="auto"
              />

              <div className="project-desc-section">
                <h4>XR Classroom</h4>
                <p>A VR experience to showcase a possible future for students learning with XR resources to address the UN sustainable development goal of Quality Education</p>
                <p>This was presented through UIC's CAVE 2 allowing viewers to also inhabit the space of the experience</p>
                <div className="project-desc">
                  <p></p>
                  <p>Crafted in Unity</p>
                </div>
              </div>
            </div>

            <div className="project">
              <img className="project-img" src="/img/3DBattleship-trailer-optimize.gif" />
              <div className="project-desc-section">
                <h4>Dreadnought</h4>
                3D battleship for up to 8 players
                <div className="project-desc">
                  <p></p>

                  <p>Collaborativly developed with Reactjs, nodejs, and typescript</p>
                </div>
              </div>
            </div>

            <div className="project">
              <img className="project-img" src="/img/acm-jukebox.png" />
              <div className="project-desc-section">
                <h4>ACM Jukebox</h4>
                Shared queue youtube music player
                <div className="project-desc">
                  <p></p>

                  <p>Collaborativly developed with Reactjs, nodejs, and JavaScript</p>
                </div>
              </div>
            </div>

            <div className="project">
              <video
                className="project-video project-img"
                src="/img/Storybookie-Demo.mp4"
                controls
                preload="auto"
              />

              <div className="project-desc-section">
                <h4>Storybookie</h4>
                AI integrated story & drawing panels website
                <div className="project-desc">
                  <p></p>
                  <p>Developed with Reactjs, nodejs, and TypeScript</p>
                </div>
              </div>
            </div>

            <div className="project">
              <video
                className="project-video project-img"
                src="/img/CONVERGEHEALTH-mobile.mp4"
                controls
                preload="auto"
              />

              <div className="project-desc-section">
                <h4>CONVERGEHEALTH</h4>
                Info site for a planned health conference
                <div className="project-desc">
                  <p></p>
                  <p>Created with Reactjs</p>
                </div>
              </div>
            </div>

            <div className="project">
              <img className="project-img" src="/img/space-exploration.PNG" />
              <div className="project-desc-section">
                <h4>Space Exploration Game</h4>
                Travel between planets with data collected from NASA
                <div className="project-desc">
                  <p></p>
                  <p>Collaborativly developed with Reactjs and TypeScript</p>
                </div>
              </div>
            </div>

            <div className="project">
              <img className="project-img" src="/img/acm-marketplace-hero.png" />
              <div className="project-desc-section">
                <div className="flex-row justify-center">
                  <h4>ACM Marketplace</h4> <Github link="https://github.com/acm-uic/marketplace" />
                </div>
                Next.js Storefront for ACM@UIC student org
                <div className="project-desc">
                  <p></p>
                  <p>Developed collaborativly with Next.js</p>
                </div>
              </div>
            </div>

            <div className="project flex-row">
              <div className="notice">More projects and descriptions to be added</div>
            </div>
          </div>
        </section>

        {/* <section id="meme-section">
          <h4>Meme Wallpapers</h4>
          <div id="carousel" className="carousel slide" data-bs-ride="none">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/memes/waitimgoated.jpg"
                  className="d-block w-100"
                  alt="wait im goated cat"
                />
                <div className="carousel-caption d-md-block">
                  <h5>Wait I'm Goated</h5>
                  <p>Reminds me to remember my strengths and progress</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/memes/AppleCat exponetial.png"
                  className="d-block w-100"
                  alt="Many windows of Apple Cat"
                />
                <div className="carousel-caption d-md-block">
                  <h5>Apple Cat Multiplied</h5>
                  <p>This screen radiates satisfaction</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/memes/bear5.jpg"
                  className="d-block w-100"
                  alt="Infamous Bear 5"
                />
                <div className="carousel-caption d-md-block">
                  <h5>Bear 5</h5>
                  <p>Did he scare you?</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/memes/cat-dance-cube-oh-yeah.png"
                  className="d-block w-100"
                  alt="cat forced to dance"
                />
                <div className="carousel-caption d-md-block">
                  <h5>Woah!</h5>
                  <p>This cat can dance!</p>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section> */}

        {/* <!-- Contact Section --> */}
        {/* <div id="contact-target"></div>
        <section id="contact-section">
          <h4>Contact me</h4>
          <div className="contact row justify-content-center gap-3">
            <a className="col-auto" href="https://www.linkedin.com/in/adrian-o-knight/">
              <FaLinkedin />
            </a>
            <a className="col-auto" href="https://github.com/Ajknight121">
              <FaGithub />
            </a>
            <a className="col-auto" href="mailto:aoknight64@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </section> */}

        {/* <!-- Footer section --> */}
        <section id="footer-section">
          <div className="footer-content">
            <a className="" href="https://www.linkedin.com/in/adrian-o-knight/">
              <FaLinkedin />
              linkedin
            </a>
            © Adrian Knight
            <a className="" href="https://github.com/Ajknight121">
              <FaGithub />
              github
            </a>
            <a className="" style={{cursor:"pointer"}} onClick={() => setCurrentPage("resume")}>
              Resume
            </a>
          </div>
        </section>
      </div>
        </>
      ) : (
        <div className="resume-page" style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <section id="hero-section" style={{ height: "15vh", minHeight: "15vh", margin: 0 }}>
            <div className="hero-content" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="container hero text-center" style={{ paddingTop: "2rem" }}>
                <h1 style={{padding: 0}}>Adrian O. Knight</h1>
                <button className="navbar-link" onClick={() => setCurrentPage("home")}>
                  Back to Home
                </button>
              </div>
            </div>
          </section>
          <iframe
            src="/resume.pdf"
            title="Adrian O. Knight Resume"
            style={{ width: "100%", height: "85vh", border: "none" }}
          />
        </div>
      )}
    </>
  );
}

export default App;
