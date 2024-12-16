import React from "react";

function App() {
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

      {/* Centered Logo */}
      <div className="hero-logo">
        <a href="#">
          <img
            src="/img/man-looking-into-the-distance-on-top-of-the-mountain-free-image.webp"
            alt="Logo"
          />
        </a>
      </div>

      {/* Social Media Links */}
      <div className="social-icons">
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

      {/* Bottom Links */}
      <div className="bottom-links">
        <a href="#galerie" className="bottom-link">
          Galerie
        </a>
        <a href="#servicii" className="bottom-link">
          Servicii
        </a>
        <a href="#despre-noi" className="bottom-link">
          Despre Noi
        </a>
        <a href="#contacteaza-ne" className="bottom-link">
          Contactează-ne
        </a>
      </div>
    </div>
  );
}

export default App;
