import { Link } from "react-router-dom";

export default function Social() {
  return (
    <div className="resume-page" style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <section id="hero-section" style={{ height: "15vh", minHeight: "15vh", margin: 0 }}>
        <div className="hero-content" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="container hero text-center">
            <h1 style={{padding: 0}}>Social</h1>
            <Link className="navbar-link" to="/" style={{ display: 'inline-block', position:"relative", zIndex:9000}}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <section style={{height:"100%"}}>
        <iframe data-testid="embed-iframe" style={{padding: "0 10px"}} src="https://open.spotify.com/embed/playlist/4nnElHM8g41lWJ1lDvqps4?utm_source=generator&si=32908cb380a84a80" width="100%" height="100%" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </section>
    </div>
  );
}
