import React from "react";
import { ContactStyled } from "./styles/Contact.styled";
import { Button } from "./styles/Button.styled";

function Contact() {
  return (
    <>
      <ContactStyled>
        <h1>Get in touch!</h1>
        <p>
          If you'd like to get in touch, discuss a project or just say hello
          please fill out the form below. I can also be reached directly through
          a social link below or at{" "}
          <a href="mailto:znitz23@gmail.com">znitz23@gmail.com</a>!
        </p>
        <form>
          <input
            type="text"
            placeholder="Type here"
            className="input-box"
          ></input>
          <br></br>
          <input type="text" placeholder="Name"></input>
          <br></br>
          <input type="text" placeholder="Email address"></input>
          <br></br>
          <Button>Submit</Button>
        </form>
      </ContactStyled>
    </>
  );
}

export default Contact;
