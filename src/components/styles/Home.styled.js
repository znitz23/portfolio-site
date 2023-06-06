import styled from "styled-components";

export const StyledHome = styled.div`
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

  @keyframes slideInBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  width: 650px;
  margin: auto;

  h4 {
    font-size: 22px;
    margin-top: 60px;
    animation: 1s ease-out 0s 1 slideInRight;
  }

  h1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 60px;
    font-weight: 900;
    margin-bottom: -30px;
    margin-top: -25px;
    animation: 1s ease-out 0s 1 slideInLeft;
  }

  h2 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 52px;
    font-weight: 900;
    color: #4f4f54;
    animation: 1s ease-out 0s 1 slideInRight;
  }

  p {
    font-size: 22px;
    animation: 1s ease-out 0s 1 slideInLeft;
    margin-bottom: 25px;
  }

  div {
    display: flex;
    justify-content: space-around;
  }

  img {
    background-color: white;
    height: 100px;
    margin: 60px 25px 0 25px;
    animation: 1s ease-out 0s 1 slideInBottom;
  }
`;

export default StyledHome;
