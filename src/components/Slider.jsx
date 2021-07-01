import React from "react";
import styled from "styled-components";
import slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Slide>
        <img src="/images/slider1.jpg" alt="slide1" />
      </Slide>
      <Slide>
        <img src="/images/slider2.jpg" alt="slide1" />
      </Slide>
      <Slide>
        <img src="/images/slider3.jpg" alt="slide1" />
      </Slide>
      <Slide>
        <img src="/images/slider4.jpg" alt="slide1" />
      </Slide>
    </Carousel>
  );
};

export default Slider;

//style carousel:
const Carousel = styled(slider)`
  ul li button {
    &:before {
      color: rgb(150, 150, 171);
      font-size: 1rem;
      ${'' /* @media (max-width: 768px) {
        display: none;
      } */}
    }
  }
  li.slick-active button:before {
    color: #fff;
 
  }
  .slick-prev:before{
    @media (max-width: 768px) {
        display: none;
      }
  }
  .slick-next:before{
    @media (max-width: 768px) {
        display: none;
      }
  }
  .slick-list {
    overflow: hidden;
   
  }
  button {
    z-index: 3;
   
  }
`;
//slide style:
const Slide = styled.div`
height: 40rem;
  overflow: hidden;
  cursor: pointer;
  img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    object-fit: fill;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 18px -10px;
    &:active {
      outline: none;
      border: none;
    }
  }
`;
