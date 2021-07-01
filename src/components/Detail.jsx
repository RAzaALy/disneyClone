import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
const Detail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    //grab movie info from db:
    db.collection("movies")
      .doc(id)
      .get()
      .then((movie) => {
        if (movie.exists) {
          setMovie(movie.data());
        } else {
          console.error("id not exists!");
        }
      });
  }, [id]);
  // console.log("Movie is ", movie);
  // console.log(id);
  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} alt="background" />
      </Background>
      <Controls>
        <PlayBtn>
          <img src="/images/play-icon-black.png" alt="play" />
          <span>Play</span>
        </PlayBtn>
        <TrailerBtn>
          <img src="/images/play-icon-white.png" alt="WatchTrailer" />
          <span>Trailer</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupBtn>
          <img src="/images/group-icon.png" alt="Group" />
        </GroupBtn>
      </Controls>
      <SubTitle>{movie.subTitle}</SubTitle>
      <Description>{movie.description}</Description>
    </Container>
  );
};

export default Detail;

//container style:
const Container = styled.div`
  min-height: calc(100vh - 60px);
  padding: 0 calc(2.5vw + 3px);
  position: relative;
  overflow:hidden;
`;
//Background style:
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.9;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

//controls style:
const Controls = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 40%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
//play btn style:
const PlayBtn = styled.button`
  border-radius: 0.4rem;
  font-size: 1.5rem;
  letter-spacing: 1.8px;
  height: 4rem;
  background: #eee;
  text-transform: uppercase;
  padding: 0rem 0.8rem;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
//trailer btn style:
const TrailerBtn = styled(PlayBtn)`
  background: rgba(255, 255, 255, 0.6);
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;
//add btn style:
const AddBtn = styled.button`
  margin-right: 1rem;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);

  span {
    font-size: 3rem;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
//group btn style;
const GroupBtn = styled(AddBtn)``;

//style Subtitle:
const SubTitle = styled.div`
  position: absolute;
  bottom: 36%;
  margin:1rem 0rem;
  color: rgb(249, 249, 249);
  font-size: 1.4rem;
  min-height: 2rem;
  margin-top: 2.6rem;
  user-select: none;
`;
const Description = styled.div`
 position: absolute;
  bottom: 23%;
  line-height: 1.4;
  font-size: 1.1rem;
  user-select: none;
  margin-top: 1.6rem;
  color: rgb(249, 249, 249);
  max-width: 45rem;
`;
