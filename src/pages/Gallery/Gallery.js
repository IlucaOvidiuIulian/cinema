import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";
import "./Gallery.css";
function Gallery() {
  return (
    <div className="gallery">
      <Logo width="20rem" height="20rem" />
      <NavLinks />
      <p>GALLERY</p>
    </div>
  );
}
export default Gallery;
