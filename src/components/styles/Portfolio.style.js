import styled from "styled-components";

export const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;

  .gg-logo {
    width: 300px;
    height: 200px;
    border: none;
    cursor: pointer;
    padding: 0 20px 0 20px;
  }
  .tsov-logo {
    width: 225px;
    height: 175px;
    cursor: pointer;
    padding: 0 20px 0 20px;
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

  section {
    display: flex;
  }
`;

export const AppLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
