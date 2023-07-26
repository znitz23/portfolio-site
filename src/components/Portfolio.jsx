import React, { useState } from "react";
import { AppLogo, StyledPortfolio } from "./styles/Portfolio.style";
import { Carousel } from "./Carousel";

const images = {
  gg: [
    { src: "../assets/gamego-home.png", alt: "gg1" },
    { src: "../assets/gamego-inventory.png", alt: "gg2" },
    { src: "../assets/gamego-checkout.png", alt: "gg3" },
  ],
  tsov: [
    { src: "../assets/tsov-home1.png", alt: "tsov1" },
    { src: "../assets/tsov-results1.png", alt: "tsov4" },
    { src: "../assets/tsov-session1.png", alt: "tsov3" },
  ],
};

function Portfolio() {
  const [display, setDisplay] = useState(true);
  const changeDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <StyledPortfolio>
        <div className="nav-logos">
          <button onClick={changeDisplay}>
            <img
              src="../assets/3-streets-logo_adobe_express.svg"
              alt="gg-logo"
              className={display ? "tsov-logo clicked" : "tsov-logo"}
            />
          </button>
          <button onClick={changeDisplay}>
            <img
              src="../assets/GameGo-1.png"
              alt="gg-logo"
              className={display ? "tsov-logo" : "tsov-logo clicked"}
            />
          </button>
        </div>

        {display === true ? (
          <AppLogo>
            <Carousel data={images.tsov} />
            <section>
              <a
                href="https://tsov-63570b4cc5c7.herokuapp.com/"
                target="_blank"
              >
                Demo
              </a>

              <a href="https://github.com/znitz23/tsov-heroku" target="_blank">
                <img
                  className="ghLogo"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                />
              </a>
            </section>
          </AppLogo>
        ) : (
          <AppLogo>
            <Carousel data={images.gg} />
            <section>
              <a href="https://gamego.fly.dev/home" target="_blank">
                Demo
              </a>

              <a
                href="https://github.com/FSA-Spring23-Group-1-Capstone/Capstone-Group-1"
                target="_blank"
              >
                <img
                  className="ghLogo"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                />
              </a>
            </section>
          </AppLogo>
        )}
      </StyledPortfolio>
    </>
  );
}

export default Portfolio;
