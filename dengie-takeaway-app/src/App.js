import "./App.css";
import Navbar from "./components/common/navbar";
import Menu from "./components/menu/Menu";
import { Redirect, Route, Switch } from "react-router-dom";

import configureStore from "./store/configureStore";
import { Provider, useSelector } from "react-redux";
import Footer from "./components/common/footer";
import Checkout from "./components/Checkout.jsx";
import OrderDetails from "./components/OrderDetails";
import Hompage from "./components/homePage/hompage";
import OrderConfirmed from "./components/orderConfirmed";
import CardPayment from "./components/cardPayment";

// const store = configureStore();

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <Navbar />
      <main>
        <Switch>
          <Route path="/order-details">
            <OrderDetails />
          </Route>
          <Route path="/card-payment">
            <CardPayment />
          </Route>
          <Route path="/order-confirmed">
            <OrderConfirmed />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/menu/:name" render={(props) => <Menu {...props} />} />

          <Route path="/">
            <Hompage />
          </Route>
        </Switch>
      </main>
      <Footer />
      {/* </Provider> */}
    </>
  );
}

export default App;
