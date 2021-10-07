import React, { useContext } from "react";
import { SignIn, SignUp } from "../../atomic";
import { Container } from "../../global-components";

import { Switch, Route, Link } from "react-router-dom";

import { ProtectedRoutesContext } from "../../protected-routes/ProtectedRoutesProvider";
import styled from "styled-components";

const LandingPage = () => {
  const { isSignUpSuccess } = useContext(ProtectedRoutesContext);
  console.log("isSignUpSuccess", isSignUpSuccess);
  return (
    <HeroSection
      // style={{
      //   backgroundImage: url(${require("./austin-distel-wawEfYdpkag-unsplash.jpg")}),
      // }}
      className="hero-section"
    >
      <SignInSignUpSlot>
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Link to="/signin">sign in here</Link>
        </Switch>
      </SignInSignUpSlot>
    </HeroSection>
  );
};

export default LandingPage;

export const SignInSignUpSlot = styled.div`
  width: 30%;
`;

export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  /* background-color: #b4b6b4; */
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; ;
`;
