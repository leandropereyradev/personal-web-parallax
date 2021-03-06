import React, { useState } from "react";
import "../css/about.css";
import img from "./img";
import AboutPop from "./AboutPop";

const About = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="about-container" id="about" data-index="3">
      <div className="about_title-container">
        <h1 className="about_title">Sobre mi</h1>
        <div className="about_lines-container">
          <div className="about_lines-container_firstLine"></div>
          <div className="about_lines-container_secondLine"></div>
        </div>
        <h3 className="about_subtitle">desarrollador web</h3>
        <div className="button-box">
          <button onClick={() => setModal(!modal)} className="about_button">
            Ver Más
          </button>
        </div>
      </div>
      <div className="about_image-container">
        <img src={img.photo} alt="logo" />
      </div>
      <AboutPop estado={modal} set={() => setModal(!modal)} />
    </div>
  );
};

export default About;
