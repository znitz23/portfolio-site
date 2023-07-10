import styled from "styled-components";

export const StyledHeader = styled.header`
  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  background-color: ${({ theme }) => theme.colors.header};
  padding: 10px 0;
  border-bottom: 2px solid #0c5ff0;

  h1 {
    color: green;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 800;
  float: right;
  justify-content: space-between;
  margin-top: 10px;

  button {
  }

  :hover {
    transform: scale(1.15);
    text-shadow: #304d80 1px 0 7px;
  }
  :last-child {
    @keyframes slideInTop {
      0% {
        transform: translatey(-100%);
      }
      100% {
        transform: translatey(0);
      }
    }
    animation: 1s ease-out 0s 1 slideInTop;
    margin-left: 10px;
  }

  .navlink {
    animation: 1s ease-out 0s 1 slideInLeft;
    color: #0c5ff0;
    text-decoration: none;
    margin: 0 20px 0 20px;
  }
`;

export const Logo = styled.img`
  animation: 1s ease-out 0s 1 slideInLeft;
  max-width: 80px;
  border-radius: 70%;
  margin-right: 1 1;
`;
