import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <CTA>
        <LogoOne src="images/cta-logo-one.svg"></LogoOne>
        <SignUp>Sign Up Now</SignUp>
        <Description>
          We serve you most related content about films,Seasons,Daramas, television programs,
          home videos, video games, and streaming content online – biographies, trivia, ratings, and fan and critical reviews. An
          additional fan feature, message boards, was abandoned in August
          2021.Let's Watch.
        </Description>
        <LogoTwo src="images/cta-logo-two.png"></LogoTwo>
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: top;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: -1;
    opacity: 0.9;
  }
`;
//styled CTA:
const CTA = styled.div`
  max-width: 65rem;
  padding: 4rem 2rem;
  margin-top: 5rem;
  width: 80%;
  display: flex;
  align-items:center;
  flex-direction: column;
`;
const LogoOne = styled.img``;
const LogoTwo = styled.img`width: 90%`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 1.4rem 0rem;
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
  border-radius: 0.4rem;
  text-transform: uppercase;
  color: #f9f9f9;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.6rem;
  user-select: none;
  letter-spacing: 1.4;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  text-align: center;
  letter-sapcing: 1.4;
  line-height: 1.4;
  font-size: 1.2rem;
  margin-bottom:1rem;
  user-select: none;
  color: rgb(249, 249, 249);
  width: 100%;
`;
