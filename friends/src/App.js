import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/login/Login.js";
import PrivateRoute from "./components/utils/PrivateRoute.js";
import Friends from "./components/friends/Friends.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute path="/friends" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;