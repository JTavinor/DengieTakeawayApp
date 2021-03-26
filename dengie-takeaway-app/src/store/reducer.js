import { combineReducers } from "redux";
import cuisineReducer from "./cuisines";
import menusReducer from "./menu";
import orderReducer from "./order";

export default combineReducers({
  order: orderReducer,
  cuisines: cuisineReducer,
  menu: menusReducer,
});
