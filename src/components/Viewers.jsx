import React from "react";
import styled from "styled-components";
const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="Disnep" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="Marvel" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="Pixar" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="StarWars" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="National" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676296-national-geographic.mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

//viewerContainer style:
const Container = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 3rem 0rem 2.6rem; 
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 2.5rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
//Viewer Style:
const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  box-shadow: rgb(0 0 0 / 69%) 0rem 2.6rem 3rem -1rem,
    rgb(0 0 0 / 73%) 0rem 1.6rem 1rem -1rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    inset: 0px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: 1;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0rem 4rem 5.8rem -1.6rem,
      rgb(0 0 0 / 72%) 0rem 3rem 2.2rem -1rem;
    transform: scale(1.06);
    overflow:hidden;
    border-color: #eee;
    video {
      opacity: 1;
      z-index: 1;
    }
    @media (max-width: 768px) {
        transform : scale(1);  
  }
  }
 
`;
