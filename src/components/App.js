import { useState, useEffect } from "react";
import TaskComponent from "./TaskComponent";
import Profile from "./Profile";
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
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/tasks">
            <TaskComponent />
          </Route>
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;