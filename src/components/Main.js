import React, { useState } from "react";
import {
  NavBar,
  AllMembers,
  Login,
  Register,
  Calendar,
  Home,
  NewMemberForm,
} from "./index";
import { Switch, Route, Redirect } from "react-router-dom";
import SingleMember from "./SingleMember";
import Carousel from "./Carousel";
import Gallery from "./Gallery";

const Main = () => {
  const [isAdmin, setIsAdmin] = useState(false); //change later to false
  const [isSignedIn, setIsSignedIn] = useState(true); //change later to false

  return (
    <div className="main_container">
      <h1 className="main_title">Welcome to Carpathia</h1>
      <NavBar isAdmin={isAdmin} isSignedIn={isSignedIn} />
      <Switch>
        <Route
          path="/register"
          render={() => {
            return <Register />;
          }}
        />
        <Route
          path="/login"
          render={() => {
            return <Login />;
          }}
        />
        <Route
          path="/calendar"
          render={() => {
            return <Calendar />;
          }}
        />

        <Route
          path="/members/:memberId"
         component={SingleMember}
        />
        <Route
          path="/members"
          render={() => {
            return <AllMembers />;
          }}
        />
        <Route
          path="/newmemberform"
          render={() => {
            return <NewMemberForm />;
          }}
        />
        <Route
          path="/gallery"
          render={() => {
            return <Gallery />;
          }}
        />
        <Route
          path="/carousel"
          render={() => {
            return <Carousel />;
          }}
        />

        <Route
          path="/home"
          render={() => {
            return <Home />;
          }}
        />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Main;
