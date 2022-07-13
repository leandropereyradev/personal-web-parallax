import React, { useEffect, useState } from "react";
import "../src/css/app.css";
import Nav from "./components/Nav";
import ScrollSpy from "./components/ScrollSpy";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <Header />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </>
  );
  return (
    <div>
      <ScrollSpy />
      <div className="Parallax__background" style={{ transform: `translateY(${offsetY * 0.5}px)` }} />
      <div className="Parallax__content">{renderContent()}</div>
      <Nav />
    </div>
  );
};

export default App;
