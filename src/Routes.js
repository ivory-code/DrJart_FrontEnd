import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import member3 from "./Pages/member/member3";
import Product from "./Pages/Products/Product/Product.js";
import Cart from "./Pages/Cart/Cart.js";
import Main from "./Pages/Main/Main.js";
import Detail from "./Pages/Detail/Detail.js";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/member3" component={member3} />
        <Route exact path="/product/all" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/product/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
export default Routes;
