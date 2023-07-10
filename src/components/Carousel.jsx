import React, { useState } from "react";
import { CarouselStyled } from "./styles/Carousel.Styled";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <CarouselStyled>
        <BsArrowLeftCircleFill
          className="arrow leftArrow"
          onClick={previousSlide}
        />
        {data.map((item, idx) => {
          console.log(item.src);
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow rightArrow"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-current"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </CarouselStyled>
    </>
  );
};
