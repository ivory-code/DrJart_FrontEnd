import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./Pages/Products/Product/Product.js";
import Cart from "./Pages/Cart/Cart.js";
import Main from "./Pages/Main/Main.js";
import Detail from "./Pages/Detail/Detail.js";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/product" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/product/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default Routes;
