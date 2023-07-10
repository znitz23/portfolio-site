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
    { src: "../assets/tsov-home.png", alt: "tsov1" },
    { src: "../assets/tsov-stats.png", alt: "tsov2" },
    { src: "../assets/tsov-session.png", alt: "tsov3" },
    { src: "../assets/tsov-results.png", alt: "tsov4" },
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
        <div>
          <button onClick={changeDisplay}>
            <img
              src="../assets/GameGo-1.png"
              alt="gg-logo"
              className="portLogo logoShadow"
            />
          </button>
          <button onClick={changeDisplay}>
            <img
              src="../assets/logo1.png"
              alt="gg-logo"
              className="portLogo logoShadow"
            />
          </button>
        </div>
        {display === true ? (
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
        ) : (
          <AppLogo>
            <Carousel data={images.tsov} />
            <section>
              <a href="https://threestreetsofvalue.fly.dev/" target="_blank">
                Demo
              </a>

              <a
                href="https://github.com/znitz23/three-streets-of-value-pern"
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
