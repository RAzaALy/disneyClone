import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Movies = () => {
  const movies = useSelector(selectMovies);
  // console.log(movies);
  return (
    <Container>
      <h1>Recommanded for You</h1>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/info/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Movies;

//moviesContainer style:
const Container = styled.div`
  h1 {
    user-select: none;
  }
`;
const Content = styled.div`
  display: grid;
  align-items: center;  ${'' /* overflow:hidden; */}
  grid-gap: 2rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

//movieCard style:
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0rem 2.6rem 3rem -1rem,
    rgb(0 0 0 / 73%) 0rem 1.6rem 1rem -1rem;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0rem 4rem 5.8rem -1.6rem,
      rgb(0 0 0 / 72%) 0rem 3rem 2.2rem -1rem;
    transform: scale(1.05);
    border-color: #eee;
  }
`;
