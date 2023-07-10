import React from "react";
import { Logo, Nav, StyledHeader } from "./styles/Header.styled.js";
import { NavLink } from "react-router-dom";
import { Container } from "./styles/Container.styled.js";
import { Button } from "./styles/Button.styled.js";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo src="./assets/logo.png" />
        <Nav>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/portfolio" className="navlink">
            Portfolio
          </NavLink>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
          <Button
            href="./assets/Zach-Nitzkin-Resume.pdf"
            target="_blank"
            download
          >
            &#8623; Resume
          </Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
