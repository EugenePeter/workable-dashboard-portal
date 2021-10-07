import { Switch } from "react-router-dom";
import "./App.css";

import ProtectedRoute from "./protected-routes";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/" />
      </Switch>
    </div>
  );
}

export default App;
