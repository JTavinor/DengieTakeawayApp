import { combineReducers } from "redux";
import cuisineReducer from "./cuisines";
import menusReducer from "./menus";

export default combineReducers({
  cuisines: cuisineReducer,
  menu: menusReducer,
});
