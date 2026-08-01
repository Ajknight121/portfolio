import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="resume-page" style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <section id="hero-section" style={{ height: "15vh", minHeight: "15vh", margin: 0 }}>
        <div className="hero-content" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="container hero text-center">
            <h1 style={{padding: 0}}>Adrian O. Knight</h1>
            <Link className="navbar-link" to="/" style={{ display: 'inline-block', position:"relative", zIndex:9000}}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <iframe
        src="/resume.pdf"
        title="Adrian O. Knight Resume"
        style={{ width: "100%", height: "85vh", border: "none" }}
      />
    </div>
  );
}

export default Resume;
