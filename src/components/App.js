import { useState, useEffect } from "react";
import TaskComponent from "./TaskComponent";
import SignIn from "./Signin";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
