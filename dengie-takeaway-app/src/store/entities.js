import { combineReducers } from "redux";
import cuisineReducer from "./cuisines";
import menusReducer from "./menus";
import basketReducer from "./basket";

export default combineReducers({
  basket: basketReducer,
  cuisines: cuisineReducer,
  menu: menusReducer,
});
