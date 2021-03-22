import "./App.css";
import Navbar from "./components/common/navbar";
import Menu from "./components/menu/menu";
import { Redirect, Route, Switch } from "react-router-dom";

import configureStore from "./store/configureStore";
import { Provider, useSelector } from "react-redux";
import Footer from "./components/common/footer";
import Checkout from "./components/Checkout.jsx";
import OrderDetails from "./components/OrderDetails";
import Hompage from "./components/homePage/hompage";
import OrderConfirmed from "./components/orderConfirmed";
import CardPayment from "./components/cardPayment";
import ApiError from "./components/common/error";

// const store = configureStore();

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/order-details">
            <OrderDetails />
          </Route>
          <Route exact path="/card-payment">
            <CardPayment />
          </Route>
          <Route exact path="/order-confirmed">
            <OrderConfirmed />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
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
      {/* </Provider> */}
    </>
  );
}

export default App;
