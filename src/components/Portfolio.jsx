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
  csd: [
    { src: "../assets/csd-1.png", alt: "csd1" },
    { src: "../assets/csd-2.png", alt: "tsov2" },
    { src: "../assets/csd-3.png", alt: "tsov3" },
    { src: "../assets/csd-4.png", alt: "tsov4" },
    { src: "../assets/csd-5.png", alt: "tsov5" },
  ],
};

function Portfolio() {
  return (
    <>
      <StyledPortfolio>
        <section className="snap">
          <img
            src="../assets/3-streets-logo_adobe_express.svg"
            alt="gg-logo"
            className="tsov-logo"
          />

          <AppLogo>
            <Carousel data={images.tsov} />
            <article>
              <p>
                Three streets of value is a full stack, mobile friendly, PERN
                application developed as a tool for poker players to track their
                play. Users can input individual sessions while gaining insight
                into their play through analysis of game type, hourly earnings
                and day-specific results.
              </p>
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
            </article>
          </AppLogo>
        </section>
        <section className="snap && secondary-display">
          <img src="../assets/GameGo-1.png" alt="gg-logo" className="gg-logo" />
          <AppLogo>
            <Carousel data={images.gg} />
            <article>
              <p>
                GameGo is a full stack PERN application developed to synthesize
                an ecommerce shopping experience levering a custom REST API.
                Admin users can add, edit and remove inventory while customers
                can fill their cart, revisit old orders and checkout.
              </p>
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
            </article>
          </AppLogo>
        </section>
        <section className="snap && secondary-display">
          <img
            src="../assets/csd-logo.png"
            alt="csd-logo"
            className="csd-logo"
          />
          <AppLogo>
            <Carousel data={images.csd} />
            <article>
              <p>
                Custom Sewing and Design is a professionally contracted business
                website designed to provide customers with sample work, business
                bio info and the ability to request custom quotes.
              </p>
              <a
                href="https://customsewinganddesign.netlify.app/"
                target="_blank"
              >
                Demo
              </a>

              <a
                href="https://github.com/znitz23/CustomSewingAndDesign"
                target="_blank"
              >
                <img
                  className="ghLogo"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                />
              </a>
            </article>
          </AppLogo>
        </section>
      </StyledPortfolio>
    </>
  );
}

export default Portfolio;
