import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { NavLink } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignout,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, [userName]);
  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      console.log(result);
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignout());
      history.push("/login");
    });
  };
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <Container>
          <Login onClick={signIn} title="login">
            Login
          </Login>
        </Container>
      ) : (
        <Container>
          <Menu>
            <NavLink to="/" className="anchor">
              <img src="/images/home-icon.svg" alt="home" />
              <span>Home</span>
            </NavLink>
            <a>
              <img src="/images/search-icon.svg" alt="search" />
              <span>Search</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="watchlist" />
              <span>watchlist</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="originals" />
              <span>Originals</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="movie" />
              <span>Movies</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="series" />
              <span>Series</span>
            </a>
          </Menu>
          <Profile
            src={userPhoto}
            onClick={signOut}
            alt="user"
            title={userName}
          />
        </Container>
      )}
    </Nav>
  );
};

export default Header;

//Nav styled Components:
const Nav = styled.div`
  height: 60px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-conent: center;
  padding: 0rem 3rem;
  overflow: hidden;
`;

//Logo style:
const Logo = styled.img`
  width: 8rem;
`;
//Menu style:
const Menu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2.5rem;
  align-items: center;
  .anchor {
    color: #fff;
    text-decoration: none;
  }
  a,
  .anchor {
    user-select: none;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0px 1.2rem;
    img {
      height: 2rem;
    }
    span {
      font-size: 1.3rem;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: #eee;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    @media (max-width: 848px) {
      display: none;
      &:nth-child(1) {
        display: block;
      }
    }
  }
  @media (max-width: 848px) {
    margin-left: 0rem;
  }
`;
//User Profile style:
const Profile = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 3px solid rgba(249, 249, 249, 0.6);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0rem 2.6rem 3rem -1rem,
    rgb(0 0 0 / 73%) 0rem 1.6rem 1rem -1rem;
`;
const Login = styled.button`
  border-radius: 0.4rem;
  font-size: 1.2rem;
  letter-spacing: 1.4px;
  height: 3rem;
  text-transform: uppercase;
  padding: 0rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9f9f9;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.25);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background-color: #0063e5;
  }
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
