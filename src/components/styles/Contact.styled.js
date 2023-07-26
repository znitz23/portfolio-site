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
    text-align: left;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 80px;
    height: 35px;
    border-radius: 12px;
    background-color: #0c5ff0;
    color: white;
    border: none;
    font-weight: 800;
    cursor: pointer;
  }
`;
