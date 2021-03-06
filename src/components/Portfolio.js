import React from "react";
import Slider from "react-perfect-slider";
import "../css/portfolio.css";
import { bdPortfolio } from "./bdPortfolio";
import img from "./img";

const Carrousel = () => {
  return (
    <div id="portfolio" className="carousel">
      <Slider
        renderControls={(next, previous) => [
          <div className="buttons">
            <img src={img.left} alt="left" onClick={previous} className="previous" />
            <img src={img.right} alt="right" onClick={next} className="next" />
          </div>,
        ]}
        className="box"
      >
        {bdPortfolio.length > 0 &&
          bdPortfolio.map(({ title, subtitle, tech, web, github, image, id }) => (
            <div key={id}>
              <div className="portfolio_image-container">
                <img src={image} className="d-block " alt={image} />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="titulo">
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
                <div className="contenedor-lineas">
                  <div className="linea-uno" />
                  <div className="linea-dos" />
                </div>
                <h6>{tech}</h6>
                <div className="links">
                  {web ? (
                    <a
                      href={web}
                      target="_blank"
                      rel="noopener
                                noreferrer"
                    >
                      Ver Web
                    </a>
                  ) : (
                    <></>
                  )}
                  {github ? (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener
                                noreferrer"
                    >
                      Ver GitHub
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
