import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top" data-bs-theme="dark">
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
      </nav>

      {/* <!-- Hero section --> */}
      <section id="hero-section">
        <div className="hero-content">
          <div className="container hero">
            <img className="hero-img" src="/img/Knight_Adrian.jpg" />
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
          <h4>Mission</h4>
          <div className="container row">
            <div className="col-sm">
              <img src="/img/chicago-il-skyline-night.jpg" />
            </div>
            <div className="col-sm">
              <p>
                I'm a Computer Science major at University of Illinois at
                Chicago (UIC). I enjoy doing web development and I am trying to
                become a full stack developer
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Skills section --> */}
        <div id="skills-target"></div>
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
              <img className="img-thumbnail" src="/img/CSS-Logo.png" />
              <p>Adding beautiful style to websites</p>
            </div>
            <div className="skill col-sm-12 col-md-6 col-lg-3">
              <img className="img-thumbnail" src="/img/Bootstrap-logo.png" />
              <p>Premade styling for fast mobile responsive web development</p>
            </div>
            <div className="skill col-sm-12 col-md-6 col-lg-3">
              <img className="img-thumbnail" src="/img/typescript-logo.png" />
              <p>
                TypeScript is like writing JavaScript, but with more safety
                guards in place.
              </p>
            </div>
          </div>
        </section>

        <section id="meme-section">
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
        </section>

        {/* <!-- Contact Section --> */}
        <div id="contact-target"></div>
        <section id="contact-section">
          <h4>Contact me</h4>
          <div className="contact row">
            <a
              className="col-sm-12 col-md"
              href="https://www.linkedin.com/in/adrian-o-knight/"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="col-sm-12 col-md"
              href="https://github.com/Ajknight121"
            >
              <i className="bi bi-github"></i>
            </a>
            <a className="col-sm-12 col-md" href="aoknight64@gmail.com">
              <i className="bi bi-envelope-at-fill"></i>
            </a>
          </div>
        </section>

        {/* <!-- Footer section --> */}
        <section id="footer-section">© Adrian Knight 2024</section>
      </div>

      {/* <!-- 
  		TODO: Paste Bootstrap JavaScript script tag from:
      https://getbootstrap.com/
  	--> */}
      {/* <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script> */}
    </>
  );
}

export default App;
