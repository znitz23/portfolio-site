import styled from "styled-components";

export const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img,
  button {
    background-color: white;
    opacity: 100;
    border: none;
    width: 250px;
    height: 200px;
    margin: 0px 0 100px 0;
    cursor: pointer;
  }

  section {
    display: flex;
  }
`;

export const AppLogo = styled.button`
  background-color: white;
  justify-content: center;
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 145px;
    height: 45px;
    border: none;
    background-color: #fff;
    color: #fff;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.45);
    text-align: center;
    align-content: center;
    text-decoration: none;
    font-weight: 700;
    color: black;
    margin: 30px 8px 0 8px;
  }
  .ghLogo {
    margin-top: 97px;
    width: 35px;
    height: 35px;
  }
`;
