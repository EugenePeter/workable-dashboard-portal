import { useState } from "react";

import { Route, Switch, Link } from "react-router-dom";
import { Home, LandingPage } from "./pages";
import "./App.css";

import ProtectedRoute from "./protected-routes";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/" />
      </Switch>
    </div>
  );
}

export default App;
