import React, { useState } from "react";
import {
  NavBar,
  AllMembers,
  Login,
  Register,
  Calendar,
  Home,
  NewMemberForm,
  Gallery,
  CarouselComponent,
  Footer,
} from "./index";
import { Switch, Route, Redirect } from "react-router-dom";
import SingleMember from "./SingleMember";

const Main = () => {
  const [isAdmin, setIsAdmin] = useState(false); //change later to false
  const [isSignedIn, setIsSignedIn] = useState(true); //change later to false

  return (
    <div className="main-container">
      <h1 className="main-title">Welcome to Carpathia</h1>
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

        <Route path="/members/:memberId" component={SingleMember} />
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
            return <CarouselComponent />;
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
      <Footer />
    </div>
  );
};

export default Main;
