import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      {/* Hero Sections */}
      <div className="hero">
        <div className="section left">
          <div className="overlay"></div>
          <a href="#photo">Photo</a>
          <img src="https://t3.ftcdn.net/jpg/09/04/72/88/360_F_904728821_ZFugpaa4Q3ALJ4peHaHGlZvZb4P99d8W.jpg" />
        </div>
        <div className="section right">
          <div className="overlay"></div>
          <a href="#video">Video</a>
          <img src="https://t3.ftcdn.net/jpg/09/04/72/88/360_F_904728821_ZFugpaa4Q3ALJ4peHaHGlZvZb4P99d8W.jpg" />
        </div>
      </div>

      <Logo
        otherStyles={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "2rem solid #272727",
          width: "25rem",
          height: "25rem",
        }}
      />

      {/* Social Media Links */}
      <div className="social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="TikTok"
        >
          <i className="fab fa-tiktok"></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="YouTube"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <NavLinks
        otherStyles={{
          position: "absolute",
          bottom: "2%",
          left: "50%",
          transform: "translateX(-50%)",
          gap: "4rem",
          zIndex: "10",
        }}
      />
    </div>
  );
}
