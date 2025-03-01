import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import Button from "../../components/Button/Button.js";
import PhoneIcon from "../../components/svgs/PhoneIcon";
import LocationIcon from "../../components/svgs/LocationIcon";
import EmailIcon from "../../components/svgs/EmailIcon";
import SendIcon from "../../components/svgs/SendIcon";
function Contact() {
  return (
    <div className="page contact">
      <Logo />
      <NavLinks />
      <h1>Contactează-ne</h1>
      <p>
        Răspundem tuturor mesajelor, de obicei în mai puțin de 2 zile, iar dacă
        nu primiți un răspuns de la noi înseamnă că nu am primit mesajul.
      </p>

      <div className="wrapper">
        <form autoComplete="off" autoCorrect="off" spellCheck="false">
          <label htmlFor="name">Nume</label>
          <input type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
          <label htmlFor="telephone">Telefon</label>
          <input type="tel" name="telephone" required />
          <label htmlFor="message">Mesajul dumneavoastră</label>
          <textarea name="message" rows="6" cols="60" required />
          <Button>
            Trimite
            <SendIcon />
          </Button>
        </form>
        <div className="contact-details">
          <div>
            <LocationIcon />
            <p>Județul Iași</p>
          </div>
          <div>
            <PhoneIcon />
            <p>0744606388</p>
          </div>
          <div>
            <EmailIcon />
            <p>imagination@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
