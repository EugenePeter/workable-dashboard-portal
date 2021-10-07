import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Home, LandingPage } from "../pages";
import { ProtectedRoutesContext } from "./ProtectedRoutesProvider";

import { withRouter } from "react-router-dom";

const ProtectedRouteConsumer: React.FC<any> = (props) => {
  const { ...rest } = props;
  const protectedRoutesContext = useContext(ProtectedRoutesContext);
  const { isAuthenticated } = protectedRoutesContext;

  console.log("isAuthenticated", isAuthenticated);

  return (
    <>
      <Route {...rest}>{isAuthenticated ? <Home /> : <LandingPage />}</Route>
    </>
  );
};

export default withRouter(ProtectedRouteConsumer);
