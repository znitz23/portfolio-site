import React from "react";
import { AboutStyled } from "./styles/About.styled";

function About() {
  return (
    <>
      <AboutStyled>
        <h1>About Me</h1>
        <hr></hr>
        <p>
          Hello! My name is Zach and I am absolutely enamored by the
          possibilites of developing full stack applications. My interest in
          programming began in 2018 while working for a public ecommerce
          company. I partnered with clients to leverage custom API's in order to
          ingest real time inventory and dynamic pricing. As the scope of my
          work grew, so too did my interest in what was happening 'under the
          hood'. In the fall of 2022 I set out to take my career in a new
          direction and began an accelerated program through the University of
          Illinois at Chicago to become a full stack web developer.
        </p>
        <p class="lower">
          Fast forward to today and I've begun building and designing front- and
          back-end applications using a variety of tools. Recently I've been
          most narrowly focused on front-end web development utilizing React,
          its many libraries and dependancies and the infitie possiblities of
          creating responsive, customer friendly web applications.
        </p>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
        </div>
      </AboutStyled>
    </>
  );
}

export default About;
