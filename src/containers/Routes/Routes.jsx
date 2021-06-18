import React from "react";
import styles from "./Routes.module.scss";
import Home from "../Home";
import Saved from "../Saved";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
