import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <Logo />
        <NavLinks />
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <p className="team-testimonial">
            Suntem o echipă de profesioniști pasionați,cu un spirit creativ
            inegalabil și o viziune fără limite.
          </p>
        </div>
        <div className="policy-links">
          <a href="#">Termeni și condiții</a>
          <a href="#">Politica de confidențialitate</a>
          <a href="#">Politica de Cookie</a>
          <a href="#">Setări GDPR</a>
        </div>
        <SocialLinks />
      </div>
      <p>Copyright 2024 Imagination Studio &copy; All Right Reserved</p>
    </div>
  );
}
export default Footer;
