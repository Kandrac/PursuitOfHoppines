import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../src/containers/Landing";
import Breweries from "../src/containers/Breweries";
import "./App.css";

function Switchboard() {
  return (
    <Switch>
      <Route exact path="/breweries" component={Breweries} />
      <Route exact path="*" component={Landing} />
    </Switch>
  );
}

export default Switchboard;
