import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background-image: linear-gradient(to top, #d7d9d9, #ebeded);
  height: 65px;
`;

export const Logo = styled.a`
  img {
    height: 50px;
    margin: 0 75px 0 75px;
  }
`;
