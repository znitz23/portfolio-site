import React from "react";
import { Container } from "./styles/Container.styled";
import StyledHome from "./styles/Home.styled";

function Home() {
  return (
    <>
      <Container>
        <StyledHome>
          <h4>Hi, my name is</h4>
          <h1>Zach Nitzkin.</h1>
          <h2>I build things for the web.</h2>
          <p>
            I'm a Chicago based software developer who specializes in building
            exceptional digital experiences. Currently, I'm looking for
            opportunities to leverage my skills and experience bringing front-
            and back-end solutions to life! Please take a look around to see
            what I've been working on.
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
        </StyledHome>
      </Container>
    </>
  );
}

export default Home;
