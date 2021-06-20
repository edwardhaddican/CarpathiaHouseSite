import React , {useState}from "react";
import { NavBar } from "./index";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  const [isAdmin, setIsAdmin] = useState(true)  //change later to false

  return (
    <div className="main_container">
      <h1 className="main_title">
        Welcome to Carpathia
      </h1>
      <NavBar isAdmin={isAdmin}/>
      <Switch>
        <Route
          path="/movies/:movieId"
          render={() => {
            return //component to render;
          }}
        />
        <Route
          path="/movies"
          render={() => {
            return //component to render;
          }}
        />
        <Redirect to="/movies" />
      </Switch>
    </div>
  );
};

export default Main;
