import styled from "styled-components";

export const AboutStyled = styled.div`
  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  width: 650px;
  margin: auto;

  h1 {
    font-size: 55px;
    animation: 1s ease-out 0s 1 slideInLeft;
  }

  hr {
    margin-top: -15px;
    border: 1px solid black;
    animation: 1s ease-out 0s 1 slideInRight;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    animation: 1s ease-out 0s 1 slideInLeft;
  }

  .lower {
    animation: 1s ease-out 0s 1 slideInRight;
  }

  div {
    display: flex;
    justify-content: space-around;
  }

  img {
    background-color: white;
    height: 80px;
    margin: 60px 25px 0 25px;
    animation: 1s ease-out 0s 1 slideInBottom;
  }
`;
