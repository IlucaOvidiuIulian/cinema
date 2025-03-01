import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";
import "./Services.css";
function Services() {
  return (
    <div className="page servicii">
      <Logo />
      <NavLinks />
      <h1>Servicii</h1>
      <p>
        Oferim servicii profesionale de fotografie și videografie, surprinzănd
        fiecare detaliu cu pasiune și creativitate.
      </p>
      <p>
        De la nunți, botezuri și evenimente corporate, până la ședințe foto
        artistice sau clipuri promoționale, transformăm emoțiile și poveștile în
        imagini de excepție.
      </p>
      <div className="service-description">
        <p>
          Fotografie profesională - cadre autentice, pline de viață și emoție.
        </p>
        <p>
          Videografie cinematică - filmări de înaltă calitate, editate cu
          atenție la detalii.
        </p>
        <p>
          Montaj & editare profesională - culori vibrante, sunet clar și o
          poveste captivantă.
        </p>
      </div>
      <p>
        Indiferent de ocazie, suntem aici să surprindem fiecare clipă în cea mai
        frumoasă lumină
      </p>
      <Button>Hai să vorbim</Button>
      <Footer />
    </div>
  );
}
export default Services;
