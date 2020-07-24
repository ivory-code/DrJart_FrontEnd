import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import member3 from "./Pages/member/member3";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/Member" component={Member} /> */}
        <Route exact path="/member3" component={member3} />
        {/* <Route exact path="/member" component={Member} /> */}
      </Switch>
    </Router>
  );
}

export default Routes;
