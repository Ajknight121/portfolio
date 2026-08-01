import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Github from "../components/Github";
import LazyImage from "../components/LazyImage";

function Home() {
  return (
    <>
      {/* <!-- Hero section --> */}
      <section id="hero-section">
        <div className="hero-content">
          <div className="container hero">
            <LazyImage className="hero-img" src="/img/Knight_Adrian high_comp.jpg" />
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
              <LazyImage src="/img/chicago-il-skyline-night.jpg" />
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
          </div>
        </section>

        {/* <!-- Projects section --> */}
        <div id="projects-target"></div>
        <section id="projects-section">
          <h4 className="text-center">Project Short List</h4>
          <div className="projects">

            <div className="project">
              <LazyImage className="project-img" src="/img/tongue-tracker-home.png" />
              <div className="project-desc-section">
                <h4>WTSE Tongue Trackpad Interface</h4>
                <h6>UIC Masters Thesis</h6>
                
                <div className="project-desc">
                  <p>A web interface for bluetooth connected biomedical tongue trackpad device used for tongue rehabilitation</p>

                  <p>Development across vanilla HTML and JS to React and TypeScript</p>
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
                  <h4>Data Lens</h4>
                Human Computer Interaction class project
                <div>
                  <p>
                    Course project to help people skeptical of information to analyze and understand public datasets of information with an AI assistant
                  </p>

                  <p>
                    
                  </p>
                </div>
              </div>
            </div>

            <div className="project">
              <LazyImage className="project-img" src="/img/Idle-Fire-Trailer-optimize.gif" />
              <div className="project-desc-section">
                <a href="https://idle-fire.aokspace.com" className="project-title" target="blank">
                  <h4>Idle Fire</h4>
                </a>
                Idle Fire is an incremental clicker game
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
              <LazyImage className="project-img" src="/img/SanctuaryOS-trailer-optimize.gif" />
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
              <LazyImage className="project-img" src="/img/sparkhacks-trailer.gif" />
              <div className="project-desc-section">
                <h4>Sparkhacks 2025</h4>
                UIC's student organized annual hackathon homepage
                <div className="project-desc">
                  <p></p>

                  <p>Collaboratively made with Astro and React</p>
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
              <LazyImage className="project-img" src="/img/3DBattleship-trailer-optimize.gif" />
              <div className="project-desc-section">
                <h4>Dreadnought</h4>
                3D battleship for up to 8 players
                <div className="project-desc">
                  <p></p>

                  <p>Collaboratively developed with Reactjs, nodejs, and typescript</p>
                </div>
              </div>
            </div>

            <div className="project">
              <LazyImage className="project-img" src="/img/acm-jukebox.png" />
              <div className="project-desc-section">
                <h4>ACM Jukebox</h4>
                Shared queue youtube music player
                <div className="project-desc">
                  <p></p>

                  <p>Collaboratively developed with Reactjs, nodejs, and JavaScript</p>
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
              <LazyImage className="project-img" src="/img/affinity diagram crop comp.png" />
              <div className="project-desc-section">
                <a href="https://idle-fire.aokspace.com" className="project-title" target="blank">
                  <h4>Supperlust</h4>
                </a>
                Restaurant leftovers ordering app
                <div>
                  <p>
                    Working from the Too Good To Go's idea we designed our app to assist financially-conscious young adults acquire low-cost meals in as little time and distance as possible while reducing their own food waste at home.
                  </p>

                  <p>
                    A collaborative design doc, user research, wireframes, figma prototypes, and React implementation
                  </p>
                  <p>A Human Computer Interaction course project</p>
                </div>
              </div>
            </div>

            <div className="project">
              <LazyImage className="project-img" src="/img/space-exploration.PNG" />
              <div className="project-desc-section">
                <h4>Space Exploration Game</h4>
                Travel between planets with data collected from NASA
                <div className="project-desc">
                  <p></p>
                  <p>Collaboratively developed with Reactjs and TypeScript</p>
                </div>
              </div>
            </div>

            <div className="project">
              <LazyImage className="project-img" src="/img/acm-marketplace-hero.png" />
              <div className="project-desc-section">
                <div className="flex-row justify-center">
                  <h4>ACM Marketplace</h4> <Github link="https://github.com/acm-uic/marketplace" />
                </div>
                Next.js Storefront for ACM@UIC student org
                <div className="project-desc">
                  <p></p>
                  <p>Developed collaboratively with Next.js</p>
                </div>
              </div>
            </div>

            <div className="project flex-row">
              <div className="notice">More projects and descriptions to be added</div>
            </div>
          </div>
        </section>

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
            <Link className="" to="/resume" style={{ cursor: "pointer" }}>
              Resume
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
