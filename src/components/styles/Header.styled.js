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
    margin-right: 30px;
  }

  .navlink {
    animation: 1s ease-out 0s 1 slideInLeft;
    color: #0c5ff0;
    text-decoration: none;
    margin: 0 20px 0 20px;
  }

  .navlink.active {
    transition: all 0.3;
    color: black;
  }
`;

export const Logo = styled.img`
  animation: 1s ease-out 0s 1 slideInLeft;
  max-width: 80px;
  border-radius: 70%;
  margin-left: 30px;
`;
