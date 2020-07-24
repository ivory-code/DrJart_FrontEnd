import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main.js";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
