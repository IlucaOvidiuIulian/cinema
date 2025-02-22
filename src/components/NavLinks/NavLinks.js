import "./NavLinks.css";

function NavLinks({ otherStyles }) {
  return (
    <div className="nav-links" style={otherStyles}>
      <a href="#galerie" className="nav-link">
        Galerie
      </a>
      <a href="#servicii" className="nav-link">
        Servicii
      </a>
      <a href="#despre-noi" className="nav-link">
        Despre Noi
      </a>
      <a href="#contacteaza-ne" className="nav-link">
        Contactează-mă
      </a>
    </div>
  );
}
export default NavLinks;
