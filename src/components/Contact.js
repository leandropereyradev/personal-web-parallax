import React from "react";
import "../css/contact.css";
import img from "./img";

const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact" data-index="4">
        <div className="contact_title">
          <h1>Contacto</h1>
        </div>
        <div className="contact_paragraph">
          <p>Gracias por visitar mi Web Personal</p>
          <p>¡Contáctame para que podamos trabajar juntos!</p>
        </div>
        <div className="contact_icons">
          <div className="contact_icons-line" />
          <div className="contact_icons-icons">
            <a href="mailto:contacto@leandropereyra.com" target="_blank" rel="noopener noreferrer">
              <img src={img.mail} alt="mail" className="iconContact" />
            </a>
            <a href="https://github.com/leandropereyradev" target="_blank" rel="noopener noreferrer">
              <img src={img.github} alt="github" className="iconContact" />
            </a>
            <a href="https://www.linkedin.com/in/leandropereyradev" target="_blank" rel="noopener noreferrer">
              <img src={img.linkedin} alt="linkedin" className="iconContact" />
            </a>
          </div>
          <div className="contact_icons-line" />
        </div>
      </div>
      <div className="footer-container">
        <p>www.LeandroPereyra.com</p>
        <p>Copyright © 2022. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Contact;
