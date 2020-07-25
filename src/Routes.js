import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main.js";
import Detail from "./Pages/Detail/Detail.js";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}

export default Routes;
