import React, { useState } from "react";
import { NavBar, AllMembers, LandingPage, Login, Register, Calendar, Home} from "./index";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  const [isAdmin, setIsAdmin] = useState(true); //change later to false
  const [isSignedIn, setIsSignedIn] = useState(true); //change later to false

  return (
    <div className="main_container">
      <h1 className="main_title">Welcome to Carpathia</h1>
      <NavBar isAdmin={isAdmin} isSignedIn={isSignedIn} />
      <Switch>
        <Route
          path="/register"
          render={() => {
            return <Register />
          }}
        />
        <Route
          path="/login"
          render={() => {
            return <Login />
          }}
        />
        <Route
          path="/calendar"
          render={() => {
            return <Calendar />
          }}
        />
        <Route
          path="/members"
          render={() => {
            return <AllMembers/>
          }}
        />
        <Route
          path="/home"
          render={() => {
            return <Home />
          }}
        />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Main;