import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Viewers from "./Viewers";
import Recommend from "./Recommend";
import NewDisney from "./NewDisney";
import db from "../firebase";
import Trending from "./Trending";
import Original from "./Original";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let originals = [];
  let trendings = [];
  let newDisneys = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapShot) => {
      // console.log(snapShot);
      snapShot.docs.map((movie) => {
        // console.log( movie.data());
        switch (movie.data().type) {
          case "recommend":
            recommends.push({ id: movie.id, ...movie.data() });
            break;
          case "original":
            originals.push({ id: movie.id, ...movie.data() });
            break;
          case "trending":
            trendings.push({ id: movie.id, ...movie.data() });
            break;
          case "new":
            newDisneys.push({ id: movie.id, ...movie.data() });
            break;
          default:
            recommends.push({ id: movie.id, ...movie.data() });
        }
        // return 1;
      });
      dispatch(
        setMovies({
          recommend: recommends,
          trending: trendings,
          new: newDisneys,
          original: originals,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <Slider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Trending />
      <Original />
    </Container>
  );
};
export default Home;

//container style:
const Container = styled.main`
  overflow: hidden;
  margin-bottom: 2rem;
  min-height: calc(100vh - 60px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/home-background.png") center center/cover no-repeat;
    z-index: -1;
  }
`;
