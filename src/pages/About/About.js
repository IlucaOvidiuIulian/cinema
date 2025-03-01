import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import NavLinks from "../../components/NavLinks/NavLinks";
import Button from "../../components/Button/Button.js";
import AlexsImage from "../../assets/photos/Frame 35.jpg";
import CristiansImage from "../../assets/photos/Frame 34.jpg";
import "./About.css";
function About() {
  return (
    <div className="page about">
      <Logo />
      <NavLinks />
      <h1>Despre noi</h1>
      <p>
        Suntem doi fotografi și videografi pasionați, dedicați artei vizuale și
        capturării celor mai autentice momente. <br></br>Fie că este vorba
        despre evenimente speciale, proiecte creative sau conținut profesional,
        ne propunem să transformăm fiecare cadru într-o poveste vizuală
        memorabilă.
      </p>

      <p>
        Cu un stil unic și o atenție deosebită la detalii, combinăm fotografia
        emoțională cu editarea video de înaltă calitate pentru a oferi imagini
        care transmit emoție, energie și autenticitate.
      </p>
      <p>
        Indiferent dacă ai nevoie de fotografii artistice, clipuri dinamice sau
        un proiect vizual personalizat, suntem aici să aducem viziunea ta la
        viață. Hai să creăm împreună imagini care spun povesti
      </p>
      <div>
        <Button>Galeria noastră</Button>
        <Button>Hai să vorbim</Button>
      </div>
      <div className="owners">
        <div className="owner">
          <h2>Alexandru Ilucă </h2>
          <img className="owner-photo" src={AlexsImage} />
        </div>
        <div className="owner">
          <h2>Cristian Ghervasă</h2>
          <img className="owner-photo" src={CristiansImage} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
