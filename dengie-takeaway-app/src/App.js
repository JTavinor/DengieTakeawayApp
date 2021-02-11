import "./App.css";
import { restaurants, menus } from "./data/cuisines";
import Navbar from "./components/common/Navbar";
import Menu from "./components/menu/Menu";
import CuisineList from "./components/homePage/cuisineList";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path="/menu/:name"
          render={(props) => (
            <Menu menu={menus[props.match.params.name]} {...props} />
          )}
        />

        <Route path="/">
          <CuisineList cuisines={restaurants} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
