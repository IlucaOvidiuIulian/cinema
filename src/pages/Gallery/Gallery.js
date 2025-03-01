import Footer from "../../components/Footer/Footer";
import ImagesList from "../../components/ImagesList/ImagesList";
import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";
import CameraIcon from "../../components/svgs/CameraIcon";
import FilmCameraIcon from "../../components/svgs/FilmCameraIcon";
import "./Gallery.css";
function Gallery() {
  return (
    <div className="page">
      <Logo />
      <NavLinks />
      <h1>GALLERY</h1>
      <div className="filters">
        <div>
          <p>Nunți</p>
          <p>Arhitecturale</p>
          <p>Natură</p>
          <p>Portret</p>
        </div>
        <div>
          <p>Absolvire</p>
          <p>Produs</p>
          <p>Mâncare</p>
        </div>
        <div>
          <div className="sort-button">
            <CameraIcon />
          </div>
          <div className="sort-button">
            <FilmCameraIcon />
          </div>
        </div>
      </div>
      <ImagesList />
      <Footer />
    </div>
  );
}
export default Gallery;
