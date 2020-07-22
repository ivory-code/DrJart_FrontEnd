import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./Pages/Products/Product/Product.js";
import Cart from "./Pages/Cart/Cart.js";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/product/all" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default Routes;
