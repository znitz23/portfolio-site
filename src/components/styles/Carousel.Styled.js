import styled from "styled-components";

export const CarouselStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  a {
    display: flex;
    align-items: center;
    align-content: center;
  }

  .slide {
    display: flex;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0 3px;
    width: 100%;
    height: 100%;
  }

  .slide-hidden {
    display: none;
  }

  .arrow {
    position: absolute;
    width: 3rem;
    height: 3rem;
    color: white;
    cursor: pointer;
    filter: drop-shadow(0px 0px 5px #555);
  }

  .leftArrow {
    left: 1rem;
  }
  .rightArrow {
    right: 1rem;
  }

  .indicators {
    display: flex;
    position: absolute;
    bottom: 0.75rem;
  }

  .indicator {
    background-color: white;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 100%;
    border: none;
    outline: none;
    box-shadow: 0 0 5px #555;
    margin: 0 0.2rem;
    cursor: pointer;
  }

  .indicator-current {
    background-color: gray;
  }
`;
