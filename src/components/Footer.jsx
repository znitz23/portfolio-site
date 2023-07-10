import React from "react";
import { Logo, StyledFooter } from "./styles/Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <Logo href="https://github.com/znitz23" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
      </Logo>
      <Logo href="https://www.linkedin.com/in/zach-nitzkin/" target="_blank">
        <img
          className="lkd"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"
        />
      </Logo>
    </StyledFooter>
  );
}

export default Footer;
