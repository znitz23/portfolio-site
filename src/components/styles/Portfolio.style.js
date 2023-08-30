import styled from "styled-components";

export const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;

  .snap {
    height: 80vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .secondary-display {
    height: 100vh;
    justify-content: start;
  }

  .gg-logo {
    width: 300px;
    height: 275px;
    border: none;
  }
  .tsov-logo {
    width: 225px;
    height: 175px;
    padding: 0 20px 0 20px;
  }

  .csd-logo {
    width: 400px;
    margin-top: 2em;
  }
  .nav-logos {
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    margin: 20px 25px 35px 25px;
    height: 150px;
    width: 240px;
  }

  .clicked {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.45);
  }
`;

export const AppLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85vw;
  /* margin-top: 1em; */

  article {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 1.3em;
    padding-left: 2em;
  }
  a {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 145px;
    height: 45px;
    background-color: #fff;
    color: #fff;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.45);
    text-align: center;
    align-content: center;
    font-weight: bolder;
    color: black;
    text-decoration: none;
    margin: 30px 8px 0 8px;
    cursor: pointer;
  }
  .ghLogo {
    width: 35px;
    height: 35px;
  }
`;
