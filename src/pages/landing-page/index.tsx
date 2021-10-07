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
    <Container>
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
    </Container>
  );
};

export default LandingPage;

export const SignInSignUpSlot = styled.div`
  width: 30%;
`;
