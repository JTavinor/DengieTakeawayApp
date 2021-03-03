import "./App.css";
import { restaurants, menus } from "./data/cuisines";
import Navbar from "./components/common/Navbar";
import Menu from "./components/menu/Menu";
import CuisineList from "./components/homePage/CuisineList";
import { Route, Switch } from "react-router-dom";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Footer from "./components/common/Footer";
import Checkout from "./components/Checkout.jsx";
import OrderDetails from "./components/OrderDetails";

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main>
          <Switch>
            <Route path="/order-details">
              <OrderDetails />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/menu/:name" render={(props) => <Menu {...props} />} />

            <Route path="/">
              <CuisineList cuisines={restaurants} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
