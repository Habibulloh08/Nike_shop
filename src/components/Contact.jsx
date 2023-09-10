import "../components/css/Contact.css";
import Person from "../assets/person.jpg";

const Contact = () => {
  return (
    <div className="sigle-page">
      <div className="contact-page">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Salom! Men Karimov Habibullohman, frontend va full-stack dasturchi.
            Men web ilovalarini yaratish va ularga rivojlanishga qiziqaman.
            Sizga sodda web ilovalaridan boshlab boshqa yechimlarni taklif qila
            olishim mumkin.
          </p>
          {/* Boshqa ma'lumotlar */}
        </div>
        <div className="contact-content">
          <img src={Person} alt="" id="contact-img" />
          {/* Biz bilan bog'lanish formasi va malumotlari */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
