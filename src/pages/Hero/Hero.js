import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="section left">
          <div className="overlay"></div>
          <a href="#photo">Photo</a>
          <img
            src="https://t3.ftcdn.net/jpg/09/04/72/88/360_F_904728821_ZFugpaa4Q3ALJ4peHaHGlZvZb4P99d8W.jpg"
            alt="Hero section background"
          />
        </div>
        <div className="section right">
          <div className="overlay"></div>
          <a href="#video">Video</a>
          <img
            src="https://t3.ftcdn.net/jpg/09/04/72/88/360_F_904728821_ZFugpaa4Q3ALJ4peHaHGlZvZb4P99d8W.jpg"
            alt="Hero section background"
          />
        </div>
      </div>

      <Logo
        otherStyles={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "2rem solid #272727",
          width: "26rem",
          height: "26rem",
        }}
      />
      <SocialLinks
        particularStyles={{
          position: "absolute",
          top: "2.6%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <NavLinks
        otherStyles={{
          position: "absolute",
          bottom: "2%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "10",
        }}
      />
    </div>
  );
}
