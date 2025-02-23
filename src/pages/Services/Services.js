import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";
import "./Services.css";
function Services() {
  return (
    <div className="page servicii" style={{ gap: "4rem" }}>
      <Logo />
      <NavLinks />
      <h1>Servicii</h1>
      <p>
        <span>
          Oferim servicii profesionale de fotografie și videografie, surprinzănd
          fiecare detaliu cu pasiune
        </span>
        <span> și creativitate.</span>
      </p>
      <p>
        <span>
          De la nunți, botezuri și evenimente corporate, până la ședințe foto
          artistice sau clipuri
        </span>
        <span>
          promoționale, transformăm emoțiile și poveștile în imagini de
          excepție.
        </span>
      </p>
      <p className="service-description">
        <span>
          Fotografie profesională - cadre autentice, pline de viață și emoție.
        </span>
        <span>
          Videografie cinematică - filmări de înaltă calitate, editate cu
          atenție la detalii.
        </span>
        <span>
          Montaj & editare profesională - culori vibrante, sunet clar și o
          poveste captivantă.
        </span>
      </p>
      <p>
        <span>Indiferent de ocazie, suntem aici să surprindem</span>
        <span>fiecare clipă în cea mai frumoasă lumină</span>
      </p>
      <button>Hai să vorbim</button>
      <Footer />
    </div>
  );
}
export default Services;
