import { Route, Switch } from "react-router-dom";
import React from "react";

import "./App.css";

import Navbar from "./components/common/navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/common/footer";
import Hompage from "./components/homePage/hompage";
import OrderConfirmed from "./components/checkout/orderConfirmed";
import CardPayment from "./components/checkout/cardPayment";
import ApiError from "./components/common/error";
import Checkout from "./components/checkout/checkout";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/card-payment">
            <CardPayment />
          </Route>
          <Route exact path="/order-confirmed">
            <OrderConfirmed />
          </Route>

          <Route
            exact
            path="/menu/:name"
            render={(props) => <Menu {...props} />}
          />

          <Route exact path="/">
            <Hompage />
          </Route>
          <Route component={ApiError} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
