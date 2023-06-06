import styled from "styled-components";

export const ContactStyled = styled.div`
  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 slideInLeft;
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 24px;
    font-weight: bolder;
  }

  .input-box {
    height: 125px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  Button {
    background-color: green;
  }
`;
