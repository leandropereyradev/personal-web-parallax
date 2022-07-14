import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/aboutPop.css";
import img from "./img";
import { Link } from "react-scroll";

const AboutPop = ({ estado, set }) => {
  return (
    <>
      <AnimatePresence>
        {estado && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            exit={{
              opacity: 0,
            }}
            className="aboutPop-container"
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: 0.7,
              }}
              exit={{
                scale: 0,
              }}
              className="aboutPop_about"
            >
              <h3 className="aboutPop_title">¡Sé quien soy, de donde vengo y hacia donde voy!</h3>
              <div className="aboutPop_info-container">
                <div className="aboutPop_info_title-container">
                  <h1 className="aboutPop_info_title_title">Soy Leandro Pereyra, Desarrollador Web</h1>
                  <p className="version">v1.0 - Trainee</p>
                  <p className="aboutPop_info_title_text">Mi padre me dijo una vez:</p>
                  <div className="aboutPop-papa">
                    <p className="aboutPop_info_title_text dialog">
                      "Hijo; Las aves aprendieron a volar siendo estas arrojadas del nido. Ahí supieron para qué servían sus alas; Para
                      hacer del aire su elemento. Yo no te arrojaré del nido, sólo te pido que intentes saltar de éste. ¡No temas! Todos
                      tenemos miedos e inseguridades, pero dime si ¿no es hermoso tener en tus manos el valor de haberlo intentado? ¡Te
                      amo!"
                    </p>

                    <img src={img.papa} alt="papa" />
                  </div>
                  <p className="aboutPop_info_title_text">
                    Gracias a ese valor que me regaló mi padre en aquel momento, entre muchos otros, soy una persona que le gusta tomar
                    riesgos. Riesgos organizados, planeados, con escenarios posibles. Escenarios aquellos para saber qué puede llegar a
                    pasar y cómo poder solucionarlo. En este tiempo han crecido en mí plumas nuevas. Plumas hechas de conocimiento. Lo
                    llamaremos Desarrollador Web v1.0 - Trainee, porque aún están creciendo.
                  </p>
                  <p className="aboutPop_info_title_text">
                    Os invito a que seáis parte del aire que surco, que seáis mi experiencia. Que, en momentos de fuertes ráfagas, saber que
                    estáis allí para yo poder aprender a mantenerme en vuelo mientras lo solucionamos. ¡Que hermoso es volar a diferentes
                    alturas, temperaturas!. Porque no todo es una suave brisa, y es lo que más me gusta, sino me aburro. Quiero ser un
                    experto surcando los aires del Desarrollo Web. Volar con otros para adquirir valores, métodos, prácticas y hacer de todo
                    ello mi experiencia, sentirme, cada vez más, orgulloso de mi mismo.
                  </p>
                  <p className="aboutPop_info_title_text">
                    Pues, lo dicho; Soy un Desarrollador Web Front-End con experiencia en creación de sitios y aplicaciones web. Autodidacta
                    por naturaleza. Me especializo en <span>React.JS</span>, como también, experiencia trabajando con <span>WordPress</span>
                    , <span>HTML</span>, <span>CSS</span>, <span>Next.JS</span>. Siempre busco mejorar mis habilidades y seguir creciendo
                    profesionalmente para poder hacer aportes valiosos al grupo de trabajo del que puedo formar parte. Depende de vosotros.
                    Conozcámonos para darnos la oportunidad. ¿Y si terminamos siendo un equipazo? ¿Saltamos?
                  </p>
                </div>
                <div className="aboutPop_skills-container">
                  <h3>Skills Trainee</h3>
                  <div className="skill-container">
                    <img src={img.react} alt="react" />
                    <img src={img.html} alt="html" />
                    <img src={img.css} alt="css" />
                  </div>
                  <div className="skill-container">
                    <img src={img.js} alt="js" />
                    <img src={img.wp} alt="wp" />
                    <img src={img.git} alt="git" />
                  </div>
                </div>
                <Link to="contact" smooth={true} offset={0} duration={500}>
                  <button onClick={set} className="aboutPop_button">
                    Conozcámonos
                  </button>
                </Link>
                <div className="aboutPop_exit">
                  <img src={img.exit} alt="exit" onClick={set} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutPop;
